
<button
    type="button"
    @click="toggleLink()"
    :class="{ 'bg-primary text-surface' : isActive('link', updatedAt) }"
>
    <span class="ph ph-link"></span>
</button>
