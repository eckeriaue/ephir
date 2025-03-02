<header class="sticky top-0 z-10 shadow-sm bg-white">
    <div class="h-16 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <x-application-logo />
        <nav class="flex items-center gap-x-3">
            <div x-data="{ isUserDetailOpen: false }" @click.outside="isUserDetailOpen = false">

                @auth
                <x-button.text
                    x-ref="userDetail"
                    @click="isUserDetailOpen = !isUserDetailOpen"
                >
                        <span class="flex items-center gap-x-2">
                            <span>
                                {{ auth()->user()->name }}
                            </span>
                            <x-user.avatar class="w-5 h-5" as="span" />
                        </span>
                </x-button.text>
                <x-menu
                    x-cloak
                    x-show="isUserDetailOpen"
                    x-anchor.offset.4="$refs.userDetail"
                >
                    <x-menu.item as="a" href="{{ route('settings.edit') }}">
                        <span class="ph ph-gear"></span>
                        <span> Настройки </span>
                    </x-menu.item>
                    <x-menu.item as="a" href="{{ route('profile', ['id' => auth()->user()->profile->id]) }}">
                        <span class="ph ph-user-circle"></span>
                        <span> Профиль </span>
                    </x-menu.item>
                    <x-menu.item as="a" href="{{ route('logout') }}">
                        <span class="ph ph-sign-out"></span>
                        <span> Выйти </span>
                    </x-menu.item>
                </x-menu>
                @else
                <div class="flex items-center gap-x-2">
                    <x-button.text as="a" href="{{ route('login') }}"> Войти </x-button.text>
                    <x-button.primary as="a" href="{{ route('register') }}"> Зарегистрироваться </x-button.primary>
                </div>
                @endauth
            </div>
        </nav>
    </div>
</header>
