@props(['post'])


<article class="bg-white rounded-xl shadow-sm mb-4 p-5">

    <header class="flex gap-x-3">
        <x-user.avatar :user="$post->user" class="w-8 h-8" />
        <div class="flex flex-col">
            <span class="text-[14px]"> {{ $post->user->name }}</span>
            <a href="#" class="text-primary text-[12px] decoration-none hover:underline">
                <time> {{ (new \Carbon\Carbon($post->created_at, new DateTimeZone('Europe/Moscow')))->locale('ru')->diffForHumans() }}</time>
            </a>
        </div>
    </header>

    <div class="my-4">
        {!! $post->content_html !!}
    </div>



    @if (count($post->images) > 0)
    <div class="isolate">
        <swiper-container
            slides-per-view="1"
            speed="500"
            space-between="24"
            navigation="true"
            class="rounded-2xl -z-10 relative overflow-hidden"
        >
            @foreach($post->images as $image)
                <swiper-slide>
                    <div class="bg-cover bg-no-repeat bg-center rounded-2xl h-[500px]" style="background-image: url('{{ $image->src }}')">
                    </div>
                </swiper-slide>
            @endforeach
        </swiper-container>
    </div>
    @endif

    <x-posts.share-button class="mt-4" :$post />
</article>
@pushOnce('scripts')
    @vite('resources/js/slider.js')
@endPushOnce
