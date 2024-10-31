<script setup lang="ts">
import { inject, ref, useTemplateRef } from 'vue'
import {useFloating} from '@floating-ui/vue'

const { isOpen, reference } = inject(`selectmenu`)

const floating = useTemplateRef('floating')
const { floatingStyles } = useFloating(reference, floating)

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