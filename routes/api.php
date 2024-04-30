<?php

use App\Models\Comment;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\Post;


Route::prefix('api')->group(function() {
  Route::middleware('auth:sanctum')->post('/posts/create', function (Request $request) {
      $input = $request->input();
      $post = new Post;
      $post->title = $input['title'];
      $post->content = $input['content'];
      $post->user_id = $request->user()->id;
      $post->save();
      return to_route('posts');
  })->name('posts.create');

  Route::middleware('auth:sanctum')->post('/comments/create', function(Request $request) {
    $commentContent = $request->input('comment');
    $postId = $request->input('post_id');
    $comment = new Comment;
    $comment->content = $commentContent;
    $comment->post_id = $postId;
    $comment->user_id = auth()->id();
    $comment->save();
    return to_route('posts');
  })->name('comments.create');

});