<div
    class="fixed inset-0
    transition-all"
    x-show="isOpen"
>

    <div
        class="fixed inset-0 bg-primary w-full h-dvh"
        @click="isOpen = false"
        style="opacity:.4;backdrop-filter: blur(0.01px);"
    ></div>

    <div style="z-index:2;"
        id="createPostModalContainer"
        x-transition
        x-show="isOpen"
        class="relative bg-white mt-16 max-w-[510px] mx-auto p-5 rounded-xl
        transition ease-in-out duration-150"
    >
        <h1 class="font-bold mb-6 text-primary text-18px">Создать публикацию</h1>

        <x-input-label for="postName"> Название </x-input-label>
        <x-text-input id="postName" class="mb-4 mt-1" />

        <div id="editor" class="
            border-2 border-surface focus-within:border-secondary border-solid mb-4 p-2 rounded-lg"></div>
        <div class="flex justify-end gap-x-3">
            <x-button appearance="text" @click="isOpen = false">отменить</x-button>
            <x-button>сохранить</x-button>
        </div>
    </div>
    @vite('resources/js/editor.js')
</div>
