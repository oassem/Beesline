<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $request->merge(['password' => Hash::make($request->password)]);
        User::Create($request->all());
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
        $user->update($request->all());
    }

    public function destroy($id)
    {
        User::find($id)->delete();
    }
}
