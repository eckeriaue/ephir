<header class="bg-white">
    <div class="h-16 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <x-application-logo />
        <div>
            @auth
                <x-dropdown>
                    <x-slot:target appearance="secondary">
                        <span>
                            {{ auth()->user()->name }}
                        </span>
                    </x-slot>
                    <div> test me 2 </div>
                </x-dropdown>
            @else
            <div x-data>
                <x-button
                    @click="$refs.panel.toggle">
                    Гость
                </x-button>
                <x-menu
                    x-cloak
                    x-ref="panel"
                    x-transition=""
                    x-float.placement.bottom-start.flip.offset=""
                >
                    <div class="flex flex-col gap-y-2">
                        <x-link href="{{ route('register') }}"> Зарегистрироваться </x-link>
                        <x-link href="{{ route('login') }}"> Войти </x-link>
                    </div>
                </x-menu>
            </div>
            @endauth
        </div>
    </div>
</header>
