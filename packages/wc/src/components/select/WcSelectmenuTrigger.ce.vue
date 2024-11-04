<script setup lang="ts">
import { inject } from 'vue'

const { open, reference } = inject(`selectmenu`)
</script>

<template>
  <div
    data-self-target
    :ref="vnode => reference = vnode"
    @click.stop="open($event)"
  >
    <slot />
  </div>
</template>