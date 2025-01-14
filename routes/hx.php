<?php

use App\Models\Post;
use Illuminate\Support\Facades\Route;

Route::prefix('hx')->group(function() {
    Route::get('comments/{postId}', function(int $postId) {
        return view('hx.comments', ['post' => Post::find($postId)]);
    })
    ->where('postId', '[0-9]+')
    ->name('hx.comments');
});
