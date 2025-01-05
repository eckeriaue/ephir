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
        class="block w-full h-full"
        data-script="on load remove the next <span/>"
        src="{{$user->avatar ? $user->avatar : $makeAvatarPlaceholder()}}"
    >
        <x-loader size="100%" id="loader"  />
    </span>
</{{$as}}>
