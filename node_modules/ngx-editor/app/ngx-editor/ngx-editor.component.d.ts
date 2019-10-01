import { OnInit, EventEmitter, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CommandExecutorService } from './common/services/command-executor.service';
import { MessageService } from './common/services/message.service';
export declare class NgxEditorComponent implements OnInit, ControlValueAccessor {
    private _messageService;
    private _commandExecutor;
    private _renderer;
    /** Specifies weather the textarea to be editable or not */
    editable: boolean;
    /** The spellcheck property specifies whether the element is to have its spelling and grammar checked or not. */
    spellcheck: boolean;
    /** Placeholder for the textArea */
    placeholder: string;
    /**
     * The translate property specifies whether the content of an element should be translated or not.
     *
     * Check https://www.w3schools.com/tags/att_global_translate.asp for more information and browser support
     */
    translate: string;
    /** Sets height of the editor */
    height: string;
    /** Sets minimum height for the editor */
    minHeight: string;
    /** Sets Width of the editor */
    width: string;
    /** Sets minimum width of the editor */
    minWidth: string;
    /**
     * Toolbar accepts an array which specifies the options to be enabled for the toolbar
     *
     * Check ngxEditorConfig for toolbar configuration
     *
     * Passing an empty array will enable all toolbar
     */
    toolbar: Object;
    /**
     * The editor can be resized vertically.
     *
     * `basic` resizer enables the html5 reszier. Check here https://www.w3schools.com/cssref/css3_pr_resize.asp
     *
     * `stack` resizer enable a resizer that looks like as if in https://stackoverflow.com
     */
    resizer: string;
    /**
     * The config property is a JSON object
     *
     * All avaibale inputs inputs can be provided in the configuration as JSON
     * inputs provided directly are considered as top priority
     */
    config: {
        editable: boolean;
        spellcheck: boolean;
        height: string;
        minHeight: string;
        width: string;
        minWidth: string;
        translate: string;
        enableToolbar: boolean;
        showToolbar: boolean;
        placeholder: string;
        imageEndPoint: string;
        toolbar: string[][];
    };
    /** Weather to show or hide toolbar */
    showToolbar: boolean;
    /** Weather to enable or disable the toolbar */
    enableToolbar: boolean;
    /** Endpoint for which the image to be uploaded */
    imageEndPoint: string;
    /** emits `blur` event when focused out from the textarea */
    blur: EventEmitter<string>;
    /** emits `focus` event when focused in to the textarea */
    focus: EventEmitter<string>;
    textArea: any;
    ngxWrapper: any;
    Utils: any;
    private onChange;
    private onTouched;
    /**
     * @param _messageService service to send message to the editor message component
     * @param _commandExecutor executes command from the toolbar
     * @param _renderer access and manipulate the dom element
     */
    constructor(_messageService: MessageService, _commandExecutor: CommandExecutorService, _renderer: Renderer2);
    /**
     * events
     */
    onTextAreaFocus(): void;
    /** focus the text area when the editor is focussed */
    onEditorFocus(): void;
    /**
     * Executed from the contenteditable section while the input property changes
     * @param html html string from contenteditable
     */
    onContentChange(innerHTML: string): void;
    onTextAreaBlur(): void;
    /**
     * resizing text area
     *
     * @param offsetY vertical height of the eidtable portion of the editor
     */
    resizeTextArea(offsetY: number): void;
    /**
     * editor actions, i.e., executes command from toolbar
     *
     * @param commandName name of the command to be executed
     */
    executeCommand(commandName: string): void;
    /**
     * Write a new value to the element.
     *
     * @param value value to be executed when there is a change in contenteditable
     */
    writeValue(value: any): void;
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param fn a function
     */
    registerOnChange(fn: any): void;
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param fn a function
     */
    registerOnTouched(fn: any): void;
    /**
     * refresh view/HTML of the editor
     *
     * @param value html string from the editor
     */
    refreshView(value: string): void;
    /**
     * toggles placeholder based on input string
     *
     * @param value A HTML string from the editor
     */
    togglePlaceholder(value: any): void;
    /**
     * returns a json containing input params
     */
    getCollectiveParams(): any;
    ngOnInit(): void;
}
