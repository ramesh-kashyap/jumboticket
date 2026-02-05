@include('layouts.mainsite.header')

<div class="hero">
    <div class="container text-center">
        <h1>Create an <span class="gradient-text">Account</span></h1>
        <p class="lead mt-4 mb-5" style="color: rgba(255, 255, 255, 0.9); max-width: 600px; margin: 0 auto;">
            Join leonexus.live and start your investment journey today
        </p>
    </div>
</div>

<section class="unique-section">
    <div class="container">

        <script language=javascript>
            function checkform() {
                if (document.regform.fullname.value == '') {
                    alert("Please enter your full name!");
                    document.regform.fullname.focus();
                    return false;
                }


                if (document.regform.username.value == '') {
                    alert("Please enter your username!");
                    document.regform.username.focus();
                    return false;
                }
                if (!document.regform.username.value.match(/^[A-Za-z0-9_\-]+$/)) {
                    alert("For username you should use English letters and digits only!");
                    document.regform.username.focus();
                    return false;
                }
                if (document.regform.password.value == '') {
                    alert("Please enter your password!");
                    document.regform.password.focus();
                    return false;
                }
                if (document.regform.password.value != document.regform.password2.value) {
                    alert("Please check your password!");
                    document.regform.password2.focus();
                    return false;
                }


                if (document.regform.email.value == '') {
                    alert("Please enter your e-mail address!");
                    document.regform.email.focus();
                    return false;
                }
                if (document.regform.email.value != document.regform.email1.value) {
                    alert("Please retype your e-mail!");
                    document.regform.email.focus();
                    return false;
                }

                for (i in document.regform.elements) {
                    f = document.regform.elements[i];
                    if (f.name && f.name.match(/^pay_account/)) {
                        if (f.value == '') continue;
                        var notice = f.getAttribute('data-validate-notice');
                        var invalid = 0;
                        if (f.getAttribute('data-validate') == 'regexp') {
                            var re = new RegExp(f.getAttribute('data-validate-regexp'));
                            if (!f.value.match(re)) {
                                invalid = 1;
                            }
                        } else if (f.getAttribute('data-validate') == 'email') {
                            var re = /^[^\@]+\@[^\@]+\.\w{2,4}$/;
                            if (!f.value.match(re)) {
                                invalid = 1;
                            }
                        }
                        if (invalid) {
                            alert('Invalid account format. Expected ' + notice);
                            f.focus();
                            return false;
                        }
                    }
                }

                if (document.regform.agree.checked == false) {
                    alert("You have to agree with the Terms and Conditions!");
                    return false;
                }

                return true;
            }

            function IsNumeric(sText) {
                var ValidChars = "0123456789";
                var IsNumber = true;
                var Char;
                if (sText == '') return false;
                for (i = 0; i < sText.length && IsNumber == true; i++) {
                    Char = sText.charAt(i);
                    if (ValidChars.indexOf(Char) == -1) {
                        IsNumber = false;
                    }
                }
                return IsNumber;
            }

        </script>


        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card bento-card">
                    <div class="card-body p-4">

                        <form method="post" action="{{ route('registers') }}" name="regform">
                           @csrf

                                            @php
                                            $sponsor = @$_GET['ref'];
                                               $name = \App\Models\User::where('username', $sponsor)->first();
                                          @endphp


                            <div class="row g-4">

                                <div class="col-12">
                                    <h4 class="mb-4">Personal Information</h4>
                                </div>

                                        <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="mb-2">Referral code</label>
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class='bx bx-user-circle'></i>
                                            </span>
                                            <input type="text" name="sponsor" value="{{$sponsor}}"  data-response="sponsor_res"  class="form-control check_sponsor_exist"
                                                placeholder="Referral code">
                                                 
                                        </div>
                                          <span id="sponsor_res"> <?=($name)?$name->name:"";?></span>
                                    </div>
                                </div>
                               
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="mb-2">Full Name</label>
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class='bx bx-user'></i>
                                            </span>
                                            <input type="text" name="name" value="" class="form-control"
                                                placeholder="Enter your full name">
                                        </div>
                                    </div>
                                </div>
  
                                        
                                
                               


<!-- 
                                <div class="col-12">
                                    <h4 class="mb-4 mt-4">Contact Information</h4>
                                </div> -->

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="mb-2">Email Address</label>
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class='bx bx-envelope'></i>
                                            </span>
                                            <input type="email" name="email" value="" class="form-control"
                                                placeholder="Enter your email">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="mb-2">Phone</label>
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class='bx bx-envelope'></i>
                                            </span>
                                            <input type="number" name="phone" value="" class="form-control"
                                                placeholder="Enter your phone">
                                        </div>
                                    </div>
                                </div>
                                 <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="mb-2">Password</label>
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class='bx bx-lock-alt'></i>
                                            </span>
                                            <input type="password" name="password" value="" class="form-control"
                                                placeholder="Create password">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="mb-2">Confirm Password</label>
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class='bx bx-lock'></i>
                                            </span>
                                            <input type="password" name="password_confirmation" value="" class="form-control"
                                                placeholder="Confirm password">
                                        </div>
                                    </div>
                                </div>
                          
<!-- 
                                <div class="col-12">
                                    <h4 class="mb-4 mt-4">Referral Information</h4>
                                    <div class="alert alert-info d-flex align-items-center">
                                        <i class='bx bx-user-plus me-2' style="font-size: 1.2rem;"></i>
                                        Your Upline: <strong class="ms-2">N/A (n/a)</strong>
                                    </div>
                                </div> -->

                                <div class="col-12 mt-4">

                                </div>


                                <div class="col-12 mt-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="agree" value="1"
                                            id="agreeTerms">
                                        <label class="form-check-label" for="agreeTerms">
                                            I agree with the <a href="{{route('faq')}}" class="themed-link">Terms and
                                                Conditions</a>
                                        </label>
                                    </div>
                                </div>


                                <div class="col-12 mt-4">
                                    <button type="submit" class="button w-100">Create Account</button>
                                </div>
                            </div>
                        </form>

                        <div class="text-center mt-4">
                            <p style="color: rgba(255, 255, 255, 0.7);">
                                Already have an account?
                                <a href="{{route('login')}}" class="themed-link">Sign in here</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


 <script src="https://code.jquery.com//jquery-3.3.1.min.js"></script>
                        <script>
                    
                            $('.check_sponsor_exist').keyup(function(e) {
                                var ths = $(this);
                                var res_area = $(ths).attr('data-response');
                                var sponsor = $(this).val();
                                // alert(sponsor); 
                                $.ajax({
                                    type: "POST"
                                    , url: "{{ route('getUserName') }}"
                                    , data: {
                                        "user_id": sponsor
                                        , "_token": "{{ csrf_token() }}"
                                    , }
                                    , success: function(response) {
                                        // alert(response);      
                                        if (response != 1) {
                                            // alert("hh");
                                            $(".submit-btn").prop("disabled", false);
                                            $('#' + res_area).html(response).css('color', '#fff').css('font-weight', '800')
                                                .css('margin-buttom', '10px');
                                        } else {
                                            // alert("hi");
                                            $(".submit-btn").prop("disabled", true);
                                            $('#' + res_area).html("Sponsor ID Not exists!").css('color', 'red').css(
                                                'margin-buttom', '10px');
                                        }
                                    }
                                });
                            });
                    
                        </script>



@include('layouts.mainsite.footer')
@include('partials.notify')

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous">
</script>
<script src="{{asset('')}}assets/js/gsap.min.js"></script>
<script src="{{asset('')}}assets/js/ScrollTrigger.min.js"></script>
<script src="{{asset('')}}assets/js/SplitText.min.js"></script>
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
<script src="{{asset('')}}assets/js/app.js"></script>


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
                if (preloaderContainer.style.opacity === '0' || getComputedStyle(preloaderContainer)
                    .opacity === '0') {
                    preloaderContainer.style.display = 'none'; // Or preloaderContainer.remove();
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
            if (preloaderContainer.style.opacity === '0' || getComputedStyle(preloaderContainer).opacity ===
                '0') {
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
