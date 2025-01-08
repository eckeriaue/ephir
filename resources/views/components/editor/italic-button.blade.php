<button
    type="button"
    @click="toggleItalic()"
    :class="{ 'bg-primary text-surface' : isActive('italic', updatedAt) }"
    class="focus:outline-none
    border-2 border-solid border-surface
    focus:ring-2 focus:ring-secondary focus:ring-offset-2 inline-block w-8 h-8 transition-all text-xs"
>
    <span class="ph ph-text-italic"></span>
</button>
