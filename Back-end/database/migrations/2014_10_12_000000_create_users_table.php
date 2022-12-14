<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
// id,type(admin,SuperAdmin,user>default),firstname,lastname,email,Image,MobileNo->default:null,password,AcceptOfNewsletter(true,false), Address,City
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email')->unique();
            $table->enum('type', array('admin','superAdmin','user'))->default('user');
            $table->string('image');
            $table->string('mobile');
            // $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            // $table->rememberToken();
            $table->boolean('newsletter')->default(false);
            $table->text('address');
            $table->enum('city', ['NoTSelected', 'cairo', 'alex', 'giza', 'portSaid', 'suez', 'luxor', 'mansoura', 'tanta', 'asyut', 'ismailia', 'faiyum', 'zagazig', 'damietta', 'aswan', 'minya', 'damanhur', 'beniSuef', 'qena', 'sohag', 'banha', 'arish'])->default('NoTSelected');
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
        Schema::dropIfExists('users');
    }
}
