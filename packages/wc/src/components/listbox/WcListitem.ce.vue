<script setup>
import { inject } from 'vue'

const props = defineProps({
  value: [String, Array, Boolean, Object, Number]
})

const { select } = inject('wc-listbox')
</script>

<template>
  <button
    type="button"
    @mousedown="select(props.value)"
    class="listitem"
  >
    <slot />
  </button>
</template>
<style scoped>
.listitem {
  font-weight: 400;
  padding: 6px 8px;
  height: 32px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 143%;
  width: 100%;
  cursor: pointer;
  color: #1f2328;
}
.listitem:hover:not(:active), 
.listitem:focus:not(:active) {
  color: #1f2328c4;
}
button {
  background: none;
  border: none;
}
</style>