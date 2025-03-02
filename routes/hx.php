<?php

use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


Route::prefix('hx')->group(function() {

    Route::get('image-preview/{imageId}', function(int $imageId) {
        return view('hx.image-preview', ['imageId' => $imageId]);
    })
    ->where('imageId', '[0-9]+')
    ->name('hx.image-preview');

    Route::get('comments/{postId}', function(int $postId) {
        return view('hx.comments', ['post' => Post::find($postId)]);
    })
    ->where('postId', '[0-9]+')
    ->name('hx.comments');
});
