@props([
    'activeClass' => '',
    'nonActiveClass' => '',
    'class' => ''
])

<button
    type="button"
    @click="toggleLink()"
    :class="{
        '{{ $activeClass }}': isActive('link', updatedAt),
        '{{ $nonActiveClass }}': !isActive('link', updatedAt),
    }"
    class="{{ $class }}"
>
    <span class="ph ph-link"></span>
</button>
