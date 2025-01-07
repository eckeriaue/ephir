@props(['post'])

@php
use Carbon\Carbon;
$createdAt = (new Carbon($post->created_at, new DateTimeZone('Europe/Moscow')))->locale('ru');
@endphp

<a class="group cursor-pointer flex w-fit items-center gap-x-3" href="{{ route('profile', ['id' => $post->user->profile->id]) }}">
    <x-user.avatar :user="$post->user" class="w-8 h-8" />
    <span class="flex flex-col">
        <span class="group-hover:underline text-[14px]"> {{ $post->user->name }}</span>
        <time
            datetime="{{ $createdAt->toIso8601String() }}"
            class="text-primary text-[12px]"
        > {{ $createdAt->diffForHumans() }}</time>
    </span>
</a>
