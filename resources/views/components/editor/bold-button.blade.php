@props(['activeClass' => '', 'nonActiveClass' => '', 'class' => ''])

<button
    type="button"
    @click="toggleBold()"
    :class="{
        '{{ $activeClass }}': isActive('bold', updatedAt),
        '{{ $nonActiveClass }}': !isActive('bold', updatedAt),
    }"
    class="{{ $class }}"
>
    <span class="ph ph-text-b"></span>
</button>
