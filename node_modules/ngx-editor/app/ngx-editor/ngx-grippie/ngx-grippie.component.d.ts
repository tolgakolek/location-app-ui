import { NgxEditorComponent } from '../ngx-editor.component';
export declare class NgxGrippieComponent {
    private _editorComponent;
    /** height of the editor */
    height: number;
    /** previous value befor resizing the editor */
    oldY: number;
    /** set to true on mousedown event */
    grabber: boolean;
    /**
     * Constructor
     *
     * @param _editorComponent Editor component
     */
    constructor(_editorComponent: NgxEditorComponent);
    /**
     *
     * @param event Mouseevent
     *
     * Update the height of the editor when the grabber is dragged
     */
    onMouseMove(event: MouseEvent): void;
    /**
     *
     * @param event Mouseevent
     *
     * set the grabber to false on mouse up action
     */
    onMouseUp(event: MouseEvent): void;
    onResize(event: MouseEvent, resizer?: Function): void;
}
