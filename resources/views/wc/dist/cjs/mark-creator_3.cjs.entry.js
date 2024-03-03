'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c55dc7f7.js');

const MarkCreator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: 'eb444d4027e5c66101fd681b19daff3fd1642bc3' }, index.h("button", { key: '0f316f53cb2d7c687cc06938721587b3d9181d1d', onClick: async () => this.photos.load(await this.loadImage()), type: "button" }, '📷'), index.h("button", { key: '7a1f2b97dbfec05b3f2b41d44f32025ee0091612', type: "button" }, '🔗'), index.h("mark-editor", { key: '491744dbb6b6f88bdcb4349e1afc9eb94c063641' }), index.h("mark-photos", { key: 'e5a0c298c3236c1750dd0ee24845dfef2ea71811', ref: el => this.photos = el })));
    }
};

const markEditorCss = ":host{display:block}p{margin:0}.content{outline:1px solid #d0d7de;border-radius:6px;padding:24px}";
const MarkEditorStyle0 = markEditorCss;

const MarkEditor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("p", { key: '30212632070f7ee7948454c7e22748616b8016d6', class: "content", contenteditable: "plaintext-only" }));
    }
};
MarkEditor.style = MarkEditorStyle0;

const MarkPhotos = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.images = new Map();
    }
    getImages() {
        return Promise.resolve(this.images);
    }
    async load(file) {
        const url = URL.createObjectURL(file);
        this.images.set(url, file);
        index.forceUpdate(this);
    }
    render() {
        return (index.h("div", { key: '1c85e17baec29e9fb1a99f1c0bd0f0b6e87186dd', class: "slider" }, [...this.images.keys()].map(src => {
            return (index.h("div", { class: "slide" }, index.h("img", { src: src })));
        })));
    }
};
MarkPhotos.style = ".slider {\n      display: flex;\n      flex-wrap: wrap;\n    }\n    .slide {\n      max-height: 320px;\n    }\n    img {\n      max-height:100%;\n    }";

exports.mark_creator = MarkCreator;
exports.mark_editor = MarkEditor;
exports.mark_photos = MarkPhotos;

//# sourceMappingURL=mark-creator_3.cjs.entry.js.map