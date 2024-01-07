<script setup lang="ts">
  import { nextTick, ref, unref } from 'vue'


  const visible = ref(false)

  const toggle = (isVisible = !unref(visible)) => visible.value = isVisible
  function open () {
    toggle(true)
    nextTick(() => {
      unref(dialog)?.showModal?.()
    })
  }
  function close() {
    unref(dialog)?.close?.()
    nextTick(() => {
      toggle(false)
    })
  }

  const dialog = ref<HTMLDialogElement>()

  defineExpose({open,close,toggle})
  defineOptions({inheritAttrs: false})
</script>

<template>
  <slot name="project" v-bind="{open,close,toggle}" />
  
  <dialog
    v-if="visible"
    ref="dialog"
    v-bind="$attrs"
    @click="close()"
  >
    <div @click.stop>
      <slot v-bind="{open,close,toggle}" />
    </div>
  </dialog>
</template>