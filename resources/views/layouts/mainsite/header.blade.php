
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="{{asset('')}}assets/images/favicon.png" />
  <title>{{siteName()}} - Automated Trading, Real Profits</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <link rel="stylesheet" href="{{asset('')}}assets/style/style.css">
  
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
.sbmt {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 30px;
    background:linear-gradient(303deg, rgba(114, 161, 222) 0%, rgba(52, 0, 124) 100%);
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(114, 161, 222, 0.168627451), inset 0 0 5px rgba(114, 161, 222, 0.2392156863);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    text-decoration: none;
}
button:hover, .button:hover {
    background: linear-gradient(303deg, rgba(114, 161, 222) 0%, rgba(52, 0, 124) 100%);
    transform: translateY(-2px);
}
.gradient-text {
    display: inline-block;
    background: linear-gradient(to right, #ffffff, #c979ff, #d6c507, #c1ff28, #b47606, #ff8e01, #ffffff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    /*animation: gradient 2.5s linear infinite;*/
}
  </style>
  
</head>

<body>
  <div class="preloader-container">
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
  <video class="video-background" src="{{asset('')}}assets/video/bg.mp4" type="video/mp4" muted autoplay loop playsinline poster="video/poster2.png"></video>

  <div class="main-menu">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-transparent navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="{{route('user.dashboard')}}">
            <img src="{{asset('')}}assets/images/logo1.png" class="logo" alt="">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" href="{{ route('Index') }}">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('about-us') }}">About Us</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('faq') }}">FAQs</a>
        </li>
        <!-- <li class="nav-item">
            <a class="nav-link" href="{{ route('news') }}">News</a>
        </li> -->
        <li class="nav-item">
            <a class="nav-link" href="{{ route('contact-us') }}">Contact Us</a>
        </li>
    </ul>
    <div class="d-flex gap-1">
        <a href="{{ route('register') }}" class="sbmt">Register</a>
        <a href="{{ route('login') }}" class="sbmt">Log In</a>
    </div>
</div>

        </div>
      </nav>
    </div>
  </div>
 

