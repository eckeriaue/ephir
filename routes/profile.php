<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

Route::prefix('profile')->controller(ProfileController::class)->group(function() {
    Route::get('{userId}', 'index')->where('userId', '[0-9]+')->name('profile');
});
