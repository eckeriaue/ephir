@props(['activeClass' => '', 'nonActiveClass' => '', 'class' => ''])

<button
    type="button"
    @click="toggleItalic()"
    :class="{
        '{{ $activeClass }}': isActive('italic', updatedAt),
        '{{ $nonActiveClass }}': !isActive('italic', updatedAt),
    }"
    class="{{ $class }}"
>
    <span class="ph ph-text-italic"></span>
</button>
