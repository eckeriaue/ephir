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
            <div
                wire:loading.class.remove="opacity-0 h-0 pt-0"
                wire:loading.class="h-10 pt-4 opacity-100"
                class="pt-0 h-0 delay-300 opacity-0 overflow-hidden transition-all font-medium">
                Загрузка постов...
            </div>
        @endauth


        <section class="mt-8">
            @foreach($posts as $post)
            <article class="pt-4" wire:key="{{ $post->id }}">
                {{$post}}
            </article>
            @endforeach
        </section>

    </section>