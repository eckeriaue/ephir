@props(['href'])

<a
    {{
        $attributes->merge([
            'href' => $href,
            'class' => "
            font-medium text-primary decoration-none
            underline-offset-2 hover:underline
            focus:underline focus:outline-none
            "
        ])
    }}
>
    {{ $slot }}
</a>
