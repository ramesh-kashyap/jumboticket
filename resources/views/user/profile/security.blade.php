

        <div id="main-content" class="flex-grow-1 m-3">
            <nav class="navbar navbar-expand-lg sticky-top shadow-sm main-header">
                <div class="container-fluid">
                    <button class="btn btn-outline-secondary d-md-none me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                        <i class="fas fa-bars"></i>
                    </button>

                    <button id="sidebarToggle" class="btn btn-outline-secondary d-none d-md-inline-block me-3">
                        <i class="fas fa-bars"></i>
                    </button>

                    <span class="na vbar-brand text-capitalize text-white mb-0 h1 d-none d-sm-inline-block">security</span>

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
            

<div class="row mt-3">
  <div class="col-md-6 mb-3">
    <div class="card h-100">
      <div class="card-header">
        <h3>Security Settings</h3>
      </div>
      <div class="card-body">
        <form method=post style="    display: flex; flex-direction: column; justify-content: space-between; align-items: center; height: 100%;"><input type="hidden" name="form_id" value="17471376809320"><input type="hidden" name="form_token" value="43890bf0aeefd2e671690a5d16a61e83">
          <input type=hidden name=a value="security">
          <input type=hidden name=action value="save">
          <p class="text-center">Detect IP Address Change Sensitivity</p>
          
          <div class="d-flex flex-wrap justify-content-center align-items-center">
            <div class="d-flex gap-2 align-items-center">
              <input type=radio class="input" id="Disabled" name=ip value=disabled
                >
              <label for="Disabled">Disabled</label>
            </div>
            <div class="d-flex gap-2 align-items-center">
              <input type=radio class="input" id="Medium" name=ip value=medium
                >
              <label for="Medium">Medium</label>
            </div>
            <div class="d-flex gap-2 align-items-center">
              <input type=radio class="input" id="High" name=ip value=high
                checked>
              <label for="High">High</label>
            </div>
            <div class="d-flex gap-2 align-items-center">
              <input type=radio class="input" id="Paranoic" name=ip value=always
                >
              <label for="Paranoic">Paranoic</label>
            </div>
          </div>
            <br>
            <br>

          <p class="text-center">Detect Browser Change</p>
         
          <div class="d-flex flex-wrap justify-content-center align-items-center">
            <div class="d-flex gap-2 align-items-center">
              <input type=radio class="input" id="Disabled2" name=browser value=disabled
                checked>
              <label for="Disabled2">Disabled</label>
            </div>
            <div class="d-flex gap-2 align-items-center">
              <input type=radio class="input" id="Enabled" name=browser value=enabled
                >
              <label for="Enabled">Enabled</label>
            </div>
          </div>


          <input type=submit value="Set" class="sbmt mt-auto">
        </form>
      </div>
    </div>
  </div>
      <div class="col-md-6 mb-3">
      <div class="card h-100">
        <div class="card-header">
          <h3>Two Factor Authentication</h3>
        </div>
        <div class="card-body">

          <form method=post name=mainform><input type="hidden" name="form_id" value="17471376809320"><input type="hidden" name="form_token" value="43890bf0aeefd2e671690a5d16a61e83">
            <input type=hidden name=a value="security">
            <input type=hidden name=action value="tfa_save">
            <input type=hidden name=time>
                        
                          1. Install <a href="http://m.google.com/authenticator" target=_blank>Google Authenticator</a> on your mobile
              device.<br>
              2. Your Secret Code is: <b>JXM5EZWXB3FJTAQP</b>
              <input type=hidden name="tfa_secret" value="JXM5EZWXB3FJTAQP"><br>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=otpauth%3A%2F%2Ftotp%2Fhelixfund.live%3Fsecret%3DJXM5EZWXB3FJTAQP">
              3. Please enter two factor token from Google Authenticator to verify correct setup:<br>
              <input type=text name="code" class="form-control"> <input type=submit value="Enable" class="sbmt mt-2">
                      </form>


          
            <script language=javascript>
              document.mainform.time.value = (new Date()).getTime();

              function checkform() {
                if (!document.mainform.code.value.match(/^[0-9]{6}$/)) {
                alert("Please type code!");
                document.mainform.code.focus();
                return false;
              }
              return true;
              }
            </script>
          
        </div>
      </div>
    </div>
   
</div>







</div>
  @include('layouts.upnl.sidebar')
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="{{asset('')}}assets/js/dash.js"></script>
    

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