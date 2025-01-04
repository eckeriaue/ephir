@props(['post'])

@php
    $makeAvatarPlaceholder = fn() => "https://robohash.org/{$post->user->id}"
@endphp

<article class="bg-white rounded-xl shadow-sm mb-4 p-5">

    <header class="flex gap-x-3">
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

    <div class="my-4">
        {!! $post->content_html !!}
    </div>



    @if (count($post->images) > 0)
        <swiper-container
            slides-per-view="1"
            speed="500"
            css-mode="true"
            space-between="24"
            navigation="true"
            class="rounded-2xl overflow-hidden"
        >
            @foreach($post->images as $image)
                <swiper-slide>
                    <div class="bg-cover bg-no-repeat bg-center rounded-2xl h-500px" style="background-image: url('{{ $image->src }}')">
                    </div>
                </swiper-slide>
            @endforeach
        </swiper-container>
    @endif
</article>
