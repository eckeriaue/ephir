@props(['comment', 'post'])

<div class="animate-open-y">
    <div class="min-h-0">
        <x-user.preview.post :$post />
        <div class="pl-11 mt-1">
            {!! $comment->content_html !!}
        </div>
    </div>
</div>
