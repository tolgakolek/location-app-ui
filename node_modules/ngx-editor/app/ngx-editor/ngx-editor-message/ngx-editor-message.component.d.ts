import { MessageService } from '../common/services/message.service';
export declare class NgxEditorMessageComponent {
    private _messageService;
    /** property that holds the message to be displayed on the editor */
    ngxMessage: any;
    /**
     * @param _messageService service to send message to the editor
     */
    constructor(_messageService: MessageService);
    /**
     * clears editor message
     */
    clearMessage(): void;
}
