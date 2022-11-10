<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Services\ProductQuery;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        Product::Create($request->all());
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

    public function update($id, Request $request)
    {
        Product::find($id)->update($request->all());
    }

    public function destroy($id)
    {
        Product::find($id)->delete();
    }
}
