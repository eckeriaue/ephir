import { proxyCustomElement, HTMLElement, forceUpdate, h } from '@stencil/core/internal/client';

const MarkPhotos = /*@__PURE__*/ proxyCustomElement(class MarkPhotos extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.images = new Map();
    }
    getImages() {
        return Promise.resolve(this.images);
    }
    async load(file) {
        const url = URL.createObjectURL(file);
        this.images.set(url, file);
        forceUpdate(this);
    }
    render() {
        return (h("div", { key: '1c85e17baec29e9fb1a99f1c0bd0f0b6e87186dd', class: "slider" }, [...this.images.keys()].map(src => {
            return (h("div", { class: "slide" }, h("img", { src: src })));
        })));
    }
    static get style() { return ".slider {\n      display: flex;\n      flex-wrap: wrap;\n    }\n    .slide {\n      max-height: 320px;\n    }\n    img {\n      max-height:100%;\n    }"; }
}, [1, "mark-photos", {
        "images": [32],
        "getImages": [64],
        "load": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mark-photos"];
    components.forEach(tagName => { switch (tagName) {
        case "mark-photos":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MarkPhotos);
            }
            break;
    } });
}

export { MarkPhotos as M, defineCustomElement as d };

//# sourceMappingURL=mark-photos2.js.map