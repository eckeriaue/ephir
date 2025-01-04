<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\Post;

Route::get('/', [PostController::class, 'getAll'])->name('index');

Route::prefix('templates')->group(function() {
   /* Место для того, чтобы отдавать шаблоны htmx */
});

Route::middleware('auth')->group(function() {

    Route::prefix('posts')->group(function() {
        Route::get('/create', function() {
                return view('create-post');
        })->name('posts.create');
    });

    Route::prefix('api')->group(function() {
        Route::prefix('posts')->group(function() {
            Route::post('create', [PostController::class, 'create'])->name('api.posts.create');
        });
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
