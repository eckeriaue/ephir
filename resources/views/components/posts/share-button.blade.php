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
                <x-menu.item
                    data-hx-patch="{{ route('api.profile.share-post', ['postId' => $post->id]) }}"
                    data-hx-target="body"
                    data-hx-swap="beforeend"
                >
                    Опубликовать у себя
                </x-menu.item>
            @endauth
            <x-menu.item
                type="button"
                data-post-href="{{ route('posts.read', ['id' => $post->id]) }}"
                @click="$clipboard($event.target.dataset.postHref).then(() => {
                    alert('скопировано')
                })"
            >
                Копировать ссылку
            </x-menu.item>
        </x-menu>
    </div>
