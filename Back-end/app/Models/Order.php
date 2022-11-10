<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'id', // order number not auto-increment id
        'product_id',
        'user_id',
        'quantity',
        'orderStatus'
        // 3 cart
        // id=time();
        // data= {id:this.id,product_id:,user_id:,quantity:2}
        // this.service.createOrder(data).subscribe(data=>{
        // console.log(data);
        // })
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
