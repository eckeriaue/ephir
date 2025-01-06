<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use App\Models\{Post,User};

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return View
     */
    public function index(int $userId): View
    {
        return view('profile', (array) literal(
            user: User::find($userId),
            posts: Post::all(),
        ));
    }

    /**
     * Show the form for creating a new resource.
     * @return void
     */
    public function create(): void
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * @return void
     */
    public function store(Request $request): void
    {
        //
    }

    /**
     * Display the specified resource.
     * @return void
     */
    public function show(Profile $profile): void
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     * @return void
     */
    public function edit(Profile $profile): void
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * @return void
     */
    public function update(Request $request, Profile $profile): void
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @return void
     */
    public function destroy(Profile $profile): void
    {
        //
    }
}
