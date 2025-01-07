@props(['user' => auth()->user(), 'as' => 'div'])
@php
    $makeAvatarPlaceholder = fn() => "https://robohash.org/{$user->id}";
@endphp

<{{$as}}
    {{ $attributes->merge() }}
>
<span
    class="w-full h-full flex items-center justify-center  overflow-hidden rounded-full bg-primary">
        <img
        class="block max-h-full w-full h-full"
        data-script="
            on load
            if the next <span#loader />
                remove the next <span#loader/>
            end
        "
        loading="lazy"
        src="{{ $user->avatar ?: $makeAvatarPlaceholder() }}"
    >
        <x-loader size="100%" id="loader"  />
    </span>
</{{$as}}>
