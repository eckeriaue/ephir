import { i18n } from './editor/i18n'
import EditorJS from '@editorjs/editorjs'

export default function Editor(Alpine) {
    Alpine.directive('editor', (holder, { value, modifiers, expession }, { Alpine, effect, cleanup }) => {
        new EditorJS({ holder, i18n, minHeight: 0, })
    })
}
