<?php

namespace App\Listeners;

use App\Events\SharePostEvent;
use App\Models\Profile;
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
        Profile::publish($event->post);
    }
}
