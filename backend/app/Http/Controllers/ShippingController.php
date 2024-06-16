<?php

namespace App\Http\Controllers;

use App\Models\Shipping;
use Illuminate\Http\Request;


class ShippingController extends Controller
{
    
    public function index()
    {
        return Shipping::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required',
            'order_id' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'mobile' => 'required',
            'state' => 'required',
            'city' => 'required',
            'suburb' => 'required',
            'postal_code' => 'required',
            'address' => 'required',
        ]);     
        $shipping= Shipping::create($data);

    return response()->json($shipping, 201);
    }

    public function show(Shipping $shipping)
    {
        return $shipping;
    }

    public function update(Request $request, Shipping $shipping)
    {
        $data = $request->validate([
            'order_id' => 'required',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'zip' => 'required',
            'phone' => 'required',
        ]);

        $shipping->update($data);

        return $shipping;
    }

    public function destroy(Shipping $shipping)
    {
        $shipping->delete();

        return response('',204);
    }
    
}
