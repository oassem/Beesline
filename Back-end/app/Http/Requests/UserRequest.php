<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
        return [
            'firstname' => 'required|min:5|max:255',
            'lastname' => 'required|min:5|max:255',
            'image' => 'required|image|mimes:jpg,jpeg,png',
            'mobile' => 'required|numeric',
            'email' => 'required|email|unique',
            'password' => 'required',
            'address' => 'required|min:10|max:255',
            'city' => 'required|min:5|max:255'
        ];
    }
}
