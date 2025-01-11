@props(['post', 'commentId'])

<div>
    <x-button.text
        data-hx-trigger="click"
        data-hx-get="{{ route('hx.comments', ['postId' => $post->id]) }}"
        data-hx-target="#{{ $commentId }}"
        data-hx-swap="outerHTML"
        data-script="on click set my @disabled to ''"
    >
        <span class="text-[16px] pr-2 ph ph-chat-circle-dots"></span>
        <span class="inline-flex items-center gap-x-1">
            <span> Комментарии </span>
            <span
                class="bg-surface p-1 rounded-full text-primary text-[12px] {{ count($post->comments) > 0 ?: 'hidden' }}"
            >
                {{ $post->comments()->count() }}
            </span>
        </span>
    </x-button.text>
</div>
