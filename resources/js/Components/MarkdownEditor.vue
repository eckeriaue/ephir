<script setup lang="ts">
import EditorJS from '@editorjs/editorjs'
import { onMounted, onUnmounted, ref } from 'vue'

import Header from '@editorjs/header'
import List from '@editorjs/list'
import Paragraph from '@editorjs/paragraph'
import Raw from '@editorjs/raw'

const [ mark ] = defineModel()

const target = ref<HTMLDivElement>()

let editor: EditorJS

onMounted(() => {
  if (editor instanceof EditorJS) editor.destroy()
  editor = new EditorJS({
    holder: target.value,
    async onChange() {
      mark.value = await editor.save()  
    },
    placeholder: 'О чем хотите написать ?',
    tools: {
      header: Header,
      list: List,
      raw: Raw,
      paragraph: Paragraph, 
    },
    i18n: {
      messages: {
        ui: {
          "blockTunes": {
            "toggler": {
              "Click to tune": "Нажмите, чтобы настроить",
              "or drag to move": "или перетащите"
            },
          },
          "inlineToolbar": {
            "converter": {
              "Convert to": "Конвертировать в"
            }
          },
          "toolbar": {
            "toolbox": {
              "Add": "Добавить"
            }
          }
        },
        tools: {
          "warning": { // <-- 'Warning' tool will accept this dictionary section
            "Title": "Название",
            "Message": "Сообщение",
          },
    
          "link": {
            "Add a link": "Вставьте ссылку"
          },
          "stub": {
            'The block can not be displayed correctly.': 'Блок не может быть отображен'
          }
        },
    
        blockTunes: {
          "delete": {
            "Delete": "Удалить"
          },
          "moveUp": {
            "Move up": "Переместить вверх"
          },
          "moveDown": {
            "Move down": "Переместить вниз"
          }
        },
        toolNames: {
          "Text": "Параграф",
          "Heading": "Заголовок",
          "List": "Список",
          "Warning": "Примечание",
          "Checklist": "Чеклист",
          "Quote": "Цитата",
          "Code": "Код",
          "Delimiter": "Разделитель",
          "Raw HTML": "HTML-фрагмент",
          "Table": "Таблица",
          "Link": "Ссылка",
          "Marker": "Маркер",
          "Bold": "Полужирный",
          "Italic": "Курсив",
          "InlineCode": "Моноширинный",
        },
      }
    },
  })  
})


onUnmounted(() => {
  if (editor instanceof EditorJS) editor.destroy()
})


</script>


<template>
<div class="mt-2">
  <div
    ref="target"
    class="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  />
</div>
</template>

<style>
.editor-link {
  color: blue;
  text-decoration: underline;
}

</style>