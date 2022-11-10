<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request)
      {
        // 'firstname',
        // 'lastname',
        // 'image',
        // 'mobile',
        // 'email',
        // 'password',
        // 'address',
        // 'city'
       $image=time().'.'.$request->image->extension();
        $request->merge(['password' => Hash::make($request->password)]);
         $data = User::Create( [
            'firstname'=>$request->firstname,
            'lastname'=>$request->lastname,
            'image'=>$image,
            'mobile'=>$request->mobile,
            'email'=>$request->email,
            'password'=>$request->password,
            'address'=>$request->address,
            'city'=>$request->city
    ]);
    $request->image->move(public_path('public/'), $image);  
     $response['data']=$request->all();
     return response()->json($response);    
    }

    public function index()
    {
        $users = User::all();
        return UserResource::collection($users);
    }

    public function show($id)
    {
        $user = User::find($id);
        if ($user) {
            return new UserResource($user);
        } else {
            return null;
        }
    }

    public function update($id, UserRequest $request)
    {
        $user = User::find($id);
        if (Hash::check($request->password, $user->password)) {
            $request->merge(['password' => Hash::make($request->password)]);
        }
        $user->update($request->all());
    }

    public function destroy($id)
    {
        User::find($id)->delete();
    }
}
