<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;



Route::get('/', function (Request $request) {
    $offset = $request->query('offset', 0);
    $limit = $request->query('limit', 20);
    return Inertia::render('Posts', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'totalPosts' => Post::count(),
        'posts' => Post::orderBy('id', 'desc')
            ->offset($offset)
            ->limit($limit)
            ->withCount('comments')
            ->with('user')
            ->get()->map(function(Post $post) {
                $post->content = $post->shortContent();
                return $post;
            }),
    ]);
})->name('posts');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/api.php';
require __DIR__.'/auth.php';
