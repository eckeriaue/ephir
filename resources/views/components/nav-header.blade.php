<header class="bg-white">
    <div class="h-16 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <x-application-logo />
        <div>
            @auth
                <x-dropdown>
                    <x-slot:target>
                        <span> no guest </span>
                    </x-slot>
                    <div> test me</div>
                </x-dropdown>
            @else
                <span> guest </span>
            @endauth
        </div>
    </div>
</header>
