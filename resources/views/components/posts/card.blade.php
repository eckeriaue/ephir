@props(['post'])

<article class="bg-white rounded-xl shadow-xs mb-4 p-5">

    <header>
        <x-user.preview :user="$post->user" :created_at="$post->created_at" />
    </header>

    <div class="my-4 [&_a]:underline [&_a]:text-secondary [&_h1]:text-[24px]">
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
                    <div
                        class="overflow-hidden flex items-center justify-center"
                        style="height:420px;"
                    >
                        <img
                            src="{{ $image->src }}"
                            class="object-cover min-w-full"
                        >
                    </div>
                </swiper-slide>
            @endforeach
        </swiper-container>
    </div>
    @endif

    @php
        $commentId = "comments-wrapper-{$post->id}";
    @endphp
    <div class="mt-4 flex justify-between">
        <x-posts.comment-button :$commentId :$post />
        <x-posts.share-button :$post />
    </div>
    <div id="{{ $commentId }}" style="height:0"></div>

</article>
@pushOnce('scripts')
    @vite('resources/js/slider.js')
@endPushOnce
