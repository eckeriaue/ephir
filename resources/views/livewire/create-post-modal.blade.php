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
    <x-primary-button
        class="w-full hidden lg:inline-block"
        @click="open()"
        type="button"
        >
        Создать пост
    </x-primary-button>
    <template x-teleport="body">
        <x-primary-button
            class="fixed bottom-6 right-6 inline-block lg:hidden"
            type="button"
            @click="open()">
            +
        </x-primary-button>
    </template>
    
    <dialog
        x-ref="modal"
        @click="close()"
        class="invisible opacity-0 transition-all open:visible open:opacity-100 rounded-md"
    >
        <form name="createPostForm" wire:submit="save" @submit.prevent="$dispatch('save')" @click.stop class="min-w-0 xl:min-w-96 px-5 py-4">
            <x-input-label for="create-post-title" :value="__('Заголовок')" />
            <x-text-input  wire:model="form.title" required id="create-post-title" name="title" />
            <x-input-label for="create-post-content" :value="__('Содержимое')" />
            <textarea
                wire:model="form.content"
                required
                class="py-2 px-3 rounded-md outline outline-2 h-fit outline-gray-300 focus:outline-lime-500 resize-none w-full shadow-sm"
                title="Контент вашей статьи"
                name="content"
                id="create-post-content"></textarea>
            <fieldset class="inline-flex mt-8 items-center gap-x-2">
                <x-primary-button>
                    {{__("Сохранить")}}
                </x-primary-button>
                <x-secondary-button type="button" @click="$refs.modal.close()"> {{__("Отменить")}} </x-secondary-button>
            </fieldset>
        </form>
    </dialog>
</section>
