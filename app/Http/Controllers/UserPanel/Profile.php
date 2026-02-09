<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Bank;
use App\Models\UserLogin;
use App\Models\PasswordReset;
use Auth;
use Log;
use Redirect;
use Hash;
use Validator;
use Illuminate\Support\Facades\DB;

class Profile extends Controller
{

    public function index()
    {
    $user=Auth::user();
    $profile_data = User::where('id',$user->id)->orderBy('id','desc')->first();
    $this->data['login_logs'] =UserLogin::where('user_id',$user->id)->orderBy('id','DESC')->limit(10)->get();
    $this->data['profile_data'] =$profile_data;
    $this->data['page'] = 'user.profile.profile-setting';
    return $this->dashboard_layout();

    }

    public function security()
    {
    
    $this->data['page'] = 'user.profile.security';
    return $this->dashboard_layout();

    }
    public function refreallink()
    {
    
    $this->data['page'] = 'user.profile.refreallink';
    return $this->dashboard_layout();

    }
    
    public function refreals()
    {
    
    $this->data['page'] = 'user.profile.refreals';
    return $this->dashboard_layout();

    }
    public function wallets()
    {
    $user=Auth::user();
    $profile_data = User::where('id',$user->id)->orderBy('id','desc')->first();
    $this->data['login_logs'] =UserLogin::where('user_id',$user->id)->orderBy('id','DESC')->limit(10)->get();
    $this->data['profile_data'] =$profile_data;
    $this->data['page'] = 'user.profile.wallets';
    return $this->dashboard_layout();

    }
    

    public function change_password()
    {
        $user=Auth::user();
    $profile_data = User::where('id',$user->id)->orderBy('id','desc')->first();
    $this->data['login_logs'] =UserLogin::where('user_id',$user->id)->orderBy('id','DESC')->limit(10)->get();
    $this->data['profile_data'] =$profile_data;
    $this->data['page'] = 'user.profile.ChangePass';
    return $this->dashboard_layout();

    }

    public function ChangeSecurityPass()
    {
    $this->data['page'] = 'user.profile.ChangeSecurityPass';
    return $this->dashboard_layout();

    }
    
   public function codeVerify()
    {
    $this->data['page'] = 'user.profile.codeVerify';
  
     return $this->dashboard_layout();

    }
    
  public function codeVerifyPassword()
    {
    $this->data['page'] = 'user.profile.codeVerifyPassword';
  
     return $this->dashboard_layout();

    }
    


public function BankDetail()
    {
    $user=Auth::user();
    $bank = Bank::where('user_id',$user->id)->first();
    $this->data['bank_value'] = $bank;
    $this->data['page'] = 'user.profile.BankDetail';
    return $this->dashboard_layout();

    }
    
    public function share()
    {
    $user=Auth::user();
    $bank = Bank::where('user_id',$user->id)->first();
    $this->data['bank'] = $bank;
    $this->data['page'] = 'user.profile.share';
    return $this->dashboard_layout();

    }

    public function profile_update(Request $request)
    {
        try{
            $validation =  Validator::make($request->all(), [
                'email' => 'required|string',
                'name' => 'required|string',
                'country' => 'required|string',
                // 'city' => 'required',
                // 'zipCode' => 'required',
                // 'usdtBep20' => 'required',
                // 'lastname' => 'required',
                'phone' => 'required|numeric'

            ]);
            if($validation->fails()) {
                Log::info($validation->getMessageBag()->first());

                return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
            }
            $user=Auth::user();
            $id=Auth::user()->id;

            //check if email exist
          $post_array  = $request->all();

          $update_data['name']=$post_array['name'];
          $update_data['phone']=$post_array['phone'];
        //   $update_data['telegram']=$post_array['telegram'];
          $update_data['country']=$post_array['country'];
          $update_data['email']=$post_array['email'];
        //   $update_data['city']=$post_array['city'];
        //   $update_data['lastname']=$post_array['lastname'];
        //   if(empty($user->usdtBep20) )
        //   {
        //     $update_data['usdtTrc20']=$post_array['usdtTrc20'];    
           
        //   }
        //   if(empty($user->usdtBep20) )
        //   {  
        //     $update_data['usdtBep20']=$post_array['usdtBep20'];    
        //   }
        
          
          $user =  User::where('id',$id)->update($update_data);


        $notify[] = ['success', 'Profile Updated successfully'];
        return redirect()->back()->withNotify($notify);

          }
           catch(\Exception $e){
            Log::info('error here');
            Log::info($e->getMessage());
            print_r($e->getMessage());
          dd($e->getMessage());
            return back()->withErrors('error', $e->getMessage())->withInput();
        }
    }


    public function wallet_update(Request $request)
    {
        try{
     
            $user=Auth::user();
            $id=Auth::user()->id;

            //check if email exist
        
           $code = verificationCode(6);

            PasswordReset::where('email', $user->email)->delete();

            $password = new PasswordReset();
            $password->email = $user->email;
            $password->token = $code;
            $password->created_at = \Carbon\Carbon::now();
            $password->save();

               sendEmail($user->email, 'Your One-Time Password', [
                'name' => $user->name,
                'code' => $code,
                'purpose' => 'Receiver Payment wallet',
                'viewpage' => 'one_time_password',

             ]);
             $userID = $user->id;
            session()->put('usdtTrc20',$request->usdtTrc20);
            session()->put('usdtBep20',$request->usdtBep20);
            $notify[] = ['success', 'Wallet Change email sent successfully'];
            return redirect()->route('user.codeVerify')->withNotify($notify);
            

          }
           catch(\Exception $e){
            Log::info('error here');
            Log::info($e->getMessage());
            print_r($e->getMessage());
       
            return back()->withErrors('error', $e->getMessage())->withInput();
        }
    }

      public function wallet_change(Request $request)
    {
        try{
     
            $user=Auth::user();
            $id=Auth::user()->id;


            $request->validate(['code' => 'required']);
            $code = $request->code;
     
        if (PasswordReset::where('token', $code)->where('email', $user->email)->count() != 1) {
            $notify[] = ['error', 'Invalid token'];
            return redirect()->route('user.codeVerify')->withNotify($notify);
        }
        
     
         $usdtTrc20 = session()->get('usdtTrc20');
         $usdtBep20 = session()->get('usdtBep20');
            
           $user->usdtTrc20=$usdtTrc20;
           $user->usdtBep20=$usdtBep20;
           $user->save();
           $notify[] = ['success', 'Your Wallet change Successfully.'];
           
        return redirect()->route('user.wallets')->withNotify($notify);
            

          }
           catch(\Exception $e){
            Log::info('error here');
            Log::info($e->getMessage());
            print_r($e->getMessage());
       
            return back()->withErrors('error', $e->getMessage())->withInput();
        }
    }


public function sendOtp(Request $request)
{
    $user = Auth::user();
    $otp = rand(1000, 9999);

    // Save OTP and email to password_resets table
    
    DB::table('password_resets')->updateOrInsert(
        ['email' => $user->email],
        [
            'token' => $otp,
            'created_at' => now(),
            'updated_at' => now(),
        ]
    );
  sendEmail($user->email, 'Your One-Time Password', [
                'name' => $user->name,
                'code' => $otp,
                'purpose' => 'Change Password',
                'viewpage' => 'one_time_password',

             ]);
    return response()->json([
        'status' => 'success',
        'message' => 'OTP sent successfully!',
        'otp' => $otp // optional: sirf testing ke liye
    ]);
}



        public function updatePassword(Request $request)
{
    $request->validate([
        'password' => 'required|same:password2',
        'code' => 'required'
    ]);

    $user = Auth::user();

    // Check OTP from password_resets table
    $record = DB::table('password_resets')
        ->where('email', $user->email)
        ->where('token', $request->code)
        ->first();

    if (!$record) {
        return back()->withErrors(['code' => 'Invalid or expired OTP']);
    }

    // Update password
    $user->PSR = $request->password; // plain password
    $user->password = Hash::make($request->password);
    $user->save();

    // DB::table('password_resets')->where('email', $user->email)->delete();

     $notify[] = ['success', 'Password updated successfully.'];
            return redirect()->back()->withNotify($notify);
}
    public function change_password_post(Request $request)
    {

        try {
            $data = $request->all();
            $rules = array('old_password' => 'required', 'password' => 'required|confirmed');
            $msg = [
                'old_password.required'     => 'Old Password is required',
                'password.required'         => 'Password is required' ,
                'password.confirmed'        => 'Password must match'    ,
            ];

            $validator = Validator::make($data, $rules, $msg);
            if ($validator->fails())
                return Redirect::back()->withErrors($validator->getMessageBag()->first());

            $user = Auth::user();


            if (!\Hash::check($data['old_password'], $user->password))
                return Redirect::back()->withErrors('Current Password is incorrect');

             User::where('id', $user->id)->update(array(
                'password' => \Hash::make($data['password']),
                'PSR' => $data['password'],
                'updated_at' => new \DateTime
            ));

            $notify[] = ['success', 'password updated successfully'];
            return redirect()->back()->withNotify($notify);

        } catch (\Exception $e) {
            return Redirect::back()->witherrors($e->getMessage())->withInput();
        }

    }

    public function change_password_submit(Request $request)
    {

        try {
           
            $request->validate(['code' => 'required']);
            $code = $request->code;
             $user = Auth::user();
            if (PasswordReset::where('token', $code)->where('email', $user->email)->count() != 1) {
                $notify[] = ['error', 'Invalid token'];
                return redirect()->route('user.codeVerifyPassword')->withNotify($notify);
            }
            
                    
                
        
              $password = session()->get('NewPassword');
             User::where('id', $user->id)->update(array(
                'password' => \Hash::make($password),
                'PSR' =>$password,
                'updated_at' => new \DateTime
            ));

            $notify[] = ['success', 'password updated successfully'];
            return redirect()->route('user.ChangePass')->withNotify($notify);

        } catch (\Exception $e) {
            return Redirect::back()->witherrors($e->getMessage())->withInput();
        }

    }


    public function change_trxpassword_post(Request $request)
    {

        try {
            $data = $request->all();
            $rules = array('old_password' => 'required', 'password' => 'required|confirmed');
            $msg = [
                'old_password.required'     => 'Old Password is required',
                'password.required'         => 'Password is required' ,
                'password.confirmed'        => 'Password must match'    ,
            ];

            $validator = Validator::make($data, $rules, $msg);
            if ($validator->fails())
                return Redirect::back()->withErrors($validator->getMessageBag()->first());

            $user = Auth::user();

            

            if (!\Hash::check($data['old_password'], $user->tpassword))
                return Redirect::back()->withErrors('Current Transaction  Password is incorrect');

                User::where('id', $user->id)->update(array(
                'tpassword' => \Hash::make($data['password']),
                 'TPSR' => $data['password'],
                'updated_at' => new \DateTime
            ));

           // return Redirect::Back()->with('messages', 'Transaction password updated successfully');

            $notify[] = ['success', 'Transaction password updated successfully'];
            return redirect()->back()->withNotify($notify);

        }
         catch (\Exception $e) {
            return Redirect::back()->witherrors($e->getMessage())->withInput();
        }

    }



    public function bank_profile_update(Request $request)

    {
        try{
            $validation =  Validator::make($request->all(), [
                'account_holder' => 'required',
                'bank_name' => 'required',
                'branch_name' => 'required',
                'ifsc_code' => 'required',
                'account_number' => 'required',

            ]);
            if($validation->fails()) {
                Log::info($validation->getMessageBag()->first());
                return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
            }

            $id=Auth::user()->id;

             $check_exist=Bank::where('user_id', $id)->first();

             $bank_array=array(

                 'user_id'=>$id,
                 'bank_name'=>$request->bank_name,
                 'account_holder'=>$request->account_holder,
                 'branch_name'=>$request->branch_name,
                //  'pancard_no'=>$request->pancard_no,
                 'account_no'=>$request->account_number,
                 'ifsc_code'=>$request->ifsc_code,
             );

             if (!$check_exist)
             {

              $bank=Bank::create($bank_array);
            }
            else
            {
                $bank= Bank::where('user_id', $id)->update($bank_array);
            }




        $notify[] = ['success', 'Bank Updated successfully'];
        return redirect()->back()->withNotify($notify);

          }
           catch(\Exception $e){
            Log::info('error here');
            Log::info($e->getMessage());
            print_r($e->getMessage());
            die("hi");
            return back()->withErrors('error', $e->getMessage())->withInput();

        }
    }




}
