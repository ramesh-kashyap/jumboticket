<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

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

            <span class="navbar-brand text-capitalize text-white mb-0 h1 d-none d-sm-inline-block">compounding</span>

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
    <!-- <div class="top-video">
            <video class="top" src="video/top.mp4" type="video/mp4" muted autoplay loop plays-inline poster="video/poster.png"></video>
        </div> -->



    <script language="javascript">
        function openCalculator(id) {
            w = 225;
            h = 400;
            t = (screen.height - h - 30) / 2;
            l = (screen.width - w - 30) / 2;
            window.open('?a=calendar&type=' + id, 'calculator' + id, "top=" + t + ",left=" + l + ",width=" + w +
                ",height=" + h + ",resizable=1,scrollbars=0");


            for (i = 0; i < document.spendform.h_id.length; i++) {
                if (document.spendform.h_id[i].value == id) {
                    document.spendform.h_id[i].checked = true;
                }
            }


        }

        function updateCompound() {
            var id = 0;
            var tt = document.spendform.h_id.type;
            if (tt && tt.toLowerCase() == 'hidden') {
                id = document.spendform.h_id.value;
            } else {
                for (i = 0; i < document.spendform.h_id.length; i++) {
                    if (document.spendform.h_id[i].checked) {
                        id = document.spendform.h_id[i].value;
                    }
                }
            }

            var cpObj = document.getElementById('compound_percents');
            if (cpObj) {
                while (cpObj.options.length != 0) {
                    cpObj.options[0] = null;
                }
            }

            if (cps[id] && cps[id].length > 0) {
                document.getElementById('compound_block').style.display = '';
                for (i in cps[id]) {
                    cpObj.options[cpObj.options.length] = new Option(cps[id][i]);
                }
            } else {
                document.getElementById('compound_block').style.display = 'none';
            }
        }

        var cps = {};

        function validateForm() {
            var amount = document.spendform.amount.value;
            if (isNaN(amount) || amount <= 0) {
                alert('Please enter a valid amount to deposit');
                return false;
            }
            return true;
        }

    </script>
<form method="POST" action="">
    @csrf

    <div class="row mt-3">
        <div class="col-md-6 mb-3">
          <div class="card">
    <div class="card-header">
        <h3>Deposit in Compounding</h3>
    </div>
    <div class="card-body" id="compoundingFormWrapper">
    @csrf
    <div class="mb-3">
        <label>Enter Amount</label>
        <input type="number" id="amount" class="form-control" required min="10" placeholder="Minimum $10">
        <p id="error" style="color:red"></p>
    </div>

    <div class="mb-3">
        <label>Payment Mode</label>
        <input type="text" id="PSys" value="USDT.BEP20" readonly class="form-control">
    </div>

    <div class="mb-3">
        <label>Select Compounding Duration</label>
        <select id="duration" class="form-control" required>
             <option value="">Select Months</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="9">9 Months</option>
            <option value="12">12 Months</option>
        </select>
    </div>

    <div class="text-center">
            <input type="button"  onclick="submitCompounding()" value="Submit" class="sbmt btn btn-primary submit-btn"> 
    </div>
    
    <div id="loading" class="text-center mt-3" style="display: none;">
    <span class="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></span>
    <span class="text-light ms-2">Processing, please wait...</span>
</div>
</div>
</form>


<div class="card-body text-center" id="depositCompoundingBox" style="display:none;"></div>
    
</div>
        </div>
        
          <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-header">
                        <h3>Transfer in Compounding</h3>
                    </div>
                    
                    <div class="card-body">
                          <form method="POST" action="{{ route('compounding.transfer') }}">
            @csrf
                        <p><strong>Available Balance : </strong> $ {{number_format(Auth::user()->available_balance(),2)}}</p>
                        <div class="mb-3">
                            <label>Enter Amount</label>
                            <input type="text" name="amount" value="" placeholder="Enter Amount"  class="form-control" >
                            
                            <p id="error" style="color:red"></p>
                        </div>
                       <div class="mb-3">
                        <label>Select Compounding Duration</label>
                        <select  name="duration" class="form-control" required>
                            <option value="">Select Months</option>
                            <option value="3">3 Months</option>
                            <option value="6">6 Months</option>
                            <option value="9">9 Months</option>
                            <option value="12">12 Months</option>
                        </select>
                    </div>
                      
                     
                                    
                                    <div class="text-center">
                                      
                                         <input type="submit" value="Submit" class="sbmt btn btn-primary submit-btn">
                                            
                                         
                                    </div>
                                     </form>

                    </div>
                </div>
            </div>
            
            
            <div class="d-flex justify-content-between align-items-center mb-3">

    <form action="{{ route('user.DepositHistory') }}" method="GET" class="d-flex ms-auto" style="width: 300px;">
        <div class="input-group">
            <input type="text" name="search" class="form-control" placeholder="Search..." value="{{ request('search') }}">
            <button class="btn btn-outline-secondary" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </form>
</div>
   <div class="row g-3">
    @forelse($deposit_list as $deposit)
        <div class="col-md-6">
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <div>
                            <h5 class="mb-1">{{ $deposit->active_from}}</h5>
                           <div class="small {{ $deposit->status == 'Active' ? 'text-success' : 'text-white' }}">
                            {{ $deposit->plan}} Months
                        </div>

                        </div>
                        <div class="text-end">
                            <div class="d-flex align-items-center justify-content-end">
                                <h4 class="mb-0 me-2">${{ number_format($deposit->amount, 2) }}</h4>
                                <img src="{{ asset('assets/images/102.png') }}" height="17">
                            </div>
                            <small>{{ \Carbon\Carbon::parse($deposit->created_at)->format('M-d-Y h:i:s A') }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @empty
        <div class="col-12">
                No Deposit data found.
        </div>
    @endforelse
</div>

            
    </div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
function submitCompounding() {
    let amount = $('#amount').val();
    let PSys = $('#PSys').val();
    let duration = $('#duration').val();

    if (amount < 10) {
        $('#error').text("Minimum amount is $10.");
        return;
    }
     if (duration=="") {
        $('#error').text("Select Valid Duration.");
        return;
    }
    
     $('#loading').show(); // ✅ show loading

    $.ajax({
        url: "{{ route('compounding.deposit') }}",
        method: "POST",
        data: {
            _token: $('meta[name="csrf-token"]').attr('content'),
            amount: amount,
            PSys: PSys,
            duration: duration
        },
        success: function(response) {
            if(response.address_in) {
                 $('#loading').hide(); // ✅ hide loading on success
            $('#compoundingFormWrapper').hide(); // ✅ Hide form on success
                let html = `
                    <div class="card-body text-center">
                        <div class="mb-4">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(response.address_in)}" alt="QR Code" style="max-width: 200px;">
                        </div>
                        <div class="d-flex justify-content-center align-items-center mb-3">
                            <div class="form-control d-flex align-items-center" id="walletAddressText" style="overflow-x: auto; white-space: nowrap;">
                                <span style="flex: 1;">${response.address_in}</span>
                                <span onclick="copyWalletAddress('${response.address_in}')" style="cursor: pointer; font-size: 1.5rem; color:rgb(212, 220, 230); margin-left: 10px;">
                                    <i class="fas fa-copy"></i>
                                </span>
                            </div>
                        </div>
                        <div class="card mt-4" style="background-color: #06080b;">
                            <div class="card-body text-start p-3">
                                <h5 class="mb-2" style="background: linear-gradient(to right, #ffffff, #c979ff, #d6c507, #c1ff28, #b47606, #ff8e01, #ffffff); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">Compounding Rules</h5>
                                <ul class="mb-0 ps-3" style="font-size: 0.9rem; color: #ffff;">
                                    <li><strong>Minimum Deposit:</strong> $10</li>
                                    <li><strong>Payment Method:</strong> USDT (BEP20) only</li>
                                    <li><strong>Important:</strong> Please select the <strong>BEP20</strong> network when sending USDT.</li>
                                    <li class="text-danger">Sending funds via any other network may result in permanent loss of your funds.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
                $('#depositCompoundingBox').html(html).show();
            } else {
                $('#error').text('Something went wrong. Try again.');
            }
        },
        error: function(xhr) {
            $('#error').text('Error occurred. Please try again.');
        }
    });
}

function copyWalletAddress(address) {
    navigator.clipboard.writeText(address).then(() => {
        alert('Wallet address copied!');
    });
}
</script>

<!-- JS for Copy Button -->




    <script>
        document.addEventListener('DOMContentLoaded', function () {
            updateCompound();
        });

    </script>


</div>
    @include('partials.notify')

@include('layouts.upnl.sidebar')


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

</body>

</html>
