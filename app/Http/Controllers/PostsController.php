<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Http\Request;
use App\Models\Post;


class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __invoke(Request $request)
    {
        $offset = (int)$request->query('offset', 0);
        $limit = (int)$request->query('limit',10);
        $posts = Post::query()
            ->withCount('likes')
            ->with('comments')
            ->where('is_published', '>', 0)
            ->offset($offset)
            ->limit($limit)
            ->get();
        return $posts;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $title = $request->input('title');
        $content = $request->input('content');
        $post = Post::query()->create([
            'title' => $title,
            'content' => $content,
            'user_id' => auth()->id()
        ]);
        return $post->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
