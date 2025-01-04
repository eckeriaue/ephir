@props(['post'])

@php
    $makeAvatarPlaceholder = fn() => "https://robohash.org/{$post->user->id}"
@endphp

<article class="bg-white rounded-xl shadow-sm mb-4 p-5">

    <header class="flex gap-x-3 mb-4">
        <div x-data class="w-8 h-8 flex items-center justify-center  overflow-hidden rounded-full bg-primary">
            <img
                x-cloak
                class="block w-8 h-8"
                @load="$refs.spinner.remove"
                src="{{$post->user->avatar ? $post->user->avatar : $makeAvatarPlaceholder()}}"
            >
            <x-loader size="32" x-ref="spinner" />
        </div>
        <div class="flex flex-col">
            <span class="text-14px"> {{ $post->user->name }}</span>
            <a href="#" class="text-primary text-12px decoration-none hover:underline">
                <time> {{ (new \Carbon\Carbon($post->created_at, new DateTimeZone('Europe/Moscow')))->locale('ru')->diffForHumans() }}</time>
            </a>
        </div>
    </header>

    <div>
        {!! $post->content_html !!}
    </div>
</article>
