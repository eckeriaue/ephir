@props(['user', 'createdAt'])

@php
    $makeAvatarPlaceholder = fn() => "https://robohash.org/{$user->id}"
@endphp

<article class="bg-white rounded-xl shadow-sm mb-4 p-5">

    <header class="flex gap-x-3">
        <div class="w-8 h-8 flex items-center justify-center  overflow-hidden rounded-full bg-primary">
            <img
                class="block w-8 h-8"
                src="{{$user->avatar ? $user-avatar : $makeAvatarPlaceholder()}}"
            >
        </div>
        <div class="flex flex-col">
            <span> {{ $user->name }}</span>
            <a href="#" class="text-primary decoration-none hover:underline">
                <time> {{ (new \Carbon\Carbon($createdAt, new DateTimeZone('Europe/Moscow')))->locale('ru')->diffForHumans() }}</time>
            </a>
        </div>
    </header>

    <div>
        {{ $slot }}
    </div>
</article>
