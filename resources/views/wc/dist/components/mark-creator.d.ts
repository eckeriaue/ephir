import type { Components, JSX } from "../types/components";

interface MarkCreator extends Components.MarkCreator, HTMLElement {}
export const MarkCreator: {
    prototype: MarkCreator;
    new (): MarkCreator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
