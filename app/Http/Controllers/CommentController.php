<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use function EditorHelpers\json_to_html;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return void
     */
    public function index(): void
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * @return View
     */
    public function store(Request $request, int $postId): View
    {
        $post = Post::find($postId);
        $content = $request->get('comment');
        $comment = new Comment;
        $comment->post_id = $post->id;
        $comment->user_id = $request->user()->id;
        $comment->content_json = json_encode($content);
        $comment->content_html = json_to_html($content);
        $comment->save();
        return view('components.posts.comment', [
            'comment' => $comment,
            'post' => $post,
            'class' => 'animate-open-y',
        ]);
    }

    /**
     * Display the specified resource.
     * @return void
     */
    public function show(Comment $comment): void
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     * @return void
     */
    public function edit(Comment $comment): void
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * @return void
     */
    public function update(Request $request, Comment $comment): void
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @return void
     */
    public function destroy(Comment $comment): void
    {
        //
    }
}
