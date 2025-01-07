@props(['post'])

<div {{ $attributes->merge() }} x-data="{ isOpen: false }" @click.outside="isOpen = false">
        <x-button.text @click="isOpen = !isOpen" x-ref="shareButton">
            <span class="text-[16px] pr-2 ph ph-share"></span>
            <span>Поделиться</span>
        </x-button.text>
        <x-menu
            x-cloak
            x-anchor.offset.4="$refs.shareButton"
            x-show="isOpen"
            @mouseup="isOpen = false"
        >
            @auth
                <x-button.text
                    data-hx-patch="{{ route('api.profile.share-post', ['postId' => $post->id]) }}"
                    data-hx-target="body"
                    data-hx-swap="beforeend"
                >
                    Опубликовать у себя
                </x-button.text>
            @endauth
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
