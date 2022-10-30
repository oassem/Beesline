<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    //id,OrderNumber,productId,UserId,quantity,OrderStatus [Pending,Accepted,Rejected]
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('id', false);
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('product_id')->references('id')->on('products'); 
            $table->foreign('user_id')->references('id')->on('users'); 
            $table->integer('quantity');
            $table->enum('orderStatus',array('pending','accepted','rejected'))->default('pending');
            $table->timestamps();     
            $table->primary(['id','user_id','product_id']);            
        });
       


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
