<?php

namespace App\Http\Controllers;

use App\Http\Resources\User_OrderResource;
use App\Models\User_Order;

class User_OrderController extends Controller
{
    public function show($id)
    {
        $orders = User_Order::where('user_id', $id)->get();
        if ($orders) {
            return User_OrderResource::collection($orders);
        } else {
            return null;
        }
    }
}
