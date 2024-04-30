<?php

use App\Models\Comment;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\Post;


Route::prefix('api')->group(function() {

  Route::get('/comments/by-post-id/{post_id}', function(int $postId) {
    return Comment::where('post_id', $postId)->with('user')->get();
  })->name('comments.get-by-post-id');

  Route::get('/posts/by-id/{id}', function(int $id) {
    return Post::find($id);
  })->name('posts.by-id');

  Route::middleware('auth:sanctum')->post('/posts/create', function (Request $request) {
      $input = $request->input();
      $photos = $request->files->get('photos');
      if(isset($photos)) {
        foreach ($photos as $photo) {
          $filename = 'post_image.'.time().'.png';
          Storage::disk('local')->put($filename, $photo);
          asset("storage/$filename");
        }
      };
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