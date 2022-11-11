<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CartResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'firstname'=>$this->firstname,
            'lastname'=>$this->lastname,
            'image'=>$this->image,
            'mobile'=>$this->mobile,
            'email'=>$this->email,
            'newsletter'=>$this->newsletter,
            'address'=>$this->address,
            'city'=>$this->city,
            'type'=>$this->type,
            'cart info' => CartResource::collection($this->carts) 
        ];
    }
}
