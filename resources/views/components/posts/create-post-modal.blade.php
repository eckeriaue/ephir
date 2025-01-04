<div
    data-script="
        on closeModal
            remove me
        end
    "
    class="fixed inset-0
    transition-all"
>

    <div
        class="fixed inset-0 bg-primary w-full h-dvh"
        data-script="on click trigger closeModal"
        style="opacity:.4;backdrop-filter: blur(0.01px);"
    ></div>

    <div style="z-index:2;"
        id="createPostModalContainer"
        class="relative bg-white mt-16 max-w-[510px] mx-auto p-5 rounded-xl
        transition ease-in-out duration-150"
    >
        <div id="editor"></div>
        @vite('resources/js/editor.js')
        <div class="flex justify-end gap-x-3">
            <x-button appearance="text" data-script="on click trigger closeModal">отменить</x-button>
            <x-button>сохранить</x-button>
        </div>
    </div>
</div>
