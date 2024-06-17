<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;
use Stripe\Exception\CardException;
use Stripe\Checkout\Session;



class StripePaymentController extends Controller
{
    public function index($name,$amount, $qty )
    {
        return view(view: 'payment', data: ['name'=>$name , 'amount' => $amount, 'qty' => $qty]);
    }

    public function checkout(Request $request)
    {
        \Stripe\Stripe::setApiKey(config(key: 'stripe.sk'));
        $name = $request->name;
        $amount =  $request->amount;

        $qty = $request->qty;
        $session = \Stripe\Checkout\Session::create([
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'aud',
                        'product_data' => [
                            'name' => $name,
                        ],
                        'unit_amount' => $amount * 100,
                    ],
                    'quantity' => 1,
                ],
            ],
            'mode' => 'payment',
            'success_url' => route(name: 'success'),
           
        ]);
        return redirect()->away($session->url);
    }
    public function success()
    {
        return view(view: 'success');
    }
}
