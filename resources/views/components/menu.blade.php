<menu
    {{
        $attributes->merge([
            'class' => "
                fixed bg-white truncate rounded-md px-4 py-2 shadow list-none
            "
        ])
    }}
>
    {{ $slot }}
</menu>
