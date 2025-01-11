<?php
namespace App\Http\Controllers;

use App\Events\SharePostEvent;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\{Post,PostImage};
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;
use Str;

class PostController extends Controller
{
    /**
     * @return RedirectResponse
     */
    public function create(Request $request): RedirectResponse
    {
        $postName = $request->get('postName');
        $postContent = $request->get('postContent');
        $post = Post::create([
            'title' => $postName,
            'content_html' => $postContent,
            'user_id' => $request->user()->id,
        ]);
        $post->save();


        if ($attachmentFiles = $request->file('attachmentFiles')) {
            $userId = auth()->id();
            foreach ($attachmentFiles as $attachmentFile) {
                $filename = $attachmentFile->getClientOriginalName() . Str::random(length: 10) . '.webp';
                $path = "posts/user-$userId-post-{$request->user()->id}/$filename";
                Storage::disk('public')->put(
                    $path,
                    Image::read($attachmentFile)->toWebp(90)->toFilePointer(),
                );
                PostImage::create([
                    'post_id' => $post->id,
                    'src' => Storage::url($path),
                ])->save();
            }
        }

        event(new SharePostEvent($post));

        return to_route('index');
    }
    /**
     * @return View
     */
    public function show(Request $request): View {
        return view('index', [
            'posts' => Post::orderBy('created_at', 'desc')
                ->with('user')
                ->with('comments')
                ->paginate(20)
        ]);
    }

    public function read(int $id): View {
        return view('read-post', ['id' => $id]);
    }
}
