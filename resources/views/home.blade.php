<?php


use function Livewire\Volt\state;

state(['title' => '', 'content' => '']);

$submit = function() {
    return $this->title;
}


?>

<x-app-layout>

    <x-slot:header>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Главная') }}
        </h2>
    </x-slot>


    <section class="mx-auto mt-8 max-w-full xl:max-w-4xl">
        <section x-data="{
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
            <x-primary-button class="w-full" @click="toggle()" type="button"> Создать пост </x-primary-button>
            <dialog
                x-ref="modal"
                @click="close()"
                class="invisible opacity-0 transition-all open:visible open:opacity-100 rounded-md"
            >
                <form method="dialog" name="createPostForm" wire:submit="submit" @click.stop class="min-w-0 xl:min-w-96 px-5 py-4">
                    <x-input-label for="create-post-title" :value="__('Заголовок')" />
                    <x-text-input  wire:model="title" required id="create-post-title" name="createPostFormTitle" />
                    <x-input-label for="create-post-content" :value="__('Содержимое')" />
                    <textarea
                        wire:model="content"
                        required
                        class="py-2 px-3 rounded-md outline outline-2 h-fit outline-gray-300 focus:outline-lime-500 resize-none w-full shadow-sm"
                        title="Контент вашей статьи"
                        name="createPostFormContent"
                        id="create-post-content"></textarea>
                    <fieldset class="inline-flex mt-8 items-center gap-x-2">
                        <x-primary-button> {{__("Сохранить")}} </x-primary-button>
                        <x-secondary-button type="button" @click="close()"> {{__("Отменить")}} </x-secondary-button>
                    </fieldset>
                </form>
            </dialog>
        </section>
    </section>
</x-app-layout>