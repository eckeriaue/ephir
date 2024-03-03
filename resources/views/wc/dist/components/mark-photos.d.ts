import type { Components, JSX } from "../types/components";

interface MarkPhotos extends Components.MarkPhotos, HTMLElement {}
export const MarkPhotos: {
    prototype: MarkPhotos;
    new (): MarkPhotos;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
