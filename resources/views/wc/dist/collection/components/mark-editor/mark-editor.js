import { h } from "@stencil/core";
export class MarkEditor {
    render() {
        return (h("p", { key: '30212632070f7ee7948454c7e22748616b8016d6', class: "content", contenteditable: "plaintext-only" }));
    }
    static get is() { return "mark-editor"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["mark-editor.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["mark-editor.css"]
        };
    }
}
//# sourceMappingURL=mark-editor.js.map
