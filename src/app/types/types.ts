export type CursorPosition = { x: number, y: number };

export type options = { x: number, y: number, w: number, h: number }

export type Product = {
    name: string,
    code: number,
    link_to_image: string
}

export type DropEvent = {
    Element: HTMLElement,
    Image: HTMLImageElement,
    Rect: ClientRect,
};

export type DropResponse = {
    Element?: HTMLElement,
    Status: 'approved' | 'rejected'
};
