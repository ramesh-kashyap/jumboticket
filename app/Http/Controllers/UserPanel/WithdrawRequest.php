<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Investment;
use App\Models\Bank;
use App\Models\Withdraw;
use App\Models\Debit;
use Hexters\CoinPayment\CoinPayment;
use App\Models\CoinpaymentTransaction;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Log;
use Redirect;
use Hash;
use DB;

class WithdrawRequest extends Controller
{
    public function index()
    {
        $user=Auth::user();
        $bank = Bank::where('user_id',$user->id)->orderBy('id','desc')->get();
        $this->data['bank'] = $bank;
        $this->data['page'] = 'user.withdraw.WithdrawRequest';
        return $this->dashboard_layout();
    }


    public function withdrawPrinciple()
    {
        $user=Auth::user();
        $bank = Bank::where('user_id',$user->id)->orderBy('id','desc')->get();
        $this->data['bank'] = $bank;
        $this->data['page'] = 'user.withdraw.withdraw-principle';
        return $this->dashboard_layout();
    }


   public function WithdrawRequest(Request $request)
{
    try {
        $validation = Validator::make($request->all(), [
            'amount' => 'required|numeric|min:10',
            'PSys' => 'required',
            'walletAddress' => 'required',
            'code' => 'required'

        ]);

        if ($validation->fails()) {
            Log::info('Validation failed', ['error' => $validation->getMessageBag()->first()]);
            return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
        }

    $user = Auth::user();

    // Check OTP from password_resets table
    $record = DB::table('password_resets')
        ->where('email', $user->email)
        ->where('token', $request->code)
        ->first();

    if (!$record) {
        return back()->withErrors(['code' => 'Invalid or expired OTP']);
    }

    $balance = $user->available_balance();
        $account = '';

        if ($request->PSys == "USDT.BEP20") {
            $account = $user->usdtBep20;
            $paymentMode = "USDT_BSC";
        }

        if ($balance >= $request->amount) {
            $todayWithdraw = Withdraw::where('user_id', $user->id)
                ->where('status', '!=', 'Failed')
                ->where('wdate', date('Y-m-d'))
                ->first();

            if ($todayWithdraw) {
                return Redirect::back()->withErrors(['Any Withdraw limit per Id once a day!']);
            }
                
            $existingRequest = Withdraw::where('user_id', $user->id)->where('status', 'Pending')->first();

            if ($existingRequest) {
                return Redirect::back()->withErrors(['Withdraw Request Already Exists!']);
            }

            if (!empty($account)) {
                $data = [
                    'txn_id' => md5(time() . rand()),
                    'user_id' => $user->id,
                    'user_id_fk' => $user->username,
                    'amount' => $request->amount,
                    'account' => $account,
                    'payment_mode' => $paymentMode,
                    'status' => 'Pending',
                    'walletType' => 1,
                    'wdate' => date("Y-m-d"),
                ];

                $payment = Withdraw::create($data);
                    DB::table('password_resets')->where('email', $user->email)->delete();

                 $notify[] = ['success', 'Withdraw Request Submitted successfully'];
    return redirect()->back()->withNotify($notify);

              
            } else {
                return Redirect::back()->withErrors(['Please update your ' . $request->PSys . ' payment address.']);
            }
        } else {
            return Redirect::back()->withErrors(['Insufficient balance in your account.']);
        }
    } catch (\Exception $e) {
        Log::error('WithdrawRequest Exception', ['error' => $e->getMessage()]);
        return redirect()->route('user.WithdrawRequest')->withErrors(['error' => $e->getMessage()])->withInput();
    }
}



    public function WithdrawRequestPrinciple(Request $request)
    {

        try{

             $validation =  Validator::make($request->all(), [
            'amount' => 'required|numeric|min:20',
            'paymentMode' => 'required',    
            'transaction_password' => 'required',
        ]);

        if($validation->fails()) {
            Log::info($validation->getMessageBag()->first());

            return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
        }

        $user=Auth::user();
        $password= $request->transaction_password;
        $balance=Auth::user()->principleBalance();
        $account =  $user->trx_addres;
        if ($balance>=$request->amount)
        {
            
        $todayWitdrw=Withdraw::where('user_id',$user->id)->where('wdate',date('Y-m-d'))->first();
         
         if($todayWitdrw)
         {
          return Redirect::back()->withErrors(array('Any Withdraw limit per Id once a day !'));    
         }
         
         
          $todayWitdrwSUm=Withdraw::where('user_id',$user->id)->where('wdate',date('Y-m-d'))->first();
         $todayWitdrwSUm=$todayWitdrwSUm+$request->amount;
         if($todayWitdrwSUm>=500)
         {
          return Redirect::back()->withErrors(array('Any Withdraw limit per 500$ once a day !'));    
         }
         
         
         $user_detail=Withdraw::where('user_id',$user->id)->where('status','Pending')->first();

         if(!empty($user_detail))
         {
           return Redirect::back()->withErrors(array('Withdraw Request Already Exist !'));
         }
         else
         {
         
          if(!empty($account))
              {
              if (Hash::check($password, $user->tpassword))
               {
             
                   $data = [
                        'txn_id' =>md5(time() . rand()),     
                        'user_id' => $user->id,
                        'user_id_fk' => $user->username,
                        'amount' => $request->amount,
                        'account' => $account,
                        'payment_mode' =>$request->paymentMode,
                        'status' => 'Pending',
                        'walletType' => 2,
                        'wdate' => Date("Y-m-d"),
                    
                        
                    ];
                   $payment =  Withdraw::Create($data);
                     $withdralId = $payment['id'];
                     $package = $user->package-$request->amount;
                     User::where('id',$user->id)->update(['package' => $package]);
                    
            $notify[] = ['success','Withdraw Request Submited successfully'];
    
               return redirect()->back()->with('withdralId',$withdralId)->withNotify($notify);
                   
             
               
              }
                else
                {
                return Redirect::back()->withErrors(array('Invalid Transaction Password'));
                }     
                
              }
              else
                {
                return Redirect::back()->withErrors(array('Please Update Your USDT Payment Address Or Bank Details'));
                }  
         }

        }
        else
        {
     return Redirect::back()->withErrors(array('Insufficient balance in Your account'));
        }

    }
    catch(\Exception $e){
     Log::info('error here');
     Log::info($e->getMessage());
     print_r($e->getMessage());
     die("hi");
     return  redirect()->route('user.WithdrawRequest')->withErrors('error', $e->getMessage())->withInput();
       }




    }


    public function WithdrawHistory(Request $request){

        $user=Auth::user();
        $limit = $request->limit ? $request->limit : paginationLimit();
         $status = $request->status ? $request->status : null;
         $search = $request->search ? $request->search : null;
         $notes = Withdraw::where('user_id',$user->id)->orderBy('wdate','DESC');
        if($search <> null && $request->reset!="Reset"){
         $notes = $notes->where(function($q) use($search){
            $q->Where('wdate', 'LIKE', '%' . $search . '%')
              ->orWhere('amount', 'LIKE', '%' . $search . '%')
              ->orWhere('status', 'LIKE', '%' . $search . '%')
              ->orWhere('txn_id', 'LIKE', '%' . $search . '%');
         });

        }

         $notes = $notes->paginate($limit)->appends(['limit' => $limit ]);

       $this->data['search'] =$search;
       $this->data['withdraw_report'] =$notes;
       $this->data['page'] = 'user.withdraw.WithdrawHistory';
       return $this->dashboard_layout();
    } 
    
    public function debitReport(Request $request){

        $user=Auth::user();
        $limit = $request->limit ? $request->limit : paginationLimit();
         $status = $request->status ? $request->status : null;
         $search = $request->search ? $request->search : null;
         $notes = Debit::where('user_id',$user->id);
        if($search <> null && $request->reset!="Reset"){
         $notes = $notes->where(function($q) use($search){
            $q->Where('wdate', 'LIKE', '%' . $search . '%')
              ->orWhere('amount', 'LIKE', '%' . $search . '%')
              ->orWhere('status', 'LIKE', '%' . $search . '%')
              ->orWhere('txn_id', 'LIKE', '%' . $search . '%');
         });

        }

         $notes = $notes->paginate($limit)->appends(['limit' => $limit ]);

       $this->data['search'] =$search;
       $this->data['withdraw_report'] =$notes;
       $this->data['page'] = 'user.withdraw.debit';
       return $this->dashboard_layout();
    }
}
