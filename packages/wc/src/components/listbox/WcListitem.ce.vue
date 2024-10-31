<script setup>
import { inject } from 'vue'

const props = defineProps({
  value: [String, Array, Boolean, Object, Number]
})

const { select } = inject('wc-listbox')
</script>

<template>
  <button type="button" @mousedown="select(props.value)" class="listitem">
    <slot />
  </button>
</template>
<style scoped>
.listitem {
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #1f2328;
}
</style>