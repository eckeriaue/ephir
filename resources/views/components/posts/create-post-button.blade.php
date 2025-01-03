
<style>
#createPost:not(.htmx-request) {
    display: none;
}
</style>

<x-button
    data-hx-get="{{ route('templates.posts.create-modal') }}"
    data-hx-target="body"
    data-hx-swap="beforeend"
    data-hx-trigger="click"
    data-hx-indicator="#createPost"
>
    <span class="inline-flex gap-x-2">
        <span> 🪶 </span>
        <x-loader id="createPost" class="size-4" />
    </span>
</x-button>
