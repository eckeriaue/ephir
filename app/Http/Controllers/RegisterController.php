<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        if (User::checkAvailabilityByEmail($input['email'])) {
            return response()->json(['status'=>500,'message'=> 'user is already exists']);
        }
        $user = User::create($input);
        $success['token'] =  $user->createToken('Ingbook')->plainTextToken;

        return  response()->json([...$success, 'user' => [
            'name' => $input['name'],
            'email'=> $input['email'],
        ]]);
    }

    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $success['token'] =  $user->createToken('Ingbook')->plainTextToken;
            $success['name'] =  $user->name;

            return response()->json($success);
        }
        else {
            dd([]);
        }
    }
}
