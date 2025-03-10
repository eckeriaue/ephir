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
                    if event.detail.xhr === 500 then
                        {{-- todo: handle error --}}
                    else
                        add .animate-close-y to #editor-{{ $commentsListId }} then
                        remove .pointer-events-none from #editor-{{ $commentsListId }} then
                        remove .cursor-not-allowed from #editor-{{ $commentsListId }} then
                        call #editor-{{ $commentsListId }}.$editor.commands.clearContent(true) then
                        if #placeholder-{{ $commentsListId }}
                            add .animate-close-y to #placeholder-{{ $commentsListId }}
                        end
                    end
                end
            "
        >
            <x-editor
                name="comment"
                class="
                    rounded-xl bg-surface my-2
                    transition ease-in-out duration-150
                    focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2
                "
            >
                <x-editor.toolbar>
                    <x-editor.bold-button non-active-class="opacity-40"  />
                    <x-editor.italic-button non-active-class="opacity-40" />
                    <x-editor.link-button non-active-class="opacity-40" />
                </x-editor.toolbar>
                <x-editor.root
                    id="editor-{{ $commentsListId }}"
                    placeholder="Напишите свой комментарий тут..."
                    class="
                        [&_.tiptap_a]:underline
                        [&_.tiptap_a]:text-secondary
                        [&_.is-editor-empty]:opacity-40
                        [&_.tiptap]:p-2
                        [&_.tiptap]:rounded-inherit
                        [&_.tiptap]:outline-hidden
                    "
                />
            </x-editor>
            <div class="flex mt-1 justify-end">
                <x-button.primary id="submit-{{ $commentsListId }}" type="submit">Отправить</x-button.primary>
            </div>
        </form>
        @endauth
    </div>

</div>
