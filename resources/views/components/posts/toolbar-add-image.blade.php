
<x-tooltip>
    <x-slot:target>
        <x-button.text
                x-data="{
                    get maxFileSize() {
                        return 2048000
                    },
                    validateAndSendEvent(event) {
                        const files = Array.from(event.target.files)
                        if (files.some(file => {
                            return file.size >= this.maxFileSize
                        })) {
                            const expectedFile = files.find(file => file.size >= this.maxFileSize)
                            alert(`Разрер файла '${expectedFile.name}' слишком большой. Максимальный размер файла: 2048 кбайт`)
                        } else {
                            $dispatch('toolbar:load-images', { files })
                        }
                    }
                }"
                x-ref="button"
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
        </x-button.text>
    </x-slot>
    <x-slot:tooltip>
        Добавить изображение
    </x-slot>
</x-tooltip>
