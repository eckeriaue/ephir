<?php


use function Livewire\Volt\{state, mount};
use App\Models\Post;

state([
    'posts' => []
]);

$getPosts = function() {
    $this->posts = Post::all()->reverse();
};

mount($getPosts);

?>


    <section
    class="mx-auto mt-8 max-w-full xl:max-w-4xl px-4">

        @auth
            <livewire:create-post-modal @save="getPosts" />
        @endauth

        
        <section>
            <div wire:loading> Загрузка постов... </div>
            @foreach($posts as $post)
            <article wire:key="{{ $post->id }}">
                {{$post}}
            </article>
            @endforeach
        </section>

    </section>