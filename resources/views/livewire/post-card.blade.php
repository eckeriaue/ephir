<?php
    use function Livewire\Volt\{ state, computed };
    use App\Models\{Post, Like};

    state(['post']);

    $isLiked = computed(function () {
        return $this->post->likes->contains('user_id', auth()->id());
    });

    $like = function() {
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

<article class="text-gray-700 mb-7 bg-white rounded-md p-6 shadow-md">

    <div class="flex justify-between items-center pb-6">
        <h1 class="font-medium text-xl"> {{ $post->title }} </h1>
        <span class="text-gray-500 text-xs">
            {{ __('От') }}
            <time datetime="{{ $post->created_at }}"> {{ $post->created_at->format('d.m.Y в H:i') }} </time>
        <span>
    </div>

    <p class="min-h-64"> {{ $post->content }} </p>

    <address class="text-gray-500 text-xs mt-8 inline-block">
        {{ __('Автор') }}
        <a rel="author" href="#">{{ $post->user->name }}</a>
    </address>

    <footer>
        <button
            type="button"
            wire:loading.attr="disabled"
            class="disabled:opacity-40 inline-flex items-center gap-x-2"
            wire:click="like"
        >
            @if($this->isLiked)
            ❤️
            @else
            🤍
            @endif
            <span class="text-xs"> {{ $post->likes->count() }} </span>
        </button>
    </footer>

</article>