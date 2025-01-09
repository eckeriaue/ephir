<menu
    {{
        $attributes->merge([
            'class' => "
                fixed bg-white rounded-lg p-1 shadow list-none
                flex flex-col
            "
        ])
    }}
>
    {{ $slot }}
</menu>
