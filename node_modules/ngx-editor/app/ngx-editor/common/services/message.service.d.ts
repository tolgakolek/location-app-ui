import { Observable } from 'rxjs';
export declare class MessageService {
    /** variable to hold the user message */
    private message;
    constructor();
    /** returns the message sent by the editor */
    getMessage(): Observable<string>;
    /**
     * sends message to the editor
     *
     * @param message message to be sent
     */
    sendMessage(message: string): void;
    /**
     * a short interval to clear message
     *
     * @param milliseconds time in seconds in which the message has to be cleared
     */
    private clearMessageIn;
}
