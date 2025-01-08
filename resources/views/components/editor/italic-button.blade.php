<button
    type="button"
    @click="toggleItalic()"
    :class="{ 'bg-primary text-surface' : isActive('italic', updatedAt) }"
>
    <span class="ph ph-text-italic"></span>
</button>
