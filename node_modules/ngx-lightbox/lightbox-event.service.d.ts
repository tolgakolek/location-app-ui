import { Observable } from 'rxjs';
export interface IEvent {
    id: number;
    data?: any;
}
export interface IAlbum {
    src: string;
    caption?: string;
    thumb: string;
}
export declare const LIGHTBOX_EVENT: {
    CHANGE_PAGE: number;
    CLOSE: number;
    OPEN: number;
};
export declare class LightboxEvent {
    private _lightboxEventSource;
    lightboxEvent$: Observable<Object>;
    constructor();
    broadcastLightboxEvent(event: any): void;
}
export declare class LightboxWindowRef {
    readonly nativeWindow: any;
}
