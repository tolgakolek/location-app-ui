/**
 * enable or disable toolbar based on configuration
 *
 * @param value toolbar item
 * @param toolbar toolbar configuration object
 */
export declare function canEnableToolbarOptions(value: string, toolbar: any): boolean;
/**
 * set editor configuration
 *
 * @param value configuration via [config] property
 * @param ngxEditorConfig default editor configuration
 * @param input direct configuration inputs via directives
 */
export declare function getEditorConfiguration(value: any, ngxEditorConfig: any, input: any): any;
/**
 * return vertical if the element is the resizer property is set to basic
 *
 * @param resizer type of resizer, either basic or stack
 */
export declare function canResize(resizer: string): any;
/**
 * save selection when the editor is focussed out
 */
export declare function saveSelection(): any;
/**
 * restore selection when the editor is focussed in
 *
 * @param range saved selection when the editor is focussed out
 */
export declare function restoreSelection(range: any): boolean;
