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
            focus:outline-none rounded-lg
            focus:ring-2 focus:ring-secondary focus:ring-offset-2
            bg-primary border
            disabled:opacity-80
            border-transparent font-semibold
            text-white
            tracking-widest hover:bg-primary
            focus:bg-primary
            active:bg-primary
            transition ease-in-out duration-150
        ",
    ])
>
    {{ $slot }}
</{{ $as }}>
