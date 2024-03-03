import type { Components, JSX } from "../types/components";

interface MarkEditor extends Components.MarkEditor, HTMLElement {}
export const MarkEditor: {
    prototype: MarkEditor;
    new (): MarkEditor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
