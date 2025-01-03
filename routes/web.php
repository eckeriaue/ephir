<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\Post;

Route::get('/', function (Request $request) {
    $offset = $request->query('offset', 0);
    $limit = $request->query('limit', 20);
    return view('index', (array) literal(
        posts: Post::orderBy('id', 'desc')
            ->offset($offset)
            ->limit($limit)
            ->get(),
    ));
});

Route::prefix('templates')->group(function() {
    Route::get('/create-post', function() {

    })->name('posts.create-modal');
});

Route::middleware('auth:sanctum')->prefix('api')->group(function() {
    Route::prefix('posts')->group(function() {
        Route::post('create', function (Request $request) {
            return literal(testme: 42);
        })->name('posts.create');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
