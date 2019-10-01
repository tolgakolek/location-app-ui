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
    return (control) => {
        /** @type {?} */
        const parsedDocument = new DOMParser().parseFromString(control.value, 'text/html');
        /** @type {?} */
        let innerText = parsedDocument.body.innerText || '';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4bGVuZ3RoLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lZGl0b3IvIiwic291cmNlcyI6WyJhcHAvbmd4LWVkaXRvci92YWxpZGF0b3JzL21heGxlbmd0aC12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sNkJBQTZCLFNBQWlCLEVBQUUsT0FBb0M7SUFDeEYsT0FBTyxDQUFDLE9BQXdCLEVBQWlDLEVBQUU7O1FBQ2pFLE1BQU0sY0FBYyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7O1FBQ25GLElBQUksU0FBUyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQzs7UUFHcEQsSUFBSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDN0IsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7O1FBR0QsSUFBSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDN0IsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pEOztRQUdELElBQUksT0FBTyxDQUFDLGtCQUFrQixFQUFFO1lBQzlCLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM3QztRQUVELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7WUFDaEMsT0FBTztnQkFDTCxTQUFTLEVBQUU7b0JBQ1QsYUFBYSxFQUFFLFNBQVM7b0JBQ3hCLFVBQVUsRUFBRSxTQUFTLENBQUMsTUFBTTtpQkFDN0I7YUFDRixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNiLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW50ZXJmYWNlIElNYXhMZW5ndGhWYWxpZGF0b3JPcHRpb25zIHtcbiAgZXhjbHVkZUxpbmVCcmVha3M/OiBib29sZWFuO1xuICBjb25jYXRXaGl0ZVNwYWNlcz86IGJvb2xlYW47XG4gIGV4Y2x1ZGVXaGl0ZVNwYWNlcz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNYXhMZW5ndGhWYWxpZGF0b3IobWF4bGVuZ3RoOiBudW1iZXIsIG9wdGlvbnM/OiBJTWF4TGVuZ3RoVmFsaWRhdG9yT3B0aW9ucykge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsID0+IHtcbiAgICBjb25zdCBwYXJzZWREb2N1bWVudCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoY29udHJvbC52YWx1ZSwgJ3RleHQvaHRtbCcpO1xuICAgIGxldCBpbm5lclRleHQgPSBwYXJzZWREb2N1bWVudC5ib2R5LmlubmVyVGV4dCB8fCAnJztcblxuICAgIC8vIHJlcGxhY2UgYWxsIGxpbmVicmVha3NcbiAgICBpZiAob3B0aW9ucy5leGNsdWRlTGluZUJyZWFrcykge1xuICAgICAgaW5uZXJUZXh0ID0gaW5uZXJUZXh0LnJlcGxhY2UoLyhcXHJcXG5cXHR8XFxufFxcclxcdCkvZ20sICcnKTtcbiAgICB9XG5cbiAgICAvLyBjb25jYXQgbXVsdGlwbGUgd2hpdGVzcGFjZXMgaW50byBhIHNpbmdsZSB3aGl0ZXNwYWNlXG4gICAgaWYgKG9wdGlvbnMuY29uY2F0V2hpdGVTcGFjZXMpIHtcbiAgICAgIGlubmVyVGV4dCA9IGlubmVyVGV4dC5yZXBsYWNlKC8oXFxzXFxzKykvZ20sICcgJyk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGFsbCB3aGl0ZXNwYWNlc1xuICAgIGlmIChvcHRpb25zLmV4Y2x1ZGVXaGl0ZVNwYWNlcykge1xuICAgICAgaW5uZXJUZXh0ID0gaW5uZXJUZXh0LnJlcGxhY2UoLyhcXHMpL2dtLCAnJyk7XG4gICAgfVxuXG4gICAgaWYgKGlubmVyVGV4dC5sZW5ndGggPiBtYXhsZW5ndGgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5neEVkaXRvcjoge1xuICAgICAgICAgIGFsbG93ZWRMZW5ndGg6IG1heGxlbmd0aCxcbiAgICAgICAgICB0ZXh0TGVuZ3RoOiBpbm5lclRleHQubGVuZ3RoXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuIl19