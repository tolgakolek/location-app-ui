import { HttpClient } from '@angular/common/http';
export declare class CommandExecutorService {
    private _http;
    /** saves the selection from the editor when focussed out */
    savedSelection: any;
    /**
     *
     * @param _http HTTP Client for making http requests
     */
    constructor(_http: HttpClient);
    /**
     * executes command from the toolbar
     *
     * @param command command to be executed
     */
    execute(command: string): void;
    /**
     * inserts image in the editor
     *
     * @param imageURI url of the image to be inserted
     */
    insertImage(imageURI: string): void;
    /**
   * inserts image in the editor
   *
   * @param videParams url of the image to be inserted
   */
    insertVideo(videParams: any): void;
    /**
     * checks the input url is a valid youtube URL or not
     *
     * @param url Youtue URL
     */
    private isYoutubeLink;
    /**
     * check whether the string is a valid url or not
     * @param url url
     */
    private isValidURL;
    /**
     * uploads image to the server
     *
     * @param file file that has to be uploaded
     * @param endPoint enpoint to which the image has to be uploaded
     */
    uploadImage(file: File, endPoint: string): any;
    /**
     * inserts link in the editor
     *
     * @param params parameters that holds the information for the link
     */
    createLink(params: any): void;
    /**
     * insert color either font or background
     *
     * @param color color to be inserted
     * @param where where the color has to be inserted either text/background
     */
    insertColor(color: string, where: string): void;
    /**
     * set font size for text
     *
     * @param fontSize font-size to be set
     */
    setFontSize(fontSize: string): void;
    /**
     * set font name/family for text
     *
     * @param fontName font-family to be set
     */
    setFontName(fontName: string): void;
    /** insert HTML */
    private insertHtml;
    /**
     * check whether the value is a number or string
     * if number return true
     * else return false
     */
    private isNumeric;
    /** delete the text at selected range and return the value */
    private deleteAndGetElement;
    /** check any slection is made or not */
    private checkSelection;
    /**
     * check tag is supported by browser or not
     *
     * @param tag HTML tag
     */
    private checkTagSupportInBrowser;
}
