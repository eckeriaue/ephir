<menu
    {{
        $attributes->merge([
            'class' => "
                fixed bg-white flex flex-col truncate rounded-md p-2 shadow list-none
            "
        ])
    }}
>
    {{ $slot }}
</menu>
