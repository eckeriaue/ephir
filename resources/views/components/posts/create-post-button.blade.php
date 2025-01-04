@auth
<div class="w-full mb-4">
    <x-button
        style="width:100%"
        as="a"
        href="{{ route('posts.create') }} "
    >
        <span class="inline-flex gap-x-2">
            <span> Что у вас нового, {{ auth()->user()->name }}? </span>
        </span>
    </x-button>
</div>
@endauth
