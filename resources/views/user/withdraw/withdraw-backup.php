<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="images/favicon.png">
    <title>helixfund.live</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="style/dash.css">
    
  <style>
/* Your existing preloader styles */
@keyframes loader_5191 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.square {
  background: #ddd;
  width: 10px;
  height: 10px;
  position: absolute; /* These will be relative to .loader if .loader is positioned */
  top: 50%;
  left: 50%;
  margin-top: -5px;
  margin-left: -5px;
}

#sq1 { margin-top: -25px; margin-left: -25px; animation: loader_5191 675ms ease-in-out 0s infinite alternate; }
#sq2 { margin-top: -25px; animation: loader_5191 675ms ease-in-out 75ms infinite alternate; }
#sq3 { margin-top: -25px; margin-left: 15px; animation: loader_5191 675ms ease-in-out 150ms infinite alternate; } /* Added alternate for consistency */
#sq4 { margin-left: -25px; animation: loader_5191 675ms ease-in-out 225ms infinite alternate; }
#sq5 { animation: loader_5191 675ms ease-in-out 300ms infinite alternate; }
#sq6 { margin-left: 15px; animation: loader_5191 675ms ease-in-out 375ms infinite alternate; }
#sq7 { margin-top: 15px; margin-left: -25px; animation: loader_5191 675ms ease-in-out 450ms infinite alternate; }
#sq8 { margin-top: 15px; animation: loader_5191 675ms ease-in-out 525ms infinite alternate; }
#sq9 { margin-top: 15px; margin-left: 15px; animation: loader_5191 675ms ease-in-out 600ms infinite alternate; }




.preloader-container {
    position: fixed; /* Cover the entire viewport */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000; /* Or your desired background, e.g., #222 for dark */
    z-index: 9999; /* Ensure it's on top of everything */
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 0.5s ease-out, visibility 0s linear 0.5s; /* Fade out effect */
    visibility: visible;
}

/* This class will be added by JS to hide the preloader */
.preloader-container.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-out, visibility 0s linear 0.5s;
}

/* The .loader div that holds the squares.
   It needs to be relatively positioned for the absolute squares inside it. */
.loader {
    position: relative;
    width: 50px; /* Adjust as needed to contain your squares */
    height: 50px; /* Adjust as needed */
}

/* Make content visible after loading */
.content {
    padding: 20px;
}
  </style>
  
</head>
<body>
      <div class="preloader-container hidden" style="display: none;">
        <div class="loader">
            <div class="square" id="sq1"></div>
            <div class="square" id="sq2"></div>
            <div class="square" id="sq3"></div>
            <div class="square" id="sq4"></div>
            <div class="square" id="sq5"></div>
            <div class="square" id="sq6"></div>
            <div class="square" id="sq7"></div>
            <div class="square" id="sq8"></div>
            <div class="square" id="sq9"></div>
        </div>
    </div>
<video class="video-background" src="video/bg.mp4" type="video/mp4" muted="" autoplay="" loop="" plays-inline="" poster="video/poster2.png"></video>

    <div class="d-flex main-wrapper">
        <nav id="sidebar" class="text-white p-3 d-none d-md-flex flex-column">
            <div class="sidebar-header nav-item text-center mb-4">
                 <a href="?a=home" class="d-inline-block site-icon">
                 <img src="images/favicon.png" style="max-width: 48px; margin-left: 10px;">

                 </a>
                 <a href="?a=home" class="site-brand">helixfund.live</a>
            </div>

            <ul class="nav nav-pills flex-column flex-grow-1">
                <li class="nav-item">
                    <a href="?a=account" class="nav-link text-white" title="Account" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="fas fa-user fa-fw"></i><span class="sidebar-text ms-2">Account</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="?a=deposit" class="nav-link text-white" title="Deposit" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="fas fa-download fa-fw"></i><span class="sidebar-text ms-2">Deposit</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="?a=withdraw" class="nav-link text-white" title="Withdraw" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="fas fa-upload fa-fw"></i><span class="sidebar-text ms-2">Withdraw</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="?a=deposit_list" class="nav-link text-white" title="Deposit List" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="fas fa-list-alt fa-fw"></i><span class="sidebar-text ms-2">Deposit List</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="?a=history" class="nav-link text-white" title="History" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="fas fa-history fa-fw"></i><span class="sidebar-text ms-2">History</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="?a=referals" class="nav-link text-white" title="Referrals" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="fas fa-users fa-fw"></i><span class="sidebar-text ms-2">Referrals</span>
                    </a>
                </li>
                 <li class="nav-item">
                    <a href="?a=referallinks" class="nav-link text-white" title="Banners" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="fas fa-link fa-fw"></i><span class="sidebar-text ms-2">Banners</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="?a=security" class="nav-link text-white" title="Security" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="fas fa-shield-alt fa-fw"></i><span class="sidebar-text ms-2">Security</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="?a=edit_account" class="nav-link text-white" title="Edit Account" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="fas fa-user-edit fa-fw"></i><span class="sidebar-text ms-2">Edit Account</span>
                    </a>
                </li>
                 <li class="nav-item mt-auto">
                    <a href="?a=logout" class="nav-link text-warning" title="Logout" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="fas fa-sign-out-alt fa-fw"></i><span class="sidebar-text ms-2">Logout</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div id="main-content" class="flex-grow-1 m-3">
            <nav class="navbar navbar-expand-lg sticky-top shadow-sm main-header">
                <div class="container-fluid">
                    <button class="btn btn-outline-secondary d-md-none me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                        <i class="fas fa-bars"></i>
                    </button>

                    <button id="sidebarToggle" class="btn btn-outline-secondary d-none d-md-inline-block me-3">
                        <i class="fas fa-bars"></i>
                    </button>

                    <span class="navbar-brand text-capitalize text-white mb-0 h1 d-none d-sm-inline-block">history</span>

                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mb-0 dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user-circle fa-lg me-1"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownUser">
                                <li><a class="dropdown-item" href="?a=support"><i class="fas fa-headset fa-fw me-2"></i>Support</a></li>
                                <li><a class="dropdown-item" href="?a=edit_account"><i class="fas fa-user-edit fa-fw me-2"></i>Edit Account</a></li>
                                <li><a class="dropdown-item" href="?a=security"><i class="fas fa-shield-alt fa-fw me-2"></i>Security</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item text-danger" href="?a=logout"><i class="fas fa-sign-out-alt fa-fw me-2"></i>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="top-video">
            <video class="top" src="video/top.mp4" type="video/mp4" muted="" autoplay="" loop="" plays-inline="" poster="video/poster.png"></video>
        </div>


<script language="javascript">
function go(p) {
  document.opts.page.value = p;
  document.opts.submit();
}
</script>


<div class="card mt-3 mb-4">
  <div class="card-header">
    <h3>Filter Transactions</h3>
  </div>
  <div class="card-body">
    <form method="post" name="opts"><input type="hidden" name="form_id" value="17472870167916"><input type="hidden" name="form_token" value="4614ddf0ba029e19e3747227092aa67e">
      <input type="hidden" name="a" value="history">
      <input type="hidden" name="page" value="1">
      
      <div class="row g-3">
        <div class="col-md-12">
          <div class="form-group">
            <label class="form-label">Transaction Type</label>
            <select name="type" class="form-control" onchange="document.opts.submit();">
              <option value="">All transactions</option>
                            <option value="add_funds">Transfer from external processings</option>
                            <option value="deposit" selected="">Deposit</option>
                            <option value="earning">Earning</option>
                            <option value="withdrawal">Withdrawal</option>
                            <option value="commissions">Referral commission</option>
                          </select>
          </div>
          
                    <div class="form-group mt-3">
            <label class="form-label">Currency</label>
            <select name="ec" class="form-control">
              <option value="-1">All eCurrencies</option>
                            <option value="48">Bitcoin</option>
                            <option value="68">Litecoin</option>
                            <option value="85">Tron</option>
                            <option value="92">Tether TRC20</option>
                            <option value="102">Tether BEP20</option>
                          </select>
          </div>
                  </div>

        <div class="col-md-12">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">From</label>
              <div class="d-flex gap-2">
                <select name="month_from" class="form-control">
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5" selected="">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                  </select>
                <select name="day_from" class="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12" selected="">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                  </select>
                <select name="year_from" class="form-control">
                                    <option value="2025" selected="">2025</option>
                                  </select>
              </div>
            </div>

            <div class="col-md-6">
              <label class="form-label">To</label>
              <div class="d-flex gap-2">
                <select name="month_to" class="form-control">
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5" selected="">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                  </select>
                <select name="day_to" class="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15" selected="">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                  </select>
                <select name="year_to" class="form-control">
                                    <option value="2025" selected="">2025</option>
                                  </select>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <label class="form-label d-block">&nbsp;</label>
          <button type="submit" class="sbmt w-100">Filter</button>
        </div>
      </div>
    </form>
  </div>
</div>

<div class="row g-3 mb-4">
    <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div>
            <h5 class="mb-1">Total Transaction</h5>
            <h3 class="mb-0">$-35.00</h3>
          </div>
          <img src="images/102.png" class="ms-auto" height="24">
        </div>
      </div>
    </div>
  </div>
  </div>

<div class="row g-3">
  <div class="col-md-6">
    <div class="card h-100">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <div>
            <h5 class="mb-1">Deposit</h5>
            <div class="small">Deposit to X-Daily</div>
          </div>
          <div class="text-end">
            <div class="d-flex align-items-center justify-content-end">
              <h4 class="mb-0 me-2">$35.00</h4>
              <img src="images/102.png" height="17">
            </div>
            <small>May-13-2025 12:32:21 PM</small>
          </div>
        </div>
              </div>
    </div>
  </div>
</div>

<div class="pagination justify-content-center mt-4">
  <ul class="pagination"><li class="page-item"><a class="prev page-link disabled">&lt;&lt;</a></li><li class="page-item active"><a class="page-link">1</a></li><li class="page-item"><a class="next page-link disabled">&gt;&gt;</a></li></ul>
</div>

</div>
    <div class="offcanvas offcanvas-start text-white d-md-none" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="mobileMenuLabel">Menu</h5>
        <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="js/dash.js"></script>
    

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


</div></body></html>