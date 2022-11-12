<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreandUpdateOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
           if ($this->method()=='PUT') {
            return [
                'id' => 'sometimes|required|numeric',
                'product_id' => 'sometimes|required|numeric',
                'user_id' => 'sometimes|required|numeric',
                'quantity' => 'sometimes|required|numeric',  
                'orderStatus'=>'sometimes|required', 
            ];  
           }else{
            return [
                'id' => 'required|numeric',
                'product_id' => 'required|numeric',
                'user_id' => 'required|numeric',
                'quantity' => 'required|numeric',  
                'orderStatus'=>'sometimes|required', 
            ];
          }
    }
    public function messages()
    {
        return[
            'id.required' => '* Order Number is required',
            'id.numeric'=>'* Order Number must be a number',
            'product_id.required' => '* Product Id is required',
            'product_id.numeric' => '* Product Id must be a number',
            'user_id.required' => '* User Id is required',
            'user_id.numeric' => '* User Id must be a number',
            'price.required' => '* Product Price is required',
            'price.numeric' =>'* Product Price must be a number',
            'quantity.required'=>'* Quantity is required',
            'quantity.numeric'=>'* Quantity must be a number',
           
        ];
    }
}
