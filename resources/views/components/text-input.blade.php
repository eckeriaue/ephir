@props(['disabled' => false])

<input
    @disabled($disabled)
    {{ $attributes->merge([
        'class' => "
            outline-2 px-2 outline-solid
            outline-#D1D9E0 h-8
            focus:outline-#0969DA
            rounded-6px
            text-14px
            placeholder:text-#59636E
        "
    ]) }}
>
