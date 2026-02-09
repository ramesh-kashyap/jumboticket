<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BuyFund;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Hexters\CoinPayment\CoinPayment;
use App\Models\CoinpaymentTransaction;
use Log;
use Illuminate\Support\Facades\Http;
use Redirect;
class AddFund extends Controller
{

public function index(Request $request)
{

$user=Auth::user();
$this->data['page'] = 'user.fund.addFund';
return $this->dashboard_layout();

}
public function ConfirmAddFund(Request $request)
{

$user=Auth::user();
$this->data['page'] = 'user.fund.confirm-addfund';
return $this->dashboard_layout();

}

public function fundHistory(Request $request)
{

  
$this->data['page'] = 'user.fund.fundHistory';
return $this->dashboard_layout();

}





public function SubmitBuyFund(Request $request)
{

  try{
        $validation =  Validator::make($request->all(), [
            'amount' => 'required|numeric|min:0',
        ]);

        if($validation->fails()) {
            Log::info($validation->getMessageBag()->first());

            return redirect()->route('user.AddFund')->withErrors($validation->getMessageBag()->first())->withInput();
        }

           $user=Auth::user();
                   
           $transaction['order_id'] = uniqid(); // invoice number
            $transaction['amountTotal'] = (FLOAT) $request->amount;
            $transaction['note'] = 'Transaction note';
           $transaction['buyer_name'] = $user->username;
           $transaction['user_id'] = $user->id;
            $transaction['buyer_email'] = $user->email;
            $transaction['redirect_url'] = url('user/AddFund?res=success'); // When Transaction was comleted
            $transaction['cancel_url'] = url('user/AddFund'); // When user click cancel link

           /*
           *   @required true
           *   @example first item
           */
           $transaction['items'][] = [
             'itemDescription' => 'Cryptoversal',
             'itemPrice' => (FLOAT) $request->amount, // USD
             'itemQty' => (INT) 1,
             'itemSubtotalAmount' => (FLOAT) $request->amount // USD
           ];

           $transaction['payload'] = [
             'foo' => [
                 'bar' => 'baz'
             ]
           ];

                $url_ = CoinPayment::generatelink($transaction);

            return Redirect::to($url_);

      }
       catch(\Exception $e){
        Log::info('error here');
        Log::info($e->getMessage());
        print_r($e->getMessage());
        die("hi");
        return  redirect()->route('user.AddFund')->withErrors('error', $e->getMessage())->withInput();
    }

}

public function confirm(Request $request)
{
    try {
        $validation = Validator::make($request->all(), [
            'amount' => 'required|numeric|min:2',
            'paymentMode' => 'required|string',
        ]);

        if ($validation->fails()) {
            return redirect()->route('user.AddFund')
                ->withErrors($validation)
                ->withInput();
        }

        $user = Auth::user();

        $amount = $request->amount;
        $paymentMode = $request->paymentMode;

        // 🔹 Supported payment modes config
       $paymentConfigs = [
    'BTC' => [
        'url' => 'https://api.cryptapi.io/btc/create/',
        'address' => '15iqngPziGnm4LRCrgrK6qr1LcxZ9soWAc',
    ],
    'USDT.TRC20' => [
        'url' => 'https://api.cryptapi.io/trc20/usdt/create/',
        'address' => 'TJHcFMonzrhm4eTgAuRzb4SBnaMiUPefa2',
    ],
    'USDT.ERC20' => [
        'url' => 'https://api.cryptapi.io/erc20/usdt/create/',
        'address' => '0x9F7011ce8A26C4A9CCc65700C45D69bced047634',
    ],
    'USDT.BEP20' => [
        'url' => 'https://api.cryptapi.io/bep20/usdt/create/',
        'address' => '0x9F7011ce8A26C4A9CCc65700C45D69bced047634',
    ],
];


        if (!isset($paymentConfigs[$paymentMode])) {
            return redirect()->route('user.AddFund')
                ->withErrors(['error' => 'Invalid payment mode'])
                ->withInput();
        }

        $refId = $user->username;

        $queryParams = [
          'callback'      => 'https://mitnex.com/dynamicupicallbackMit?refid=' . $refId,
                'pending'       => 0,
                'confirmations' => 1,
                'email'         => 'string',
                'post'          => 0,
                'priority'      => 'default',
                'multi_token'   => 0,
                'multi_chain'   => 0,
                'convert'       => 0,
        ];
  if (!empty($paymentConfigs[$paymentMode]['address'])) {
            $queryParams['address'] = $paymentConfigs[$paymentMode]['address'];
        }
        $response = Http::get($paymentConfigs[$paymentMode]['url'], $queryParams);

        if (!$response->successful()) {
            Log::error('CryptAPI failed: ' . $response->body());
            return redirect()->route('user.AddFund')
                ->withErrors(['error' => 'Failed to generate wallet address'])
                ->withInput();
        }

        $cryptoData = $response->json();
        unset($cryptoData['callback_url']);

        // send data to view
        $this->data['amount'] = $amount;
        $this->data['paymentMode'] = $paymentMode;
        $this->data['cryptoData'] = $cryptoData;
        $this->data['page'] = 'user.fund.confirm-addfund';

        return $this->dashboard_layout();

    } catch (\Exception $e) {
        Log::error('confirm() error: ' . $e->getMessage());

        return redirect()->route('user.AddFund')
            ->withErrors(['error' => 'Something went wrong'])
            ->withInput();
    }
}


}
  