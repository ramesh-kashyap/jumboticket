                          @include('layouts.mainsite.header')

<section id="about-hero" class="hero">
    <div class="container text-center">
        <h1>
            The <span class="gradient-text">XYO</span> News
        </h1>
        <p class="lead mt-4 mb-5" style="color: rgba(255, 255, 255, 0.9); max-width: 800px; margin: 0 auto;">
            Follow our blog for lattest updates
        </p>
    </div>
</section>
<div class="container mb-5">
    



        
        <div class="row">
                            <div class="col-md-4 mb-3">
                    <div class="card overflow-hidden">
                <img src="https://Helix Fund.com/images/bonus.png" class="img-fluid">                        <div class="card-body">
                            <a href="?a=news&id=2" style="text-decoration: none; color:aliceblue; font-weight:600;">
                                <h3>Helix Fund Bounty Program Is Live — Get Rewarded for Your Activity!</h3>
                            </a>
                            <p>We’re excited to launch the Helix Fund Bounty Program, designed to reward our most active and engaged community members. Getting bonuses has never been easier — you only need to activate a deposit and share your experience!</p>
                            <p><small>May-7-2025 09:19:28 PM</small></p>
                        </div>
                    </div>
                </div>
                            <div class="col-md-4 mb-3">
                    <div class="card overflow-hidden">
                <img src="https://Helix Fund.com/images/launch.png" class="img-fluid">                        <div class="card-body">
                            <a href="?a=news&id=1" style="text-decoration: none; color:aliceblue; font-weight:600;">
                                <h3>Helix Fund Officially Launched!</h3>
                            </a>
                            <p>Helix Fund is now live! Start earning with hourly and daily investment plans, instant withdrawals, and a powerful affiliate program.</p>
                            <p><small>May-6-2025 01:51:55 PM</small></p>
                        </div>
                    </div>
                </div>
                    </div>
        <center>
            <ul class="pagination"><li class="page-item"><a class="prev page-link disabled">&lt;&lt;</a></li><li class="page-item active"><a class="page-link">1</a></li><li class="page-item"><a class="next page-link disabled">&gt;&gt;</a></li></ul>
        </center>
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