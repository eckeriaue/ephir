
<x-button
        x-data="{
            get maxFileSize() {
                return 2048
            },
            isOpen: false,
            validateAndSendEvent(event) {
                const files = Array.from(event.target.files)
                if (files.some(file => {
                    return file.size >= this.maxFileSize
                })) {
                    const expectedFile = files.find(file => file.size >= this.maxFileSize)
                    alert(`Разрер файла '${expectedFile.name}' слишком большой. Максимальный размер файла: ${this.maxFileSize} кбайт`)
                } else {
                    $dispatch('toolbar:load-images', { files })
                }
            }
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
        @change="validateAndSendEvent($event)"
        accept="image/*"
        name="attachmentFiles[]"
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
