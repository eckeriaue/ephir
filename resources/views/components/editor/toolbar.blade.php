    <template x-if="isLoaded()">
        <div
            class="
                flex items-center
                *:w-8
                *:h-8
                *:rounded-lg
                *:flex
                *:items-center
                *:justify-center
            "
        >
            {{ $slot }}
        </div>
    </template>
