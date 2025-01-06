import { i18n } from './i18n'
import EditorJS from '@editorjs/editorjs'

const holder = document.getEl0ementById('editor')
const editor = new EditorJS({
    holder,
    onChange(event) {
        event.saver.save().then(output => {
            document.getElementById('editorOutput').value = JSON.stringify(output)
        })
    },
    minHeight: 0,
    autofocus: true,
    /**
     * Tools list
     */
    // tools: {
    //   header: Header,
    //   image: SimpleImage,
    //   list: List,
    //   checklist: Checklist,
    //   quote: Quote,
    //   warning: Warning,
    //   marker: Marker,
    //   code: CodeTool,
    //   delimiter: Delimiter,
    //   inlineCode: InlineCode,
    //   linkTool: LinkTool,
    //   embed: Embed,
    //   table: Table
    // },

    /**
     * Internationalzation config
     */
    i18n,
  });

Reflect.set(holder, '$editor', editor)
