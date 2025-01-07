@props(['comment', 'post'])

<div class="animate-open-y">
    <div class="min-h-0">
        <x-user.preview :user="$comment->user" :created_at="$comment->created_at" />
        <div class="pl-11 mt-1">
            {!! $comment->content_html !!}
        </div>
    </div>
</div>
