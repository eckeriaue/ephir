<script setup lang="ts">
import { offset, shift, autoPlacement, useFloating } from '@floating-ui/vue'
import { computed, inject, useTemplateRef } from 'vue'
import { trim } from 'radashi'

const props = defineProps({
  placements: String
})

const placements = computed(() => {
  if (props.placements) {
    return props.placements.split(',').map(placement => trim(placement))
  }
})
const { isOpen, reference } = inject(`selectmenu`)

const floating = useTemplateRef('floating')
const { floatingStyles } = useFloating(reference, floating, {
  middleware: computed(() => [
    offset(4),
    shift(),
    autoPlacement({
      allowedPlacements: placements.value,
    }),
  ])
})
</script>

<template>
  <div
    :style="floatingStyles"
    v-if="isOpen"
    ref="floating"
  >
    <slot />
  </div>
</template>