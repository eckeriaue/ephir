<?php


use function Livewire\Volt\{state, mount};
use App\Models\Post;

state([
    'posts' => []
]);


mount(function() {
    $this->posts = Post::all()->reverse();
});

?>


    <section
    class="mx-auto mt-8 max-w-full xl:max-w-4xl px-4">

        @auth
            <livewire:create-post-modal wire:save="$refresh" />
        @endauth

        
        <section>
            @foreach($posts as $post)
            <article>
                {{$post}}
            </article>
            @endforeach
        </section>

    </section>