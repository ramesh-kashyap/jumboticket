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

            <span class="navbar-brand text-capitalize text-white mb-0 h1 d-none d-sm-inline-block">referals</span>

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
    <div class="top-video">
        <video class="top" src="video/top.mp4" type="video/mp4" muted autoplay loop plays-inline
            poster="video/poster.png"></video>
    </div>

    
    <div class="card mt-3">
        <div class="card-header">
            <h3>Your Referrals</h3>
        </div>
        <div class="card-body">

            <div class="row mb-4">
                <div class="col-md-4" style="margin-bottom:16px">
                    <div class="card">
                        <div class="card-body">
                            <h5>Total Referrals</h5>
<h2 class="mb-0">{{ Auth::user()->user_directall()->count() }}</h2>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" style="margin-bottom:16px">
                    <div class="card">
                        <div class="card-body">
                            <h5>Active Referrals</h5>
<h2 class="mb-0">{{ Auth::user()->user_direct()->count() }}</h2>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" style="margin-bottom:16px">
                    <div class="card">
                        <div class="card-body">
                            <h5>Total Commission</h5>
                            <h2 class="mb-0">${{ number_format(Auth::user()->sponsorship_bonus->sum('comm'), 2) }}  {{generalDetail()->cur_text}}</h2>
                        </div>
                    </div>
                </div>
            </div>


            <h4 class="mb-4 mt-5">Your Referral List</h4>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        @if(is_array($direct_team) || is_object($direct_team))
                        @foreach ($direct_team as $value)
                        <tr>
                             <td>{{ $value->name }}</td>
                            <td><b>{{ $value->username }}</b></td>
                            <td>{{ $value->phone }}</td>
                            <td><a href="mailto:{{ $value->email }}" class="themed-link">{{ $value->email }}</a></td>
                            <td>
                               @if ($value->active_status!="Pending")
                                                            <span class="text-success">${{ number_format($value->package,2) }}</span>
                                                        @else
                                                            <span class="text-warning">No deposit yet</span>
                                                        @endif
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <small>
                                    
                                    <span class="badge bg-primary"></span>
                                </small>
                            </td>
                        </tr>
                        @endforeach
                        @endif
                    </tbody>
                    <!-- <tfoot>
                        <tr>
                            <td colspan="3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div><b>2-10 level referrals:</b> 1</div>
                                    <div><b>2-10 level active referrals:</b> 0</div>
                                </div>
                            </td>
                        </tr>
                    </tfoot> -->
                </table>

                {{-- Pagination --}}
                <div class="pagination justify-content-center mt-3">
                    {{ $direct_team->links('pagination::bootstrap-4') }}
                </div>

            </div>
        </div>
    </div>
   
</div>

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
