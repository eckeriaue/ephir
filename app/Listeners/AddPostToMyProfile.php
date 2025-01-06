<?php

namespace App\Listeners;

use App\Events\CreatePostEvent;
use App\Models\Profile;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class AddPostToMyProfile
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(CreatePostEvent $event): void
    {
        DB::table('profile_posts')->insert([
            'profile_id' => $event->post->user->profile->id,
            'post_id' => $event->post->id
        ]);
        //
    }
}
