<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\SettingsController;
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
    Route::get('/posts/{id}', 'read')->where('id', '[0-9]+')->name('posts.read');
});

Route::middleware('auth')
    ->controller(SettingsController::class)
    ->prefix('settings')
    ->group(function() {
    Route::get('/me', 'edit')->name('settings.edit');
    Route::patch('/me', 'update')->name('settings.update');
    Route::delete('/me', 'destroy')->name('settings.destroy');
});

require __DIR__.'/auth.php';
require __DIR__.'/profile.php';
