<?php

use function Livewire\Volt\{state, form, mount};
use App\Livewire\Forms\CreateCommentForm;
state(['post']);
form(CreateCommentForm::class);
$save = function() {
    $this->form->saveCommentByPostId($this->post->id);
};
?>


<section class="-mb-6 -mx-6 mt-6">
    <h2 class="text-xs font-medium px-6 pb-2 uppercase"> Комментарии </h2> 
    @if($post?->comments)
    <ol class="px-6 space-y-4">
        @foreach ($post->comments as $comment)
            <li>
                <address class="text-gray-500 text-xs inline-block">
                    {{ __('Автор') }}:
                    <i>
                        @if(auth()->id() === $comment->user->id)
                        {{ __('Вы') }}
                        @else
                        <a rel="author" href="#">{{ $comment->user->name }}</a>
                        @endif
                    </i>
                </address>
                <p class="text-sm text-gray-800"> {{$comment->content}} </p>

                <span class="text-gray-500 text-[10px]">
                    {{__('От')}} 
                    <time datetime="{{ $comment->created_at }}"> {{ $comment->created_at->format('d.m.Y в H:i') }} </time>
                </span>
            </li>
        @endforeach
    </ol>
    @endif

    @auth
    <form
        wire:submit="save"
        wire:loading.attr="inert"
        wire:loading.attr="disabled"
        class="w-full flex h-min mt-6"
    >
        <x-text-input
            wire:model="form.content"
            wire:loading.attr="disabled"
            name="content"
            class="grow inline-block rounded-t-none rounded-r-none"
            placeholder="{{__('Напишите комментарий')}}"></x-text-input>
        <x-secondary-button type="submit" class="outline-2 rounded-l-none inline-block aspect-square rounded-t-none">📨</x-secondary-button> 
    </form>
    @endauth
</section>
