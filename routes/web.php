<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;
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
});

Route::get('/', function (Request $request) {
    $offset = $request->query('offset', 0);
    $limit = $request->query('limit', 10);
    return Inertia::render('Posts', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'posts' => Post::orderBy('id', 'desc')->offset($offset)->limit($limit)->get(),
    ]);
})->name('posts');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
