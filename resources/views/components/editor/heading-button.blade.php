
<button
    type="button"
    @click="toggleHeading({ level: 1 })"
    :class="{ 'bg-primary text-surface': isActive('heading', { level: 1 }, updatedAt) }"
    class="focus:outline-none rounded-tl-lg
    border-2 border-solid border-surface
    focus:ring-2 focus:ring-secondary focus:ring-offset-2 inline-block w-8 h-8 transition-all text-xs"
>
    <span class="ph ph-text-h"></span>
</button>
