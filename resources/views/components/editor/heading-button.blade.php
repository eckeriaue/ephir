
<button
    type="button"
    @click="toggleHeading({ level: 1 })"
    :class="{ 'bg-primary text-surface': isActive('heading', { level: 1 }, updatedAt) }"
>
    <span class="ph ph-text-h"></span>
</button>
