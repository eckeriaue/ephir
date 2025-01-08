@props(['name' => ''])

<div x-data="editor()" {{ $attributes->merge() }}>
    <template x-if="isLoaded()">
        <div class="flex items-center">
            <x-editor.heading-button />
            <x-editor.bold-button />
            <x-editor.italic-button />
            <x-editor.link-button />
        </div>
    </template>

    <div
        tabindex="0"
        x-ref="root"
        class="
            [&_.tiptap]:border-2
            [&_.tiptap]:border-surface
            [&_.tiptap]:border-outline

            [&_.tiptap]:outline-2
            [&_.tiptap]:outline-secondary
            [&_.tiptap]:outline-outline

            [&_.tiptap_a]:underline
            [&_.tiptap_a]:text-secondary
            [&_.tiptap_h1]:text-[24px]
            [&_.tiptap]:min-h-[100px]

            [&_.tiptap]:focus-within:border-secondary
            [&_.tiptap]:border-solid
             [&_.tiptap]:p-2 [&_.tiptap]:rounded-lg
        "
    ></div>
    <input x-ref="output" name="{{ $name }}" type="hidden">
</div>
