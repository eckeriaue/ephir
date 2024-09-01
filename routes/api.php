<?php

use App\Models\Comment;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\{Post, Photo};
use Illuminate\Support\Facades\Storage;


Route::prefix('api')->group(function() {

  Route::get('/comments/by-post-id/{post_id}', function(int $postId) {
    return Comment::where('post_id', $postId)->with('user')->get();
  })->name('comments.get-by-post-id');

  Route::get('/posts/by-id/{id}', function(int $id) {
    return Post::find($id);
  })->name('posts.by-id');

  Route::middleware('auth:sanctum')->post('/posts/create', function (Request $request) {
      $input = $request->input();

      $post = Post::create([
        'title' => $input['title'],
        'content' => $input['content'],
        'user_id' => $request->user()->id,
      ]);
      $post->save();

      if($photos = $request->file('photos')) {
        foreach ($photos as $photo) {
          $timestamp = Carbon::now()->timestamp;
          $userId = auth()->id();
          $path = "public/user-$userId/post-{$post->id}/{$photo->hashName()}";
          Photo::create([
            'src' => Storage::url($path),
            'post_id' => $post->id,
          ])->save();
          Storage::disk('local')->put(
            $path,
            $photo->getContent()
          );
        };
      }
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
