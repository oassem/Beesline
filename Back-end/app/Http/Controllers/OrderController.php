<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreandUpdateOrderRequest;
use App\Http\Resources\OrderResource;
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

    public function _orders()
    {
        $orders = Order::distinct()->get(['id', 'user_id', 'orderStatus']);
        return OrderResource::collection($orders);
    }
    public function orderAccepted(){
        $orders=Order::all();
        $counter2022=$counter2021=$counter2020=$counter2019=$counter2018=$counter2017=$counter2016=0;
        for ($index=0; $index < count($orders); $index++) { 
            # code...
                  if($orders[$index]['created_at']->year=='2022'){
                    if($orders[$index]['orderStatus']=='accepted'){
                        $counter2022++;
                    }}
                  if($orders[$index]['created_at']->year=='2021'){
                    if($orders[$index]['orderStatus']=='accepted'){
                        $counter2021++;
                    } 
                  }
                  if($orders[$index]['created_at']->year=='2020'){
                    if($orders[$index]['orderStatus']=='accepted'){
                        $counter2020++;
                    }}
                  if($orders[$index]['created_at']->year=='2019'){
                    if($orders[$index]['orderStatus']=='accepted'){
                        $counter2019++;
                    }}
                  if($orders[$index]['created_at']->year=='2018'){
                    if($orders[$index]['orderStatus']=='accepted'){
                        $counter2018++;
                    } }
                  if($orders[$index]['created_at']->year=='2017'){
                    if($orders[$index]['orderStatus']=='accepted'){
                        $counter2017++;
                    }}
                  if($orders[$index]['created_at']->year=='2016'){
                    if($orders[$index]['orderStatus']=='accepted'){
                        $counter2016++;
                    }}
          }
          return [$counter2016,$counter2017,$counter2018,$counter2019,$counter2020,$counter2021,$counter2022];
    }
    public function orderRejected(){
        $orders=Order::all();
        $counter2022=$counter2021=$counter2020=$counter2019=$counter2018=$counter2017=$counter2016=0;
        for ($index=0; $index < count($orders); $index++) { 
            # code...
                  if($orders[$index]['created_at']->year=='2022'){
                    if($orders[$index]['orderStatus']=='rejected'){
                        $counter2022++;
                    }}
                  if($orders[$index]['created_at']->year=='2021'){
                    if($orders[$index]['orderStatus']=='rejected'){
                        $counter2021++;
                    } 
                  }
                  if($orders[$index]['created_at']->year=='2020'){
                    if($orders[$index]['orderStatus']=='rejected'){
                        $counter2020++;
                    }}
                  if($orders[$index]['created_at']->year=='2019'){
                    if($orders[$index]['orderStatus']=='rejected'){
                        $counter2019++;
                    }}
                  if($orders[$index]['created_at']->year=='2018'){
                    if($orders[$index]['orderStatus']=='rejected'){
                        $counter2018++;
                    } }
                  if($orders[$index]['created_at']->year=='2017'){
                    if($orders[$index]['orderStatus']=='rejected'){
                        $counter2017++;
                    }}
                  if($orders[$index]['created_at']->year=='2016'){
                    if($orders[$index]['orderStatus']=='rejected'){
                        $counter2016++;
                    }}
          }
          return [$counter2016,$counter2017,$counter2018,$counter2019,$counter2020,$counter2021,$counter2022];
    }
    public function orderPending(){
        $orders=Order::all();
        $counter2022=$counter2021=$counter2020=$counter2019=$counter2018=$counter2017=$counter2016=0;
        for ($index=0; $index < count($orders); $index++) { 
            # code...
                  if($orders[$index]['created_at']->year=='2022'){
                    if($orders[$index]['orderStatus']=='pending'){
                        $counter2022++;
                    }}
                  if($orders[$index]['created_at']->year=='2021'){
                    if($orders[$index]['orderStatus']=='pending'){
                        $counter2021++;
                    } 
                  }
                  if($orders[$index]['created_at']->year=='2020'){
                    if($orders[$index]['orderStatus']=='pending'){
                        $counter2020++;
                    }}
                  if($orders[$index]['created_at']->year=='2019'){
                    if($orders[$index]['orderStatus']=='pending'){
                        $counter2019++;
                    }}
                  if($orders[$index]['created_at']->year=='2018'){
                    if($orders[$index]['orderStatus']=='pending'){
                        $counter2018++;
                    } }
                  if($orders[$index]['created_at']->year=='2017'){
                    if($orders[$index]['orderStatus']=='pending'){
                        $counter2017++;
                    }}
                  if($orders[$index]['created_at']->year=='2016'){
                    if($orders[$index]['orderStatus']=='pending'){
                        $counter2016++;
                    }}
          }
          return [$counter2016,$counter2017,$counter2018,$counter2019,$counter2020,$counter2021,$counter2022];
    }
    public function index()
    {
        $orders = Order::all();

        return OrderResource::collection($orders);
    }

    public function show($id)
    {
        $orders = Order::where('id', $id)->get();
        if(!User_Order::where('order_id',$id)->get()){
          $user_order = new User_Order();
          $user_order->user_id = $orders->user_id;
          $user_order->order_id = $orders->id;
          $user_order->save();   
        } 
        if ($orders) {
            return OrderResource::collection($orders);
        } else {
            return null;
        }
    }

    public function update($id, StoreandUpdateOrderRequest $request)
    {

        Order::find($id)->update($request->all());
    }

    public function destroy($id)
    {
        User_Order::where('order_id', $id)->delete();
        Order::find($id)->delete();
    }
}
