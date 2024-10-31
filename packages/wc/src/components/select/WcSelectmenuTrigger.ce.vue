<script setup lang="ts">
import { inject } from 'vue'


const { isOpen, reference } = inject(`selectmenu`)


</script>

<template>
  <div
    :ref="vnode => reference = vnode"
    tabindex="-1"
    @focusin="isOpen = true"
    @focusout="isOpen = false"
  >
    <slot />
  </div>
</template>