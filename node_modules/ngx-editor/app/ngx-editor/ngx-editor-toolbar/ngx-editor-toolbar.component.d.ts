import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PopoverConfig } from 'ngx-bootstrap';
import { CommandExecutorService } from '../common/services/command-executor.service';
import { MessageService } from '../common/services/message.service';
export declare class NgxEditorToolbarComponent implements OnInit {
    private _popOverConfig;
    private _formBuilder;
    private _messageService;
    private _commandExecutorService;
    /** holds values of the insert link form */
    urlForm: FormGroup;
    /** holds values of the insert image form */
    imageForm: FormGroup;
    /** holds values of the insert video form */
    videoForm: FormGroup;
    /** set to false when image is being uploaded */
    uploadComplete: boolean;
    /** upload percentage */
    updloadPercentage: number;
    /** set to true when the image is being uploaded */
    isUploading: boolean;
    /** which tab to active for color insetion */
    selectedColorTab: string;
    /** font family name */
    fontName: string;
    /** font size */
    fontSize: string;
    /** hex color code */
    hexColor: string;
    /** show/hide image uploader */
    isImageUploader: boolean;
    /**
     * Editor configuration
     */
    config: any;
    urlPopover: any;
    imagePopover: any;
    videoPopover: any;
    fontSizePopover: any;
    colorPopover: any;
    /**
     * Emits an event when a toolbar button is clicked
     */
    execute: EventEmitter<string>;
    constructor(_popOverConfig: PopoverConfig, _formBuilder: FormBuilder, _messageService: MessageService, _commandExecutorService: CommandExecutorService);
    /**
     * enable or diable toolbar based on configuration
     *
     * @param value name of the toolbar buttons
     */
    canEnableToolbarOptions(value: any): boolean;
    /**
     * triggers command from the toolbar to be executed and emits an event
     *
     * @param command name of the command to be executed
     */
    triggerCommand(command: string): void;
    /**
     * create URL insert form
     */
    buildUrlForm(): void;
    /**
     * inserts link in the editor
     */
    insertLink(): void;
    /**
     * create insert image form
     */
    buildImageForm(): void;
    /**
     * create insert image form
     */
    buildVideoForm(): void;
    /**
     * Executed when file is selected
     *
     * @param e onChange event
     */
    onFileChange(e: any): void;
    /** insert image in the editor */
    insertImage(): void;
    /** insert image in the editor */
    insertVideo(): void;
    /** inser text/background color */
    insertColor(color: string, where: string): void;
    /** set font size */
    setFontSize(fontSize: string): void;
    /** set font Name/family */
    setFontName(fontName: string): void;
    ngOnInit(): void;
}
