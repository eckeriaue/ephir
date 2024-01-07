<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Like;
use Illuminate\Http\Request;
use App\Models\Post;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;


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
            ->with('user', function($query) {
                return $query->select('id', 'name');
            })
            ->withCount('likes')
            ->with('myLike')
            ->withCount('comments')
            ->where('is_published', '>', 0)
            ->offset($offset)
            ->limit($limit)
            ->orderBy('created_at', 'desc')
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
        if (empty($title) || empty($content)) {
            throw new BadRequestException('title or content is empty');
        }
        $post = Post::query()->create([
            'title' => $title,
            'content' => $content,
            'user_id' => auth()->id()
        ]);
        return Post::query()->with('user')->firstWhere('id', $post->id);
    }

    public function comments(Request $request, int $postId)
    {
        $offset = (int)$request->input('offset', 0);
        $limit = (int)$request->input('limit',10);
        return Comment::query()
            ->offset($offset)
            ->limit($limit)
            ->with('user')
            ->where('post_id', $postId)
            ->get();
    }

    public function addComment(Request $request, int $postId)
    {
        return Comment::query()->create([
            'content'=> $request->input('comment'),
            'post_id' => $postId,
            'user_id' => auth()->id()
        ]);
    }
    public function like(Request $request, int $postId)
    {
        if (Like::query()->where([
            'user_id' => auth()->id(),
            'post_id' => $postId
        ])->exists()) {
            Like::query()->delete();
            return response()->json([
                'likes' => Like::query()->count(),
                'my_like' => null,
            ]);
        }
        $likesCount = Like::query()->create([
            'post_id' => $postId,
            'user_id' => auth()->id(),
        ])->count();
        return response()->json([
            'likes' => $likesCount,
            'my_like' => Like::query()->where('user_id', auth()->id())->first()
        ]);
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
