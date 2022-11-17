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
     public function catProducts(){
        $products=Product::all();
        $noOfAllProducts=$counterCat1=$counterCat2=$counterCat3=$counterCat4=$counterCat5=$counterCat6=$counterCat7=$counterCat8=$YCat1=$yCat2=$yCat3=$yCat4=$yCat5=$yCat6=$yCat7=$yCat8=0;
        $AllproductsCategory=array();
        for ($index=0; $index < count($products); $index++) { 
            # code...
                  if($products[$index]['category']=='lip balms'){$counterCat1++;}
                  if($products[$index]['category']=='face care'){$counterCat2++;}
                  if($products[$index]['category']=='deodorants'){$counterCat3++;}
                  if($products[$index]['category']=='sun care'){$counterCat4++;}
                  if($products[$index]['category']=='express masks'){$counterCat5++;}
                  if($products[$index]['category']=='face radiance'){$counterCat6++;}
                  if($products[$index]['category']=='intimate hygiene'){$counterCat7++;}
                  if($products[$index]['category']=='skin treatments'){$counterCat8++;}
          }
         
          $noOfAllProducts=$counterCat1+$counterCat2+$counterCat3+$counterCat4+$counterCat5+$counterCat6+$counterCat7+$counterCat8;
          $YCat1=($counterCat1/$noOfAllProducts)*100;
          $yCat2=($counterCat2/$noOfAllProducts)*100;
          $yCat3=($counterCat3/$noOfAllProducts)*100;
          $yCat4=($counterCat4/$noOfAllProducts)*100;
          $yCat5=($counterCat5/$noOfAllProducts)*100;
          $yCat6=($counterCat6/$noOfAllProducts)*100;
          $yCat7=($counterCat7/$noOfAllProducts)*100;
          $yCat8=($counterCat8/$noOfAllProducts)*100;
          $data['name']='lip balms';
          $data['y']=$YCat1;
          array_push($AllproductsCategory,(object)$data);
          $data['name']='face care';
          $data['y']=$yCat2;
          array_push($AllproductsCategory,(object)$data);
          $data['name']='deodorants';
          $data['y']=$yCat3;
          array_push($AllproductsCategory,(object)$data);
          $data['name']='sun care';
          $data['y']=$yCat4;
          array_push($AllproductsCategory,(object)$data);
          $data['name']='express masks';
          $data['y']=$yCat5;
          array_push($AllproductsCategory,(object)$data);
          $data['name']='face radiance';
          $data['y']=$yCat6;
          array_push($AllproductsCategory,(object)$data);
          $data['name']='intimate hygiene';
          $data['y']=$yCat7;
          array_push($AllproductsCategory,(object)$data);
          $data['name']='skin treatments';
          $data['y']=$yCat8;
          array_push($AllproductsCategory,(object)$data);
          return $AllproductsCategory;
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
      
        if(Offer::where('productId',$id)){
            Offer::where('productId',$id)->delete();
        }  
        if(Cart::where('product_id',$id)){
            Cart::where('product_id',$id)->delete();
        }  
        
       if(Order::where('product_id',$id)->get()){  
          Order::where('product_id',$id)->delete();
       }
      
         $product->delete();
    }
}

