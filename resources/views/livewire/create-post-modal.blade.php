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
        <form
            name="createPostForm"
            wire:submit="save"
            @submit.prevent="async () => {
                $dispatch('save')
            }"
            @click.stop
            class="max-w-full md:w-[560px] min-w-0 xl:min-w-96 px-5 py-4"
        >
            <x-input-label for="create-post-title" :value="__('Заголовок')" />
            <x-text-input  wire:model="form.title" required id="create-post-title" name="title" />

            <fieldset class="mt-4 max-w-full">
                <x-input-label for="create-post-content" :value="__('Содержимое')" />
                <mark-creator ref="mark"></mark-creator>
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
