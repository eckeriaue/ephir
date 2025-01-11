import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'

export default function EditorPlugin(Alpine) {
    Alpine.data('editor', (content) => {
        let editor // Alpine's reactive engine automatically wraps component properties in proxy objects. If you attempt to use a proxied editor instance to apply a transaction, it will cause a "Range Error: Applying a mismatched transaction", so be sure to unwrap it using Alpine.raw(), or simply avoid storing your editor as a component property, as shown in this example.

        return {
            setLink() {
                const previousUrl = editor.getAttributes('link').href
                const url = window.prompt('URL', previousUrl)
                if (url === null) {
                  return
                }
                if (url === '') {
                    editor
                        .chain()
                        .focus()
                        .extendMarkRange('link')
                        .unsetLink()
                        .run()
                    return
                 }
                editor
                  .chain()
                  .focus()
                  .extendMarkRange('link')
                  .setLink({ href: url })
                  .run()
            },
            updatedAt: Date.now(), // force Alpine to rerender on selection change
            init() {
                const _this = this

                editor = new Editor({
                    element: this.$refs.root,
                    extensions: [
                        Placeholder.configure({
                            placeholder: this.$refs.root.dataset.placeholder,
                        }),
                        Link.configure({
                            openOnClick: false,
                            linkOnPaste: true,
                            autolink: true,
                            shouldAutoLink: (url) => url.startsWith('https://') || url.startsWith('http://'),
                            defaultProtocol: 'https',
                        }),
                        StarterKit
                    ],
                    content,
                    onCreate({ editor }) {
                    _this.updatedAt = Date.now()
                    },
                    onUpdate({ editor }) {
                        _this.$refs.output.value = editor.getHTML()
                    _this.updatedAt = Date.now()
                    },
                    onSelectionUpdate({ editor }) {
                    _this.updatedAt = Date.now()
                    },
                })
                this.$refs.root.$editor = editor
            },
            isLoaded() {
                return editor
            },
            isActive(type, opts = {}) {
                return editor.isActive(type, opts)
            },
            toggleHeading(opts) {
                this.updatedAt = Date.now()
                editor.chain().toggleHeading(opts).focus().run()
            },
            toggleBold() {
                this.updatedAt = Date.now()
                editor.chain().focus().toggleBold().run()
            },
            toggleItalic() {
                this.updatedAt = Date.now()
                editor.chain().toggleItalic().focus().run()
            },
            toggleLink() {
                this.setLink()
            }
        }
    })
}
