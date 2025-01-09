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
            bg-white border border-surface
            font-semibold
            tracking-widest shadow-sm
            focus:outline-none focus:ring-2
            focus:ring-indigo-500 focus:ring-offset-2
            disabled:opacity-25
            transition ease-in-out duration-150
        ",
    ])
>
    {{ $slot }}
</{{ $as }}>
