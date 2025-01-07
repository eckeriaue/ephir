@props(['post'])


@php
    $formName = "add-comment-to-post-{$post->id}";
@endphp

<div
    class="animate-open-y"
    id="comment-editor-{{$post->id}}"
>
    <div class="min-h-0">

        @forelse ($post->comments as $comment)
            <x-posts.comment :$comment />
        @empty
            <div>
                <p class="text-primary text-[12px]">Комментариев пока нет.</p>
            </div>
        @endforelse
        <form x-data data-hx-post="{{ route('comments.store', ['postId' => $post->id]) }}">
            <input x-ref="comment" name="comment" type="hidden">
            <div
                x-editor="$refs.comment"
                data-placeholder="Ваш комментарий тут..."
                class="
                    border-2 border-surface bg-surface
                    focus-within:border-secondary
                    border-solid mt-2 p-2 rounded-xl
                "
            ></div>
            <div class="flex mt-1 justify-end">
                <x-button.primary type="submit">Отправить</x-button.primary>
            </div>
        </form>
    </div>

</div>
