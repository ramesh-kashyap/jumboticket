<style>

.card {
    margin-bottom: 1.875rem;
    background-color: #fff;
    transition: all .5s ease-in-out;
    position: relative;
    border: 0rem solid transparent;
    border-radius: 0.75rem;
    box-shadow: 0.4rem 0.5rem 0.5rem rgb(0 0 0 / 10%);
    height: calc(100% - 30px);
}
.fs-16 {
    font-size: 1.1rem !important;
    line-height: 1.6;
    text-shadow: 0.5px 0.6px #b6b6b6;
    color: #000;
}
.menu h2, .menu .h2 {
    font-size: 1.3rem;
    font-weight: 600;
}
li.list-group-item.d-flex.px-0.justify-content-between {
    color: #000;
}
</style>
		<!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="mb-sm-4 d-flex flex-wrap align-items-center text-head">
					<h2 class="mb-3 me-auto">Dashboard</h2>
					<div>
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
							<li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
						</ol>
					</div>
				</div>	
				<div class="row">
					<div class="col-xl-12">
						<div class="row">
							<div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">User</span>
											<h2>{{\App\Models\User::count()}}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
										
											<img src="{{asset('admin/images/streamline.png')}}" style="width: 80px;" alt="">
											
											
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Active User</span>
											<h2>{{\App\Models\User::where('active_status','Active')->count()}}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
											
                                                <img src="{{asset('admin/images/streamline.png')}}" style="    width: 61px;" alt="">
											
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Pending User</span>
											<h2>{{\App\Models\User::where('active_status','Pending')->count()}}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
										
                                                <img src="{{asset('admin/images/streamline.png')}}" style="    width: 61px;" alt="">

										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Today Registration</span>
											<h2>{{\App\Models\User::where('jdate',Date("Y-m-d"))->count()}}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
										
                                                <img src="{{asset('admin/images/streamline.png')}}" style="    width: 61px;" alt="">
							
										</div>
									</div>
								</div>
							</div>
                            <div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Today Activated</span>
											<h2>{{\App\Models\Investment::where('sdate',Date("Y-m-d"))->where('active_from','!=','Deposit Bonus')->where('status','Active')->count()}}</h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
											
                                                <img src="{{asset('admin/images/investment.png')}}" style="    width: 61px;" alt="">
											
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Total Business</span>
											<h2>{{currency()}}  {{  number_format((\App\Models\Investment::where('status','Active')->where('active_from','!=','Deposit Bonus')->sum('amount')),2)   }} </h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
                                            
											
                                                <img src="{{asset('admin/images/withdrawal.png')}}" style="    width: 61px;" alt="">
											
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Pending Deposit</span>
											<h2> {{  number_format((\App\Models\Investment::where('status','Pending')->count()),2)   }} </h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
                                            
											
                                                <img src="{{asset('admin/images/withdrawal.png')}}" style="    width: 61px;" alt="">
											
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Order Revenue</span>
											<h2>{{currency()}}  {{  number_format((\App\Models\Income::where('remarks','Order Revenue')->sum('comm')),2)   }}  </h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
											
                                                <img src="{{asset('admin/images/pool_comission.png')}}" style="    width: 61px;" alt="">
									
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Generation Income</span>
											<h2>{{currency()}} {{  number_format((\App\Models\Income::where('remarks','Generation Income')->sum('comm')),2)   }} </h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
										
                                                <img src="{{asset('admin/images/medal.png')}}" style="    width: 61px;" alt="">
									
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Rank & Reward</span>
											<h2>{{currency()}} {{  number_format((\App\Models\Income::where('remarks','Rank Reward Income')->sum('comm')),2)   }} </h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
										
                                                <img src="{{asset('admin/images/medal.png')}}" style="    width: 61px;" alt="">
									
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Global Royalty</span>
											<h2>{{currency()}} {{  number_format((\App\Models\Income::where('remarks','Global Royalty')->sum('comm')),2)   }} </h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
										
                                                <img src="{{asset('admin/images/medal.png')}}" style="    width: 61px;" alt="">
									
										</div>
									</div>
								</div>
							</div>
                    	<div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Referral Bonus</span>
											<h2>{{currency()}} {{  number_format((\App\Models\Income::where('remarks','Referral Bonus')->sum('comm')),2)   }} </h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
										
                                                <img src="{{asset('admin/images/medal.png')}}" style="    width: 61px;" alt="">
									
										</div>
									</div>
								</div>
							</div>



                         
                            <div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Pending Withdrawal</span>
											<h2>{{currency()}} {{  number_format((\App\Models\Withdraw::where('status','Pending')->sum('amount')),2)   }}  </h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
											
                                                <img src="{{asset('admin/images/withdrawal.png')}}" style="    width: 61px;" alt="">
											
										</div>
									</div>
								</div>
							</div>

                            <div class="col-xl-3 col-sm-3">
								<div class="card">
									<div class="card-body d-flex align-items-center justify-content-between">
										<div class="menu">
											<span class="font-w500 fs-16 d-block mb-2">Approved Withdrawal</span>
											<h2>{{currency()}} {{  number_format((\App\Models\Withdraw::where('status','Approved')->sum('amount')),2)   }}  </h2>
										</div>	
										<div class="d-inline-block position-relative donut-chart-sale">
										
                                                <img src="{{asset('admin/images/withdrawal.png')}}" style="    width: 61px;" alt="">
											
										</div>
									</div>
								</div>
							</div>

						</div>
						
						<div class="col-xl-5 col-lg-12 col-sm-12">
                        <div class="card">
                            <div class="card-header border-0 pb-0">
                                <h2 class="card-title">Financial Overview</h2>
                            </div>

                            <div class="card-body pb-0">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex px-0 justify-content-between">
                                        <strong>Paid By Admin</strong> <a href="{{route('admin.deposits')}}?search=1"> <span class="mb-0">{{\App\Models\Investment::where('active_from','Admin')->where('status','Active')->count()}}</span></a>
                                    </li>
                                   <li class="list-group-item d-flex px-0 justify-content-between">
                                        <strong>Paid By AutoAPI</strong>  <a href="{{route('admin.deposits')}}?search=2"> <span class="mb-0">{{\App\Models\Investment::whereNotIn('active_from',['Admin','Deposit Bonus'])->where('status','Active')->count()}}</span></a>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                    </div>
					</div>

                 
					
				</div>
				
            </div>
        </div>
        <!--**********************************
            Content body end
        ***********************************-->
		
		
	