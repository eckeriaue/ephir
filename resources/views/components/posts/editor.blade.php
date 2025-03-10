<x-editor name="postContent">
    <x-editor.toolbar>
        <x-editor.heading-button active-class="bg-primary text-surface" />
        <x-editor.bold-button active-class="bg-primary text-surface" />
        <x-editor.italic-button active-class="bg-primary text-surface" />
        <x-editor.link-button active-class="bg-primary text-surface" />
    </x-editor.toolbar>

    <x-editor.root
        class="
            [&_.tiptap]:border-2
            [&_.tiptap]:border-surface-200


            [&_.tiptap_a]:underline
            [&_.tiptap_a]:text-secondary
            [&_.tiptap_h1]:text-[24px]
            [&_.tiptap]:min-h-[100px]

            focus-within:[&_.tiptap]:border-secondary
            [&_.tiptap]:border-solid
             [&_.tiptap]:p-2 [&_.tiptap]:rounded-lg
        "
    />
</x-editor>
