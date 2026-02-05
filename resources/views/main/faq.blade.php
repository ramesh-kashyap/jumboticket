
                          @include('layouts.mainsite.header')

<div class="hero">
    <div class="container text-center">
        <h1>Frequently Asked <span class="gradient-text">Questions</span></h1>
        <p class="lead mt-4 mb-5" style="color: rgba(255, 255, 255, 0.9); max-width: 800px; margin: 0 auto;">
            Find answers to common questions about our investment platform
        </p>
    </div>
</div>

<section class="unique-section">
    <div class="container">
        <div class="accordion custom-accordion" id="faqAccordion">
            <!-- Getting Started -->
            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How do I start investing with Helix Fund?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Becoming an investor is simple. Follow this <a href="?a=signup" class="themed-link">link</a>. Sign up by entering your name, username, email address, and a strong password. Once registered, log into your account, pick an investment plan that suits you, and fund your account to get started.
                    </div>
                </div>
            </div>

            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Which digital currencies are supported?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Helix Fund currently accepts deposits in BTC, USDT (TRC20 and BEP20), TRX, and LTC.
                    </div>
                </div>
            </div>

            <!-- Payment Methods -->
            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What’s the minimum amount I can deposit?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        The minimum deposit across all supported cryptocurrencies is $35.
                    </div>
                </div>
            </div>

            <!-- Account Management -->
            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Are there any transaction fees?
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        No, Helix Fund does not apply any fees to either deposits or withdrawals.
                    </div>
                </div>
            </div>

            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        How long before my deposit becomes active?
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Deposits are usually confirmed and activated within 10 minutes, depending on how busy the blockchain network is.
                    </div>
                </div>
            </div>

            <!-- Security -->
            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Will my deposit be returned?
                    </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        That depends on the plan you choose. We offer daily-profit plans where your initial deposit is returned after the plan ends. For hourly-profit plans, the deposit is already factored into the profit you earn, and it’s paid out gradually.
                    </div>
                </div>
            </div>

            <!-- Investment Information -->
            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="headingSeven">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        When will I receive my profits?
                    </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Earnings are added to your investment account either hourly or daily, based on the plan you’ve selected.
                    </div>
                </div>
            </div>
            
            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="heading8">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        What is the minimum amount I can withdraw?
                    </button>
                </h2>
                <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        The minimum withdrawal limit is $4 for all supported cryptocurrencies except Bitcoin. The minimum withdrawal limit for Bitcoin is $8.
                    </div>
                </div>
            </div>
            
            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="heading9">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        How fast are withdrawals processed?
                    </button>
                </h2>
                <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Withdrawals are processed instantly.
                    </div>
                </div>
            </div>
            
            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="heading10">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                        What if I forget my account password?
                    </button>
                </h2>
                <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Use the “Forgot your password?” option on the login screen, or contact our Help Team through the Telegram for assistance.
                    </div>
                </div>
            </div>
            
            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="heading11">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                        How do I activate Two-Factor Authentication (2FA)?
                    </button>
                </h2>
                <div id="collapse11" class="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        You can activate 2FA under the ‘Security’ tab on your Dashboard to strengthen your account’s safety.
                    </div>
                </div>
            </div>
            
             <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="heading12">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                        How do I update my password?
                    </button>
                </h2>
                <div id="collapse12" class="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        You can change your password anytime from the "Edit Account" tab on your Dashboard.
                    </div>
                </div>
            </div>
            
             <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="heading13">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                        How can I update my email address?
                    </button>
                </h2>
                <div id="collapse13" class="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        To change your email, please reach out to our Help Team via Telegram for assistance.
                    </div>
                </div>
            </div>

            <!-- Risk Management -->
            <div class="accordion-item bento-card mb-3">
                <h2 class="accordion-header mb-0" id="heading14">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                        Can I lose money?
                    </button>
                </h2>
                <div id="collapse14" class="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        All high-yield investment programs come with a certain level of risk. That said, there are a few practical steps you can take to help minimize the chance of losing more than you're comfortable with. One key approach is to match your investments with your financial timeline — avoid using funds you may need in the near future for high-risk strategies. Instead, reserve those types of investments for money you're aiming to grow over the long term.<br>
                        It's also important to understand that we are professional traders, and the funds entrusted to us are placed into major, carefully selected investment opportunities.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="cta-section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card bento-card featured text-center">
                    <div class="card-body">
                        <h2>Still Have <span class="gradient-text">Questions?</span></h2>
                        <p class="lead mt-3 mb-4">Our support team is here to help you 24/7</p>
                        <div class="cta-buttons">
                            <a href="?a=support" class="button">Contact Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@include('layouts.mainsite.footer')


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
crossorigin="anonymous"></script>
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


</body>

</html>