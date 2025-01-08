
<button
    type="button"
    @click="toggleBold()"
    :class="{ 'bg-primary text-surface' : isActive('bold', updatedAt) }"
>
    <span class="ph ph-text-b"></span>
</button>
