import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './mark-editor2.js';
import { d as defineCustomElement$2 } from './mark-photos2.js';

const MarkCreator$1 = /*@__PURE__*/ proxyCustomElement(class MarkCreator extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    loadImage() {
        const input = Object.assign(document.createElement('input'), {
            type: 'file',
            accept: 'image/png, image/gif, image/jpeg'
        });
        return new Promise(resolve => {
            input.addEventListener('input', () => resolve(input.files.item(0)), { once: true });
            input.click();
        });
    }
    render() {
        return (h("div", { key: 'eb444d4027e5c66101fd681b19daff3fd1642bc3' }, h("button", { key: '0f316f53cb2d7c687cc06938721587b3d9181d1d', onClick: async () => this.photos.load(await this.loadImage()), type: "button" }, '📷'), h("button", { key: '7a1f2b97dbfec05b3f2b41d44f32025ee0091612', type: "button" }, '🔗'), h("mark-editor", { key: '491744dbb6b6f88bdcb4349e1afc9eb94c063641' }), h("mark-photos", { key: 'e5a0c298c3236c1750dd0ee24845dfef2ea71811', ref: el => this.photos = el })));
    }
}, [1, "mark-creator"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mark-creator", "mark-editor", "mark-photos"];
    components.forEach(tagName => { switch (tagName) {
        case "mark-creator":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MarkCreator$1);
            }
            break;
        case "mark-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "mark-photos":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const MarkCreator = MarkCreator$1;
const defineCustomElement = defineCustomElement$1;

export { MarkCreator, defineCustomElement };

//# sourceMappingURL=mark-creator.js.map