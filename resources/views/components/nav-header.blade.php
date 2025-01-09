<header class="sticky top-0 z-10 shadow bg-white">
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
                    <div class="flex flex-col gap-y-2">
                            <x-button.text as="a" href="{{ route('settings.edit') }}"> Настройки </x-button.text>
                            <x-button.text as="a" href="{{ route('profile', ['id' => auth()->user()->profile->id]) }}"> Профиль </x-button.text>
                            <x-button.text as="a" href="{{ route('logout') }}"> Выйти </x-button.text>
                    </div>
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
