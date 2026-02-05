
                          @include('layouts.mainsite.header')

      <!-- === Hero Section (Similar structure, unique text) === -->
     <section id="about-hero" class="hero">
  <div class="container text-center">
      <h1>
          The Story Behind <span class="gradient-text">LeoNexusX</span>
      </h1>
      <p class="lead mt-4 mb-5" style="color: rgba(255, 255, 255, 0.9); max-width: 800px; margin: 0 auto;">
          Discover the vision, values, and innovation that shape LeoNexusX as a modern digital platform built for growth, trust, and long-term impact.
      </p>
  </div>
</section>
<section id="genesis" class="genesis-section unique-section">
  <div class="container">
      <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="genesis-image-container">
                  <img src="{{asset('')}}assets/images/about.jpg" alt="LeoNexusX Vision" class="img-fluid">
                  <div class="genesis-overlay-shape"></div> 
              </div>
          </div>
          <div class="col-lg-6">
              <h2 class="mb-3">Built with Purpose</h2>
              <p class="text-white mb-4" style="color: #a7b4ff;">
                  LeoNexusX was created with a simple idea — to design a reliable digital ecosystem where users can connect, manage, and grow through smart tools and transparent systems.
              </p>
              <p>
                  Our platform focuses on simplicity, performance, and user experience. Every feature is designed to be intuitive, secure, and scalable, helping individuals and teams move forward with confidence in a fast-changing digital world.
              </p>
              <a href="{{route('about-us')}}" class="button mt-3">Explore Our Vision</a>
          </div>
      </div>
  </div>
</section>
<section id="mission-vision" class="mission-vision-section unique-section light-bg-overlay"> 
  <div class="container">
      <h2 class="text-center mb-5">Our Direction</h2>
      <div class="row g-4 justify-content-center">

          <div class="col-md-6 col-lg-5">
              <div class="bento-card h-100 text-center featured"> 
                  <div class="card-icon mx-auto"> 
                      <i class='bx bx-pyramid'></i>
                  </div>
                  <div class="card-body p-0 pt-3">
                      <h3>Mission</h3>
                      <p>
                          To deliver a powerful, transparent, and user-focused digital platform that supports growth through technology and trust.
                      </p>
                  </div>
              </div>
          </div>

          <div class="col-md-6 col-lg-5">
              <div class="bento-card h-100 text-center"> 
                  <div class="card-icon mx-auto">
                      <i class='bx bxs-pyramid' style='color:#ffffff'></i>
                  </div>
                  <div class="card-body p-0 pt-3">
                      <h3>Vision</h3>
                      <p>
                          To become a globally recognized digital brand known for reliability, innovation, and long-term value creation.
                      </p>
                  </div>
              </div>
          </div>

      </div>
  </div>
</section>
<section id="approach" class="approach-section unique-section">
  <div class="container">
      <h2 class="text-center mb-5">How LeoNexusX Works</h2>
      <div class="row g-5 align-items-center">

          <div class="col-lg-6 approach-item">
              <div class="approach-icon">
                  <i class='bx bxs-check-shield' style='color:#ffffff'></i>
              </div>
              <div class="approach-content">
                  <h4>Secure Foundation</h4>
                  <p>Built with modern security standards to ensure data protection and platform reliability.</p>
              </div>
          </div>

          <div class="col-lg-6 approach-item">
              <div class="approach-icon">
                  <i class='bx bx-data' style='color:#ffffff'></i>
              </div>
              <div class="approach-content">
                  <h4>Smart Technology</h4>
                  <p>Powered by intelligent systems that simplify processes and improve overall efficiency.</p>
              </div>
          </div>

          <div class="col-lg-6 approach-item">
              <div class="approach-icon">
                  <i class='bx bxs-user-rectangle' style='color:#ffffff'></i>
              </div>
              <div class="approach-content">
                  <h4>User-Centered Design</h4>
                  <p>Every feature is designed to be easy to use, responsive, and accessible for everyone.</p>
              </div>
          </div>

          <div class="col-lg-6 approach-item">
              <div class="approach-icon">
                  <i class='bx bx-file-find' style='color:#ffffff'></i>
              </div>
              <div class="approach-content">
                  <h4>Clear Transparency</h4>
                  <p>Open processes, clear information, and consistent communication at every step.</p>
              </div>
          </div>

      </div>
  </div>
</section>
<section id="roadmap" class="roadmap-section unique-section light-bg-overlay">
  <div class="container">
      <h2 class="text-center mb-5">What’s Ahead</h2>
      <div class="roadmap-timeline">

          <div class="roadmap-item">
              <div class="roadmap-point"></div>
              <div class="roadmap-content bento-card">
                  <h5>Platform Enhancements</h5>
                  <p>Improved dashboards, performance upgrades, and smarter user controls.</p>
              </div>
          </div>

          <div class="roadmap-item">
              <div class="roadmap-point"></div>
              <div class="roadmap-content bento-card">
                  <h5>Feature Expansion</h5>
                  <p>Introducing new tools to support collaboration and digital growth.</p>
              </div>
          </div>

          <div class="roadmap-item">
              <div class="roadmap-point"></div>
              <div class="roadmap-content bento-card">
                  <h5>Mobile Experience</h5>
                  <p>Launching a fast, secure, and user-friendly mobile application.</p>
              </div>
          </div>

          <div class="roadmap-item future">
              <div class="roadmap-point"></div>
              <div class="roadmap-content bento-card">
                  <h5>Global Reach</h5>
                  <p>Scaling LeoNexusX to serve a wider international audience.</p>
              </div>
          </div>

      </div>
  </div>
</section>
<section id="cta" class="cta-section">
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-lg-10">
              <div class="bento-card featured text-center">
                  <h2>Join LeoNexusX Today</h2>
                  <p class="lead mt-3 mb-4" style="color: rgba(255, 255, 255, 0.8);">
                      Step into a modern digital platform designed for clarity, growth, and long-term success.
                  </p>
                  <div class="cta-buttons">
                      <a href="{{route('register')}}" class="button">Get Started</a>
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