@props(['post'])
<x-app-layout>
    <main class="px-4 bg-white w-fit mx-auto pt-12 grid grid-cols-[repeat(2,_max(calc(50dvw_-_32px)))] gap-x-2">
        <div class="truncate overflow-auto">
            {!! $post->content_html !!}
        </div>

        @if (count($post->images) > 0)
            <div class="sticky top-2 isolate">
                <swiper-container
                    slides-per-view="1"
                    speed="500"
                    space-between="24"
                    navigation="true"
                    class="rounded-2xl -z-10 relative overflow-hidden"
                >
                @foreach($post->images as $image)
                    <swiper-slide
                        class="overflow-hidden flex rounded-2xl items-center justify-center"
                    >
                    
                    <button
                        type="button"
                        data-hx-trigger="click"
                        data-hx-target="body"
                        data-hx-get="{{
                            route('hx.image-preview', (array) literal(imageId: $image->id))
                        }}"
                        data-hx-swap="afterbegin"
                        class="cursor-pointer"
                    >
                        <img
                            id="imageId{{$image->id}}"
                            src="{{ $image->src }}"
                            class="object-cover min-w-full"
                        >
                    </button>
                    </swiper-slide>
                @endforeach
                </swiper-container>
            </div>
        @endif
    </main>
</x-app-layout>

@pushOnce('scripts')
    @vite('resources/js/slider.js')
@endPushOnce
