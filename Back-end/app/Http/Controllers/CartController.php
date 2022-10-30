<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use Illuminate\Http\Request;
use App\Models\Cart;

class CartController extends Controller
{
    public function store(Request $request)
    {
        Cart::Create($request->all());
    }

    public function show($id)
    {
        $carts = Cart::where('user_id', $id)->get();
        if ($carts) {
            return CartResource::collection($carts);
        } else {
            return null;
        }
    }

    public function update($id, Request $request)
    {
        Cart::find($id)->update($request->all());
    }

    public function destroy($id)
    {
        Cart::find($id)->delete();
    }
}
