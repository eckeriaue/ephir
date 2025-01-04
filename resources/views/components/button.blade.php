@props(['type' => 'button', 'appearance' => 'primary'])
<button
    {{
        $attributes->merge([
            'type' => $type,
        ])
    }}
    @class([
        "
            uppercase text-xs inline-flex items-center
            px-4 py-2
            cursor-pointer disabled:cursor-not-allowed
            focus:outline-none rounded-lg
            focus:ring-2 focus:ring-secondary focus:ring-offset-2
        ",
        "
            bg-primary border
            border-transparent font-semibold
            text-white dark:text-gray-800
            tracking-widest hover:bg-primary
            focus:bg-primary
            active:bg-primary
            transition ease-in-out duration-150
        " => $appearance === 'primary',
        "
            bg-white dark:bg-gray-800 border border-gray-300
            dark:border-gray-500 font-semibold
            text-gray-700 dark:text-gray-300
            tracking-widest shadow-sm hover:bg-gray-50
            dark:hover:bg-gray-700 focus:outline-none focus:ring-2
            focus:ring-indigo-500 focus:ring-offset-2
            dark:focus:ring-offset-gray-800 disabled:opacity-25
            transition ease-in-out duration-150
        " => $appearance === 'text',
    ])
>
    {{ $slot }}
</button>
