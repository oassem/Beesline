<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreandUpdateProductRequest extends FormRequest
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
            'name' => ['sometimes','required','min:3','max:255'],
            'category' => ['sometimes','required'],
            'image' => 'image|mimes:jpeg,jpg,png,gif|sometimes|required|max:10000',
            'price' => ['sometimes','required','numeric'],
            'description' => ['sometimes','required','min:10','max:255'],
            'stock' => ['sometimes','required','numeric'],
    ];
}else{
    return [
        'name' => ['required','min:3','max:255'],
        'category' => ['required'],
        'image' => 'image|mimes:jpeg,jpg,png,gif|required|max:10000',
        'price' => ['required','numeric'],
        'description' => ['required','min:10','max:255'],
        'stock' => ['required','numeric'],
];
}
    }
    public function messages()
    {
        return [
            'name.required' => '* name is Required :(',
            'name.min' => '* Name must be greater than 3 characters ',
            'name.max' => '* Name must be less than 255 characters ',
            'category.required'=>'* category is Required :(',
            'price.min'=>'* Price is required',
            'price.numeric'=>'* Price must be a number', 
            'description.required'=>'* Description is required',
            'description.min' => '* Description must be greater than 3 characters ',
            'description.max' => '* Description must be less than 255 characters ',
            'stock.required'=>'* Stock is required',
            'stock.numeric'=>'* Stock must be a number',    
        ];
    }
}
