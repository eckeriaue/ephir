<?php
    use function Livewire\Volt\{ state, computed };
    use App\Models\{Post, Like};

    state(['post']);

    $isLiked = computed(function () {
        return $this->post->likes->contains('user_id', auth()->id());
    });

    $postLikesCount = computed(fn() => $this->post->likes->count());

    $toggleLike = function() {
        $userId = auth()->id();
        $like = Like::where('post_id', $this->post->id)
            ->where('user_id', $userId)
            ->first();
        if ($like) $like->delete();
        else {
            Like::create([
                'post_id' => $this->post->id,
                'user_id' => $userId,
            ]);
        }
    };
?>

<article
    x-data="{
        isOpenComment: false,
        openComments() {
            this.isOpenComment = true
            const input = $refs.comment.querySelector('input[name=content]')
            input.focus()
        }
    }"
    id="post-{{$post->id}}"
    class="text-gray-700 mb-7 bg-white rounded-md p-6 transition-shadow hover:shadow"
>

    <div class="flex justify-between lg:items-center pb-6 flex-col lg:flex-row">
        <h1 class="font-medium text-xl"> {{ $post->title }} </h1>
        <span class="text-gray-500 text-xs">
            {{ __('От') }}
            <time datetime="{{ $post->created_at }}"> {{ $post->created_at->format('d.m.Y в H:i') }} </time>
        <span>
    </div>

    <div x-data="{ open: false, canReadMore: false }">
        <div
            :class="{'overflow-y-hidden': !open}"
            :style="{maxHeight: `${open ? $refs.p.offsetHeight : 440}px`}"
        >
            <p
                class="whitespace-pre-wrap break-all"
                x-ref="p"
                x-init="() => {
                    canReadMore = $refs.p.offsetHeight > 440 
                }"
            >{!! $post->content !!}</p>
        </div>
        <button
            class="text-center w-full text-xs font-medium uppercase"
            type="button"
            x-show="!open && canReadMore"
            @click="open = true"
        >
            Читать далее
        </button>
    </div>

    
    <footer class="text-gray-800 mt-8 flex items-center justify-between">

        <address class="text-gray-500 text-xs inline-block">
            {{ __('Автор') }}:
            <i>
                @if(auth()->id() === $post->user->id)
                {{ __('Вы') }}
                @else
                <a rel="author" href="#">{{ $post->user->name }}</a>
                @endif
            </i>
        </address>


            <fieldset class="flex items-center gap-x-2">
            <x-secondary-button  @click="openComments" type="button">
                💬
                {{$post->comments->count()}}
            </x-secondary-button>
            
            @auth
                @if($this->isLiked)
                <x-danger-button
                    type="button"
                    wire:loading.attr="disabled"
                    class="disabled:opacity-40"
                    wire:click="toggleLike"
                >
                    🤍
                    <span class="text-xs"> {{ $this->postLikesCount }} </span>
                </x-danger-button>
                @else
                <x-secondary-button
                    type="button"
                    wire:loading.attr="disabled"
                    class="disabled:opacity-40"
                    wire:click="toggleLike"
                >
                    ❤️
                    <span class="text-xs"> {{ $this->postLikesCount }} </span>
                </x-secondary-button>
                @endif
            @endauth
            </fieldset>
        @guest
            <span class="text-xs" title="Авторизуйтесь, чтобы поставить лайк"> ❤️ {{ $this->postLikesCount }} </span>    
        @endguest
    </footer>
    <div x-show="isOpenComment" 
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 scale-90"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        x-ref="comment"
    >
        <livewire:comments :$post />
    </div>
</article>