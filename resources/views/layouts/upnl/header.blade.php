<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="{{asset('')}}assets/images/favicon.png"/>
    <title>{{siteName()}} - Automated Trading, Real Profits</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{asset('')}}assets/style/dash.css">

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
            position: absolute;
            /* These will be relative to .loader if .loader is positioned */
            top: 50%;
            left: 50%;
            margin-top: -5px;
            margin-left: -5px;
        }

        #sq1 {
            margin-top: -25px;
            margin-left: -25px;
            animation: loader_5191 675ms ease-in-out 0s infinite alternate;
        }

        #sq2 {
            margin-top: -25px;
            animation: loader_5191 675ms ease-in-out 75ms infinite alternate;
        }

        #sq3 {
            margin-top: -25px;
            margin-left: 15px;
            animation: loader_5191 675ms ease-in-out 150ms infinite alternate;
        }

        /* Added alternate for consistency */
        #sq4 {
            margin-left: -25px;
            animation: loader_5191 675ms ease-in-out 225ms infinite alternate;
        }

        #sq5 {
            animation: loader_5191 675ms ease-in-out 300ms infinite alternate;
        }

        #sq6 {
            margin-left: 15px;
            animation: loader_5191 675ms ease-in-out 375ms infinite alternate;
        }

        #sq7 {
            margin-top: 15px;
            margin-left: -25px;
            animation: loader_5191 675ms ease-in-out 450ms infinite alternate;
        }

        #sq8 {
            margin-top: 15px;
            animation: loader_5191 675ms ease-in-out 525ms infinite alternate;
        }

        #sq9 {
            margin-top: 15px;
            margin-left: 15px;
            animation: loader_5191 675ms ease-in-out 600ms infinite alternate;
        }




        .preloader-container {
            position: fixed;
            /* Cover the entire viewport */
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000000;
            /* Or your desired background, e.g., #222 for dark */
            z-index: 9999;
            /* Ensure it's on top of everything */
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 1;
            transition: opacity 0.5s ease-out, visibility 0s linear 0.5s;
            /* Fade out effect */
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
            width: 50px;
            /* Adjust as needed to contain your squares */
            height: 50px;
            /* Adjust as needed */
        }

        /* Make content visible after loading */
        .content {
            padding: 20px;
        }
.dropdown-menu {
    background-color: rgb(31 31 31);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 15px rgb(43 46 50);
}

    </style>


</head>

<body>
    <!-- <div class="preloader-container">
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
    </div> -->
    <video class="video-background" src="{{asset('')}}assets/video/bg.mp4" type="video/mp4" muted autoplay loop plays-inline
        poster="video/poster2.png"></video>

    <div class="d-flex main-wrapper">
        <nav id="sidebar" class="text-white p-3 d-none d-md-flex flex-column sidebar-narrow">
            <div class="sidebar-header nav-item text-center mb-4">
                <a href="{{route('user.dashboard')}}" class="d-inline-block site-icon">
                    <img src="{{asset('')}}assets/images/logo1.png" style="max-width: 140px; margin-left: 17px;">

                </a>
            </div>

            <ul class="nav nav-pills flex-column flex-grow-1">
                <li class="nav-item">
                    <a href="{{route('user.dashboard')}}" class="nav-link text-white" title="Account" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-user fa-fw"></i><span class="sidebar-text ms-2">Account</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('user.invest')}}" class="nav-link text-white" title="Deposit" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-download fa-fw"></i><span class="sidebar-text ms-2">Deposit</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('user.compounding')}}" class="nav-link text-white" title="Deposit" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fa fa-credit-card"></i><span class="sidebar-text ms-2">Compound</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('user.Withdraw')}}" class="nav-link text-white" title="Withdraw" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-upload fa-fw"></i><span class="sidebar-text ms-2">Withdraw</span>
                    </a>
                </li>
                <!-- <li class="nav-item">
                    <a href="{{route('user.deposit')}}" class="nav-link text-white" title="Deposit List" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-list-alt fa-fw"></i><span class="sidebar-text ms-2">Deposit List</span>
                    </a>
                </li> -->
                <li class="nav-item">
                    <a href="{{route('user.DepositHistory')}}" class="nav-link text-white" title="History" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-history fa-fw"></i><span class="sidebar-text ms-2">History</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('user.referral-team')}}" class="nav-link text-white" title="Referrals" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-user fa-fw"></i><span class="sidebar-text ms-2">Referrals</span>
                    </a>
                </li> 
                
                <li class="nav-item">
                    <a href="{{route('user.level-team')}}" class="nav-link text-white" title="Total Team" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-users fa-fw"></i><span class="sidebar-text ms-2">Total Team</span>
                    </a>
                </li>
                 <!-- <li class="nav-item">
                    <a href="{{route('user.GenerateTicket')}}" class="nav-link text-white" title="Referrals" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-users fa-fw"></i><span class="sidebar-text ms-2">Support</span>
                    </a>
                </li>
                 <li class="nav-item">
                    <a href="{{route('user.SupportMessage')}}" class="nav-link text-white" title="Referrals" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-users fa-fw"></i><span class="sidebar-text ms-2">Support Message</span>
                    </a>
                </li> -->
                <!-- <li class="nav-item">
                    <a href="{{route('user.refreallink')}}" class="nav-link text-white" title="Banners" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-link fa-fw"></i><span class="sidebar-text ms-2">Banners</span>
                    </a>
                </li> -->
                <!-- <li class="nav-item">
                    <a href="{{route('user.security')}}" class="nav-link text-white" title="Security" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-shield-alt fa-fw"></i><span class="sidebar-text ms-2">Security</span>
                    </a>
                </li> -->
                <li class="nav-item">
                    <a href="{{route('user.profile')}}" class="nav-link text-white" title="Edit Account" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-user-edit fa-fw"></i><span class="sidebar-text ms-2">Edit Account</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('user.ChangePass')}}" class="nav-link text-white" title="Edit Account" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-shield-alt fa-fw"></i><span class="sidebar-text ms-2">Security</span>
                    </a>
                </li>
                <li class="nav-item mt-auto">
                      <form id="logout-form" action="{{ route('logout') }}" method="POST"
                            class="d-none">
                            @csrf
                        </form>
                    <a href="{{ route('logout') }}"onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="nav-link text-warning" title="Logout" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <i class="fas fa-sign-out-alt fa-fw"></i><span class="sidebar-text ms-2">Logout</span>
                    </a>
                </li>
            </ul>
        </nav>