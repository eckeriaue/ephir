@props(['value'])

<label
    {{ $attributes->merge([
        'class' => 'text-#1F2328 block font-600 text-14px'
    ])
    }}
>
    {{ $value ?? $slot }}
</label>
