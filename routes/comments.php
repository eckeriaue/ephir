<?php
use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')
    ->prefix('api/v1/comments')
    ->controller(CommentController::class)
    ->group(function() {
        Route::post('store/{postId}', 'store')->name('comments.store');
});
