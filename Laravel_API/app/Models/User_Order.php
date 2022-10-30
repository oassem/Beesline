<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_Order extends Model
{
    use HasFactory;

    protected $table = 'User_Orders';

    protected $fillable = [
        'user_id',
        'order_id',
    ];
}
