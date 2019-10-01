/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IMaxLengthValidatorOptions() { }
/** @type {?|undefined} */
IMaxLengthValidatorOptions.prototype.excludeLineBreaks;
/** @type {?|undefined} */
IMaxLengthValidatorOptions.prototype.concatWhiteSpaces;
/** @type {?|undefined} */
IMaxLengthValidatorOptions.prototype.excludeWhiteSpaces;
/**
 * @param {?} maxlength
 * @param {?=} options
 * @return {?}
 */
export function MaxLengthValidator(maxlength, options) {
    return function (control) {
        /** @type {?} */
        var parsedDocument = new DOMParser().parseFromString(control.value, 'text/html');
        /** @type {?} */
        var innerText = parsedDocument.body.innerText || '';
        // replace all linebreaks
        if (options.excludeLineBreaks) {
            innerText = innerText.replace(/(\r\n\t|\n|\r\t)/gm, '');
        }
        // concat multiple whitespaces into a single whitespace
        if (options.concatWhiteSpaces) {
            innerText = innerText.replace(/(\s\s+)/gm, ' ');
        }
        // remove all whitespaces
        if (options.excludeWhiteSpaces) {
            innerText = innerText.replace(/(\s)/gm, '');
        }
        if (innerText.length > maxlength) {
            return {
                ngxEditor: {
                    allowedLength: maxlength,
                    textLength: innerText.length
                }
            };
        }
        return null;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4bGVuZ3RoLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lZGl0b3IvIiwic291cmNlcyI6WyJhcHAvbmd4LWVkaXRvci92YWxpZGF0b3JzL21heGxlbmd0aC12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sNkJBQTZCLFNBQWlCLEVBQUUsT0FBb0M7SUFDeEYsT0FBTyxVQUFDLE9BQXdCOztRQUM5QixJQUFNLGNBQWMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDOztRQUNuRixJQUFJLFNBQVMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7O1FBR3BELElBQUksT0FBTyxDQUFDLGlCQUFpQixFQUFFO1lBQzdCLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3pEOztRQUdELElBQUksT0FBTyxDQUFDLGlCQUFpQixFQUFFO1lBQzdCLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqRDs7UUFHRCxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtZQUM5QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFO1lBQ2hDLE9BQU87Z0JBQ0wsU0FBUyxFQUFFO29CQUNULGFBQWEsRUFBRSxTQUFTO29CQUN4QixVQUFVLEVBQUUsU0FBUyxDQUFDLE1BQU07aUJBQzdCO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDYixDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmludGVyZmFjZSBJTWF4TGVuZ3RoVmFsaWRhdG9yT3B0aW9ucyB7XG4gIGV4Y2x1ZGVMaW5lQnJlYWtzPzogYm9vbGVhbjtcbiAgY29uY2F0V2hpdGVTcGFjZXM/OiBib29sZWFuO1xuICBleGNsdWRlV2hpdGVTcGFjZXM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTWF4TGVuZ3RoVmFsaWRhdG9yKG1heGxlbmd0aDogbnVtYmVyLCBvcHRpb25zPzogSU1heExlbmd0aFZhbGlkYXRvck9wdGlvbnMpIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgY29uc3QgcGFyc2VkRG9jdW1lbnQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGNvbnRyb2wudmFsdWUsICd0ZXh0L2h0bWwnKTtcbiAgICBsZXQgaW5uZXJUZXh0ID0gcGFyc2VkRG9jdW1lbnQuYm9keS5pbm5lclRleHQgfHwgJyc7XG5cbiAgICAvLyByZXBsYWNlIGFsbCBsaW5lYnJlYWtzXG4gICAgaWYgKG9wdGlvbnMuZXhjbHVkZUxpbmVCcmVha3MpIHtcbiAgICAgIGlubmVyVGV4dCA9IGlubmVyVGV4dC5yZXBsYWNlKC8oXFxyXFxuXFx0fFxcbnxcXHJcXHQpL2dtLCAnJyk7XG4gICAgfVxuXG4gICAgLy8gY29uY2F0IG11bHRpcGxlIHdoaXRlc3BhY2VzIGludG8gYSBzaW5nbGUgd2hpdGVzcGFjZVxuICAgIGlmIChvcHRpb25zLmNvbmNhdFdoaXRlU3BhY2VzKSB7XG4gICAgICBpbm5lclRleHQgPSBpbm5lclRleHQucmVwbGFjZSgvKFxcc1xccyspL2dtLCAnICcpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBhbGwgd2hpdGVzcGFjZXNcbiAgICBpZiAob3B0aW9ucy5leGNsdWRlV2hpdGVTcGFjZXMpIHtcbiAgICAgIGlubmVyVGV4dCA9IGlubmVyVGV4dC5yZXBsYWNlKC8oXFxzKS9nbSwgJycpO1xuICAgIH1cblxuICAgIGlmIChpbm5lclRleHQubGVuZ3RoID4gbWF4bGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZ3hFZGl0b3I6IHtcbiAgICAgICAgICBhbGxvd2VkTGVuZ3RoOiBtYXhsZW5ndGgsXG4gICAgICAgICAgdGV4dExlbmd0aDogaW5uZXJUZXh0Lmxlbmd0aFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cbiJdfQ==