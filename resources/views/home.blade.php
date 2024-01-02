
<x-app-layout>

    <section
    x-data="{
        refresh() {
            $wire.$refresh()
        }
    }"
    class="mx-auto mt-8 max-w-full xl:max-w-4xl px-4">

        @auth
            <livewire:create-post-modal wire:save="refresh()" />
        @endauth

        <livewire:posts />
    </section>
</x-app-layout>