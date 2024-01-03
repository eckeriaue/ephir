<nav class="flex flex-col lg:flex-row static lg:fixed sm:top-0 sm:right-0 lg:space-x-4 p-6 lg:text-end z-10">
    <a href="{{ route('login') }}" class="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500" wire:navigate>Войти</a>
    @if (Route::has('register'))
        <a href="{{ route('register') }}" class="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500" wire:navigate>Регистрация</a>
    @endif
</nav>
