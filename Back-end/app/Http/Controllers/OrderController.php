<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreandUpdateOrderRequest;
use App\Http\Resources\OrderResource;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User_Order;

class OrderController extends Controller
{

    public function store(StoreandUpdateOrderRequest $request)
    {
        Order::Create($request->all());
        $temp = User_Order::where('order_id', $request->id)->first();
        if (!$temp) {
            $user_order = new User_Order();
            $user_order->user_id = $request->user_id;
            $user_order->order_id = $request->id;
            $user_order->save();
        }
    }
    

    public function _orders(){
        $orders= Order::distinct()->get(['id','user_id','orderStatus']);
        return OrderResource::collection($orders);
    }

    public function index()
    {

        $orders = Order::all();
        return OrderResource::collection($orders);
    }

    public function show($id)
    {
        $orders = Order::where('id', $id)->get();

        if ($orders) {
            return OrderResource::collection($orders);
        } else {
            return null;
        }
    }

    public function update($id,StoreandUpdateOrderRequest $request)
    {

        Order::find($id)->update($request->all());
    }

    public function destroy($id)
    {
        User_Order::where('order_id', $id)->delete();
        Order::find($id)->delete();
    }
}
