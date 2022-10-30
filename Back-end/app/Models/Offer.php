<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Offer extends Model
{
    use HasFactory;

    protected $fillable = [
        'oldPrice',
        'discount',
        'productId'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'productId');
    }
}
