@props(['as' => 'span'])

<{{ $as }}
    {{ $attributes->merge() }}
    {{
    $attributes->tw("
    cursor-pointer px-3
        rounded-inherit
        h-9 gap-x-2
        font-medium [&_.ph]:font-medium [&_.ph]:text-[16px]
        flex items-center hover:bg-gray-100
        text-zinc-500 hover:text-zinc-900 text-[16px]
    ")
    }}
>
    {{ $slot }}
</{{ $as }}>
