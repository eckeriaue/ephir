<x-app-layout>

        <form
            x-data="{
                files: [],
            }"
            enctype="multipart/form-data"
            @toolbar:load-images="files = [...files, ...$event.detail.files]"
            method="POST"
            action="{{ route('api.posts.create', absolute: false) }}"
            class="relative bg-white isolate mt-16 max-w-[510px] mx-auto p-5 rounded-xl"
        >
            @csrf
            <h1 class="font-bold mb-6 text-primary text-18px">Создать публикацию</h1>

            <x-input-label for="postName"> Название </x-input-label>
            <x-text-input id="postName" name="postName" required class="mb-4 mt-1" />

            <div>
                <x-posts.toolbar-add-image />
            </div>

            <x-editor class="mt-2 mb-4" name="postContent" />

            <swiper-container
                slides-per-view="3"
                speed="500"
                css-mode="true"
                x-ref="slider"
                space-between="24"
                navigation="true"
                class="mt-4 -z-10"
            >
                <template x-for="file in files">
                    <swiper-slide style="position:relative">
                        <div style="height:160px;width:160px;" class="border border-surface border-solid object-cover overflow-hidden flex items-center justify-center rounded-3xl">
                            <img :src="URL.createObjectURL(file)" loading="lazy" style="pointer-events:none">
                            <x-loader class="size-6" />
                        </div>
                    </swiper-slide>
                </template>
            </swiper-container>

            <div class="flex justify-end gap-x-3 sticky z-[3] bottom-0 bg-white p-1">
                <x-button.primary type="submit">Опубликовать</x-button.primary>
            </div>
        </form>

        @vite('resources/js/slider.js')

</x-app-layout>
