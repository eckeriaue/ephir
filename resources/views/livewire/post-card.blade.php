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

<article id="post-{{$post->id}}" class="text-gray-700 mb-7 bg-white rounded-md p-6 shadow-md">

    <div class="flex justify-between items-center pb-6">
        <h1 class="font-medium text-xl"> {{ $post->title }} </h1>
        <span class="text-gray-500 text-xs">
            {{ __('От') }}
            <time datetime="{{ $post->created_at }}"> {{ $post->created_at->format('d.m.Y в H:i') }} </time>
        <span>
    </div>

    <p class="min-h-64"> {{ $post->content }} </p>

    
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
        @guest
            <span class="text-xs" title="Авторизуйтесь, чтобы поставить лайк"> ❤️ {{ $this->postLikesCount }} </span>    
        @endguest
    </footer>

</article>