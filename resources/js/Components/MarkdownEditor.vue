<script setup lang="ts">
import { ref, unref } from 'vue';
import EditorJS from '@editorjs/editorjs';

import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 


const [ mark ] = defineModel({
  default: ''
})

const editor = new EditorJS({
  holder: 'target',
  tools: { 
    header: Header,
    list: List 
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



</script>


<template>
<div class="mt-2">
  <div
    id="target"
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