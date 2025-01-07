<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

Route::prefix('profile')->controller(ProfileController::class)->group(function() {
    Route::get('{id}', 'index')->where('userId', '[0-9]+')->name('profile');
});

Route::middleware('auth')->prefix('api/v1')->group(function() {
    Route::prefix('profile')->controller(ProfileController::class)->group(function() {
        Route::patch('{postId}', 'share')->name('api.profile.share-post');
    });
});
