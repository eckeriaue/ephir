import { forceUpdate, h } from "@stencil/core";
export class MarkPhotos {
    constructor() {
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
    static get is() { return "mark-photos"; }
    static get encapsulation() { return "shadow"; }
    static get styles() { return ".slider {\n      display: flex;\n      flex-wrap: wrap;\n    }\n    .slide {\n      max-height: 320px;\n    }\n    img {\n      max-height:100%;\n    }"; }
    static get states() {
        return {
            "images": {}
        };
    }
    static get methods() {
        return {
            "getImages": {
                "complexType": {
                    "signature": "() => Promise<Map<string, File>>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Map": {
                            "location": "global",
                            "id": "global::Map"
                        },
                        "File": {
                            "location": "global",
                            "id": "global::File"
                        }
                    },
                    "return": "Promise<Map<string, File>>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "load": {
                "complexType": {
                    "signature": "(file: File) => Promise<void>",
                    "parameters": [{
                            "name": "file",
                            "type": "File",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "File": {
                            "location": "global",
                            "id": "global::File"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=mark-photos.js.map
