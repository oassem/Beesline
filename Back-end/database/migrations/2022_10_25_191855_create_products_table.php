<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    // -> id, category enum[], productName , Image,price,Quantity,Description
    // lip balms - face care - deodorants - sun care - express masks - face radiance - intimate hygiene - skin treatments
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->enum('category',array('lip balms','face care','deodorants','sun care','express masks','face radiance','intimate hygiene','skin treatments'));
            $table->string('name');
            $table->string('image');
            $table->integer('price');
            $table->integer('stock');//no of products in stock
            $table->text('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
