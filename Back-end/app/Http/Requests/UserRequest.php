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
      
        if($this->method()=='PUT'){
            return [
                'firstname' => 'sometimes|required|min:5|max:255',
                'lastname' => 'sometimes|required|min:5|max:255',
                'image' => 'image|mimes:jpg,jpeg,png|sometimes|required',
                'mobile' => 'sometimes|required|numeric',
                'email' => 'sometimes|required|email|unique:users,email,'.$this->user,
                'password' => 'sometimes|required',
                'address' => 'sometimes|required|min:10|max:255',
                'city' => 'sometimes|required|min:5|max:255',
                'newsletter'=>'sometimes|required'
            ];
        }else{
          return [
        'firstname' => 'required|min:5|max:255',
        'lastname' => 'required|min:5|max:255',
        'image' => 'image|mimes:jpg,jpeg,png|required',
        'mobile' => 'required|numeric',
        'email' => 'required|email|unique:users,email,'.$this->user,
        'password' => 'required',
        'address' => 'required|min:10|max:255',
        'city' => 'required|min:5|max:255',
        'newsletter'=>'sometimes|required'
           ];
       }
       
   }
}
