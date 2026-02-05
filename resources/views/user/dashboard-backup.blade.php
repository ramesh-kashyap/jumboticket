
            <div class="cab-content">
                <div class="container">
                  
                    <style>
                        .cab-bal__item .main-btn {
                            box-shadow: 1px 18px 20px 0px rgb(0 0 0 / 14%);
                        }
                    </style>

                    <div class="cab-title">Balance<span>:</span></div>
                    <div class="cab-bal">
                        <div class="cab-bal__item">
                            <div class="cab-bal__head"> <img src="/assets/img/deposit.png" alt="btc" /> Total Deposit
                                <span>( {{generalDetail()->cur_text}} )</span>
                            </div>
                            <div class="cab-bal__info">
                                <p>your balance</p><span>{{ number_format(Auth::user()->investment->sum('amount'), 2) }} {{generalDetail()->cur_text}}</span>
                            </div>

                            
                            <a class="main-btn main-btn_gray" href="{{route('user.DepositHistory')}}">view </a>
                        </div>
                        <div class="cab-bal__item">
                            <div class="cab-bal__head"> <img src="/assets/img/8705691.png" alt="bch" />Order Revenue
                                <span>( {{generalDetail()->cur_text}} )</span>
                            </div>
                            <div class="cab-bal__info">
                                <p>your balance</p><span>{{ number_format(Auth::user()->dailyIncentive->sum('comm'), 2) }} {{generalDetail()->cur_text}}</span>
                            </div>
                           <a class="main-btn main-btn_gray" href="{{route('user.roi-bonus')}}">view </a>
                        </div>
                        <div class="cab-bal__item">
                            <div class="cab-bal__head"> <img src="/assets/img/6303173.png" alt="eth" />Referral Bonus
                                <span>( {{generalDetail()->cur_text}} )</span>
                            </div>
                            <div class="cab-bal__info">
                                <p>your balance</p><span>{{ number_format(Auth::user()->level_bonus->sum('comm'), 2) }}  {{generalDetail()->cur_text}}</span>
                            </div>
                            <a class="main-btn main-btn_gray" href="{{route('user.roi-bonus')}}">view </a>
                        </div>

                        
                        <div class="cab-bal__item">
                            <div class="cab-bal__head"> <img src="/assets/img/leadership.png" alt="xrp" />Leadership Income
                                <span>( {{generalDetail()->cur_text}} )</span>
                            </div>
                            <div class="cab-bal__info">
                                <p>your balance</p><span>{{ number_format(Auth::user()->leadership_bonus->sum('comm'), 2) }} {{generalDetail()->cur_text}}</span>
                            </div>
                            <a class="main-btn main-btn_gray" href="{{route('user.roi-bonus')}}">view </a>
                        </div>
                        <div class="cab-bal__item">
                            <div class="cab-bal__head"> <img src="/assets/img/team.png" alt="ltc" />My Partners
                                <span></span>
                            </div>
                            <div class="cab-bal__info">
                                <p>total partners</p><span>{{$total_team}}</span>
                            </div>
                          <a class="main-btn main-btn_gray" href="{{route('user.referral-team')}}">view </a>
                        </div>
                       
                         <div class="cab-bal__item">
                            <div class="cab-bal__head"> <img src="/assets/img/withdraw.png" alt="dash" />Total Withdrawal <span>(
                                {{generalDetail()->cur_text}} )</span>
                            </div>
                            <div class="cab-bal__info">
                                <p>your balance</p><span>{{ number_format(Auth::user()->withdraw(), 2) }} {{generalDetail()->cur_text}}</span>
                            </div>
                            <a class="main-btn main-btn_gray" href="{{route('user.Withdraw-History')}}">view </a>
                        </div>
                       
                       
                          <div class="cab-bal__item">
                            <div class="cab-bal__head"> <img src="/assets/img/6303173.png" alt="dash" />Total Profit  <span style="color: #312c2c;">(
                                200% )</span>
                            </div>
                            <div class="cab-bal__info">
                                <p>total received</p><span>{{ number_format($totalIncome, 2) }} %</span>
                            </div>
                              <div class="cab-bal__info">
                                <p>total profit</p><span>{{ number_format($willgetProfit, 2) }} {{generalDetail()->cur_text}}</span>
                            </div>
                            
                            <a class="main-btn main-btn_gray" href="{{route('user.Withdraw-History')}}">view </a>
                        </div>
                       
                       
                      
                     
                    </div>
                    <div class="cab-refs">
                        <div class="cab-title"><img
                                src="/assets/img/cab-title-icon-1.svg"alt="cab-title-icon-1" />invite your friends:
                        </div>
                        <div class="cab-text">
                            <p>Start earning with your friends by sharing your referral link.</p>
                        </div>
                        <div class="cab-refs__box">
                            <p id="refs">{{ asset('') }}register?ref={{ Auth::user()->username }}</p>
                            <div class="cab-refs__copy copy-text" data-clipboard-target="#refs">copy
                                <svg>
                                    <use xlink:href="/assets/img/sprite.svg#cab-menu-6"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="cab-stat">
                        <div class="cab-stat__title">statistics</div>
                        <div class="stat-list">
                            <div class="stat-list__item"> <img src="/assets/img/stat-icon-1.svg"
                                    alt="stat-icon-1" /><span>{{currency()}}{{number_format(generalDetail()->total_fund_invested,2)}}</span>
                                <p>Total funds invested</p>
                            </div>
                            <div class="stat-list__item"> <img src="/assets/img/stat-icon-2.svg"
                                    alt="stat-icon-2" /><span>{{currency()}}{{number_format(generalDetail()->paid_withdrawal,2)}}</span>
                                <p>Paid</p>
                                <div style="display: none;">18</div>
                            </div>

                            <div class="stat-list__item"> <img src="/assets/img/stat-icon-3.svg"
                                    alt="stat-icon-3" /><span>{{generalDetail()->people_online}}</span>
                                <p>People online</p>
                            </div>
                            <div class="stat-list__item"> <img src="/assets/img/stat-icon-4.svg"
                                    alt="stat-icon-4" /><span>{{generalDetail()->our_investors}}</span>
                                <p>our investors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          