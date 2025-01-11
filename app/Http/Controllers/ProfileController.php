<?php

namespace App\Http\Controllers;

use App\Events\SharePostEvent;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use App\Models\{Post,Profile};
use Illuminate\Http\Response;

class ProfileController extends Controller
{
    /**
     * @return Response
     */
    public function share(int $postId): Response {
        event(new SharePostEvent(Post::find($postId)));
        return response(status: 200, content: view('hx.toast', ['slot' => 'Опубликовано на вашей странице']));
    }
    /**
     * Display a listing of the resource.
     * @return View
     */
    public function index(int $id): View
    {
        return view('profile', (array) literal(
            profile: Profile::find($id),
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
