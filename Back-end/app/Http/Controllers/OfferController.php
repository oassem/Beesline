<?php

namespace App\Http\Controllers;

use App\Http\Resources\OfferResource;
use Illuminate\Http\Request;
use App\Models\Offer;
use App\Services\ProductQuery;

class OfferController extends Controller
{
    public function store(Request $request)
    {
        Offer::Create($request->all());  
    }

    public function index()
    {
        $offers = Offer::all();
        return OfferResource::collection($offers);
    }

    public function show($id)
    {
        $offer = Offer::find($id);
        if ($offer) {
            return new OfferResource($offer);
        } else {
            return null;
        }
    }

    public function update($id, Request $request)
    {
        Offer::find($id)->update($request->all());
    }

    public function destroy($id)
    {
        Offer::find($id)->delete();
    }
}
