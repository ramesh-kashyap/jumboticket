                          @include('layouts.mainsite.header')

<div class="hero">
    <div class="container text-center">
        <h1><span class="gradient-text">Help Team</span></h1>
        <p class="lead mt-4 mb-5" style="color: rgba(255, 255, 255, 0.9); max-width: 800px; margin: 0 auto;">
            Our specialists are available 24/7 to assist you with any questions.
        </p>
    </div>
</div>

<section class="unique-section">
    <div class="container">
                <div class="row g-4">
            <!-- Contact Information -->
            <div class="col-lg-4">
                <div class="card bento-card h-100">
                    <div class="card-body">
                        <h3 class="mb-4">Get in Touch</h3>
                        
                        <div class="contact-info">
                            <div class="contact-item mb-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class='bx bx-envelope me-3' style="font-size: 1.5rem; color: #72a1de"></i>
                                    <h5 class="mb-0">Email Support</h5>
                                </div>
                                <p class="mb-0" style="color: rgba(255, 255, 255, 0.8)">
                                    info@helixfund.live
                                </p>
                            </div>

                            <div class="contact-item mb-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class='bx bx-time-five me-3' style="font-size: 1.5rem; color: #72a1de"></i>
                                    <h5 class="mb-0">Response Time</h5>
                                </div>
                                <p class="mb-0" style="color: rgba(255, 255, 255, 0.8)">
                                    Within 24 hours
                                </p>
                            </div>

                            <div class="contact-item">
                                <div class="d-flex align-items-center mb-3">
                                    <i class='bx bx-chat me-3' style="font-size: 1.5rem; color: #72a1de"></i>
                                    <h5 class="mb-0">Live Chat</h5>
                                </div>
                                <p class="mb-0" style="color: rgba(255, 255, 255, 0.8)">
                                    Need Help? Contact Us <br>
                                    <a href="#" target="_blank" style="    width: 35px;
    height: 35px;
    position: relative;
    display: grid
;
    background-color: #080013;
    place-content: center;
    border: solid 0.5px white;
    border-radius: 50px;
    text-decoration: none;
    color: white;
    margin-top:10px;"><i class="bx bxl-telegram"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Support Form -->
            <div class="col-lg-8">
                <div class="card bento-card">
                    <div class="card-body">
                        <h3 class="mb-4">Send us a Message</h3>

                        <script language=javascript>
                                                
                        function checkform() {
                            if (document.mainform.name.value == '') {
                                alert("Please type your full name!");
                                document.mainform.name.focus();
                                return false;
                            }
                            if (document.mainform.email.value == '') {
                                alert("Please enter your e-mail address!");
                                document.mainform.email.focus();
                                return false;
                            }
                            if (document.mainform.message.value == '') {
                                alert("Please type your message!");
                                document.mainform.message.focus();
                                return false;
                            }
                            return true;
                        }
                        
                                                </script>

                        <form method=post name=mainform onsubmit="return checkform()" class="support-form"><input type="hidden" name="form_id" value="17471230744561"><input type="hidden" name="form_token" value="8d9d24282aa8aa6ea489cceb1a9cfd27">
                            <input type=hidden name=a value=support>
                            <input type=hidden name=action value=send>

                            
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="mb-2">Your Name</label>
                                                                                <input type="text" name="name" value="" class="form-control" placeholder="Enter your full name">
                                                                            </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="mb-2">Your Email</label>
                                                                                <input type="email" name="email" value="" class="form-control" placeholder="Enter your email">
                                                                            </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="mb-2">Message</label>
                                        <textarea name="message" class="form-control" rows="5" placeholder="Type your message here..."></textarea>
                                    </div>
                                </div>

                                <div class="col-12">
                                    
                                </div>

                                <div class="col-12">
                                    <button type="submit" class="button">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            </div>
</section>

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
