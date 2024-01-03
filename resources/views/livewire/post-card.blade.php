<?php
    use function Livewire\Volt\{state};

    state(['post']);
?>

<article class="text-gray-700">

    <div class="flex justify-between items-center">
        <h1> {{ $post->title }} </h1>
        <span class="text-gray-400 text-xs">
            Создан:
            <time datetime="{{ $post->created_at }}"> {{ $post->created_at }} </time>
        <span>
    </div>

    <p> {{ $post->content }} </p>

    <address class="text-gray-400 text-xs">
        Автор
        <a rel="author" href="#">{{ $post->user->name }}</a>
    </address>

</article>