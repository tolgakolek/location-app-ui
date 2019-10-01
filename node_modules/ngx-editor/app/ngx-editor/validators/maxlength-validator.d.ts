import { AbstractControl } from '@angular/forms';
interface IMaxLengthValidatorOptions {
    excludeLineBreaks?: boolean;
    concatWhiteSpaces?: boolean;
    excludeWhiteSpaces?: boolean;
}
export declare function MaxLengthValidator(maxlength: number, options?: IMaxLengthValidatorOptions): (control: AbstractControl) => {
    [key: string]: any;
};
export {};
