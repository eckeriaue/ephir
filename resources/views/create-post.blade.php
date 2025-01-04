<x-app-layout>

        <form
            x-data="{
                files: [],
            }"
            @toolbar:load-images="files = $event.detail.files"
            class="relative bg-white mt-16 max-w-[510px] mx-auto p-5 rounded-xl"
        >
            <h1 class="font-bold mb-6 text-primary text-18px">Создать публикацию</h1>

            <x-input-label for="postName"> Название </x-input-label>
            <x-text-input id="postName" class="mb-4 mt-1" />

            <div id="editor" class="border-2 border-surface focus-within:border-secondary border-solid mb-4 p-2 rounded-lg"></div>

            <div>
                <div>
                    <x-posts.toolbar-add-image />
                </div>
                <template x-for="preview in files.map(file => URL.createObjectURL(file))">
                    <img :src="preview" >
                </template>
            </div>

            <div class="flex justify-end gap-x-3 sticky z-[3] bottom-0 bg-white p-1">
                <x-button type="submit">Опубликовать</x-button>
            </div>
        </form>

        @vite('resources/js/editor.js')

</x-app-layout>
