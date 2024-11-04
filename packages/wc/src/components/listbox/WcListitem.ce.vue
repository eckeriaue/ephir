<script setup>
import { inject } from 'vue'

const props = defineProps({
  value: [String, Array, Boolean, Object, Number]
})

const { select } = inject('wc-listbox')
</script>

<template>
  <div
    @mousedown="select(props.value)"
    class="listitem"
  >
    <slot />
  </div>
</template>
<style scoped>

::slotted(button), ::slotted(a) {
  border: none;
  background: none;
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

::slotted(a) {
  text-decoration: none;
  color: #1f2328;
}

::slotted(button:hover:not(:active)), 
::slotted(button:focus:not(:active)),
::slotted(a:hover:not(:active)), 
::slotted(a:focus:not(:active)) {
  color: #1f2328c4;
}
</style>