<div
    x-data
    <button
        @click="$refs.panel.toggle"
    >
        {{ $target }}
    </button>
    <div
        x-ref="panel"
        class="fixed bg-white p-2 truncate rounded shadow"
        x-transition
        x-float.placement.bottom-start.flip.offset
    >
        {{ $slot }}
    </div>
</div
