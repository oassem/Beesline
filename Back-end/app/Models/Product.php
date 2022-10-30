<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order;
use App\Models\Cart;
use App\Models\Offer;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'image',
        'price',
        'name',
        'description',
        'stock'
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function offer()
    {
        return $this->hasOne(Offer::class, 'productId');
    }
}
