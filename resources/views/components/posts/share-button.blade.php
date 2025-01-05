@props(['post'])

<div {{ $attributes->merge() }} x-data="{ isOpen: false }" @click.outside="isOpen = false">
        <x-button.text @click="isOpen = !isOpen" x-ref="shareButton">
            <span class="text-16px pr-2 ph ph-share"></span>
            <span>Поделиться</span>
        </x-button.text>
        <x-menu
            x-anchor.offset.4="$refs.shareButton"
            x-show="isOpen"
            @mouseup="isOpen = false"
            class="relative z-2"
        >
            <x-button.text>Опубликовать у себя</x-button.text>
            <x-button.text
                type="button"
                data-post-href="{{ route('posts.read', ['id' => $post->id]) }}"
                @click="$clipboard($event.target.dataset.postHref).then(() => {
                    alert('скопировано')
                })"
            >
                Копировать ссылку
            </x-button.text>
        </x-menu>
    </div>
