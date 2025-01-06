<?php

namespace App\Listeners;

use App\Events\CreateUserEvent;
use App\Models\Profile;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateProfileForUser
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
    public function handle(CreateUserEvent $event): void
    {
        $profile = Profile::create([
            'user_id' => $event->user->id,
        ]);

    }
}
