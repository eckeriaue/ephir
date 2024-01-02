<?php

use function Livewire\Volt\{state};
use App\Models\Post;

state([
    'posts' => Post::all()
]);

?>

<section>
    @foreach($posts as $post)
    <article>
        {{$post}}
    </article>
    @endforeach
</section>
