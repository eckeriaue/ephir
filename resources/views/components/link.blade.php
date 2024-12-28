@props(['href'])

<a
    {{
        $attributes->merge([
            'href' => $href,
            'class' => "
                text-#0969DA underline
            "
        ])
    }}
>
    {{ $slot }}
</a>
