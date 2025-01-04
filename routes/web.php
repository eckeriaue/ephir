<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function() {

    Route::prefix('posts')->group(function() {
        Route::get('/create', fn() => view('create-post'))->name('posts.create');
    });

    Route::prefix('api')->group(function() {
        Route::controller(PostController::class)->prefix('posts')->group(function() {
            Route::post('create', 'create')->name('api.posts.create');
        });
    });
});

Route::controller(PostController::class)->group(function() {
    Route::get('/', 'getAll')->name('index');
    Route::get('/posts/{id}', 'read')->name('posts.read');
});

Route::middleware('auth')->controller(ProfileController::class)->group(function() {
    Route::get('/profile', 'edit')->name('profile.edit');
    Route::patch('/profile', 'update')->name('profile.update');
    Route::delete('/profile', 'destroy')->name('profile.destroy');
});

require __DIR__.'/auth.php';
