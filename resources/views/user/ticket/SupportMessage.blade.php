

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

            <span class="navbar-brand text-capitalize text-white mb-0 h1 d-none d-sm-inline-block">Generate Ticket</span>

           <ul class="navbar-nav ms-auto">
                <li class="nav-item mb-0 dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownUser" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-user-circle fa-lg me-1"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownUser">
                        <li><a class="dropdown-item" href="{{route('user.GenerateTicket')}}"><i
                                    class="fas fa-headset fa-fw me-2"></i>Support</a></li>
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
            <div class="col-md-12 mb-3">
                <div class="card">
                    <div class="card-header">
                        <h3>Generate Ticket</h3>
                    </div>
                    <div class="table-responsive">

                     <table  id="example" class="table table-bordered table-striped"  >
                                    <thead>
                                    <tr>
                                        <th class="wd-15p">#S.NO</th>
                                                <th>Ticket No</th>
                                                <th>Category</th>
                                                <th>Request Date</th>
                                                <!--<th>Closing Date</th>-->
                                                <th>Status</th>
                                                <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php if(is_array($level_income) || is_object($level_income)){ ?>

                                        <?php $cnt =$level_income->perPage() * ($level_income->currentPage() - 1); ?>
                                        @foreach($level_income as $value)
                                            <tr>
                                                <td><?= $cnt += 1?></td>

                                                <!--<td>{{ $value->user_id_fk }}</td>-->
                                                <td>{{ $value->ticket_no }}</td>
                                                <td>{{ $value->category }}</td>
                                                <td>{{ $value->gen_date }}</td>
                                                <!--<td>{{ $value->closing_date }}</td>-->
                                                <?php if($value->status=="1"){$color="red";}else{$color="green";}?>
                                                <td style="color:<?=@$color?>;font-weight:700">
                                                    {{ ($value->status)?"Closed":"Open" }}
                                                </td>
                                                <td><a
                                                        href="{{ route('user.ViewMessage') }}?ticket_no={{ $value->ticket_no }}"><button
                                                            style="color:#000;border:1px solid #000;padding:8px;border-radius:15px">View
                                                            all message</button></a></td>

                                            </tr>
                                        @endforeach

                                        <?php }?>
    
                                </tbody>
                                    </table>
                                                    </div>

                                    <br>
                </div>
            </div>
           


</div>
<div class="offcanvas offcanvas-start text-white d-md-none" tabindex="-1" id="mobileMenu"
    aria-labelledby="mobileMenuLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="mobileMenuLabel">Menu</h5>
        <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <ul class="nav nav-pills flex-column">
            <li class="nav-item">
                <a href="?a=account" class="nav-link text-white">
                    <i class="fas fa-user fa-fw me-2"></i>Account
                </a>
            </li>
            <li class="nav-item">
                <a href="?a=deposit" class="nav-link text-white">
                    <i class="fas fa-download fa-fw me-2"></i>Deposit
                </a>
            </li>
            <li class="nav-item">
                <a href="?a=withdraw" class="nav-link text-white">
                    <i class="fas fa-upload fa-fw me-2"></i>Withdraw
                </a>
            </li>
            <li class="nav-item">
                <a href="?a=deposit_list" class="nav-link text-white">
                    <i class="fas fa-list-alt fa-fw me-2"></i>Deposit List
                </a>
            </li>
            <li class="nav-item">
                <a href="?a=history" class="nav-link text-white">
                    <i class="fas fa-history fa-fw me-2"></i>History
                </a>
            </li>
            <li class="nav-item">
                <a href="?a=referals" class="nav-link text-white">
                    <i class="fas fa-users fa-fw me-2"></i>Referrals
                </a>
            </li>
            <li class="nav-item">
                <a href="?a=referallinks" class="nav-link text-white">
                    <i class="fas fa-link fa-fw me-2"></i>Banners
                </a>
            </li>
            <li class="nav-item">
                <a href="?a=security" class="nav-link text-white">
                    <i class="fas fa-shield-alt fa-fw me-2"></i>Security
                </a>
            </li>
            <li class="nav-item">
                <a href="?a=edit_account" class="nav-link text-white">
                    <i class="fas fa-user-edit fa-fw me-2"></i>Edit Account
                </a>
            </li>
            <li class="nav-item mt-auto">
                <a href="?a=logout" class="nav-link text-warning">
                    <i class="fas fa-sign-out-alt fa-fw me-2"></i>Logout
                </a>
            </li>
        </ul>
    </div>
</div>
@include('partials.notify')

<script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
</script>
<script src="{{asset('')}}assets/js/dash.js"></script>


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
