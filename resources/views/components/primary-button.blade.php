@props(['appearance' => 'primary'])

<button
    {{
        $attributes->merge([
            'type' => 'submit',
            'class' => "
                text-white px-3 py-2 font-500 bg-#1F883D
                border border-solid border-#1F2328 rounded-6px
            "
        ])
    }}
>
    {{ $slot }}
</button>
