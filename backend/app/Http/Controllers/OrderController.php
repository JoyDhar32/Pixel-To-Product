<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
   
    public function index()
    {
        return Order::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required',
            'total' => 'required',
            'status' => 'required',
            'product_name' => 'required',
            'product_category' => 'required',
            'quantity' => 'required',
            'product_details' => 'required',
        ]);

        $order= Order::create($data);

    return response()->json($order, 201);
    }

    public function show(Order $order)
    {
        return $order;
    }

    public function update(Request $request, Order $order)
    {
        $data = $request->validate([
            'user_id' => 'required',
            'total' => 'required',
            'status' => 'required',
            'product_name' => 'required',
            'product_category' => 'required',
            'quantity' => 'required',
            'product_details' => 'required',
        ]);

        $order->update($data);

        return $order;
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return response('',204);
    }
}
