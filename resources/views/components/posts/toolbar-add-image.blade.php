
<x-button
        x-data="{
            isOpen: false,
            inputElement: Object.assign(document.createElement('input'), {
                type: 'file',
                multiple: true,
                onchange: event => {
                    $dispatch('toolbar:load-images', { files: Array.from(event.target.files) })
                }
            })
        }"
        appearance="text"
        x-ref="button"
        @mouseenter="isOpen = true"
        @mouseleave="isOpen = false"
        @click="inputElement.click()"
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
