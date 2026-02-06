<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Investment;
use App\Models\Compound;
use App\Models\Income;
use App\Models\User;
use App\Models\User_trade;
use App\Models\Reward;
use App\Models\Contract;
use App\Models\Withdraw;
use Illuminate\Support\Facades\URL;
use App\Models\Trade;
use Illuminate\Support\Facades\Http;
use DateTime;
use DateInterval;
use DatePeriod;
use Carbon\Carbon;
use Helper;
use Plisio\PlisioSdkLaravel\Payment;
use Illuminate\Support\Facades\Log;
class Cron extends Controller
{
    
public function __construct()
{
date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)
}
public function tradeAmt()
{
  User::where('id','>=',0)->update(['tradeAmt' => 0]);
}



 public function my_level_team_countBusiness($userid){
        $arrin=array($userid);
        $ret=array();

        $i=1;
        while(!empty($arrin)){
            $alldown=User::select('id')->whereIn('sponsor',$arrin)->get()->toArray();    
            $alldown2=User::select('id')->whereIn('sponsor',$arrin)->where('active_status','Active')->get()->toArray(); 
            if(!empty($alldown)){
                $arrin = array_column($alldown,'id');
                $arrin2 = array_column($alldown2,'id');
                   
                $total=Investment::whereIn('user_id',$arrin2)->where('status','Active')->where('active_from','!=','Deposit Bonus')->sum('amount');
                 $this->final_business += $total;
                $ret[$i]=$arrin;
                $i++;
              
            }else{
                $arrin = array();
            } 
        }   
       
        
    }





 public function globaly_community()
    {  

    $allResult=User::get();
// print_r($allResult);die;
    if ($allResult) 
    {
     foreach ($allResult as $key => $value) 
     {
      
      $user_id=$value->id;
      $username=$value->username;
      
      
      
      
         $direct_list=User::where('sponsor',$user_id)->get(); 
    
	            $vicker_leg=0;
	        $power_leg=0;
	           $arrayabc = array();
	           if($direct_list!="")
	           {
	               foreach($direct_list as $key=>$value)
	               {
	                   $id_value=$value->id;
	                   $user_id_value=$value->username;
	                
	               //   $this->a=0;
	               $this->final_business=0;  
	                 $this->my_level_team_countBusiness($id_value);
	             
	                   $total=Investment::where('user_id',$id_value)->where('status','Active')->where('active_from','!=','Deposit Bonus')->sum('amount');
	                   
	                   
	                  $this->final_business +=$total;
	                 $abc = $this->final_business;  
	               //  echo $abc; die;
	                 $arrayabc[$user_id_value] = $abc;
	                 
	               //  dd($arrayabc);
	                    
	               //  print_r($this->final_business)."<br>".$user_id_value;echo "<br>";
	               }
	             
	               if(!empty($arrayabc))
	              {
	               
	               
	               //  echo "<pre>";
	               ////  print_r($maxValue);
	               //print_r($arrayabc);die;
	               
	               $maxValue = max(@$arrayabc);
                  $maxIndex = array_search(max($arrayabc), $arrayabc);
                   $vicker_leg=array_sum($arrayabc);  
	                 
	       	        $power_leg=$maxValue;
	       $vicker_leg=$vicker_leg-$power_leg;
	       
	              }else
	              {
	                    $vicker_leg=0;
	        $power_leg=0;
	              }
	              
	             
	       //echo $username."<br>";
	       // echo "<pre>";print_r($power_leg)."<br>";
	       // echo "<pre>";print_r($vicker_leg);die;
	  
	    }
	    else
	    {
	        $vicker_leg=0;
	        $power_leg=0;
	       
	    }
	    
             
               echo "<br>";
                 echo "ID : ".$username."<br>";
                 echo "Team A : ".$power_leg."<br>";
             echo "Team B: ".$vicker_leg;
             
        User::where('id', $user_id)
      ->update([
          'teamA' => $power_leg,
          'teamB' => $vicker_leg,
        ]); 
     
     }
    } 
    
    


$allResult=\DB::table('contract')->where('c_status',1)->get();
$todays=Date("Y-m-d");
$day=Date("l");

if ($allResult)
{

 foreach ($allResult as $key => $contract)
 {

  $userID=$contract->user_id;
  
  $userDetails=Income::where('invest_id',$contract->id)->where('remarks','Order Revenue')->first();
  
  if (!$userDetails)
  {
     $userDetail=User::where('id',$userID)->where('active_status','Active')->first(); 
     
     if($userDetail)
     {
        echo "ID:".$userDetail->username." Roi:".$contract->profit."<br>";
     
      $data['remarks'] = 'Order Revenue';
      $data['comm'] = $contract->profit;
      $data['amt'] = $contract->c_ref;
      $data['invest_id']=$contract->id;
      $data['level']=0;
      $data['ttime'] = $contract->ttime;
      $data['created_at'] = $contract->created_at;
      $data['updated_at'] = $contract->updated_at;
      $data['user_id_fk'] = $userDetail->username;
      $data['user_id']=$userDetail->id;
     $income = Income::create($data);   
     }
    


      

  }

 }
 
}





}


public function generate_roi()
{
    $allResult = Investment::where('status', 'Active')
        ->where('roiCandition', 0)
        ->get();

    $today = date("Y-m-d");

    foreach ($allResult as $value) {

        $userID = $value->user_id;
        $joining_amt = $value->amount;

        $userDetails = User::where('id', $userID)
            ->where('active_status', 'Active')
            ->first();

        if (!$userDetails) {
            continue;
        }

        if ($joining_amt >= 20 && $joining_amt <= 500) {
            $percent = 0.75;
        } elseif ($joining_amt >= 501 && $joining_amt <= 1000) {
            $percent = 0.9;
        } elseif ($joining_amt >= 1001 && $joining_amt <= 3000) {
            $percent = 1;
        } elseif ($joining_amt >= 3001 && $joining_amt <= 8000) {
            $percent = 1.5;
        } elseif ($joining_amt >= 8001 && $joining_amt <= 20000) {
            $percent = 1.75;
        } elseif ($joining_amt >= 20001 && $joining_amt <= 100000) {
            $percent = 2;
        } else {
            $percent = 0;
        }

        if ($percent <= 0) {
            continue;
        }

        $roi = ($joining_amt * $percent) / 100;

        $data = [
            'remarks' => 'ROI Income',
            'comm' => $roi,
            'amt' => $joining_amt,
            'invest_id' => $value->id,
            'level' => 0,
            'ttime' => $today,
            'user_id_fk' => $userDetails->username,
            'user_id' => $userDetails->id,
        ];

        Income::firstOrCreate(
            [
                'remarks' => 'ROI Income',
                'ttime' => $today,
                'user_id' => $userID,
                'invest_id' => $value->id
            ],
            $data
        );
    }
}


public function generate_arbitrage_roi()
{
    $today = date("Y-m-d");

    $investments = Investment::where('status', 'Active')
        ->where('roiCandition', 0)
        ->get();

    foreach ($investments as $value) {

        $user = User::where('id', $value->user_id)
            ->where('active_status', 'Active')
            ->first();

        if (!$user) {
            continue;
        }

        $amount = $value->amount;
        $startDate = $value->sdate;

        $totalDays = (strtotime($today) - strtotime($startDate)) / (60 * 60 * 24);

        if ($totalDays >= 120) {

           

            Investment::where('id', $value->id)->update([
                'roiCandition' => 1,
                'status' => 'Completed'
            ]);

            continue;
        }

        if ($amount >= 50 && $amount <= 999) {
            $percent = 1.8;
        } elseif ($amount >= 1001 && $amount <= 3000) {
            $percent = 2.1;
        } elseif ($amount >= 3001 && $amount <= 8000) {
            $percent = 2.5;
        } elseif ($amount >= 8001 && $amount <= 20000) {
            $percent = 3;
        } elseif ($amount >= 20001 && $amount <= 100000) {
            $percent = 3.5;
        } elseif ($amount >= 100001 && $amount <= 200000) {
            $percent = 4.1;
        } else {
            $percent = 0;
        }

        if ($percent <= 0) {
            continue;
        }

        $roi = ($amount * $percent) / 100;

        $data = [
            'remarks' => 'Arbitrage ROI',
            'comm' => $roi,
            'amt' => $amount,
            'invest_id' => $value->id,
            'level' => 0,
            'ttime' => $today,
            'user_id_fk' => $user->username,
            'user_id' => $user->id,
        ];

        Income::firstOrCreate(
            [
                'remarks' => 'Arbitrage ROI',
                'ttime' => $today,
                'user_id' => $user->id,
                'invest_id' => $value->id
            ],
            $data
        );
    }
}


public function generate_compounded_roi()
{
    $today = date('Y-m-d');
    $compoundings = Compound::where('roiCandition',0)->get();

    foreach ($compoundings as $investment) {
        $user = User::where('id', $investment->user_id)
            ->where('active_status', 'Active')
            ->first();

        if (!$user) continue;

        $planMonths = (int) $investment->plan;
        $startDate = Carbon::parse($investment->sdate);
        $endDate = $startDate->copy()->addMonths($planMonths);

        // Check if today is within ROI period
        if (now()->greaterThanOrEqualTo($endDate)) {
            // Stop ROI
            $investment->update(['roiCandition' => 1]);
            continue;
        }

        // Skip if ROI already given today
        $alreadyGiven = Income::where('user_id', $user->id)
            ->where('invest_id', $investment->id)
            ->where('ttime', $today)
            ->where('remarks', 'Compounding ROI')
            ->exists();

        if ($alreadyGiven) continue;

        // Get yesterday's compound total
        $previousTotal = $investment->amount + $investment->roi_generated;

        // Calculate today's ROI: 1.25% of total (amount + previous ROI)
        $roi = round($previousTotal * 1.25 / 100, 4);

        // Add ROI to `incomes` table
        Income::create([
            'user_id'     => $user->id,
            'user_id_fk'  => $user->username,
            'invest_id'   => $investment->id,
            'amt'         => $investment->amount,
            'comm'        => $roi,
            'level'       => 0,
            'ttime'       => $today,
            'credit_type'       => 1,
            'remarks'     => 'Compounding ROI',
        ]);

        // Update compounding record
        $investment->increment('roi_days');
        $investment->increment('roi_generated', $roi);

     echo "ROI Credited to {$user->username} | ROI: $roi | Day: " . ($investment->roi_days + 1) . "<br>";
    }
}




  public function managePayout()

    {  

date_default_timezone_set("Asia/Kolkata"); 
//   User::where('id',20)->update(['name' =>'Rameshk']);
    $allResult=User::where('active_status','Active')->orderBy('id','ASC')->cursor();

    if ($allResult) 
    {
       $counter=1;
     foreach ($allResult as $key => $value) 
     {
      
     $userID=$value->id;
     $userName=$value->username;
     $adate_date =$value->adate;
     $balance=$value->balance;


  
     $income =Income::where('user_id',$userID)->sum('comm');
     $withdraw = Withdraw::where('user_id',$userID)->sum('amount');
     
       $balance = round($income-$withdraw,2);
  
    if($balance>0)
    {
    //   echo 'ID: '. $userName." Balance : ".$balance."<br>";   
        

        
        
    // $amountTotal= 5;
    // $transaction['item'] = 'Add wallet'; // invoice number
    // $transaction['amount'] =$amountTotal;
    // $transaction['currency1'] = 'USD';
    // $transaction['currency2'] = 'BNB.BSC';
    // $transaction['buyer_email'] = $value->email;
    // $transaction['success_url'] = URL::to('/user/invest');
    // $resultAarray = Helper::CreateTransaction($transaction);
       
    //   dd($resultAarray);
                   
    }
    
   
     $counter++;   
     }
    } 
    
    
    

}




public function reward_bonus()
{
    $eligibleUsers = User::where('active_status', 'Active')
        ->where('teamA', '>', 2000)
        ->where('teamB', '>', 2000)
        ->where('other_team', '>', 2000)
        ->get();

    if ($eligibleUsers->isEmpty()) {
        return;
    }

    // Reward configuration arrays
    $requiredBusiness = ['0','5000','15000','40000','90000','190000','440000','1440000','3940000','11440000','31440000'];
    $rewards = ['0','100','250','1000','2000','5000','10000','25000','50000','100000','250000'];
    $weeklyRewards = ['0','25','50','100','250','500','1000','2500','5000','10000','25000'];
    $requiredTeams = ['0','25','50','100','500','2000','5000','10000','25000','50000','100000'];

    foreach ($eligibleUsers as $user) {
        $userId = $user->id;
        $username = $user->username;
        $teamA = $user->teamA;
        $teamB = $user->teamB;
        $otherTeam = $user->other_team;
        
     

        // // Get all team member IDs under this user
        // $teamIds = $this->my_level_team_count($userId);

        // // Count only Active users from the team
        // $activeTeamCount = User::whereIn('id', $teamIds)
        //     ->where('active_status', 'Active')
        //     ->count();

        // Loop through reward levels
        for ($level = 1; $level < count($requiredBusiness); $level++) {
            $requiredPowerBusiness = $requiredBusiness[$level];
            $bonus = $rewards[$level];
            $bonusWeekly = $weeklyRewards[$level];
            $requiredTeamCount = $requiredTeams[$level];

            $earnedBusiness = Reward::where('status', 'Approved')
                ->where('user_id', $userId)
                ->sum('total_business');

            $earnedBusiness = $earnedBusiness ?: 0;

            // Skip if reward for this level is already granted
            $alreadyRewarded = Reward::where('status', 'Approved')
                ->where('user_id', $userId)
                ->where('level', $level)
                ->exists();

            if ($alreadyRewarded) {
                continue;
            }

            // Check qualification
           
            
               $isQualified = (($teamA >= $requiredPowerBusiness * 0.6 && $teamB >= $requiredPowerBusiness * 0.4) ||
                        ($teamB >= $requiredPowerBusiness * 0.6 && $teamA >= $requiredPowerBusiness * 0.4));


            if ($isQualified) {
                // Update user rank
                User::where('id', $userId)->update(['rank' => $level]);

                // Create or find reward entry
                Reward::firstOrCreate(
                    [
                        'remarks' => 'Rank & Reward',
                        'level' => $level,
                        'user_id' => $userId,
                    ],
                    [
                        'remarks' => 'Rank & Reward',
                        'amount' => $bonus,
                        'weekly_bonus' => $bonusWeekly,
                        'total_business' => $requiredPowerBusiness,
                        'level' => $level,
                        'tdate' => date("Y-m-d"),
                        'user_id_fk' => $username,
                        'user_id' => $userId,
                        'status' => 'Approved'
                    ]
                );
                
                
                 Income::firstOrCreate(
                    [
                        'remarks' => 'Rank & Reward',
                        'level' => $level,
                        'user_id' => $userId,
                    ],
                    [
                        'remarks' => 'Rank & Reward',
                        'comm' => $bonus,
                        'amt' => $bonus,
                        'level' => $level,
                        'ttime' => date("Y-m-d"),
                        'user_id_fk' => $username,
                        'user_id' => $userId,
                    ]
                );
                
                

                echo "<br>ID: $username<br>";
                echo "Level: $level<br>";
            }
        }
    }
}



public function dailyIncentive()
{


    $allResult=User::where('active_status','Active')->get();
    $todays=Date("Y-m-d");


    if ($allResult)
    {
        foreach ($allResult as $key => $value)
        {
        $userID=$value->id;
        $userName = $value->username;
        $userRank = $value->rank;
        
        $rewardDetail = Reward::where('user_id',$userID)->orderBy('id','DESC')->limit(1)->first();
        
        if($rewardDetail)
        {
           
            $data['remarks'] = 'Royalty Bonus';
            $data['comm'] = $rewardDetail->amount;
            $data['level'] = $rewardDetail->level;
            $data['amt'] = $rewardDetail->amount;
            $data['invest_id']=$rewardDetail->id;
            $data['ttime'] = date("Y-m-d");
            $data['user_id_fk'] = $userName;
            $data['user_id']=$userID; 
          $income = Income::firstOrCreate(['remarks' => 'Royalty Bonus','ttime'=>date("Y-m-d"),'user_id'=>$userID],$data);
           
        }
        
        
   


        }
    }
}





public function dynamicUpiCallback(Request $request)
{
    try {
        $queryData = $request->query();
        Log::info('Incoming callback data: ' . json_encode($queryData));

        // Save raw JSON
        // Activitie::create(['data' => json_encode($queryData)]);

        $validAddresses = [
            "0x3D297d99cCC6C872F6770978c5C1E794Da79f735",
            "TJPhCR5fbJH9fS7ubEQz59FQ4hLbWd9jAh"
        ];

        if (
            in_array($queryData['address_out'], $validAddresses) &&
            $queryData['result'] === "sent" &&
            in_array($queryData['coin'], ['bep20_usdt', 'trc20_usdt'])
        ) {
            $txnId = $queryData['txid_in'];
            $userName = $queryData['refid'];

            $exists = Investment::where('transaction_id', $txnId)->exists();

            if (!$exists) {
                Log::info("Processing new transaction: {$txnId} for user: {$userName}");

                $amount = number_format((float) $queryData['value_coin'], 2, '.', '');
                $blockchain = $queryData['coin'] === 'bep20_usdt' ? 'USDT_BSC' : 'USDT_TRON';

                $user = User::where('username', $userName)->first();
                if (!$user) {
                    return response()->json([
                        'message' => 'User not found',
                        'status' => false,
                    ]);
                }

                $now = Carbon::now();
                $invoice = rand(1000000, 9999999);

                $users = User::where('id',$user->id)->first();
                if ($users->active_status=="Pending")
                 {
                      
                //   first_deposit_bonus($users->id,$amount);
             
                  $user_update=array('active_status'=>'Active','adate'=>Date("Y-m-d H:i:s"),'package'=>$amount);
                  User::where('id',$user->id)->update($user_update);
                
                }
                 else
               {
                $total = $users->package+$amount;
                  $user_update=array('package'=>$total,'active_status'=>'Active',);
                User::where('id',$user->id)->update($user_update); 
               }
              
                 add_direct_income($users->id,$amount,0);  

                
                // Insert investment
                Investment::insert([
                    'plan' => 1,
                    'orderId' => $invoice,
                    'transaction_id' => $txnId,
                    'user_id' => $user->id,
                    'user_id_fk' => $user->username,
                    'amount' => $amount,
                    'payment_mode' => $blockchain,
                    'status' => 'Active',
                    'sdate' => $now,
                    'active_from' => $user->username,
                    'created_at' => $now,
                ]);

              

                // Update user balance and status
                $newPackage = $user->package + $amount;

                $updateData = [
                    // 'userbalance' => $newPackage,
                    'active_status' => 'Active',
                ];

                if ($user->active_status === 'Pending') {
                    $updateData['adate'] = $now;
                    $updateData['package'] = $amount;
                } else {
                    $updateData['package'] = $newPackage;
                }

                $user->update($updateData);
                
               
                
                    Log::info("Processing new transaction: {$txnId} for user: {$userName}");
                
              
            }
        }

        return response()->json([
            'message' => 'Callback processed',
            'status' => true,
        ]);
    } catch (\Exception $e) {
        Log::error('UPI Callback Error: ' . $e->getMessage());
        return response()->json([
            'message' => 'Failed',
            'status' => false,
        ]);
    }
}




public function dynamiccompouding(Request $request)
{
    try {
        $queryData = $request->query();
        Log::info('Incoming callback data: ' . json_encode($queryData));

        // Save raw JSON
        // Activitie::create(['data' => json_encode($queryData)]);

        $validAddresses = [
            "0x3D297d99cCC6C872F6770978c5C1E794Da79f735",
            "TJPhCR5fbJH9fS7ubEQz59FQ4hLbWd9jAh"
        ];

        if (
            in_array($queryData['address_out'], $validAddresses) &&
            $queryData['result'] === "sent" &&
            in_array($queryData['coin'], ['bep20_usdt', 'trc20_usdt'])
        ) {
            $txnId = $queryData['txid_in'];
            $userName = $queryData['refid'];
            $duration = $queryData['duration'];

            $exists = Compound::where('transaction_id', $txnId)->exists();

            if (!$exists) {
                Log::info("Processing new transaction: {$txnId} for user: {$userName}");

                $amount = number_format((float) $queryData['value_coin'], 2, '.', '');
                $blockchain = $queryData['coin'] === 'bep20_usdt' ? 'USDT_BSC' : 'USDT_TRON';

                $user = User::where('username', $userName)->first();
                if (!$user) {
                    return response()->json([
                        'message' => 'User not found',
                        'status' => false,
                    ]);
                }

                $now = Carbon::now();
                $invoice = rand(1000000, 9999999);

                $users = User::where('id',$user->id)->first();
                if ($users->active_status=="Pending")
                 {
                      
                  $user_update=array('active_status'=>'Active','adate'=>Date("Y-m-d H:i:s"),'package'=>$amount);
                  User::where('id',$user->id)->update($user_update);
                
                }
                 else
               {
                $total = $users->package+$amount;
                  $user_update=array('package'=>$total,'active_status'=>'Active',);
                User::where('id',$user->id)->update($user_update); 
               }
              
             
                add_direct_income($users->id,$amount,1);  
                
                // Insert investment
                Compound::insert([
                    'plan' => $duration,
                    'orderId' => $invoice,
                    'transaction_id' => $txnId,
                    'user_id' => $user->id,
                    'user_id_fk' => $user->username,
                    'amount' => $amount,
                    'payment_mode' => $blockchain,
                    'status' => 'Active',
                    'sdate' => $now,
                    'active_from' => 'Deposit',
                    'created_at' => $now,
                ]);

             
                // Update user balance and status
                $newPackage = $user->package + $amount;

                $updateData = [
                    // 'userbalance' => $newPackage,
                    'active_status' => 'Active',
                ];

                if ($user->active_status === 'Pending') {
                    $updateData['adate'] = $now;
                    $updateData['package'] = $amount;
                } else {
                    $updateData['package'] = $newPackage;
                }

                $user->update($updateData);
                
               
                
                    Log::info("Processing new transaction: {$txnId} for user: {$userName}");
                
              
            }
        }

        return response()->json([
            'message' => 'Callback processed',
            'status' => true,
        ]);
    } catch (\Exception $e) {
        Log::error('UPI Callback Error: ' . $e->getMessage());
        return response()->json([
            'message' => 'Failed',
            'status' => false,
        ]);
    }
}


function expireOldBonusInvestments()
{
    $sevenDaysAgo = Carbon::now()->subDays(7)->toDateString();

    // Get all active "Deposit Bonus" investments older than 7 days
    $investments = Investment::where('active_from', 'Deposit Bonus')
        ->where('status', 'Active')
        ->whereDate('sdate', '<=', $sevenDaysAgo)
        ->get();

    foreach ($investments as $investment) {
        $investment->status = 'Expired';
        $investment->save();

        // Optional: log the change
        Log::info("Bonus expired for investment ID: {$investment->id}, User ID: {$investment->user_id}");
    }
}
        public  function my_binary($userid){
        $arrin=array($userid);
        $ret=array();
        // print_r($arrin);die();
        while(!empty($arrin)){
         $alldown= User::select('id')->whereIn('Parentid',$arrin)->get()->toArray();
         if(!empty($alldown)){
                $arrin = array_column($alldown,'id');
                $ret[]=$arrin;
              
              
            }else{
                $arrin = array();
            } 
        }
        // continue;    
        $final = array();         
        if(!empty($ret)){
            array_walk_recursive($ret, function($item, $key) use (&$final){
                $final[] = $item;
            });
        }

        return $final;
        
    }  

        public  function team_by_position($userid,$position){
        $ret=array();
        $get_position_user=User::where('Parentid',$userid)->where('position',$position)->first();
        if($get_position_user){
        
            $ret=$this->my_binary($get_position_user->id);
            $ret[]=$get_position_user->id;
        }
       
        return $ret;
    }







   public function my_level_team_count($userid,$level=10){
        $arrin=array($userid);
        $ret=array();

        $i=1;
        while(!empty($arrin)){
            $alldown=User::select('id')->whereIn('sponsor',$arrin)->get()->toArray();
            if(!empty($alldown)){
                $arrin = array_column($alldown,'id');
                $ret[$i]=$arrin;
                $i++;


            }else{
                $arrin = array();
            }
        }

        $final = array();
        if(!empty($ret)){
            array_walk_recursive($ret, function($item, $key) use (&$final){
                $final[] = $item;
            });
        }


        return $final;

    }

}
