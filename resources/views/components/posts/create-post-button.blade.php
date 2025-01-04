@auth
<style>
#createPost:not(.htmx-request) {
    display: none;
}
</style>

<div class="w-full mb-4" x-data="{ isOpen: false }">
    <x-button
        style="width:100%"
        appearance="text"
        @click="isOpen = true"
    >
        <span class="inline-flex gap-x-2">
            <span> Что у вас нового, {{ auth()->user()->name }}? </span>
            <x-loader id="createPost" class="size-4" />
        </span>
    </x-button>
    <template x-teleport="body">
        <x-posts.create-post-modal />
    </template>
</div>
@endauth
