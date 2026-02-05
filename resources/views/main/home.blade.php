
                          @include('layouts.mainsite.header')

<div class="hero">
<div class="container">
    <div class="row">
        <div class="col-md-2 mb-3 mb-md-0">
            <div class="social">
                <!-- <a href="https://t.me/XYOLOW_FAM" target="_blank">
                <img src="{{asset('')}}assets/images/tg.png" style="max-width: 1.7rem;">
                </a>
                <a href="https://t.me/XYOFLOW_HELPTEAM" target="_blank">
                <img src="{{asset('')}}assets/images/tg.png" style="max-width: 1.7rem;">
                </a>
                <a href="https://x.com/FlowXyoFam" target="_blank">
                <img src="{{asset('')}}assets/images/tw.png" style="max-width: 1.9rem;">
                </a>
                <a href="https://h-metrics.com/project/Helix Fund.com/" target="_blank">
                <img src="{{asset('')}}assets/images/hm.png" style="max-width: 1.7rem;">
                </a> -->
            </div>
        </div>
        <div class="col-md-9 mb-3 mb-md-0">
            <h1 style="null">Your <span class="gradient-text">Gateway</span> to <br> Consistent <span class="gradient-text">Crypto </span> Flow</h1>
            <p class="text-center" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Join the next generation of crypto investors and grow your wealth in the
                Helix Fund ecosystem.</p>
            <div class="d-flex justify-content-center">
                <a href="{{route('register')}}" class="button" style="translate: none; rotate: none; scale: none; transform: translate(0px, 20px); opacity: 1;">Join Us</a>
            </div>
        </div>
        <div class="col-md-2 mb-3 mb-md-0"></div>
    </div>
</div>
</div>
<div class="about-us">
<div class="container">
    <div class="row mb-6">
        <div class="col-12 text-start">
            <h2 style="translate: none; rotate: none; scale: none;  transform: translate(0px, 30px);margin-bottom: 50px;">About <span class="gradient-text">Us</span></h2>
            <a href="{{route('about-us')}}" class="text-white">Read More →</a>
        </div>
    </div>
    <div class="row g-4">
        <div class="col-md-8">
            <div class="card h-100 bento-card featured" style="translate: none; rotate: none; scale: none;  transform: translate(0px, 50px);">
                <div class="card-body">
                    <div class="card-icon">
                        <i class="bx bx-line-chart" style="font-size: 2rem; color: #72a1de"></i>
                    </div>
                    <h3>Investment Excellence</h3>
                    <p>Helix Fund is a modern crypto investment platform designed for those who value speed, transparency, and consistent returns. Our mission is to simplify high-yield investing by offering automated, reliable, and well-structured plans that fit both beginners and experienced users.</p>
                    <p>Founded by a team of crypto traders and blockchain enthusiasts, Helix Fund was built to give people an opportunity to grow their capital through carefully calculated strategies. We focus on short- and mid-term investment cycles, ensuring daily or hourly profitability, depending on the plan you choose.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card h-100 bento-card" style="translate: none; rotate: none; scale: none;  transform: translate(0px, 50px);">
                <div class="card-body">
                    <div class="card-icon">
                        <i class="bx bx-shield-quarter" style="font-size: 2rem; color: #72a1de"></i>
                    </div>
                    <h4>Security First</h4>
                    <p>Bank-grade security protocols protecting your assets 24/7</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card h-100 bento-card" style="translate: none; rotate: none; scale: none;  transform: translate(0px, 50px);">
                <div class="card-body">
                    <div class="card-icon">
                        <i class="bx bx-support" style="font-size: 2rem; color: #72a1de"></i>
                    </div>
                    <h4>Online Help Team</h4>
                    <p>Expert assistance available round the clock for all your needs</p>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card h-100 bento-card" style="translate: none; rotate: none; scale: none;  transform: translate(0px, 50px);">
                <div class="card-body">
                    <div class="card-icon">
                        <i class="bx bx-wallet" style="font-size: 2rem; color: #72a1de"></i>
                    </div>
                    <h3>Diverse Portfolio</h3>
                    <p>With a commitment to clear communication, instant withdrawals, and a smooth user experience, Helix Fund brings together technology, trust, and performance — all in one seamless platform. Our community grows every day, and we’re excited to help more people stay in the flow of the crypto world.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<section class="unique-section">
    <div class="container">
        <div class="text-center">
        <h1>Investment <span class="gradient-text">Plans</span></h1>
        <p class="lead mt-4 mb-5" style="color: rgba(255, 255, 255, 0.9); max-width: 800px; margin: 0 auto;">
            Choose the perfect investment strategy to maximize your crypto earnings
        </p>
    </div>
        <div class="row g-4">
            <div class="col-lg-4">
                <div class="card h-100 bento-card plan-card" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 50px);">
                    <div class="card-body text-center">
                        <div class="card-icon mx-auto">
                            <i class="bx bx-rocket" style="font-size: 2.5rem; color: #72a1de"></i>
                        </div>
                        <h3 class="gradient-text mb-4">HF-1</h3>
                        <div class="price-wrap mb-4">
                        <span class="price">1.25-1.50</span>
                        <span class="currency">%</span>
                        </div>
                        <ul class="features-list">
                            <li><i class="bx bx-check"></i> Daily Return</li>
                            <li><i class="bx bx-check"></i>  2 Trade Assigned</li>
                            <li><i class="bx bx-check"></i>No referrals Needed</li>
                            <li><i class="bx bx-check"></i> Deposit $10 - $100</li>
                            <li><i class="bx bx-check"></i> Min Withdrawal : $10</li>
                        </ul>
                        <a href="{{route('register')}}" class="button mt-4">Start Investing</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card h-100 bento-card plan-card featured" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 50px);">
                    <div class="card-body text-center">
                        <div class="card-icon mx-auto">
                            <i class="bx bx-diamond" style="font-size: 2.5rem; color: #72a1de"></i>
                        </div>
                        <h3 class="gradient-text mb-4">HF -2</h3>
                        <div class="price-wrap mb-4">
                            <span class="price">1.55-2.00</span>
                            <span class="currency">%</span>
                        </div>
                        <ul class="features-list">
                             <li><i class="bx bx-check"></i> Daily Return</li>
                            <li><i class="bx bx-check"></i> 4 Trade Assigned</li>
                            <li><i class="bx bx-check"></i> Requires 5 Valid referrals</li>
                            <li><i class="bx bx-check"></i> Deposit $200 - $300</li>
                            <li><i class="bx bx-check"></i> Min Withdrawal : $10</li>
                        </ul>
                        <a href="{{route('register')}}" class="button mt-4">Start Investing</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card h-100 bento-card plan-card" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 50px);">
                    <div class="card-body text-center">
                        <div class="card-icon mx-auto">
                            <i class="bx bx-crown" style="font-size: 2.5rem; color: #72a1de"></i>
                        </div>
                        <h3 class="gradient-text mb-4">HF-3</h3>
                        <div class="price-wrap mb-4">
                            <span class="price">2.25-2.50</span>
                            <span class="currency">%</span>
                        </div>
                        <ul class="features-list">
                            <li><i class="bx bx-check"></i> Daily Return</li>
                            <li><i class="bx bx-check"></i> 6 Trade Assigned</li>
                            <li><i class="bx bx-check"></i> Requires 10 Valid referrals</li>
                            <li><i class="bx bx-check"></i> Deposit $400 - $500</li>
                            <li><i class="bx bx-check"></i> Min Withdrawal : $10</li>
                        </ul>
                        <a href="{{route('register')}}" class="button mt-4">Start Investing</a>
                    </div>
                </div>
            </div>
            
          
        </div>
    </div>
</section>

<!--
<div class="statistics">
<div class="container">
    <div class="row">
        <div class="col-md-3 mb-3 mb-md-0">
            <div class="stats-item">
                <div class="stats-icon">
                    <i class='bx bx-calendar'></i>
                </div>
                <div class="d-block">
                    <h4 class="m-0 gradient-text">1</h4>
                    <p class="m-0">Days Online</p>
                </div>
            </div>
        </div>
        <div class="col-md-3 mb-3 mb-md-0">
            <div class="stats-item">
                <div class="stats-icon">
                    <i class='bx bx-user-voice'></i>
                </div>
                <div class="d-block">
                    <h4 class="m-0 gradient-text"></h4>
                    <p class="m-0">Total Investors</p>
                </div>
            </div>
        </div>
        <div class="col-md-3 mb-3 mb-md-0">
            <div class="stats-item">
                <div class="stats-icon">
                    <i class='bx bxs-wallet-alt'></i>
                </div>
                <div class="d-block">
                <span>$</span><h4 class="m-0 gradient-text"></h4>
                    <p class="m-0">Investments</p>
                </div>
            </div>
        </div>
        <div class="col-md-3 mb-3 mb-md-0">
            <div class="stats-item">
                <div class="stats-icon">
                    <i class='bx bx-wallet' ></i>
                </div>
                <div class="d-block">
                <span>$</span><h4 class="m-0 gradient-text"></h4>
                    <p class="m-0">Paidout</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="transacrions">
<div class="container">
    <div class="row">
        <div class="col-md-6 mb-3 mb-md-0">
            <div class="card">
                <div class="card-header">
                    <h3>Latest Deposits</h3>
                </div>
                <div class="card-body">
                                    
                                    </div>
            </div>
        </div>
        <div class="col-md-6 mb-3 mb-md-0">
            <div class="card">
                <div class="card-header">
                    <h3>Latest Withdrawals</h3>
                </div>
                <div class="card-body">
                                    
                                    </div>
            </div>
        </div>
    </div>
</div>
</div>
-->


<div class="referrals">
<div class="container">
    <div class="row mb-4">
        <div class="col-12 text-center">
            <h2 style="translate: none; rotate: none; scale: none;   transform: translate(0px, 30px);">Referral Program</h2>
            <p class="lead" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 20px);">Earn extra rewards by inviting other people. </p><h3 class="gradient-text">Referral rewards include balance reinvests.</h3><p></p>
        </div>
    </div>
    <div class="row g-4">
        <div class="col-md-4">
            <div class="card h-100 bento-card referral-card" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 50px);">
                <div class="card-body text-center">
                    <div class="card-icon">
                        <i class="bx bx-medal" style="font-size: 2.5rem; color: #72a1de"></i>
                    </div>
                    <h3 class="gradient-text">Level 1</h3>
                    <div class="commission">
                        <span class="percentage">5%</span>
                        <p class="mb-3">Level Referral Commission</p>
                    </div>
                    <p>Earn a 5% commission on the earnings of your direct referrals (Team Referrals 1)</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card h-100 bento-card referral-card featured" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 50px);">
                <div class="card-body text-center">
                    <div class="card-icon">
                        <i class="bx bxs-medal" style="font-size: 2.5rem; color: #72a1de"></i>
                    </div>
                    <h3 class="gradient-text">Level 2</h3>
                    <div class="commission">
                        <span class="percentage">10%</span>
                        <p class="mb-3">Second Level Commission</p>
                    </div>
                    <p>Earn a 2% commission on the earnings of your direct referrals (Team Referrals 2)</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card h-100 bento-card referral-card" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 50px);">
                <div class="card-body text-center">
                    <div class="card-icon">
                        <i class="bx bxs-badge-check" style="font-size: 2.5rem; color: #72a1de"></i>
                    </div>
                    <h3 class="gradient-text">Level 3</h3>
                    <div class="commission">
                        <span class="percentage">15%</span>
                        <p class="mb-3">Third Level Commission</p>
                    </div>
                    <p>Earn a 15% commission on the earnings of your direct referrals (Team Referrals 3)</p>
                </div>
            </div>
        </div>
    </div>
    <br>
     <div class="row g-4">
        <div class="col-md-4">
            <div class="card h-100 bento-card referral-card" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 50px);">
                <div class="card-body text-center">
                    <div class="card-icon">
                        <i class="bx bx-medal" style="font-size: 2.5rem; color: #72a1de"></i>
                    </div>
                    <h3 class="gradient-text">Level 4</h3>
                    <div class="commission">
                        <span class="percentage">20%</span>
                        <p class="mb-3">Level Referral Commission</p>
                    </div>
                    <p>Earn a 20% commission on the earnings of your direct referrals (Team Referrals 4)</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card h-100 bento-card referral-card featured" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 50px);">
                <div class="card-body text-center">
                    <div class="card-icon">
                        <i class="bx bxs-medal" style="font-size: 2.5rem; color: #72a1de"></i>
                    </div>
                    <h3 class="gradient-text">Level 5</h3>
                    <div class="commission">
                        <span class="percentage">25%</span>
                        <p class="mb-3">Second Level Commission</p>
                    </div>
                    <p>Earn a 25% commission on the earnings of your direct referrals (Team Referrals 5)</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card h-100 bento-card referral-card" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 50px);">
                <div class="card-body text-center">
                    <div class="card-icon">
                        <i class="bx bxs-badge-check" style="font-size: 2.5rem; color: #72a1de"></i>
                    </div>
                    <h3 class="gradient-text">Level 6</h3>
                    <div class="commission">
                        <span class="percentage">30%</span>
                        <p class="mb-3">Third Level Commission</p>
                    </div>
                    <p>Earn a 30% commission on the earnings of your direct referrals (Team Referrals 6)</p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4">
            <div class="card h-100 bento-card referral-card" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 50px);">
                <div class="card-body text-center">
                    <div class="card-icon">
                        <i class="bx bxs-badge-check" style="font-size: 2.5rem; color: #72a1de"></i>
                    </div>
                    <h3 class="gradient-text">Level 7</h3>
                    <div class="commission">
                        <span class="percentage">35%</span>
                        <p class="mb-3">Third Level Commission</p>
                    </div>
                    <p>Earn a 35% commission on the earnings of your direct referrals (Team Referrals 7)</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row " style="margin-top: 80px;">
        <div class="col-12 text-center">
            <a href="{{route('register')}}" class="button">Start Earning Now</a>
        </div>
    </div>
</div>
</div>
<div class="cta-section">
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="card bento-card featured text-center" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 50px);">
                <div class="card-body">
                    <h2>Ready to Start Your <span class="gradient-text">Crypto Journey?</span></h2>
                    <p class="lead mb-4">Join thousands of successful investors in the Helix Fund ecosystem</p>
                    <div class="cta-buttons">
                        <a href="{{route('register')}}" class="button" style="translate: none; rotate: none; scale: none;   transform: translate(0px, 30px);">Create Account</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
          @include('layouts.mainsite.footer')

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>
<script src="{{asset('')}}assets/js/gsap.min.js"></script>
<script src="{{asset('')}}assets/js/ScrollTrigger.min.js"></script>
<script src="{{asset('')}}assets/js/SplitText.min.js"></script>
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
<script src="{{asset('')}}assets/js/app.js"></script>


<script>
    window.addEventListener('load', function() {
    // All resources (images, scripts, stylesheets, etc.) are loaded
    const preloaderContainer = document.querySelector('.preloader-container');
    const content = document.querySelector('.content');

    if (preloaderContainer) {
        // Add the 'hidden' class to trigger the fade-out animation
        preloaderContainer.classList.add('hidden');

        // Optional: If you want to completely remove the preloader from the DOM
        // after the transition, you can listen for the 'transitionend' event.
        preloaderContainer.addEventListener('transitionend', function() {
            if (preloaderContainer.style.opacity === '0' || getComputedStyle(preloaderContainer).opacity === '0') {
                 preloaderContainer.style.display = 'none'; // Or preloaderContainer.remove();
            }
        }, { once: true }); // {once: true} ensures the event listener is removed after it fires
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
setTimeout(function() {
    const preloaderContainer = document.querySelector('.preloader-container');
    const content = document.querySelector('.content');

    if (preloaderContainer && !preloaderContainer.classList.contains('hidden')) {
        console.warn("Preloader timeout reached. Forcing hide.");
        preloaderContainer.classList.add('hidden');
        if (preloaderContainer.style.opacity === '0' || getComputedStyle(preloaderContainer).opacity === '0') {
            preloaderContainer.style.display = 'none';
        }
        if (content) {
            content.style.display = 'block';
        }
    }
}, 10000); // 10 seconds timeout as an example
</script>





</body></html>