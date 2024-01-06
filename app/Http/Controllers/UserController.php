<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function self()
    {
        return auth()->user();
    }

    public function logout()
    {
        return auth()->user()->tokens()->delete();
    }
}
