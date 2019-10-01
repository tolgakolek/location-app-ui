/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, TemplateRef } from '@angular/core';
import { escapeHTML } from './value-utils';
var NgItemLabelDirective = /** @class */ (function () {
    function NgItemLabelDirective(element) {
        this.element = element;
        this.escape = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgItemLabelDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.element.nativeElement.innerHTML = this.escape ?
            escapeHTML(this.ngItemLabel) :
            this.ngItemLabel;
    };
    NgItemLabelDirective.decorators = [
        { type: Directive, args: [{ selector: '[ngItemLabel]' },] }
    ];
    /** @nocollapse */
    NgItemLabelDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NgItemLabelDirective.propDecorators = {
        ngItemLabel: [{ type: Input }],
        escape: [{ type: Input }]
    };
    return NgItemLabelDirective;
}());
export { NgItemLabelDirective };
if (false) {
    /** @type {?} */
    NgItemLabelDirective.prototype.ngItemLabel;
    /** @type {?} */
    NgItemLabelDirective.prototype.escape;
    /**
     * @type {?}
     * @private
     */
    NgItemLabelDirective.prototype.element;
}
var NgOptionTemplateDirective = /** @class */ (function () {
    function NgOptionTemplateDirective(template) {
        this.template = template;
    }
    NgOptionTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-option-tmp]' },] }
    ];
    /** @nocollapse */
    NgOptionTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgOptionTemplateDirective;
}());
export { NgOptionTemplateDirective };
if (false) {
    /** @type {?} */
    NgOptionTemplateDirective.prototype.template;
}
var NgOptgroupTemplateDirective = /** @class */ (function () {
    function NgOptgroupTemplateDirective(template) {
        this.template = template;
    }
    NgOptgroupTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-optgroup-tmp]' },] }
    ];
    /** @nocollapse */
    NgOptgroupTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgOptgroupTemplateDirective;
}());
export { NgOptgroupTemplateDirective };
if (false) {
    /** @type {?} */
    NgOptgroupTemplateDirective.prototype.template;
}
var NgLabelTemplateDirective = /** @class */ (function () {
    function NgLabelTemplateDirective(template) {
        this.template = template;
    }
    NgLabelTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-label-tmp]' },] }
    ];
    /** @nocollapse */
    NgLabelTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgLabelTemplateDirective;
}());
export { NgLabelTemplateDirective };
if (false) {
    /** @type {?} */
    NgLabelTemplateDirective.prototype.template;
}
var NgMultiLabelTemplateDirective = /** @class */ (function () {
    function NgMultiLabelTemplateDirective(template) {
        this.template = template;
    }
    NgMultiLabelTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-multi-label-tmp]' },] }
    ];
    /** @nocollapse */
    NgMultiLabelTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgMultiLabelTemplateDirective;
}());
export { NgMultiLabelTemplateDirective };
if (false) {
    /** @type {?} */
    NgMultiLabelTemplateDirective.prototype.template;
}
var NgHeaderTemplateDirective = /** @class */ (function () {
    function NgHeaderTemplateDirective(template) {
        this.template = template;
    }
    NgHeaderTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-header-tmp]' },] }
    ];
    /** @nocollapse */
    NgHeaderTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgHeaderTemplateDirective;
}());
export { NgHeaderTemplateDirective };
if (false) {
    /** @type {?} */
    NgHeaderTemplateDirective.prototype.template;
}
var NgFooterTemplateDirective = /** @class */ (function () {
    function NgFooterTemplateDirective(template) {
        this.template = template;
    }
    NgFooterTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-footer-tmp]' },] }
    ];
    /** @nocollapse */
    NgFooterTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgFooterTemplateDirective;
}());
export { NgFooterTemplateDirective };
if (false) {
    /** @type {?} */
    NgFooterTemplateDirective.prototype.template;
}
var NgNotFoundTemplateDirective = /** @class */ (function () {
    function NgNotFoundTemplateDirective(template) {
        this.template = template;
    }
    NgNotFoundTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-notfound-tmp]' },] }
    ];
    /** @nocollapse */
    NgNotFoundTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgNotFoundTemplateDirective;
}());
export { NgNotFoundTemplateDirective };
if (false) {
    /** @type {?} */
    NgNotFoundTemplateDirective.prototype.template;
}
var NgTypeToSearchTemplateDirective = /** @class */ (function () {
    function NgTypeToSearchTemplateDirective(template) {
        this.template = template;
    }
    NgTypeToSearchTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-typetosearch-tmp]' },] }
    ];
    /** @nocollapse */
    NgTypeToSearchTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgTypeToSearchTemplateDirective;
}());
export { NgTypeToSearchTemplateDirective };
if (false) {
    /** @type {?} */
    NgTypeToSearchTemplateDirective.prototype.template;
}
var NgLoadingTextTemplateDirective = /** @class */ (function () {
    function NgLoadingTextTemplateDirective(template) {
        this.template = template;
    }
    NgLoadingTextTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-loadingtext-tmp]' },] }
    ];
    /** @nocollapse */
    NgLoadingTextTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgLoadingTextTemplateDirective;
}());
export { NgLoadingTextTemplateDirective };
if (false) {
    /** @type {?} */
    NgLoadingTextTemplateDirective.prototype.template;
}
var NgTagTemplateDirective = /** @class */ (function () {
    function NgTagTemplateDirective(template) {
        this.template = template;
    }
    NgTagTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-tag-tmp]' },] }
    ];
    /** @nocollapse */
    NgTagTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgTagTemplateDirective;
}());
export { NgTagTemplateDirective };
if (false) {
    /** @type {?} */
    NgTagTemplateDirective.prototype.template;
}
var NgLoadingSpinnerTemplateDirective = /** @class */ (function () {
    function NgLoadingSpinnerTemplateDirective(template) {
        this.template = template;
    }
    NgLoadingSpinnerTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-loadingspinner-tmp]' },] }
    ];
    /** @nocollapse */
    NgLoadingSpinnerTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgLoadingSpinnerTemplateDirective;
}());
export { NgLoadingSpinnerTemplateDirective };
if (false) {
    /** @type {?} */
    NgLoadingSpinnerTemplateDirective.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGVtcGxhdGVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibGliL25nLXRlbXBsYXRlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBNEIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFLSSw4QkFBb0IsT0FBZ0M7UUFBaEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFGM0MsV0FBTSxHQUFHLElBQUksQ0FBQztJQUVpQyxDQUFDOzs7OztJQUV6RCwwQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRCxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOztnQkFYSixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFOzs7O2dCQUhwQixVQUFVOzs7OEJBS3pCLEtBQUs7eUJBQ0wsS0FBSzs7SUFTViwyQkFBQztDQUFBLEFBWkQsSUFZQztTQVhZLG9CQUFvQjs7O0lBQzdCLDJDQUE2Qjs7SUFDN0Isc0NBQXVCOzs7OztJQUVYLHVDQUF3Qzs7QUFTeEQ7SUFFSSxtQ0FBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBSSxDQUFDOztnQkFGckQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzs7O2dCQWpCdUIsV0FBVzs7SUFvQjVFLGdDQUFDO0NBQUEsQUFIRCxJQUdDO1NBRlkseUJBQXlCOzs7SUFDdEIsNkNBQWlDOztBQUdq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WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBlc2NhcGVIVE1MIH0gZnJvbSAnLi92YWx1ZS11dGlscyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZ0l0ZW1MYWJlbF0nIH0pXG5leHBvcnQgY2xhc3MgTmdJdGVtTGFiZWxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIG5nSXRlbUxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZXNjYXBlID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHsgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmVzY2FwZSA/XG4gICAgICAgICAgICBlc2NhcGVIVE1MKHRoaXMubmdJdGVtTGFiZWwpIDpcbiAgICAgICAgICAgIHRoaXMubmdJdGVtTGFiZWw7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctb3B0aW9uLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLW9wdGdyb3VwLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctbGFiZWwtdG1wXScgfSlcbmV4cG9ydCBjbGFzcyBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1tdWx0aS1sYWJlbC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctaGVhZGVyLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLWZvb3Rlci10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1ub3Rmb3VuZC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLXR5cGV0b3NlYXJjaC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1sb2FkaW5ndGV4dC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLXRhZy10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1sb2FkaW5nc3Bpbm5lci10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cbiJdfQ==