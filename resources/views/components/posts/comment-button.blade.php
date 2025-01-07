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
        <span> Комментарии </span>
    </x-button.text>
</div>