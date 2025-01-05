<header class="bg-white">
    <div class="h-16 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <x-application-logo />
        <nav class="flex items-center gap-x-3">
            <div x-data>
                <x-button.text
                    @click="$refs.panel.toggle"
                >
                    @auth
                        <span class="flex items-center gap-x-2">
                            <span>
                                {{ auth()->user()->name }}
                            </span>
                            <x-user.avatar class="w-5 h-5" as="span" />
                        </span>
                    @else
                        Гость
                    @endauth
                </x-button.text>
                <x-menu
                    x-cloak
                    x-ref="panel"
                    x-transition=""
                    x-float.placement.bottom-start.flip.offset=""
                >
                    <div class="flex flex-col gap-y-2">
                        @auth
                            <x-button.text as="a" href="{{ route('settings.edit') }}"> Профиль </x-button.text>
                            <x-button.text as="a" href="{{ route('logout') }}"> Выйти </x-button.text>
                        @else
                            <x-button.text as="a" href="{{ route('register') }}"> Зарегистрироваться </x-button.text>
                            <x-button.text as="a" href="{{ route('login') }}"> Войти </x-button.text>
                        @endauth
                    </div>
                </x-menu>
            </div>
        </nav>
    </div>
</header>
