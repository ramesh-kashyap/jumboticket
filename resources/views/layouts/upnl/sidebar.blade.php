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
                <a href="{{route('user.dashboard')}}" class="nav-link text-white">
                    <i class="fas fa-user fa-fw me-2"></i>Account
                </a>
            </li>
            <li class="nav-item">
                <a href="{{route('user.invest')}}" class="nav-link text-white">
                    <i class="fas fa-download fa-fw me-2"></i>Deposit
                </a>
            </li>
            
            <li class="nav-item">
                <a href="{{route('user.compounding')}}" class="nav-link text-white">
                    <i class="fa fa-credit-card fa-fw me-2"></i>Compound
                </a>
            </li>
            <li class="nav-item">
                <a href="{{route('user.Withdraw')}}" class="nav-link text-white">
                    <i class="fas fa-upload fa-fw me-2"></i>Withdraw
                </a>
            </li>

            <li class="nav-item">
                <a href="{{route('user.DepositHistory')}}" class="nav-link text-white">
                    <i class="fas fa-history fa-fw me-2"></i>History
                </a>
            </li>
            <li class="nav-item">
                <a href="{{route('user.referral-team')}}" class="nav-link text-white">
                    <i class="fas fa-user fa-fw me-2"></i>Referrals
                </a>
            </li>
            <li class="nav-item">
                <a href="{{route('user.level-team')}}" class="nav-link text-white">
                    <i class="fas fa-users fa-fw me-2"></i>Total Team
                </a>
            </li>

            <li class="nav-item">
                <a href="{{route('user.ChangePass')}}" class="nav-link text-white">
                    <i class="fas fa-shield-alt fa-fw me-2"></i>Security
                </a>
            </li>
            <li class="nav-item">
                <a href="{{route('user.profile')}}" class="nav-link text-white">
                    <i class="fas fa-user-edit fa-fw me-2"></i>Edit Account
                </a>
            </li>
            <li class="nav-item mt-auto">
                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
                <a href="{{ route('logout') }}"
                    onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                    class="nav-link text-warning" title="Logout" data-bs-toggle="tooltip" data-bs-placement="right">
                    <i class="fas fa-sign-out-alt fa-fw"></i><span class="sidebar-text ms-2">Logout</span>
                </a>
            </li>
        </ul>
    </div>
</div>
