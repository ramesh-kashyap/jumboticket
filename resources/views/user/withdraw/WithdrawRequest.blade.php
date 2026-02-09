
    <div class="px-[25px] py-[20px] flex-1">
        <div data-v-0fc89c91="">
            <div data-v-0fc89c91="">
                <div data-v-0fc89c91="" id="sign-up-button"></div>
            </div>
            <div data-v-0fc89c91="" class="bg-white px-6 py-6 rounded-lg mt-2">
                <div data-v-c3a81764="" data-v-0fc89c91="" class="bloq-head">
                    <h4 data-v-c3a81764="">Deposit</h4><a data-v-c3a81764="" href="/reports/wallet-report" class="">Wallet Report <i data-v-c3a81764="" class="bx bx-chevron-right"></i></a>
                </div>
                <div data-v-0fc89c91="" class="flex justify-center">
                    <div data-v-0fc89c91="" class="max-w-xl w-full">
                        <form data-v-0fc89c91="" action="{{ route('user.Withdraw-Request') }}" method="POST">
                            @csrf
                           <p
        class="w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100 flex items-center px-3 font-medium text-[#222]"
    >
        Fund Wallet
        (Balance :
        {{ currency() }}
        {{ number_format(Auth::user()->available_balance(), 2) }}
        )
    </p>
                            <div data-v-0fc89c91="" class="mb-2 mt-5"><label data-v-0fc89c91="" for="" class="block mb-2 font-medium text-[#222]">Amount*</label><input data-v-0fc89c91="" name="amount" type="number" placeholder="Amount in USD" class="w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100">
                                <p data-v-0fc89c91="" class="text-red-600 font-medium block mt-[5px]"></p>
                            </div>
                            <div data-v-0fc89c91="" class="mb-2 mt-5"><label data-v-0fc89c91="" for="" class="block mb-2 font-medium text-[#222]">Transaction Id</label><input data-v-0fc89c91="" type="text" name="transaction_id" placeholder="Enter Transaction ID" class="w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100">
                                <p data-v-0fc89c91="" class="text-red-600 font-medium block mt-[5px]"></p>
                            </div>
                            
                            <p data-v-0fc89c91="" class="text-red-600 font-medium block mt-[5px]"></p>
                            <div data-v-0fc89c91="" class="flex mt-5 justify-center"><button data-v-0fc89c91="" type="submit" class="px-[20px] py-[10px] rounded-lg bg-[#ECC762] uppercase font-semibold inline-flex items-center transition-all hover:opacity-90"> Deposit <i data-v-0fc89c91="" class="bx bx-chevron-right contents ml-1 text-2xl"></i></button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
