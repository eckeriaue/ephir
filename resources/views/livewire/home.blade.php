<?php


use function Livewire\Volt\{ on,state, mount, computed };
use App\Models\Post;

state([
    'posts',
]);


$getPosts = function(int $offset = 0, int $limit = 5) {
    $this->posts = Post::orderBy('id', 'desc')->offset($offset)->limit($limit)->get();
};

on(['create-post' => $getPosts]);

mount($getPosts);

?>

    <section
        x-data="{
            offset: 0,
            limit: 5,
        }"
        class="mx-auto mt-8 max-w-full md:max-w-[656px] px-4"
    >
        @auth
            <div
                wire:loading.class.remove="opacity-0 h-0 pt-0"
                wire:loading.class="h-10 pt-4 opacity-100"
                class="pt-0 h-0 delay-300 opacity-0 overflow-hidden transition-all font-medium">
                {{ __('Загрузка постов...') }}
            </div>
        @endauth


        <section class="mt-8">
            @foreach($posts as $post)
            <livewire:post-card
                :$post
                class="pb-7"
                wire:key="post_id-{{ $post->id }}" />
            @endforeach

        </section>
        @empty($posts)
            <p> {{ __("Здесь пока ничего нет...") }} </p>
        @else
        <div class="pb-4">
            <x-primary-button
                type="button"
                class="w-full inline-block text-center justify-center"
                wire:loading.attr="disabled"
                wire:click="getPosts(offset += 5, limit += 5)"
            >
                Загрузить ещё
            </x-primary-button>

            <div
                wire:loading.class.remove="opacity-0 h-0 pt-0"
                wire:loading.class="h-10 pt-4 opacity-100"
                class="pt-0 h-0 delay-300 opacity-0 w-full text-center overflow-hidden transition-all font-medium">
                {{ __('Грузим ещё...') }}
            </div>
        </div>
        @endempty

    </section>