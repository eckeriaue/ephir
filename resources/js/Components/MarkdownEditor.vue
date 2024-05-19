<script setup lang="ts">
import { ref, unref } from 'vue';
import EditorJS from '@editorjs/editorjs';

const editor = new EditorJS({
  holder: 'target'
});


const [ mark ] = defineModel({
  default: ''
})



const content = ref<HTMLDivElement>()


const link = {
  href: ref(''),
  mask: ref(''),
  isVisible: ref(false),
  insert() {
    const mask = unref(this.mask) || unref(this.href)
    const href = unref(this.href)
    this.mask.value = ''
    this.href.value = ''
    this.isVisible.value = false
    content.value.appendChild(Object.assign(document.createElement('a'), {
      classList: 'editor-link',
      textContent: mask,
      target: '_blank',
      href,
    }))
    mark.value = unref(content).innerHTML
    addSpace()
  }
}


function addSpace() {
  content.value.appendChild( document.createTextNode( '\u00A0' ) )
}



</script>


<template>
<div class="mt-2">
  <div id="target" />
  <div class="mb-1">
    <kit-dropdown-menu v-model:open="link.isVisible.value">
      <kit-dropdown-trigger as-child>
        <kit-button type="button" variant="outline">🔗</kit-button>
      </kit-dropdown-trigger>
      <kit-dropdown-content>
        <kit-command as="fieldset" @keypress.enter="link.insert()" class="space-y-1 p-1">
          <kit-input placeholder="Текст" v-model="link.mask.value" />
          <kit-input required
            placeholder="https://example.com"
            v-model="link.href.value"
          />
        </kit-command>
      </kit-dropdown-content>
    </kit-dropdown-menu>
  </div>

  <div
    class="min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    id="postContent"
    ref="content"
    @input="mark = ($event.target as HTMLDivElement).innerHTML"
    contenteditable="plaintext-only"
  />

</div>
</template>

<style>
.editor-link {
  color: blue;
  text-decoration: underline;
}

</style>