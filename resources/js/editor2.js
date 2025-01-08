import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'

addEventListener('alpine:init', () => {

    Alpine.data('editor', (content) => {
    let editor // Alpine's reactive engine automatically wraps component properties in proxy objects. If you attempt to use a proxied editor instance to apply a transaction, it will cause a "Range Error: Applying a mismatched transaction", so be sure to unwrap it using Alpine.raw(), or simply avoid storing your editor as a component property, as shown in this example.

    return {
        setLink() {
            const previousUrl = editor.getAttributes('link').href
            const url = window.prompt('URL', previousUrl)
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
                Link.configure({
                  openOnClick: false,
                  defaultProtocol: 'https',
                }),
                StarterKit
            ],
            content: content,
            onCreate({ editor }) {
            _this.updatedAt = Date.now()
            },
            onUpdate({ editor }) {
            _this.updatedAt = Date.now()
            },
            onSelectionUpdate({ editor }) {
            _this.updatedAt = Date.now()
            },
        })
        },
        isLoaded() {
        return editor
        },
        isActive(type, opts = {}) {
        return editor.isActive(type, opts)
        },
        toggleHeading(opts) {
        editor.chain().toggleHeading(opts).focus().run()
        },
        toggleBold() {
        editor.chain().focus().toggleBold().run()
        },
        toggleItalic() {
        editor.chain().toggleItalic().focus().run()
        },
        toggleLink() {
            _this.setLink()
        }
    }
    })

}, { once: true })
