@props(['post'])


@php
    $commentsListId = "comments-{$post->id}";
@endphp

<div
    class="animate-open-y"
    id="comment-editor-{{$post->id}}"
>
    <div class="min-h-0">

        <div id="{{ $commentsListId }}">
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
                call #editor-{{ $commentsListId }}.$editor.clear() then
                if #placeholder-{{ $commentsListId }}
                    add .animate-close-y to #placeholder-{{ $commentsListId }}
                end
            end
            "
        >
            <input x-ref="comment" required name="comment" type="hidden">
            <div
                x-editor="$refs.comment"
                id="editor-{{ $commentsListId }}"
                data-placeholder="Ваш комментарий тут..."
                class="
                    border-2 border-surface bg-surface
                    focus-within:border-secondary
                    border-solid mt-2 p-2 rounded-xl
                "
            ></div>
            <div class="flex mt-1 justify-end">
                <x-button.primary id="submit-{{ $commentsListId }}" type="submit">Отправить</x-button.primary>
            </div>
        </form>
        @endauth
    </div>

</div>
