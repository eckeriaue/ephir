@props(['disabled' => false])

<input
    @disabled($disabled)
    {{ $attributes->merge([
        'class' => "
            outline-2 px-2 outline
            outline-surface-200 h-8
            focus:outline-secondary
            rounded-[6px]
            text-[14px]
            placeholder:text-surface
        "
    ]) }}
>
