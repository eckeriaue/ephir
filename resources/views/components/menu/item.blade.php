@props(['as' => 'span'])

<{{ $as }}
    @tw("
    cursor-pointer px-3
        rounded-lg
        h-9 gap-x-2
        font-medium [&_.ph]:font-medium [&_.ph]:text-[16px]
        flex items-center hover:bg-gray-100
        text-primary text-[14px]
    ")
>
    {{ $slot }}
</{{ $as }}>
