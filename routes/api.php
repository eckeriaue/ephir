<?php

use App\Http\Controllers\PostsController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use Illuminate\Auth\Events\Logout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::prefix('v1')->group(function () {

    Route::controller(RegisterController::class)->group(function () {
        Route::post('/register', 'register');
        Route::post('/login', 'login');
    });

    Route::get('/posts', PostsController::class)->name('posts');

    Route::middleware('auth:sanctum')->group(function () {

        Route::controller(UserController::class)->group(function () {
            Route::get('/get-by-self', 'self');
            Route::post('/logout', 'logout');
        });

        Route::get('/user', function (Request $request) {
            return $request->user();
        });
    });

});

