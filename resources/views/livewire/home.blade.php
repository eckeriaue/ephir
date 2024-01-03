<?php


use function Livewire\Volt\{ state, mount, computed };
use App\Models\Post;

state([
    'posts' => [],
]);


$getPosts = function(int $offset = 0, int $limit = 5) {
    foreach (Post::orderBy('id', 'desc')->offset($offset)->limit($limit)->get() as $post) {
        $this->posts[] = $post;
    };
    // todo:
    // return Post::count() >= count($this->posts);
};

mount($getPosts);

?>


    <section
    x-data="{
        offset: 0,
        limit: 5,
    }"
    class="mx-auto mt-8 max-w-full xl:max-w-4xl px-4">
        @auth
            <livewire:create-post-modal @save="getPosts" />
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
                wire:key="{{ $post->id }}" />
            @endforeach

            @empty($posts)
                <p> {{ __("Здесь пока ничего нет...") }} </p>
            @endempty
        </section>

        <div class="pb-4">
            {{Post::count()}}
            {{count($posts)}}
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

    </section>