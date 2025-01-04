
<x-button
        x-data="{
            isOpen: false,
        }"
        appearance="text"
        x-ref="button"
        @mouseenter="isOpen = true"
        @mouseleave="isOpen = false"
        @click="$refs.inputElement.click()"
    >
    <input
        type="file"
        multiple
        x-ref="inputElement"
        @change="$dispatch('toolbar:load-images', { files: Array.from($event.target.files) })"
        accept="image/*"
        name="attachmentFiles"
        hidden
    >
    <span class="ph ph-images text-18px"></span>
    <span
        x-show="isOpen"
        x-cloack
        x-transition
        x-anchor.bottom.bottom-start.bottom-end.top.top-start.top-end.offset.4="$refs.button"
        class="bg-white p-1 rounded-md shadow"
    >
        Добавить изображение
    </span>
</x-button>
