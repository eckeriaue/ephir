@props(['post'])


@php
    $commentsListId = "comments-{$post->id}";
@endphp

<div
    class="animate-open-y"
    id="comment-editor-{{$post->id}}"
>
    <div class="min-h-0">

        <div id="{{ $commentsListId }}" class="space-y-4">
            @forelse ($post->comments as $comment)
                <x-posts.comment :$comment :$post />
            @empty
                <div id="placeholder-{{ $commentsListId }}">
                    <p class="text-primary text-[12px] min-h-0">Комментариев пока нет.</p>
                </div>
            @endforelse
        </div>
        @auth
        <form
            x-data
            class="px-1"
            data-hx-post="{{ route('comments.store', ['postId' => $post->id]) }}"
            data-hx-target="#{{ $commentsListId }}"
            data-hx-swap="beforeend"
            hx-disabled-elt="#submit-{{ $commentsListId }}"
            data-script="
                on htmx:beforeRequest
                    add .pointer-events-none to #editor-{{ $commentsListId }}
                    add .cursor-not-allowed to #editor-{{ $commentsListId }}
                on htmx:afterRequest
                    add .animate-close-y to #editor-{{ $commentsListId }} then
                    remove .pointer-events-none from #editor-{{ $commentsListId }} then
                    remove .cursor-not-allowed from #editor-{{ $commentsListId }} then
                    call #editor-{{ $commentsListId }}.$editor.commands.clearContent() then
                    if #placeholder-{{ $commentsListId }}
                        add .animate-close-y to #placeholder-{{ $commentsListId }}
                    end
            "
        >
            <div
                x-data="editor()"
                tabindex="0"
                class="
                    rounded-xl bg-surface my-2
                    transition ease-in-out duration-150
                    focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2
                "
            >
                <template x-if="isLoaded()">
                    <div class="flex items-center">
                        <x-editor.bold-button />
                        <x-editor.italic-button />
                        <x-editor.link-button />
                    </div>
                </template>
                <div
                    x-ref="root"
                    id="editor-{{ $commentsListId }}"
                    class="
                        [&_.tiptap_a]:underline
                        [&_.tiptap_a]:text-secondary
                        [&_.tiptap]:p-2
                        [&_.tiptap]:rounded-inherit
                        [&_.tiptap]:outline-none
                    "
                ></div>
                <input x-ref="output" name="comment" type="hidden">
            </div>
            <div class="flex mt-1 justify-end">
                <x-button.primary id="submit-{{ $commentsListId }}" type="submit">Отправить</x-button.primary>
            </div>
        </form>
        @endauth
    </div>

</div>
