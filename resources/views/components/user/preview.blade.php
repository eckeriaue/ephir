@props(['user', 'created_at'])

@php
use Carbon\Carbon;
$createdAt = (new Carbon($created_at, new DateTimeZone('Europe/Moscow')))->locale('ru');
@endphp

<a class="group cursor-pointer flex w-fit items-center gap-x-3" href="{{ route('profile', ['id' => $user->profile->id]) }}">
    <x-user.avatar :user="$user" class="w-8 h-8" />
    <span class="flex flex-col">
        <span class="group-hover:underline text-[14px]"> {{ $user->name }}</span>
        <time
            datetime="{{ $createdAt->toIso8601String() }}"
            class="text-primary text-[12px]"
        > {{ $createdAt->diffForHumans() }}</time>
    </span>
</a>
