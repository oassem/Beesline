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
        $request->merge(['password' => Hash::make($request->password)]);
        $image=time().'.'.$request->image->extension();
        User::create([
             'firstname' => request()->firstname,
             'lastname'=>request()->lastname,
             'email'=>request()->email,
             'password' => $request->password,
             'city' => $request->city,
             'address'=>$request->address,
             'mobile'=>$request->mobile,
             'image'=>$image
         ]);
         $request->image->move(public_path('public/'), $image);
        // User::Create($request->all());

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

    public function update($id, Request $request)
    {
        $user = User::find($id);
        if (Hash::check($request->password, $user->password)) {
            $request->merge(['password' => Hash::make($request->password)]);
        }
        if ($request->image) {
            // $path=public_path('public/').$user->image;
            // if(file_exists($path)){
            //     @unlink($path);
            // }
            // $imageName = time() . '.' . $request->image->extension();
            $imageName=$request->image;
            $request->image->move(public_path('public/'), $request->image);

        }else{
            $imageName=$user->image;
        }
         $user->update([
                'firstname' => request()->firstname,
                'lastname'=>request()->lastname,
                'email'=>request()->email,
                'password' => $request->password,
                'city' => $request->city,
                'address'=>$request->address,
                'mobile'=>$request->mobile,
                'newsletter'=>$request->newsletter,
               'image'=>$imageName
        ]);
        // $user->update($request->all());
    }

    public function destroy($id)
    {
        User::find($id)->delete();
    }
}
