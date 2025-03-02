<output
    data-script="
        init
        transition my *opacity to 1 then
        wait 3s then
        transition my *opacity to 0 then
        remove me
    "
    style="opacity:0"
    class="z-10 fixed bottom-4 text-[14px] truncate right-4 p-4 bg-white rounded-xl shadow-xs"
>
    {{ $slot }}
</output>
