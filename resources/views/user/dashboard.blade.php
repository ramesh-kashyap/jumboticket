<style>
    .button {
        cursor: pointer;
        font-size: 1.4rem;
        border-radius: 16px;
        border: none;
        padding: 2px;
        background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
        position: relative;
    }

    .button::after {
        content: "";
        position: absolute;
        width: 65%;
        height: 60%;
        border-radius: 120px;
        top: 0;
        right: 0;
        box-shadow: 0 0 20px #ffffff38;
        z-index: -1;
    }

    .blob1 {
        position: absolute;
        width: 70px;
        height: 70%;
        border-radius: 16px;
        bottom: 0;
        left: 0;
        background: radial-gradient(circle 60px at 0% 100%,
                #3fe9ff,
                #0000ff80,
                transparent);
        box-shadow: -10px 10px 30px #0051ff2d;
    }

    .inner {
        padding: 5px 25px;
        border-radius: 14px;
        color: #fff;
        z-index: 3;
        position: relative;
        background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
    }

    .inner::before {
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 14px;
        background: radial-gradient(circle 60px at 0% 100%,
                #00e1ff1a,
                #0000ff11,
                transparent);
        position: absolute;
    }

.account-overview .card .card-header {
    padding: 1.25rem;
    background: linear-gradient(to right, #ffffff, #c979ff, #d6c507, #c1ff28, #b47606, #ff8e01, #ffffff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.form-control {
    border: 1px solid rgba(114, 161, 222, 0.15);
    border-radius: 12px;
    color: #ffffff;
    padding: 0.8rem 1rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background: linear-gradient(303deg, rgba(114, 161, 222) 0%, rgba(52, 0, 124) 100%);
}
</style>
<style>
.blink {
   background: linear-gradient(to right, #ffffff, #c979ff, #d6c507, #c1ff28, #b47606, #ff8e01, #ffffff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}


}
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div id="main-content" class="flex-grow-1 m-3">
    <nav class="navbar navbar-expand-lg sticky-top shadow-sm main-header">
        <div class="container-fluid">
            <button class="btn btn-outline-secondary d-md-none me-2" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                <i class="fas fa-bars"></i>
            </button>

            <button id="sidebarToggle" class="btn btn-outline-secondary d-none d-md-inline-block me-3">
                <i class="fas fa-bars"></i>
            </button>

            <span class="navbar-brand text-capitalize text-white mb-0 h1 d-none d-sm-inline-block">account</span>

            <ul class="navbar-nav ms-auto">
                <li class="nav-item mb-0 dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownUser" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-user-circle fa-lg me-1"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownUser">
                        <!--<li><a class="dropdown-item" href="{{route('user.GenerateTicket')}}"><i-->
                        <!--            class="fas fa-headset fa-fw me-2"></i>Support</a></li>-->
                                    
                        <li><a class="dropdown-item" href="{{route('user.profile')}}"><i
                                    class="fas fa-user-edit fa-fw me-2"></i>Edit Account</a></li>
                        <li><a class="dropdown-item" href="{{route('user.ChangePass')}}"><i
                                    class="fas fa-shield-alt fa-fw me-2"></i>Security</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                         <form id="logout-form" action="{{ route('logout') }}" method="POST"
                            class="d-none">
                            @csrf
                        </form>
                        <li><a class="dropdown-item text-danger" href="{{ route('logout') }}"onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i
                                    class="fas fa-sign-out-alt fa-fw me-2"></i>Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    <!-- <div class="top-video">
                <video class="top" src="{{asset('')}}assets/video/top.mp4" type="video/mp4" muted autoplay loop plays-inline
                    poster="video/poster.png"></video>
            </div> -->



    <div class="row mt-3">
        <!-- Account Security Card -->
        <!-- <div class="col-12 mb-4 security-notice">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="mb-0"><i class="fas fa-shield-alt me-2"></i>Security Notices</h4>
                        </div>
                        <div class="card-body">

                            <div class="alert alert-warning mb-0">
                                <h5>Two Factor Authentication Not Enabled</h5>
                                <p>Enhance your account security by activating Two Factor Authentication.</p>
                                <a href="?a=security" class="sbmt">Enable 2FA</a>
                            </div>
                        </div>
                    </div>
                </div> -->

        <?php
            
            $quantifiable_count = 0;
            $vip = 0;
            if ($balance >= 10 ) {
                $quantifiable_count = 2;
                $vip = 1;
            } 
            if ($balance >= 200  && $userDirect >= 5) {
                $quantifiable_count = 4;
                $vip = 2;
            } 
            if ($balance >= 400 && $userDirect >= 10) {
                $quantifiable_count = 6;
                $vip = 3;
            } 
            // dd($userDirect);
            ?>
        <div class="col-md-6 mb-4  account-overview">
            <div class="card h-100">
                <div class="card-header">
                    <h4 class="mb-0"><i class="fas fa-chart-line me-2"></i>Trade Center</h4>
                </div>
                <div class="card-body">
                    <!-- Junior Agent Logo / Title -->
                    <h2 style="font-family: 'Arial Black', sans-serif; letter-spacing: 2px;">
                        <span style="background: linear-gradient(to right, #ffffff, #c979ff, #d6c507, #c1ff28, #b47606, #ff8e01, #ffffff);background-size: 200% auto;-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;">HF-{{ $vip }}</span>

                    </h2>


                    @php
                    $progress = $quantifiable_count > 0 ? ($todaysRoi / $quantifiable_count) * 100 : 0;
                    @endphp

                    <!-- Progress Bar -->
                    <div class="progress my-3"
                        style="height: 20px; border-radius: 50px; background-color: rgba(255,255,255,0.3);">
                        <div class="progress-bar" role="progressbar"
                            style="width: {{ $progress }}%; background:  #6e0daf; border-radius: 50px;"
                            aria-valuenow="{{ $progress }}" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>

                    <!-- Assigned Orders -->
                    <p class="mt-2" style="font-size: 16px;">Daily Assigned Trades:</p>
                    <h4><b>{{ $todaysRoi }}/{{ $quantifiable_count }}</b></h4>

                    <!-- Buttons -->



                
                                                   @php
                                use Carbon\Carbon;
                            
                                $lastTrade = Auth::user()->last_trade;
                            
                                // Set timezone to Asia/Kolkata
                                $lastTradeDateTime = $lastTrade ? Carbon::parse($lastTrade)->timezone('Asia/Kolkata') : null;
                                $currentDateTime = now('Asia/Kolkata');
                            
                                // Define 5:30 AM today in Asia/Kolkata timezone
                                $today530AM = Carbon::createFromTime(5, 30, 0, 'Asia/Kolkata');
                            
                                // Check if current time is after or equal to 5:30 AM today
                                $canTradeTimeReached = $currentDateTime->greaterThanOrEqualTo($today530AM);
                            
                                // Check if user has already traded today after 5:30 AM
                                $hasTradedToday = $lastTradeDateTime 
                                    && $lastTradeDateTime->isSameDay($currentDateTime) 
                                    && $lastTradeDateTime->greaterThanOrEqualTo($today530AM);
                            @endphp
                            
                            @if (!$hasTradedToday && $canTradeTimeReached && Auth::user()->active_status == "Active")
                                <div class="btns d-flex justify-content-center mt-3 gap-2">
                                    <a href="{{ route('user.tradeOn') }}" class="button"
                                        style="display: block; width: 100%; max-width: 500px; text-decoration: none;">
                                        <div class="blob1"></div>
                                        <div class="blob2"></div>
                                        <div class="inner"
                                            style="background: radial-gradient(circle 80px at 80% -50%, #a020f0, #4b0082); text-align: center; width: 100%;">
                                            Start Quantization
                                        </div>
                                    </a>
                                </div>
                            @elseif (!isset($_GET['trade']))
                                <div class="btns d-flex justify-content-center mt-3 gap-2">
                                    <a class="button" style="display: block; width: 100%; max-width: 500px; text-decoration: none; ">
                                        <div class="blob1"></div>
                                        <div class="blob2"></div>
                                        <div class="inner"
                                            style="text-align: center; width: 100%;    cursor: not-allowed;color: gray;">
                                            Start Quantization
                                        </div>
                                    </a>
                                </div>
                            @endif


                    <?php
                                $status = false;
                                $trade = false;
                                
                                $u_id = Auth::user()->id;
                                if (isset($_GET['trade'])) {
                                    $trade = true;
                                    $trade_row = \DB::table('contract')->where('user_id', $u_id)->where('c_status', 1)->orderBy('created_at', 'DESC')->first();
                                    if (!$trade_row) {
                                        $status = true;
                                    }
                                    if ($status == true) {
                                        header('Location: dashboard?notrade');
                                        exit();
                                    }
                                }
                                
                                ?>

                    @if ($trade === true)
                    <div id="zscooProcess" class="quantify-execute mt-4"
                        style="display: block; width: 100%; max-width: 500px;">
                        <div class="process-box">
                            <h3 style="font-size: 16px;">@lang('Helix Fund Run Panel Process') <span
                                    class="spinner">⏳</span></h3>
                            <div id="stepsLog"></div>
                        </div>
                    </div>

                    <style>
                        .spinner {
                            animation: spin 1s linear infinite;
                            display: inline-block;
                            font-size: 18px;
                            margin-left: 5px;
                        }

                        @keyframes spin {
                            0% {
                                transform: rotate(0deg);
                            }

                            100% {
                                transform: rotate(360deg);
                            }
                        }

                        .process-box {
                            background: #222423;
                            padding: 20px 25px;
                            border-radius: 10px;
                            font-family: 'Segoe UI', sans-serif;
                            max-width: 450px;
                            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
                            margin: 30px auto;
                        }

                        #stepsLog p {
                            margin: 8px 0;
                            font-size: 14px;
                            color: #fff;
                            line-height: 1.4;
                        }

                        .quantify-execute {
                            margin-bottom: 80px;
                        }

                    </style>

                    <script>
                        document.addEventListener('DOMContentLoaded', async () => {
                            const exchanges = ["BINANCE", "BITTREX", "KUCOIN", "HUOBI", "OKX"];
                            const coin = "{{ $trade_row->c_name ?? 'SOL' }}";
                            // Get random item from array
                            function getRandomExchange() {
                                return exchanges[Math.floor(Math.random() * exchanges.length)];
                            }
                            // Assign random exchanges
                            const buyExchange = getRandomExchange();
                            let sellExchange = getRandomExchange();

                            // Ensure buy and sell are not the same
                            while (sellExchange === buyExchange) {
                                sellExchange = getRandomExchange();
                            }

                            const steps = [
                                'Starting Helix Fund quantification',
                                'Start queuing...',
                                'Start capturing various exchange market prices',
                                `Start executing buy order ${coin} ${buyExchange}`,
                                `Start executing sell order ${coin} ${sellExchange}`,
                                'Start allocating commissions',
                                'The execution is completed and the commission distribution is successful'
                            ];

                            const stepsLog = document.getElementById('stepsLog');

                            for (let i = 0; i < steps.length; i++) {
                                await new Promise(resolve => setTimeout(resolve, 2000));
                                const p = document.createElement('p');
                                p.textContent = steps[i];
                                stepsLog.appendChild(p);
                            }

                            setTimeout(() => {
                                document.getElementById('zscooProcess').style.display = 'none';


                            }, 4000);

                            function closetrade() {
                                
                                  document.getElementById('zscooProcess').style.display = 'none';
                                  
                                fetch("{{ route('user.close-trade') }}").then(response => response
                                        .json()) // Parse JSON response
                                    .then(data => {
                                        if (data.status) {
                                         const profit = data.profit ?? "0.0000"; // fallback if no profit sent sent
                                            console.log(data);
                                            // Set the profit in the modal
                                            document.getElementById("profitAmount").textContent =
                                                `${profit} USDT`;

                                            // Show modal and overlay

                                            document.getElementById("resultModal").style.display = "block";



                                         
                                            // Add the 'show' class to trigger transitions/animations (like Bootstrap modals)

                                            // Show execute button again
                                            $('.quantify-execute').css('display', 'block');
                                            
                                            function hideModal() {
                                                  document.getElementById("resultModal").style.display = "none";
                                            }  


                                        } else {
                                            // exit
                                            $('.team-income').css('display', 'none')
                                        }
                                        // setTimeout(pollServer, 500000);
                                    })
                                    .catch((error) => {
                                        console.error("Error polling server:", {
                                            message: error.message,
                                            stack: error.stack,
                                            response: error.response,
                                        });
                                        // Retry polling after a delay (e.g., every 5 seconds)
                                        // 
                                    });

                            }
                            setTimeout(closetrade, 4000);


                        });

                    </script>
                    @endif









                    {{-- loader --}}




                </div>
            </div>
        </div>

        <!-- Popup Modal -->
       <div id="resultModal" style="display:none; position: fixed; z-index: 9999; inset: 0; background-color: rgba(0, 0, 0, 0.7);">
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                          background-color: #1e1e1e; color: white; border-radius: 20px; padding: 30px; text-align: center; width: 90%; max-width: 400px;">
                          
                <!-- <button onclick="hideModal()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; color: white; font-size: 20px; cursor: pointer;">×</button> -->
            
                <div style="margin-bottom: 20px;">
                  <div style="width: 80px; height: 80px; margin: 0 auto; background: #6e0daf; border-radius: 50%;
                              display: flex; align-items: center; justify-content: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                      <path d="M13.485 1.893a.75.75 0 0 1 1.06 1.06L6.56 11.939 1.453 6.828a.75.75 0 0 1 1.06-1.06l3.932 3.931L13.485 1.893z" />
                    </svg>
                  </div>
                </div>
            
                <h5 style="font-weight: bold; margin-bottom: 5px;">Strategy Complete</h5>
                <p style="margin-bottom: 10px;">Congratulations To Get</p>
                <h4 id="profitAmount" style="font-weight: bold; margin-bottom: 25px;">0.0000 USDT</h4>
            
               <div style="display: flex; justify-content: center; gap: 15px; cursor: pointer;">
                  <!-- <a href="#" style="padding: 10px 20px; border: 2px solid #6e0daf; color: #6e0daf; text-decoration: none; border-radius: 5px;">View Order</a> -->
                  <a  onclick="hideModal()" style="padding: 10px 20px; background-color: #6e0daf; color: white; text-decoration: none; border-radius: 5px;">Confirm</a>
                </div>
              </div>
            </div>


        <!-- Account Overview Card -->
        <div class="col-md-6 mb-4 account-overview">
            <div class="card h-100">
                <div class="card-header">
                    <h4 class="mb-0"><i class="fas fa-user me-2"></i>Account Information</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>
                                <tr>
                                    
                                    <td><i class="fas fa-user-circle me-2"></i>Username:</td>
                                    <td class="text-end">{{ $profile_data ? $profile_data->name : '' }}</td>
                                </tr>
                                <tr>
                                    
                                    <td><i class="fas fa-user-circle me-2"></i>UserId:</td>
                                    <td class="text-end">{{ $profile_data ? $profile_data->username : '' }}</td>
                                </tr> 
                                <tr>
                                    
                                    <td><i class="fas fa-user-circle me-2"></i> <span  style="color:#fff;">Rank:</span></td>
                                    <td class="text-end" >{{ $profile_data->rank ?"R".$profile_data->rank : 'N/A' }}</td>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-calendar-alt me-2"></i>Registration Date:</td>
                                    <td class="text-end">{{ $profile_data ? $profile_data->created_at : 'N/A' }}</td>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-clock me-2"></i>Activation Date:</td>
                                    <td class="text-end">{{ $profile_data->adate ? $profile_data->adate : 'N/A' }}</td>
                                </tr> 
                                @php
                                    $registrationDate = \Carbon\Carbon::parse(Auth::user()->created_at)->timezone('Asia/Kolkata');
                                @endphp
                                
                                @if(Auth::user()->active_status == 'Pending')
                                <tr>
                                    <td><i class="fas fa-clock me-2"></i> <span class="blink"> Get 100% Cashback:</span></td>
                                    <td class="text-end">
                                        <span id="countdown" data-start="{{ $registrationDate }}"></span>
                                    </td>
                                </tr>
                                @endif
                               
                                <tr>
                                    <td ><a href="https://wa.me/?text={{ asset('') }}register?ref={{ Auth::user()->username }}"  target="_blank"  style="color:#fff;    text-decoration: none;"><i class="fa fa-whatsapp"  style="color:green"></i> Referral Link: </a> </td>
                                    <td class="text-end">
                                        <div class="input-group" style="cursor: pointer;">
                                            
                                            <input onclick="window.open('{{ asset('') }}register?ref={{ Auth::user()->username }}', '_blank')" type="text" class="form-control" id="refLink"
                                                value="{{ asset('') }}register?ref={{ Auth::user()->username }}"  style="cursor: pointer;"
                                                readonly>
                                            <button class="sbmt" onclick="copyReferralLink()">
                                                <i class="fas fa-copy"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


        <!-- Financial Overview Card -->
        <div class="col-md-6 mb-4 account-overview">
            <div class="card h-100">
                <div class="card-header">
                    <h4 class="mb-0"><i class="fas fa-chart-line me-2"></i>Financial Overview</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>
                                <!-- <tr>
                                            <td><i class="fas fa-wallet me-2"></i>Account Balance:</td>
                                            <td class="text-end">
                                                <h4 class="mb-1">$<b>{{ number_format(Auth::user()->totalIncome->sum('comm'), 2) }}  {{generalDetail()->cur_text}}</b></h4>
                                            </td>
                                        </tr> -->
                                <tr>
                                    <td><i class="fas fa-coins me-2"></i>Active Deposit:</td>
                                    <td class="text-end">
                                        $<b>{{ number_format(Auth::user()->Activeinvestment->sum('amount'), 2) }}
                                            {{generalDetail()->cur_text}}</b></td>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-hand-holding-usd me-2"></i>Todays Revenue :</td>
                                    <td class="text-end">
                                        $<b>{{ number_format($todaysRoiSum, 2) }}
                                            {{generalDetail()->cur_text}}</b></td>
                                </tr> 
                                
                                <tr>
                                    <td><i class="fas fa-hand-holding-usd me-2"></i>Earned Total:</td>
                                    <td class="text-end">
                                        $<b>{{ number_format(Auth::user()->totalIncome->sum('comm'), 2) }}
                                            {{generalDetail()->cur_text}}</b></td>
                                </tr>
                                 <tr>
                                    <td><i class="fas fa-hand-holding-usd me-2"></i>Total Compounding:</td>
                                    <td class="text-end">
                                        $<b>{{ number_format(Auth::user()->totalcompound->sum('amount'), 2) }}
                                            {{generalDetail()->cur_text}}</b></td>
                                </tr>
                                 <tr>
                                    <td><i class="fas fa-hand-holding-usd me-2"></i>Compounding ROI:</td>
                                    <td class="text-end">
                                        $<b>{{ number_format(Auth::user()->compoundingROI->sum('comm'), 2) }}
                                            {{generalDetail()->cur_text}}</b></td>
                                </tr>
                                
                                <tr>
                                    <td><i class="fas fa-hand-holding-usd me-2"></i>Available Balance:</td>
                                    <td class="text-end">
                                        $<b>{{ number_format(Auth::user()->available_balance(), 2) }}
                                            {{ generalDetail()->cur_text }}</b></td>
                                </tr>

                                <tr>
                                    <td><i class="fas fa-hourglass-half me-2"></i>Pending Withdrawal:</td>
                                    <td class="text-end">$<b>{{ number_format(Auth::user()->withdraw(), 2) }}
                                            {{generalDetail()->cur_text}}</b></td>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-money-bill-wave me-2"></i>Total Withdrawal:</td>
                                    <td class="text-end">$<b>{{ number_format(Auth::user()->withdrawtotal(), 2) }}
                                            {{generalDetail()->cur_text}}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>



        <!-- Transaction History Card -->
        <div class="col-md-6 mb-4 account-overview">
            <div class="card">
                <div class="card-header">
                    <h4 class="mb-0"><i class="fas fa-history me-2"></i>Recent Transactions</h4>
                </div>
                <div class="card-body">
                   <div class="row g-3">
                     @if (is_array($records) || $records)
                                    @foreach ($records as $value)
                <div class="col-md-12">
            <div class="card h-100" style="background: linear-gradient(303deg, rgba(114, 161, 222) 0%, rgba(52, 0, 124) 100%)">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <div>
                            <h5 class="mb-1">{{ $value->type === 'contract' ? 'ORDER REVENUE' : ($value->type === 'investment' ? 'DEPOSIT' : strtoupper($value->type)) }}
</h5>
                       <div class="small" style="color: {{ in_array(strtolower($value->description), ['approved', 'active']) ? 'green' : 'inherit' }}">
    {{ strtolower($value->description) === 'approved' || strtolower($value->description) === 'active' ? 'COMPLETED' : strtoupper($value->description) }}
    {{ $value->type === 'contract' ? '-USDT' : '' }}
</div>

                        </div>
                        <div class="text-end">
                            <div class="d-flex align-items-center justify-content-end">
                                <h4 class="mb-0 me-2">{{ number_format($value->amount, 2) }}</h4>
                                <img src="{{asset('')}}assets/images/102.png" height="17">
                            </div>
                            <small>  {{ date('D, d M Y H:i:s', strtotime($value->date)) }}</small>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
               @endforeach
                                @else
                                    <p style="color: #000;">@lang('No bill history available.')</p>
                                @endif
            </div>
                </div>
            </div>
        </div>
    </div>

</div>



@if(Auth::user()->active_status=="Active" && Auth::user()->popup_check!=1)


        <!-- Popup Modal -->
           <div  id="activationModel" style="display:block; position: fixed; z-index: 9999; inset: 0; background-color: rgba(0, 0, 0, 0.7);">
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                          background-color: #1e1e1e; color: white; border-radius: 20px; padding: 30px; text-align: center; width: 90%; max-width: 400px;">
                          
                <!-- <button onclick="hideModal()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; color: white; font-size: 20px; cursor: pointer;">×</button> -->
            
                <div style="margin-bottom: 20px;">
                  <div style="width: 80px; height: 80px; margin: 0 auto; background: #6e0daf; border-radius: 50%;
                              display: flex; align-items: center; justify-content: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                      <path d="M13.485 1.893a.75.75 0 0 1 1.06 1.06L6.56 11.939 1.453 6.828a.75.75 0 0 1 1.06-1.06l3.932 3.931L13.485 1.893z" />
                    </svg>
                  </div>
                </div>
            
                <h5 style="font-weight: bold; margin-bottom: 5px;margin-bottom: 5px;">🎉 Congratulations!</h5>
                <p style="margin-bottom: 10px;"> Your account has been successfully activated with</p>
                <h4 id="profitAmount" style="font-weight: bold; margin-bottom: 25px;">{{number_format(Auth::user()->package,2)}} USDT</h4>
                <p style="margin-top: 8px;">
                    Get ready to start your journey of smart trading and consistent earnings with Helix Fund.
                </p>
                        
               <div style="display: flex; justify-content: center; gap: 15px; cursor: pointer;">
                  <!-- <a href="#" style="padding: 10px 20px; border: 2px solid #6e0daf; color: #6e0daf; text-decoration: none; border-radius: 5px;">View Order</a> -->
                  <a  onclick="handlePopupCloseAndUpdate()" style="padding: 10px 20px; background-color: #6e0daf; color: white; text-decoration: none; border-radius: 5px;">Confirm</a>
                </div>
              </div>
            </div>



@endif

@include('layouts.upnl.sidebar')

    @include('partials.notify')

<!---->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
</script>
<script src="{{asset('')}}assets/js/dash.js"></script>


<script>
    window.addEventListener('load', function () {
        // All resources (images, scripts, stylesheets, etc.) are loaded
        const preloaderContainer = document.querySelector('.preloader-container');
        const content = document.querySelector('.content');

        if (preloaderContainer) {
            // Add the 'hidden' class to trigger the fade-out animation
            preloaderContainer.classList.add('hidden');

            // Optional: If you want to completely remove the preloader from the DOM
            // after the transition, you can listen for the 'transitionend' event.
            preloaderContainer.addEventListener('transitionend', function () {
                if (preloaderContainer.style.opacity === '0' || getComputedStyle(
                        preloaderContainer).opacity === '0') {
                    preloaderContainer.style.display =
                        'none'; // Or preloaderContainer.remove();
                }
            }, {
                once: true
            }); // {once: true} ensures the event listener is removed after it fires
        }

        if (content) {
            content.style.display = 'block'; // Or any other display type you need, e.g., 'flex'
            // If you used opacity for content:
            // content.style.opacity = '1';
            // content.style.visibility = 'visible';
        }
    });

    // Fallback in case 'load' event doesn't fire or takes too long (e.g., for broken images)
    // You might want to adjust the timeout duration
    setTimeout(function () {
        const preloaderContainer = document.querySelector('.preloader-container');
        const content = document.querySelector('.content');

        if (preloaderContainer && !preloaderContainer.classList.contains('hidden')) {
            console.warn("Preloader timeout reached. Forcing hide.");
            preloaderContainer.classList.add('hidden');
            if (preloaderContainer.style.opacity === '0' || getComputedStyle(preloaderContainer)
                .opacity === '0') {
                preloaderContainer.style.display = 'none';
            }
            if (content) {
                content.style.display = 'block';
            }
        }
    }, 10000); // 10 seconds timeout as an example

</script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const countdownEl = document.getElementById("countdown");
        if (!countdownEl) return;

        const startTime = new Date(countdownEl.dataset.start);
        const endTime = new Date(startTime.getTime() + 7 * 24 * 60 * 60 * 1000);

        function updateCountdown() {
            const now = new Date();
            const distance = endTime - now;

            if (distance <= 0) {
                countdownEl.innerText = "Expired";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        updateCountdown(); // initial call
        setInterval(updateCountdown, 1000); // update every second
    });
</script>
<script>
 function hideModal() {
    document.getElementById("resultModal").style.display = "none";
     location.reload();
  }  
    function copyReferralLink() {
        const copyText = document.getElementById('refLink');
        navigator.clipboard.writeText(copyText.value).then(function () {
            alert("Link copied: " + copyText.value); // optional feedback
        }, function (err) {
            alert("Failed to copy link!");
        });
    }



function handlePopupCloseAndUpdate() {
    // 1. Close the popup (adjust selector based on your popup structure)
    document.getElementById("activationModel").style.display = "none";

    // 2. Make AJAX call to update popup_check
     // Send AJAX POST to update popup_check
    fetch('/user/update-popup-check', {
        method: 'POST', // <-- Ensure this is POST
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), // Laravel CSRF
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ popup_check: true }) // This causes error only if method is GET
    })
    .then(response => response.json())
    .then(data => {
        // console.log('Popup check updated:', data);
        // window.location.href = '/dashboard';
    })
    .catch(error => {
        console.error('Error updating popup check:', error);
    });
}

</script>
</body>

</html>
