<div class="px-[25px] py-[20px] flex-1">
    <div>
        <div class="bg-white px-6 py-6 rounded-lg mt-2">
            <div data-v-c3a81764="" class="bloq-head">
                <h4 data-v-c3a81764="">Deposit</h4><a data-v-c3a81764="" href="/reports/deposit-fund-report" class="">View Deposit Fund Report <i data-v-c3a81764="" class="bx bx-chevron-right"></i></a>
            </div>
            <div class="flex justify-center">
                <div class="max-w-xl w-full">
                    <div class="flex justify-center mb-5 mt-5"><img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data={{ urlencode($cryptoData['address_in']) }}" style="max-width: 200px; margin: 0 auto;">
                        <p class="text-red-500 font-medium block text-center"></p>
                    </div>
                    <div class="text-center mb-4">
                        <p> USD Debit Amount: <span class="font-semibold">100</span> | USDT.TRC20 Debit Amount: <span class="font-semibold">99.9001000000</span></p>
                        <p> Please send exactly <span class="font-semibold">99.9001000000 USDT.TRC20</span> to </p>
                    </div>
                    <div>
                        <div class="flex items-center justify-center w-full mb-5"><label for="toogleA" class="flex items-center cursor-pointer"><button class="mr-4 depo px-3 py-[2px] rounded-full text-[#000] font-medium depo-active"> Without Amount </button>
                                <div class="relative"><input id="toogleA" type="checkbox" class="sr-only">
                                    <div class="w-10 h-4 bg-gray-200 rounded-full shadow-inner"></div>
                                    <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                </div><button class="ml-4 depo px-3 py-[2px] rounded-full text-[#000] font-medium"> With Amount </button>
                            </label></div>
                        <div class="w-full bg-[#f3f4f6] rounded-md px-3 py-3 mb-5 text-[13px]">
                            <p><strong>1. Without Amount:</strong> QR code will only have wallet address</p>
                            <p><strong>2. With Amount:</strong> QR code will have both wallet address &amp; amount</p>
                            <div class="mt-2 text-[12px] bg-[#e7e9ec] px-3 py-3 rounded-md leading-[1.2]"><strong>Please Note:</strong> Some wallets only support wallet address, you have to enter the amount manually, but some wallets support both wallet address and amount, you can chose any option which suits you. </div>
                        </div>
                    </div>
                    <form action="">
                        <div class="flex"><input type="text" value=" {{ $cryptoData['address_in'] ?? 'Not Available' }}" placeholder=" {{ $cryptoData['address_in'] ?? 'Not Available' }}" class="w-full rounded-lg rounded-r-none h-[45px] outline-none shadow-none border border-[#ECC762] bg-gray-100" disabled=""><button type="submit" class="bg-[#ECC762] text-[#111] w-[50px] rounded-lg rounded-l-none text-xl flex items-center justify-center add-submit"><i class="bx bx-copy text-xl"></i></button></div>
                    </form>
                </div>
            </div>
            <div class="flex justify-center mt-5">
                <div class="max-w-4xl w-full text-center">
                    <p class="text-[#555555] text-[13px]"> The transferred amount will be credited to D Wallet, subject to potential fluctuations in the cryptocurrency market. It may take a few minutes to complete the transaction, depending upon the blockchain network. For transaction status please check <a href="/reports/deposit-fund-report" class="text-[#b8903d] underline">Report &gt; Deposit Fund Report</a>. </p>
                </div>
            </div><!----><!---->
        </div>
    </div>
</div>