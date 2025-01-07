import { i18n } from './editor/i18n'
import EditorJS from '@editorjs/editorjs'

function config(holder, input) {
    const config = {
        holder,
        i18n,
        minHeight: 0,
    }
    if (holder.dataset.placeholder) {
        Reflect.set(config, 'placeholder', holder.dataset.placeholder)
    }
    return config
}

export default function Editor(Alpine) {
    Alpine.directive('editor', (holder, { expression }, { evaluate, cleanup }) => {
        const input = evaluate(expression)
        const editor = new EditorJS({
            ...config(holder),
            onChange(event) {
                event.saver.save().then(output => {
                    input.value = JSON.stringify(output)
                })
            },
        })
        cleanup(() => {
            editor.destroy()
        })
    })
}
