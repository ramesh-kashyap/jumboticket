<!--**********************************
            Content body start
        ***********************************-->
<div class="content-body">
    <div class="container-fluid">

        <div class="row page-titles">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Withdrawal </a></li>
                <li class="breadcrumb-item"><a href="javascript:void(0)">Pending Withdrawal</a></li>
            </ol>
        </div>
        <!-- row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Pending Withdrawal</h4>
                    </div>
                    <div class="card-body">
                        
                          <form action="{{ route('admin.pendingWithdrawal') }}" method="GET">
                                        <div class="row">
                                            <div class="col-xl-4">
                                                <div class="form-group mb-3">
                                                    <input type="text" style="height: 3rem;" Placeholder="Search Users"
                                                        name="search" class="form-control" value="{{ @$search }}">
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <select name="limit" style="height: 3rem;" class="form-control">
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <input type="submit" style="padding: 0.6rem 2rem;" name="submit"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Search" />
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <a href="{{ route('admin.pendingWithdrawal') }}" style="padding: 0.6rem 2rem;"
                                                        name="reset"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Reset">Reset</a>
                                                </div>
                                            </div>
        
        
                                        </div>
                                    </form>
                                    
                                    
                        <div class="table-responsive">
                            <table id="example" class="display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>S NO.</th>


                                        <th>Name</th>
                                        <th>User ID</th>
                                        <th>Request Amount</th>
                                        <th>Charge 5%</th>
                                        <th>Net Amount</th>


                                        <th>Payment Mode.</th>
                                        <th>Transaction Date.</th>
                                        <th>Payment Address</th>
                                        <th>PayMetamask</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php if(is_array($withdraw_list) || is_object($withdraw_list)){ ?>

                                    <?php $cnt = $withdraw_list->perPage() * ($withdraw_list->currentPage() - 1); ?>
                                    @foreach ($withdraw_list as $value)
                                     
                                        <tr>
                                            <td><?= $cnt += 1 ?></td>
                                            <td>{{ $value->user->name }}</td>
                                            <td>{{ $value->user_id_fk }}</td>

                                            <td>{{currency()}} {{ $value->amount }} </td>
                                             <td>{{currency()}} {{ ($value->amount*5/100) }}</td>
                                                <td>{{currency()}} {{ ($value->amount-$value->amount*5/100) }}</td>
                                            <td> {{ $value->payment_mode }} </td>

                                            <td>{{ $value->created_at }}</td>
                                            <td><span id="myInput<?= $cnt ?>">{{ $value->account }}</span>
                                                &nbsp;&nbsp;&nbsp; <span><i class="fa fa-clone"
                                                        onclick="copyTextFromElement('myInput<?= $cnt ?>')"
                                                        title="Copy Address" aria-hidden="true"></i>
                                                </span></td>
                                        

          
   

                                        <td> <button type="button"
                                                onclick="payNowUsdtBep20({{ $value->id }},{{ floatval($value->amount-$value->amount*5/100) }},'{{ $value->account }}')"
                                                class='btn btn-success btnnn'>Pay</button>
                                                    
                                                    </td>

                                            <td><a href="{{ route('admin.withdraw_request_done') }}?id={{ $value->id }}&withdraw_status=success"
                                                    class='btn btn-success'>Success</a>
                                                    
                                                    
                                                    <a
                                                    href="{{ route('admin.withdraw_request_done') }}?id={{ $value->id }}&withdraw_status=blocked"
                                                    class='btn btn-danger'>Reject</a></td>

                                        </tr>
                                    @endforeach

                                    <?php }?>
                                </tbody>

                            </table>
                            
                              <br>

                                    {{ $withdraw_list->withQueryString()->links() }}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</div>
<div id="copyPopup" style="
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    z-index: 9999;
">
    Your address is copied!
</div>

<!-- Hidden Form -->
<form id="active-form" action="{{ route('admin.withdraw_request_done') }}" method="GET" class="d-none">
    {{ csrf_field() }}
    <input type="hidden" name="id" id="withdraw_id">
    <input type="hidden" name="withdraw_status" id="withdraw_status">
    <input type="hidden" name="txHash" id="txHash">
</form>

<!-- Scripts -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tronweb@latest/dist/TronWeb.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/web3@1.8.2/dist/web3.min.js"></script>


<script>
    function copyTextFromElement(elementId) {
        var text = document.getElementById(elementId).innerText;
        var input = document.createElement("input");
        input.setAttribute("value", text);
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);

        // Show popup message
        var popup = document.getElementById("copyPopup");
        popup.style.display = "block";

        setTimeout(function() {
            popup.style.display = "none";
        }, 2000);
    }
    
    
window.payNowUsdtBep20 = async function(withdraw_id, input, account) {
    if (typeof window.ethereum === 'undefined') {
        alert('MetaMask not detected. Please install MetaMask.');
        return;
    }

    const tokenAddress = "0x55d398326f99059fF775485246999027B3197955"; // USDT BEP20
    const abiUSDT = [{
        "constant": false,
        "inputs": [
            { "name": "_to", "type": "address" },
            { "name": "_value", "type": "uint256" }
        ],
        "name": "transfer",
        "outputs": [{ "name": "", "type": "bool" }],
        "type": "function"
    }];

    try {
        const web3 = new Web3(window.ethereum);
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const chainId = await ethereum.request({ method: 'eth_chainId' });

        if (chainId !== '0x38') {
            alert('Please switch MetaMask to Binance Smart Chain (Mainnet)');
            return;
        }

        const senderAddress = accounts[0];
        const recipient = account.trim();
        const amount = web3.utils.toBN(web3.utils.toWei(input.toString(), 'ether'));

        if (!Web3.utils.isAddress(recipient)) {
            alert('Invalid recipient address');
            return;
        }

        const contract = new web3.eth.Contract(abiUSDT, tokenAddress);
        const gas = await contract.methods.transfer(recipient, amount).estimateGas({ from: senderAddress });

        const tx = await contract.methods.transfer(recipient, amount).send({
            from: senderAddress,
            gas
        });

        $('#txHash').val(tx.transactionHash);
        $('#withdraw_id').val(withdraw_id);
        $('#withdraw_status').val('success');
        document.getElementById('active-form').submit();

    } catch (error) {
        console.error('Transaction failed:', error);
        alert('Transaction Failed');
    }
}


</script>



<!--**********************************
            Content body end
        ***********************************-->
