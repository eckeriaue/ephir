<header class="bg-white">
    <div class="h-16 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <x-application-logo />
        <div>
            @auth
                <span> no guest </span>
            @else
                <span> guest </span>
            @endauth
        </div>
    </div>
</header>
