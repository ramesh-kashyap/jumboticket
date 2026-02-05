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

            <span class="navbar-brand text-capitalize text-white mb-0 h1 d-none d-sm-inline-block">Withdraw</span>

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





    <script language=javascript>
        function IsNumeric(sText) {
            var ValidChars = "0123456789.";
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

        function checkform() {
            if (document.editform.fullname.value == '') {
                alert("Please type your full name!");
                document.editform.fullname.focus();
                return false;
            }


            if (document.editform.password.value != document.editform.password2.value) {
                alert("Please check your password!");
                document.editform.fullname.focus();
                return false;
            }





            for (i in document.editform.elements) {
                f = document.editform.elements[i];
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

            return true;
        }

    </script>


    <form method="post" action="{{ route('user.Withdraw-Request') }}" >
        {{ csrf_field() }}

        <style>
            .error {
                width: 100%;
                padding: .5em;
                background-color: #440202;
                color: white;
                text-align: center;
                margin-top: 15px;
                border-radius: 15px;
            }

        </style>


        <div class="row mt-3">
            <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-header">
                        <h3>Withdraw</h3>
                    </div>
                    <div class="card-body">
                          <p><strong>Available Balance : </strong> $ {{number_format(Auth::user()->available_balance(),2)}}</p>
                          
                        <div class="mb-3">
                            <label>Enter Amount</label>
                            <input type="text" name="amount" value="" placeholder="Enter Amount"  class="form-control" >
                            
                            <p id="error" style="color:red"></p>
                        </div>
                       <div class="mb-3">
                            <label>Payment Mode</label>
                            <input type="text" name="PSys" value="USDT.BEP20" readonly class="form-control">
                      </div>
                       <div class="mb-3">
                            <label>Wallet Address</label>
                            <input type=text name="walletAddress"  value="{{Auth::user()->usdtBep20}}"  readonly placeholder="Wallet Address" class="form-control" size=30>
                        </div>
                        
                        <div class="mb-3">
                           <label>Enter Verification Code</label>
                                <div class="input-group">
                                 <input type="text" name="code" class="form-control" placeholder="Enter Code">
                                    <button id="otpButton" type="button" onclick="sendOtp()" style="border-radius: 4px;background: #11171f;border: 1px solid #333333;color: white;">
                                        Get Code
                                    </button>
                                                                   </div>
                                                            </div>
                                    
                                    
                                    <div class="text-center">
                                      
                                               <input type="submit" value="Submit" class="sbmt btn btn-primary submit-btn">
                                            
                                         
                                    </div>

                    </div>
                </div>
            </div>
           

    </form>
    @include('partials.notify')


</div>
@include('layouts.upnl.sidebar')
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
</script>
<script src="{{asset('')}}assets/js/dash.js"></script>


<script>
 $(function() {
    $('input[name="amount"]').on('change keyup', function () {
        let str = $(this).val();
        str = str.replace(',', '.');
        $(this).val(str);

        let min = 10;
        let balance = {{ Auth::user()->available_balance() }};
        let amount = parseFloat(str);

        if (isNaN(amount)) {
            $('#error').html('Please enter a valid number');
            $(".submit-btn").prop("disabled", true);
            return;
        }

        if (amount >= min) {
            if (amount % 1 !== 0) {
                $('#error').html('Amount must be a multiple of 1 USDT');
                $(".submit-btn").prop("disabled", true);
            } else if (balance >= amount) {
                $('#error').html('');
                $(".submit-btn").prop("disabled", false);
            } else {
                $('#error').html('Insufficient Balance');
                $(".submit-btn").prop("disabled", true);
            }
        } else {
            $('#error').html('Min withdrawal 10 USDT');
            $(".submit-btn").prop("disabled", true);
        }
    });
});



</script>

<script>
    function sendOtp() {
        // Disable button and start timer
        let button = document.getElementById('otpButton');
        button.disabled = true;

        let seconds = 60;
        button.innerText = `${seconds}s`;

        let countdown = setInterval(() => {
            seconds--;
            button.innerText = ` ${seconds}s`;

            if (seconds <= 0) {
                clearInterval(countdown);
                button.disabled = false;
                button.innerText = 'Resend';
            }
        }, 1000);

        // Send the OTP request
        fetch("{{ route('user.send-otp') }}", {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': '{{ csrf_token() }}',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
             notify('success', data.message); 
        })
        .catch(error => {
              notify('error', 'Error sending OTP'); // Show error toast
        });
    }
</script>


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

<!-- <script>
    function setWalletAddress(type) {
        const walletInput = document.getElementById('walletAddress');
        if (type === 'bep20') {
            walletInput.value = "{{ Auth::user()->usdtBep20 }}";
        } else if (type === 'trc20') {
            walletInput.value = "{{ Auth::user()->usdtTrc20 }}";
        }
    }
</script> -->

</body>

</html>
