@props(['activeClass' => '', 'nonActiveClass' => '', 'class' => ''])

<button
    type="button"
    @click="toggleHeading({ level: 1 })"
    :class="{
        '{{ $activeClass }}': isActive('heading', { level: 1 }, updatedAt),
        '{{ $nonActiveClass }}': !isActive('heading', { level: 1 }, updatedAt),
    }"
    class="{{ $class }}"
>
    <span class="ph ph-text-h"></span>
</button>
