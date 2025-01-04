@props(['user', 'createdAt'])

@php
    $makeAvatarPlaceholder = fn() => "https://robohash.org/{$user->id}"
@endphp

<article class="bg-white rounded-xl shadow-sm mb-4 p-5">

    <header class="flex gap-x-3 mb-4">
        <div x-data class="w-8 h-8 flex items-center justify-center  overflow-hidden rounded-full bg-primary">
            <img
                x-cloak
                class="block w-8 h-8"
                @load="$refs.spinner.remove"
                src="{{$user->avatar ? $user-avatar : $makeAvatarPlaceholder()}}"
            >
            <x-loader size="32" x-ref="spinner" />
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
