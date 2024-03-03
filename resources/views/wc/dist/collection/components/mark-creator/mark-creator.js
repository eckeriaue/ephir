import { h } from "@stencil/core";
export class MarkCreator {
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
    static get is() { return "mark-creator"; }
    static get encapsulation() { return "shadow"; }
}
//# sourceMappingURL=mark-creator.js.map
