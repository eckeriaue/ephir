<header class="bg-white">
    <div class="h-16 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <x-application-logo />
        <nav class="flex items-center gap-x-3">
            <div x-data>
                <x-button
                    @click="$refs.panel.toggle"
                    appearance="text"
                >
                    @auth
                        {{ auth()->user()->name }}
                    @else
                        Гость
                    @endauth
                </x-button>
                <x-menu
                    x-cloak
                    x-ref="panel"
                    x-transition=""
                    x-float.placement.bottom-start.flip.offset=""
                >
                    <div class="flex flex-col gap-y-2">
                        @auth
                            <x-link href="{{ route('profile.edit') }}"> Профиль </x-link>
                            <x-link href="{{ route('logout') }}"> Выйти </x-link>
                        @else
                            <x-link href="{{ route('register') }}"> Зарегистрироваться </x-link>
                            <x-link href="{{ route('login') }}"> Войти </x-link>
                        @endauth
                    </div>
                </x-menu>
            </div>
        </nav>
    </div>
</header>
