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
        Route::post('/register', 'register')->name('register');
        Route::post('/login', 'login')->name('login');
        Route::post('/logout', 'logout')->name('logout');
    });

    Route::get('/posts', PostsController::class)->name('posts');


    Route::middleware('auth:sanctum')->group(function () {
        Route::prefix('/posts')
            ->controller(PostsController::class)
            ->group(function () {
            Route::post('/create', 'create')->name('posts');
            Route::post('/{postId}/like', 'like')->name('like');
        });

        Route::controller(UserController::class)->group(function () {
            Route::get('/get-by-self', 'self');
        });

        Route::get('/user', function (Request $request) {
            return $request->user();
        });
    });

});

