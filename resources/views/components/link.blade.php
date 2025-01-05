@props(['href'])

<a
    {{
        $attributes->merge([
            'href' => $href,
            'class' => "
            font-medium text-black decoration-none
            underline-offset-2 hover:underline
            focus:underline focus:outline-none
            dark:text-white
            "
        ])
    }}
>
    {{ $slot }}
</a>
