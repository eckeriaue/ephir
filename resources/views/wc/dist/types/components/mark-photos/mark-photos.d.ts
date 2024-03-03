export declare class MarkPhotos {
    images: Map<string, File>;
    getImages(): Promise<Map<string, File>>;
    load(file: File): Promise<void>;
    render(): any;
}
