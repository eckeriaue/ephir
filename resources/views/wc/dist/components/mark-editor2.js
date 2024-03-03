import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const markEditorCss = ":host{display:block}p{margin:0}.content{outline:1px solid #d0d7de;border-radius:6px;padding:24px}";
const MarkEditorStyle0 = markEditorCss;

const MarkEditor = /*@__PURE__*/ proxyCustomElement(class MarkEditor extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("p", { key: '30212632070f7ee7948454c7e22748616b8016d6', class: "content", contenteditable: "plaintext-only" }));
    }
    static get style() { return MarkEditorStyle0; }
}, [1, "mark-editor"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mark-editor"];
    components.forEach(tagName => { switch (tagName) {
        case "mark-editor":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MarkEditor);
            }
            break;
    } });
}

export { MarkEditor as M, defineCustomElement as d };

//# sourceMappingURL=mark-editor2.js.map