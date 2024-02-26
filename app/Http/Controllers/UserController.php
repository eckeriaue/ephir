<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    public function self()
    {
        return auth()->user();
    }

    public function getById($id): User
    {
        return User::query()->findOrFail(intval($id))->first();
    }
}
