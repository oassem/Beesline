<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\User_OrderController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Auth;

// products
Route::get('products', [ProductController::class, 'index'])->name('products.index');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');
Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show');
Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');
Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy');

// users
Route::get('users', [UserController::class, 'index'])->name('users.index');
Route::post('/users', [UserController::class, 'store'])->name('users.store');
Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');

// offers
Route::get('offers', [OfferController::class, 'index'])->name('offers.index');
Route::post('/offers', [OfferController::class, 'store'])->name('offers.store');
Route::get('/offers/{offer}', [OfferController::class, 'show'])->name('offers.show');
Route::put('/offers/{offer}', [OfferController::class, 'update'])->name('offers.update');
Route::delete('/offers/{offer}', [OfferController::class, 'destroy'])->name('offers.destroy');

// orders
Route::get('orders', [OrderController::class, 'index'])->name('orders.index');
Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
Route::get('/orders/{order}', [OrderController::class, 'show'])->name('orders.show');
Route::put('/orders/{order}', [OrderController::class, 'update'])->name('orders.update');
Route::delete('/orders/{order}', [OrderController::class, 'destroy'])->name('orders.destroy');

// user_orders
Route::get('/user_orders/{user_order}', [User_OrderController::class, 'show']);

// carts
Route::post('/carts', [CartController::class, 'store']);
Route::get('/carts/{cart}', [CartController::class, 'show']);
Route::put('/carts/{cart}', [CartController::class, 'update']);
Route::delete('/carts/{cart}', [CartController::class, 'destroy']);

// contacts
Route::get('contacts', [ContactController::class, 'index']);
Route::post('/contacts', [ContactController::class, 'store']);
Route::get('/contacts/{contact}', [ContactController::class, 'show']);
Route::put('/contacts/{contact}', [ContactController::class, 'update']);
Route::delete('/contacts/{contact}', [ContactController::class, 'destroy']);

// sanctum
Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',

    ]);

    $credentials = [
        'email' => $request->email,
        'password' => $request->password
    ];

    $user = User::where('email', $request->email)->first();
    if ($user && Auth::attempt($credentials)) {
        return [$user->createToken($request->email)->plainTextToken, $user->id];
    } else {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }
});
