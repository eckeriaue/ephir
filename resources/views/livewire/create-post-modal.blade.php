<?php


use function Livewire\Volt\{ state, form };
use App\Livewire\Forms\CreatePostForm;


state([
    'title' => '',
    'content' => '',
]);

$save = function() {
    $this->form->save();
};

form(CreatePostForm::class);


?>

<section @save="close()" x-data="{
    open() {
        $refs.modal.showModal()
    },

    close() {
        $refs.modal.close()
    },

    toggle() {
        if ($refs.modal.open) this.close()
        else this.open()
    },
}">

    <x-secondary-button
    @click="open()"
    type="button"
    class="group mr-2">
        <span>🪶</span>
        <span class="w-0 duration-300 whitespace-nowrap overflow-hidden group-hover:w-28 transition-all"> создать пост </span>
    </x-secondary-button>

    <dialog
        x-ref="modal"
        @click="close()"
        class="invisible opacity-0 transition-all open:visible open:opacity-100 rounded-md"
    >
        <form name="createPostForm" wire:submit="save" @submit.prevent="$dispatch('save')" @click.stop class="max-w-full md:w-[560px] min-w-0 xl:min-w-96 px-5 py-4">
            <x-input-label for="create-post-title" :value="__('Заголовок')" />
            <x-text-input  wire:model="form.title" required id="create-post-title" name="title" />

            <fieldset x-data="{
                toBase64: file => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = reject;
                })
            }"
            class="mt-4 max-w-full">
                <x-input-label for="create-post-content" :value="__('Содержимое')" />
                <x-secondary-button @click="$refs.fileInput.click()" type="button">📸</x-secondary-button>
                <input
                    type="file"
                    x-ref="fileInput"
                    hidden
                    @change="async function(event) {
                        const image = new Image()
                        image.src = await toBase64(event.target.files[0])
                        $refs.p.appendChild(document.createElement('br'))
                        $refs.p.appendChild(image)
                        event.target.value = null
                    }"
                />
                <p
                    x-ref="p"
                    aria-multiline="true"
                    role="textbox"
                    contenteditable="true"
                    @input="$wire.form.content = $event.target.innerHTML"
                    class="py-2 px-3 mt-2 rounded-md outline outline-2 max-w-full md:max-w-[517px] outline-gray-300 focus:outline-lime-500 min-h-16"
                ></p>
            </fieldset>

            <fieldset class="inline-flex mt-8 items-center gap-x-2">
                <x-primary-button>
                    {{__("Сохранить")}}
                </x-primary-button>
                <x-secondary-button type="button" @click="$refs.modal.close()"> {{__("Отменить")}} </x-secondary-button>
            </fieldset>
        </form>
    </dialog>
</section>
