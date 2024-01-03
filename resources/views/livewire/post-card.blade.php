<?php
    use function Livewire\Volt\{state};

    state(['post']);
?>

<article class="text-gray-700 mb-7 bg-white rounded-md p-6">

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

</article>