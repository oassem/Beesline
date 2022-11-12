<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Services\ProductQuery;
use App\Http\Requests\StoreandUpdateProductRequest;
use App\Models\Offer;
use App\Models\Cart;
use App\Models\Order;
use App\Models\User_Order;
use Illuminate\Support\Facades\DB;




class ProductController extends Controller
{
    public function store(StoreandUpdateProductRequest $request) 
    {
        $image=time().'.'.$request->image->extension();
           Product::create([
                'name' => request()->name,
                'category'=>request()->category,
                'price'=>request()->price,
                'description' => $request->description,
                'stock' => $request->stock,
                'image'=>$image
            ]); 
            $request->image->move(public_path('public/'), $image);   
    }
    public function index(Request $request)
    {
        $filter = new ProductQuery();
        $filterItems = $filter->transform($request);
        if (count($filterItems) == 0) {
            $products = Product::all();
            return ProductResource::collection($products);
        } else {
            return ProductResource::collection(Product::where($filterItems)->get());
        }
    }

    public function show($id)
    {
        $product = Product::find($id);
        if ($product) {
            return new ProductResource($product);
        } else {
            return null;
        }
    }

    public function update(StoreandUpdateProductRequest $request,$id)
    {
        $product=Product::find($id);

        if ($request->image) {
            $path=public_path('public/').$product->image; //public/img.png
            if(file_exists($path)){
                @unlink($path);
            }
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('public/'), $imageName);
        }else{
            $imageName=$product->image;
        }
         $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'stock' => $request->stock,
            'category'=>$request->category,
            'image'=>$imageName
        ]);  
    }
    public function category()
    {
        $categories =  DB::table('products')->pluck('category')->unique();
        $catArray = [];
        foreach ($categories as $category) {
            array_push($catArray, $category);
        }
        return $catArray;
    }
    public function destroy($id)
    {
        $product=Product::find($id);
        $path=public_path('public/').$product->image;
        @unlink($path);
        Offer::where('productId',$id)->delete();
        // Cart::where('product_id',$id)->delete();
        // $order=Order::where('product_id',$id);
        // User_Order::where('order_id',$order->id);

        // $order->delete();
         $product->delete();
    }
}

