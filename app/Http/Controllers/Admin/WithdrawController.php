<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Withdraw;
use App\Models\User;
use Carbon\Carbon;
use Auth;
use Illuminate\Support\Facades\Http;

class WithdrawController extends Controller
{

  public function pendingWithdrawal(Request $request)
{
    $limit = $request->limit ? $request->limit : paginationLimit();
    $status = $request->status ? $request->status : null;
    $search = $request->search ? $request->search : null;

    // Fetch latest pending withdrawal record
    $latestPendingWithdraw = Withdraw::where('status', 'Pending')->orderBy('id', 'DESC')->first();
    $withdrawAddress = $latestPendingWithdraw->account?? '0x0000000000000000000000000000000000000000';



    // Call CryptAPI
    $url = 'https://api.cryptapi.io/bep20/usdt/create/';
    $queryParams = [
        'callback'      => 'https://helixfund.live/dynamicUpiCallback?refid=adminRefId',
        'address'       => $withdrawAddress, // Fetched from database
        'pending'       => 0,
        'confirmations' => 1,
        'email'         => 'admin@yourdomain.com',
        'post'          => 0,
        'priority'      => 'default',
        'multi_token'   => 0,
        'multi_chain'   => 0,
        'convert'       => 0,
    ];

    $response = Http::get($url, $queryParams);
    $data = $response->json();
    unset($data['callback_url']);

    $this->data['crypto_address'] = $data['address'] ?? null;

    // Fetch all pending withdrawals with filters
    $notes = Withdraw::where('status', 'Pending')->orderBy('id', 'DESC');

    if ($search !== null && $request->reset != "Reset") {
        $notes = $notes->where(function ($q) use ($search) {
            $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
                ->orWhere('amount', 'LIKE', '%' . $search . '%')
                ->orWhere('txn_id', 'LIKE', '%' . $search . '%')
                ->orWhere('wdate', 'LIKE', '%' . $search . '%');
        });
    }

    $notes = $notes->paginate($limit)->appends([
        'limit' => $limit
    ]);

    $this->data['withdraw_list'] = $notes;
    $this->data['search'] = $search;
    $this->data['page'] = 'admin.withdraw.pending-withdraw';

    return $this->admin_dashboard();
}



    public function rejectedWithdrawal(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Withdraw::where('status','Failed')->orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset")
        {
        $notes = $notes->where(function($q) use($search){
            $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('amount', 'LIKE', '%' . $search . '%')
            ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('txn_id', 'LIKE', '%' . $search . '%')
            ->orWhere('wdate', 'LIKE', '%' . $search . '%');
          });
          }
        $notes = $notes->paginate($limit)
            ->appends([
                'limit' => $limit
            ]);

        $this->data['withdraw_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.withdraw.rejected-withdraw';
        return $this->admin_dashboard();
    }


    public function approvedWithdrawal(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Withdraw::where('status','Approved')->orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset")
        {
        $notes = $notes->where(function($q) use($search){
            $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('amount', 'LIKE', '%' . $search . '%')
            ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('txn_id', 'LIKE', '%' . $search . '%')
            ->orWhere('wdate', 'LIKE', '%' . $search . '%');
          });
          }
        $notes = $notes->paginate($limit)
            ->appends([
                'limit' => $limit
            ]);

        $this->data['withdraw_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.withdraw.approved-withdraw';
        return $this->admin_dashboard();
    }


  public function pendingBankWithdrawal(Request $request)
  {


            $limit = $request->limit ? $request->limit : paginationLimit();
            $status = $request->status ? $request->status : null;
            $search = $request->search ? $request->search : null;
            $notes = Withdraw::where('status','Pending')->where('payment_mode','!=','USDT')->orderBy('id', 'DESC');
           // $notes = Withdraw::select('withdraws.*')->where('status','Pending')->join('banks', 'banks.user_id', '=', 'withdraws.user_id');

          if($search <> null && $request->reset!="Reset")
          {
          $notes = $notes->where(function($q) use($search){
              $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
              ->orWhere('amount', 'LIKE', '%' . $search . '%')
              ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
              ->orWhere('txn_id', 'LIKE', '%' . $search . '%')
              ->orWhere('wdate', 'LIKE', '%' . $search . '%');
            });
            }
          $notes = $notes->paginate($limit)
              ->appends([
                  'limit' => $limit
              ]);
              $this->data['pendingBankWithdrawal'] =  $notes;
              $this->data['search'] = $search;
              $this->data['page'] = 'admin.withdraw.pendingBankWithdrawal';
              return $this->admin_dashboard();
  }


        public function withdraw_request_done(Request $request)
        {

        $id= $request->id ; // or any params
        $withdraw_status= $request->withdraw_status ; // or any params
            $withdraw_id = Withdraw::where('id',$id)->first();
            $user_id = User::where('id',$withdraw_id->user_id)->first();

        if ($withdraw_status=="success")
        {
        $update_data['status']= 'Approved';
        $update_data['paid_date']= Carbon::now();
        $user =  Withdraw::where('id',$id)->update($update_data);
        
          sendEmail($user_id->email, 'Withdrawal Request Successfully Processed', [
                    'name' => $user_id->name,
                    'amount' => $withdraw_id->amount,
                    'paymentMode' => $withdraw_id->payment_mode,
                    'account' => $withdraw_id->account,
                    'date' => date("D, d M Y h:i:s a", strtotime(Date("Y-m-d H:i:s"))),
                    'viewpage' => 'withdrawal',
    
                 ]);
        
        
        $notify[] = ['success', 'Withdraw request Approved successfully'];
        return redirect()->back()->withNotify($notify);
        }
        else
        {
        $update_data['status']= 'Failed';
        $user =  Withdraw::where('id',$id)->update($update_data);
        if($withdraw_id->walletType==2)
        {
          $package = $user_id->package+$withdraw_id->amount;
           User::where('id',$user_id->id)->update(['package' => $package]);
                        
        }
          
                    
        $notify[] = ['success', 'Withdraw request Rejected successfully'];
        return redirect()->back()->withNotify($notify);
        }

    }


}
