<?php

namespace App\Listeners;

use App\Events\SharePostEvent;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class PublishPostInProfile
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
    public function handle(SharePostEvent $event): void
    {
        DB::table('profile_posts')->insert([
            'profile_id' => $event->post->user->profile->id,
            'post_id' => $event->post->id
        ]);
        //
    }
}
