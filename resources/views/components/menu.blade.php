<menu
    {{
        $attributes->merge([
            'class' => "
                fixed bg-white rounded-lg px-2.5 py-3 shadow list-none
                flex flex-col
            "
        ])
    }}
>
    {{ $slot }}
</menu>
