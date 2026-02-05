
            <style>
                .main-btn_red:before {
                background-color: #80b2ff !important;
            }
      
            .main-btn_red::after {
    background-color: #80b2ff !important;
    background-image: none;
    color: #fff;
}
            </style>
            <div class="cab-content">
                <div class="container">
                    <div style='display:none'></div>
                   
                    <form method="post" action="{{ route('user.fundActivation') }}" name="balance/oper_frm">
                        {{ csrf_field() }}
                        <div class="cab-table">
                            <table class="formatTable" style="margin-bottom: 0;"> <input name="oID"
                                    id="balance/oper_frm_oID" value="162456" type="hidden">
                                <tr>
                                    <td align="right" width="50%" style="color:red">Note : </td>
                                    <td align="left"><span class="value"><b>Please  wait for 5-10 minutes after sending the payment; it will be automatically activated. </b></span></td>
                                </tr>
                                
                                
                                   <tr>
                                    <td align="right" width="50%">Status</td>
                                    <td align="left"><span class="value"><b>Prepeared</b></span></td>
                                </tr>
                                

                                <tr>
                                    <td align="right" width="50%">Order ID</td>
                                    <td align="left"><span class="value"><b>{{@$orderId}}</b></span></td>
                                </tr>

                                <tr>
                                    <td align="right" width="50%">Trasaction ID</td>
                                    <td align="left"><span class="value"><b>{{$transaction_id}}</b></span></td>
                                </tr>

                                <tr>
                                    <td align="right" width="50%">Date</td>
                                    <td align="left"><span class="value">{{date("D, d M Y", strtotime(Date('Y-m-d')))}}</span></td>
                                </tr>
                                <tr>
                                    <td align="right" width="50%">Payment system</td>
                                    <td align="left"><span class="value">{{$paymentMode}}</span></td>
                                </tr>
                                <tr>
                                    <td align="right" width="50%">Pay to account</td>
                                    <td align="left"><span
                                            class="value" id="refs-copy">{{$walletAddress}}</span>  &nbsp;  <span style="    margin-top: -16px;" class="cab-refs__copy copy-text" data-clipboard-target="#refs-copy">copy
                                <svg>
                                    <use xlink:href="/assets/img/sprite.svg#cab-menu-6"></use>
                                </svg>
                            </span></td>
                                </tr>
                                
                              

                                <tr>
                                    <td align="right" width="50%">Qr Code</td>
                                    <td align="left"><span
                                            class="value"> <img id="qrCode" style="width: 150px;    margin: 0px auto;"
                                            src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl={{$walletAddress}}"></span></td>
                                </tr>

                                <tr>
                                    <td align="right" width="50%">Send {{$paymentMode}} </td>
                                    <td align="left"><span class="value">{{$invoice_total_sum}} <small>{{$paymentMode}}</small></span></td>
                                    
                                </tr>
                            </table>
                        </div>
                        <input name="paymentMode" value="{{$paymentMode}}" type="hidden">
                        <input name="amount" value="{{$amount}}" type="hidden">
                        <input name="orderId" value="{{$orderId}}" id="orderId" type="hidden">
                        <input name="transaction_id" value="{{$transaction_id}}" type="hidden">
                        
                        <br>
                        <div class="form-btns" style="text-align: center;">
                            
                            <!--<button type="submit"-->
                            <!--class="main-btn main-btn_green main-btn_m main-btn_sm submit-btn" name="add_btn">Paid</button>-->

                            <a href="{{route('user.cancel-payment',['id'=>$orderId])}}"
                                name="balance/oper_frm_btncancel"
                                class="main-btn main-btn_red main-btn_m main-btn_sm" style="    background: #df3131;"
                                onClick="return confirm('Are you want to  \'Cancel\'');">Cancel</a></div>
                    </form>
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
           <script>
            $(document).ready(function(){
            $('#qrCode').each(function () {
            var curSrc = $(this).attr('src');
            $(this).attr('src', 'https://chart.googleapis.com/chart?'+curSrc.split('?')[1]);
            });
        });
           </script>
           
           <script src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
        <script>
        
        
        function storeTransaction() {
            
                var orderId = $('#orderId').val();
        
        $.ajax({
                    type: "post",
                    url: "https://etriton.co/user/checkPaymentStatus",
                    data: {"orderId":orderId,"_token":$('#csrf-token')[0].content},
                    success: function (response) 
                    {
                     console.log(response);  
                     
                     if(response==1)
                     {
                      
                      iziToast.success({
            			message: 'Deposit Successfully',
            			position: "topRight"
            		});
             
                      window.setTimeout(function() {
                        window.location.href = 'https://etriton.co/user/dashboard';
                    }, 3000);
        
                     }
                    }
                    });
          
        }
        
        // Set the interval to 5 minutes (300,000 milliseconds)
        const interval = 2000;
        
        // Call the function immediately and then at the specified interval
        storeTransaction(); // Call the function immediately
        setInterval(storeTransaction, interval);
        
        </script>
