
<x-button
        x-data
        @mouseenter="$refs.previewImage.open"
        @mouseleave="$refs.previewImage.close"
        appearance="text"
    >
        <span class="ph ph-images text-18px"></span>
        <span
            class="fixed "
            x-cloak
            x-ref="previewImage"
            x-transition=""
            x-float.placement.top.bottom.flip.offset=""
        >
            Добавить изображение
        </span>
    </x-button>
