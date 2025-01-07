@props(['post'])


<div
    class="animate-open-y"
    id="comment-editor-{{$post->id}}"
>
    <div class="min-h-0">
        comments list
        <div  x-editor></div>
    </div>

</div>
