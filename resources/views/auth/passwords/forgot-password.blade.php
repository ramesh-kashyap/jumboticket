
 @include('layouts.mainsite.header')

<div class="hero">
    <div class="container text-center">
        <h1 style="null">Reset Your <span class="gradient-text">Password</span></h1>
        <p class="lead mt-4 mb-5" style="color: rgba(255, 255, 255, 0.9); max-width: 600px; margin: 0px auto; translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">
            Don't worry! Enter your email address and we'll help you recover your account
        </p>
    </div>
</div>

<section class="unique-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-5">
                <div class="card bento-card" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
                    <div class="card-body p-4">
                        
                        <script language="javascript">
                        function checkform() {
                            if (document.forgotform.email.value == '') {
                                alert("Please type your username or email!");
                                document.forgotform.email.focus();
                                return false;
                            }
                            return true;
                        }
                        </script>
                        


                                    <form method="post" action="{{route('forgot_submit')}}" name="forgotform" onsubmit="return checkform();" class="forgot-form">
                                    {{ csrf_field() }}

                                    <input type="hidden" name="form_id" value="17473928934359"><input type="hidden" name="form_token" value="82efdaf5902c747ed5213ab73066543a">
                                    <input type="hidden" name="a" value="forgot_password">
                                    <input type="hidden" name="action" value="forgot_password">
                                    
                                    <div class="form-group mb-4">
                                        <label class="mb-2"> Email Address</label>
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class="bx bx-envelope"></i>
                                            </span>
                                            <input type="text" name="email" value="" class="form-control" placeholder="Enter your email" autofocus="autofocus" fdprocessedid="ehwrdw">
                                        </div>
                                    </div>

                                    

                                    <div class="d-grid mt-4">
                                        <button type="submit" class="button" fdprocessedid="vmhkae">Reset Password</button>
                                    </div>
                                </form>
    @include('partials.notify')

                                <div class="text-center mt-4">
                                    <p style="color: rgba(255, 255, 255, 0.7);">
                                        Remembered your password? 
                                        <a href="{{route('login')}}"  class="themed-link">Sign in here</a>
                                    </p>
                                </div>
                                                                        </div>
                </div>

                            </div>
        </div>
    </div>
</section>

                          @include('layouts.mainsite.footer')


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>
<script src="js/gsap.min.js"></script>
<script src="js/ScrollTrigger.min.js"></script>
<script src="js/SplitText.min.js"></script>
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
<script src="js/app.js"></script>


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





<span id="PING_IFRAME_FORM_DETECTION" style="display: none;"></span></body></html>