<div>
    <div class="bg-white px-6 py-6 rounded-lg mt-2 grid">
        <div data-v-c3a81764="" class="bloq-head">
            <h4 data-v-c3a81764="">Roi Bonus</h4>


        </div>



        <form action="{{route('user.roi-bonus')}}" method="Get">

            <div class="flex flex-wrap -mx-3 mt-3 items-end">
                <div class="w-full sm:w-1/2 lg:w-3/12 px-3 my-3">
                    
                
                
                
          
                    
                    <input type="text" style="height: 3rem;" Placeholder="Search Users"
                                                        name="search"  class="bg-gray-50 border border-[#ECC762] px-4 py-2 h-[45px] rounded-lg outline-none shadow-none w-full flatpickr-input" value="{{ @$search }}">
                    </div>
                <div class="w-full sm:w-1/2 lg:w-3/12 px-3 my-3">
                
                
              
                       <select name="limit" style="height: 3rem;"                         class="bg-gray-50 border border-[#ECC762] px-4 py-2 h-[45px] rounded-lg outline-none shadow-none w-full flatpickr-input"
>
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                    
                    
                    </div>





                         
                <div class="w-full sm:w-1/2 lg:w-3/12 px-3 my-3">
                    
          
                        
                               <div  class="bg-[#ECC762] px-4 py-2 h-[45px] rounded-lg border-[#ECC762] uppercase font-semibold inline-flex items-center transition-all justify-center w-full hover:opacity-90">
                                                <div class="form-group mb-3">
                                                     <input type="submit" style="padding: 0.6rem 2rem;" name="submit"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Search" />
                                                </div>
                                            </div>
                        
                        </div>
                    
                <div class="w-full sm:w-1/2 lg:w-3/12 px-3 my-3">
                    
          
                        
                               <div  class="bg-[#ECC762] px-4 py-2 h-[45px] rounded-lg border-[#ECC762] uppercase font-semibold inline-flex items-center transition-all justify-center w-full hover:opacity-90">
                                                <div class="form-group mb-3">
                                                    <a href="{{ route('user.roi-bonus') }}" style="padding: 0.6rem 2rem;"
                                                        name="reset"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Reset">Reset</a>
                                                </div>
                                            </div>
                        
                        </div>
            </div>
        </form>

        <div class="overflow-x-auto rounded-lg mt-5">




                <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-[#111] uppercase bg-[#ECC762]">
                    <tr>
                        <th scope="col" class="px-6 py-5">Sl No.</th>
                        <th scope="col" class="px-6 py-5">Member ID</th>
                      
                        <th scope="col" class="px-6 py-5">Amount</th>
   <th> Date.</th>                        <th scope="col" class="px-6 py-5">Income</th>

                    </tr>
                </thead>
                <tbody>

                      <?php if(is_array($level_income) || is_object($level_income)){ ?>

                                                <?php $cnt = $level_income->perPage() * ($level_income->currentPage() - 1); ?>
                                                 @foreach($level_income as $value)
                    <tr class="bg-[#EEEEEE] border-b font-medium text-[#111]">
                        <td class="px-6 py-3"><?= $cnt += 1?></td>
                        <td class="px-6 py-3">    {{ $value->user_id_fk }}</td>
                        <td class="px-6 py-3"> {{currency()}} {{ $value->comm }}</td>
                        <td class="px-6 py-3">
                           {{ date('D, d M Y H:i:s', strtotime($value->created_at)) }}
                        <td class="px-6 py-3">
                        {{ $value->remarks }} 
                        </td>
                     



                    </tr>
                            @endforeach
                
                                             <?php }?>
                </tbody>
            </table>






        </div>
        </br></br>

<style>

/* Pagination container */
.pagination {
    display: flex;
    gap: 6px;
    list-style: none;
    padding-left: 0;
    margin: 0;
}

/* Page item */
.page-item {
    display: inline-block;
}

/* Page link */
.page-link {
    padding: 8px 14px;
    border: 1px solid #dee2e6;
    color: #111;
    background-color: #fff;
    text-decoration: none;
    font-size: 14px;
    border-radius: 6px;
    transition: all 0.2s ease;
}

/* Hover */
.page-link:hover {
    background-color: #ECC762;
    border-color: #ECC762;
    color: #111;
}

/* Active page */
.page-item.active .page-link {
    background-color: #ECC762;
    border-color: #ECC762;
    color: #111;
    font-weight: 600;
}

/* Disabled */
.page-item.disabled .page-link {
    color: #999;
    pointer-events: none;
    background-color: #f5f5f5;
}

/* Right align */
.pagination-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}



</style>
@if ($level_income->hasPages())
    <div class="pagination-wrapper">
        {{ $level_income->withQueryString()->links() }}
    </div>
@endif

    </div>
</div>