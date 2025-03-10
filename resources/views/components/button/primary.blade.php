@props(['type' => 'button', 'as' => 'button'])
<{{ $as }}
    {{
        $attributes->merge([
            'type' => $type,
        ])
    }}
    @class([
        "
            uppercase text-xs inline-flex items-center decoration-none
            px-4 py-2
            cursor-pointer disabled:cursor-not-allowed
            focus:outline-hidden rounded-lg
            focus:ring-2 focus:ring-secondary focus:ring-offset-2
            bg-primary border dark:bg-surface
            disabled:opacity-80
            border-transparent font-semibold
            text-white
            tracking-widest hover:bg-primary
            focus:bg-zinc-600
            active:bg-zinc-600
            transition ease-in-out duration-150
        ",
    ])
>
    {{ $slot }}
</{{ $as }}>