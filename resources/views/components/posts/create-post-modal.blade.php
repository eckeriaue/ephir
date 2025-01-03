<div
    data-script="
        on closeModal
            remove me
        end
    "
    class="fixed inset-0"
>
    <div class="z-20 fixed inset-0 bg-gray-900 w-full h-dvh " data-script="on click trigger closeModal" />

    <div class="z-2">
        <div>
            <x-button appearance="secondary" data-script="on click trigger closeModal">отменить</x-button>
            <x-button>сохранить</x-button>
        </div>
    </div>
</div>
