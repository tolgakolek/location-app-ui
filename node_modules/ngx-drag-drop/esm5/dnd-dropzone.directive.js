/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChild, Directive, ElementRef, EventEmitter, HostListener, Input, NgZone, Output, Renderer2 } from "@angular/core";
import { getDirectChildElement, getDropData, shouldPositionPlaceholderBeforeElement } from "./dnd-utils";
import { getDndType, getDropEffect, isExternalDrag, setDropEffect } from "./dnd-state";
/**
 * @record
 */
export function DndDropEvent() { }
if (false) {
    /** @type {?} */
    DndDropEvent.prototype.event;
    /** @type {?} */
    DndDropEvent.prototype.dropEffect;
    /** @type {?} */
    DndDropEvent.prototype.isExternal;
    /** @type {?|undefined} */
    DndDropEvent.prototype.data;
    /** @type {?|undefined} */
    DndDropEvent.prototype.index;
    /** @type {?|undefined} */
    DndDropEvent.prototype.type;
}
var DndPlaceholderRefDirective = /** @class */ (function () {
    function DndPlaceholderRefDirective(elementRef) {
        this.elementRef = elementRef;
    }
    DndPlaceholderRefDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[dndPlaceholderRef]"
                },] }
    ];
    /** @nocollapse */
    DndPlaceholderRefDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return DndPlaceholderRefDirective;
}());
export { DndPlaceholderRefDirective };
if (false) {
    /** @type {?} */
    DndPlaceholderRefDirective.prototype.elementRef;
}
var DndDropzoneDirective = /** @class */ (function () {
    function DndDropzoneDirective(ngZone, elementRef, renderer) {
        var _this = this;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dndAllowExternal = false;
        this.dndHorizontal = false;
        this.dndDragoverClass = "dndDragover";
        this.dndDropzoneDisabledClass = "dndDropzoneDisabled";
        this.dndDragover = new EventEmitter();
        this.dndDrop = new EventEmitter();
        this.placeholder = null;
        this.disabled = false;
        this.dragEnterEventHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDragEnter(event); });
        this.dragOverEventHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDragOver(event); });
        this.dragLeaveEventHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDragLeave(event); });
    }
    Object.defineProperty(DndDropzoneDirective.prototype, "dndDisableIf", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.disabled = !!value;
            if (this.disabled) {
                this.renderer.addClass(this.elementRef.nativeElement, this.dndDropzoneDisabledClass);
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, this.dndDropzoneDisabledClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DndDropzoneDirective.prototype, "dndDisableDropIf", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dndDisableIf = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DndDropzoneDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.placeholder = this.tryGetPlaceholder();
        this.removePlaceholderFromDOM();
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.elementRef.nativeElement.addEventListener("dragenter", _this.dragEnterEventHandler);
            _this.elementRef.nativeElement.addEventListener("dragover", _this.dragOverEventHandler);
            _this.elementRef.nativeElement.addEventListener("dragleave", _this.dragLeaveEventHandler);
        }));
    };
    /**
     * @return {?}
     */
    DndDropzoneDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.removeEventListener("dragenter", this.dragEnterEventHandler);
        this.elementRef.nativeElement.removeEventListener("dragover", this.dragOverEventHandler);
        this.elementRef.nativeElement.removeEventListener("dragleave", this.dragLeaveEventHandler);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDropzoneDirective.prototype.onDragEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // check if another dropzone is activated
        if (event._dndDropzoneActive === true) {
            this.cleanupDragoverState();
            return;
        }
        // set as active if the target element is inside this dropzone
        if (typeof event._dndDropzoneActive === "undefined") {
            /** @type {?} */
            var newTarget = document.elementFromPoint(event.clientX, event.clientY);
            if (this.elementRef.nativeElement.contains(newTarget)) {
                event._dndDropzoneActive = true;
            }
        }
        // check if this drag event is allowed to drop on this dropzone
        /** @type {?} */
        var type = getDndType(event);
        if (this.isDropAllowed(type) === false) {
            return;
        }
        // allow the dragenter
        event.preventDefault();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDropzoneDirective.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // With nested dropzones, we want to ignore this event if a child dropzone
        // has already handled a dragover.  Historically, event.stopPropagation() was
        // used to prevent this bubbling, but that prevents any dragovers outside the
        // ngx-drag-drop component, and stops other use cases such as scrolling on drag.
        // Instead, we can check if the event was already prevented by a child and bail early.
        if (event.defaultPrevented) {
            return;
        }
        // check if this drag event is allowed to drop on this dropzone
        /** @type {?} */
        var type = getDndType(event);
        if (this.isDropAllowed(type) === false) {
            return;
        }
        this.checkAndUpdatePlaceholderPosition(event);
        /** @type {?} */
        var dropEffect = getDropEffect(event, this.dndEffectAllowed);
        if (dropEffect === "none") {
            this.cleanupDragoverState();
            return;
        }
        // allow the dragover
        event.preventDefault();
        // set the drop effect
        setDropEffect(event, dropEffect);
        this.dndDragover.emit(event);
        this.renderer.addClass(this.elementRef.nativeElement, this.dndDragoverClass);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDropzoneDirective.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        try {
            // check if this drag event is allowed to drop on this dropzone
            /** @type {?} */
            var type = getDndType(event);
            if (this.isDropAllowed(type) === false) {
                return;
            }
            /** @type {?} */
            var data = getDropData(event, isExternalDrag());
            if (this.isDropAllowed(data.type) === false) {
                return;
            }
            // signal custom drop handling
            event.preventDefault();
            /** @type {?} */
            var dropEffect = getDropEffect(event);
            setDropEffect(event, dropEffect);
            if (dropEffect === "none") {
                return;
            }
            /** @type {?} */
            var dropIndex = this.getPlaceholderIndex();
            // if for whatever reason the placeholder is not present in the DOM but it should be there
            // we don't allow/emit the drop event since it breaks the contract
            // seems to only happen if drag and drop is executed faster than the DOM updates
            if (dropIndex === -1) {
                return;
            }
            this.dndDrop.emit({
                event: event,
                dropEffect: dropEffect,
                isExternal: isExternalDrag(),
                data: data.data,
                index: dropIndex,
                type: type,
            });
            event.stopPropagation();
        }
        finally {
            this.cleanupDragoverState();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDropzoneDirective.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // check if still inside this dropzone and not yet handled by another dropzone
        if (typeof event._dndDropzoneActive === "undefined") {
            /** @type {?} */
            var newTarget = document.elementFromPoint(event.clientX, event.clientY);
            if (this.elementRef.nativeElement.contains(newTarget)) {
                event._dndDropzoneActive = true;
                return;
            }
        }
        this.cleanupDragoverState();
        // cleanup drop effect when leaving dropzone
        setDropEffect(event, "none");
    };
    /**
     * @private
     * @param {?=} type
     * @return {?}
     */
    DndDropzoneDirective.prototype.isDropAllowed = /**
     * @private
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        // dropzone is disabled -> deny it
        if (this.disabled === true) {
            return false;
        }
        // if drag did not start from our directive
        // and external drag sources are not allowed -> deny it
        if (isExternalDrag() === true
            && this.dndAllowExternal === false) {
            return false;
        }
        // no filtering by types -> allow it
        if (!this.dndDropzone) {
            return true;
        }
        // no type set -> allow it
        if (!type) {
            return true;
        }
        if (Array.isArray(this.dndDropzone) === false) {
            throw new Error("dndDropzone: bound value to [dndDropzone] must be an array!");
        }
        // if dropzone contains type -> allow it
        return this.dndDropzone.indexOf(type) !== -1;
    };
    /**
     * @private
     * @return {?}
     */
    DndDropzoneDirective.prototype.tryGetPlaceholder = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.dndPlaceholderRef !== "undefined") {
            return (/** @type {?} */ (this.dndPlaceholderRef.elementRef.nativeElement));
        }
        // TODO nasty workaround needed because if ng-container / template is used @ContentChild() or DI will fail because
        // of wrong context see angular bug https://github.com/angular/angular/issues/13517
        return this.elementRef.nativeElement.querySelector("[dndPlaceholderRef]");
    };
    /**
     * @private
     * @return {?}
     */
    DndDropzoneDirective.prototype.removePlaceholderFromDOM = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.placeholder !== null
            && this.placeholder.parentNode !== null) {
            this.placeholder.parentNode.removeChild(this.placeholder);
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DndDropzoneDirective.prototype.checkAndUpdatePlaceholderPosition = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.placeholder === null) {
            return;
        }
        // make sure the placeholder is in the DOM
        if (this.placeholder.parentNode !== this.elementRef.nativeElement) {
            this.renderer.appendChild(this.elementRef.nativeElement, this.placeholder);
        }
        // update the position if the event originates from a child element of the dropzone
        /** @type {?} */
        var directChild = getDirectChildElement(this.elementRef.nativeElement, (/** @type {?} */ (event.target)));
        // early exit if no direct child or direct child is placeholder
        if (directChild === null
            || directChild === this.placeholder) {
            return;
        }
        /** @type {?} */
        var positionPlaceholderBeforeDirectChild = shouldPositionPlaceholderBeforeElement(event, directChild, this.dndHorizontal);
        if (positionPlaceholderBeforeDirectChild) {
            // do insert before only if necessary
            if (directChild.previousSibling !== this.placeholder) {
                this.renderer.insertBefore(this.elementRef.nativeElement, this.placeholder, directChild);
            }
        }
        else {
            // do insert after only if necessary
            if (directChild.nextSibling !== this.placeholder) {
                this.renderer.insertBefore(this.elementRef.nativeElement, this.placeholder, directChild.nextSibling);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    DndDropzoneDirective.prototype.getPlaceholderIndex = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.placeholder === null) {
            return undefined;
        }
        /** @type {?} */
        var element = (/** @type {?} */ (this.elementRef.nativeElement));
        return Array.prototype.indexOf.call(element.children, this.placeholder);
    };
    /**
     * @private
     * @return {?}
     */
    DndDropzoneDirective.prototype.cleanupDragoverState = /**
     * @private
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.elementRef.nativeElement, this.dndDragoverClass);
        this.removePlaceholderFromDOM();
    };
    DndDropzoneDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[dndDropzone]"
                },] }
    ];
    /** @nocollapse */
    DndDropzoneDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DndDropzoneDirective.propDecorators = {
        dndDropzone: [{ type: Input }],
        dndEffectAllowed: [{ type: Input }],
        dndAllowExternal: [{ type: Input }],
        dndHorizontal: [{ type: Input }],
        dndDragoverClass: [{ type: Input }],
        dndDropzoneDisabledClass: [{ type: Input }],
        dndDragover: [{ type: Output }],
        dndDrop: [{ type: Output }],
        dndPlaceholderRef: [{ type: ContentChild, args: [DndPlaceholderRefDirective,] }],
        dndDisableIf: [{ type: Input }],
        dndDisableDropIf: [{ type: Input }],
        onDrop: [{ type: HostListener, args: ["drop", ["$event"],] }]
    };
    return DndDropzoneDirective;
}());
export { DndDropzoneDirective };
if (false) {
    /** @type {?} */
    DndDropzoneDirective.prototype.dndDropzone;
    /** @type {?} */
    DndDropzoneDirective.prototype.dndEffectAllowed;
    /** @type {?} */
    DndDropzoneDirective.prototype.dndAllowExternal;
    /** @type {?} */
    DndDropzoneDirective.prototype.dndHorizontal;
    /** @type {?} */
    DndDropzoneDirective.prototype.dndDragoverClass;
    /** @type {?} */
    DndDropzoneDirective.prototype.dndDropzoneDisabledClass;
    /** @type {?} */
    DndDropzoneDirective.prototype.dndDragover;
    /** @type {?} */
    DndDropzoneDirective.prototype.dndDrop;
    /**
     * @type {?}
     * @private
     */
    DndDropzoneDirective.prototype.dndPlaceholderRef;
    /**
     * @type {?}
     * @private
     */
    DndDropzoneDirective.prototype.placeholder;
    /**
     * @type {?}
     * @private
     */
    DndDropzoneDirective.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    DndDropzoneDirective.prototype.dragEnterEventHandler;
    /**
     * @type {?}
     * @private
     */
    DndDropzoneDirective.prototype.dragOverEventHandler;
    /**
     * @type {?}
     * @private
     */
    DndDropzoneDirective.prototype.dragLeaveEventHandler;
    /**
     * @type {?}
     * @private
     */
    DndDropzoneDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    DndDropzoneDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DndDropzoneDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLWRyb3B6b25lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kcmFnLWRyb3AvIiwic291cmNlcyI6WyJkbmQtZHJvcHpvbmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLHFCQUFxQixFQUNyQixXQUFXLEVBQ1gsc0NBQXNDLEVBQ3ZDLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFHdkYsa0NBT0M7OztJQU5DLDZCQUFnQjs7SUFDaEIsa0NBQXNCOztJQUN0QixrQ0FBbUI7O0lBQ25CLDRCQUFVOztJQUNWLDZCQUFjOztJQUNkLDRCQUFVOztBQUdaO0lBS0Usb0NBQTZCLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7SUFDbEQsQ0FBQzs7Z0JBTkYsU0FBUyxTQUFFO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDOzs7O2dCQTlCQyxVQUFVOztJQW1DWixpQ0FBQztDQUFBLEFBUEQsSUFPQztTQUpZLDBCQUEwQjs7O0lBRXhCLGdEQUFxQzs7QUFJcEQ7SUE0REUsOEJBQXFCLE1BQWEsRUFDYixVQUFxQixFQUNyQixRQUFrQjtRQUZ2QyxpQkFHQztRQUhvQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBbER2QyxxQkFBZ0IsR0FBVyxLQUFLLENBQUM7UUFHakMsa0JBQWEsR0FBVyxLQUFLLENBQUM7UUFHOUIscUJBQWdCLEdBQVUsYUFBYSxDQUFD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QUFFLENBQUM7SUFDNUUsQ0FBQzs7Ozs7SUFFTyxtREFBb0I7Ozs7SUFBNUI7UUFFRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUUsQ0FBQztRQUVsRixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkE5VkYsU0FBUyxTQUFFO29CQUNWLFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7OztnQkFuQ0MsTUFBTTtnQkFKTixVQUFVO2dCQU9WLFNBQVM7Ozs4QkFtQ1IsS0FBSzttQ0FHTCxLQUFLO21DQUdMLEtBQUs7Z0NBR0wsS0FBSzttQ0FHTCxLQUFLOzJDQUdMLEtBQUs7OEJBR0wsTUFBTTswQkFHTixNQUFNO29DQUdOLFlBQVksU0FBRSwwQkFBMEI7K0JBV3hDLEtBQUs7bUNBZUwsS0FBSzt5QkFtR0wsWUFBWSxTQUFFLE1BQU0sRUFBRSxDQUFFLFFBQVEsQ0FBRTs7SUFxTXJDLDJCQUFDO0NBQUEsQUEvVkQsSUErVkM7U0E1Vlksb0JBQW9COzs7SUFFL0IsMkNBQ3NCOztJQUV0QixnREFDK0I7O0lBRS9CLGdEQUNpQzs7SUFFakMsNkNBQzhCOztJQUU5QixnREFDd0M7O0lBRXhDLHdEQUNpRDs7SUFFakQsMkNBQzZFOztJQUU3RSx1Q0FDK0U7Ozs7O0lBRS9FLGlEQUMrRDs7Ozs7SUFFL0QsMkNBQTBDOzs7OztJQUUxQyx3Q0FBaUM7Ozs7O0lBRWpDLHFEQUFzSDs7Ozs7SUFDdEgsb0RBQW9IOzs7OztJQUNwSCxxREFBc0g7Ozs7O0lBc0J6RyxzQ0FBcUI7Ozs7O0lBQ3JCLDBDQUE2Qjs7Ozs7SUFDN0Isd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBEbmRFdmVudCxcbiAgRHJhZ0Ryb3BEYXRhLFxuICBnZXREaXJlY3RDaGlsZEVsZW1lbnQsXG4gIGdldERyb3BEYXRhLFxuICBzaG91bGRQb3NpdGlvblBsYWNlaG9sZGVyQmVmb3JlRWxlbWVudFxufSBmcm9tIFwiLi9kbmQtdXRpbHNcIjtcbmltcG9ydCB7IGdldERuZFR5cGUsIGdldERyb3BFZmZlY3QsIGlzRXh0ZXJuYWxEcmFnLCBzZXREcm9wRWZmZWN0IH0gZnJvbSBcIi4vZG5kLXN0YXRlXCI7XG5pbXBvcnQgeyBEcm9wRWZmZWN0LCBFZmZlY3RBbGxvd2VkIH0gZnJvbSBcIi4vZG5kLXR5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG5kRHJvcEV2ZW50IHtcbiAgZXZlbnQ6RHJhZ0V2ZW50O1xuICBkcm9wRWZmZWN0OkRyb3BFZmZlY3Q7XG4gIGlzRXh0ZXJuYWw6Ym9vbGVhbjtcbiAgZGF0YT86YW55O1xuICBpbmRleD86bnVtYmVyO1xuICB0eXBlPzphbnk7XG59XG5cbkBEaXJlY3RpdmUoIHtcbiAgc2VsZWN0b3I6IFwiW2RuZFBsYWNlaG9sZGVyUmVmXVwiXG59IClcbmV4cG9ydCBjbGFzcyBEbmRQbGFjZWhvbGRlclJlZkRpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoIHB1YmxpYyByZWFkb25seSBlbGVtZW50UmVmOkVsZW1lbnRSZWYgKSB7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSgge1xuICBzZWxlY3RvcjogXCJbZG5kRHJvcHpvbmVdXCJcbn0gKVxuZXhwb3J0IGNsYXNzIERuZERyb3B6b25lRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKVxuICBkbmREcm9wem9uZT86c3RyaW5nW107XG5cbiAgQElucHV0KClcbiAgZG5kRWZmZWN0QWxsb3dlZDpFZmZlY3RBbGxvd2VkO1xuXG4gIEBJbnB1dCgpXG4gIGRuZEFsbG93RXh0ZXJuYWw6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGRuZEhvcml6b250YWw6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGRuZERyYWdvdmVyQ2xhc3M6c3RyaW5nID0gXCJkbmREcmFnb3ZlclwiO1xuXG4gIEBJbnB1dCgpXG4gIGRuZERyb3B6b25lRGlzYWJsZWRDbGFzcyA9IFwiZG5kRHJvcHpvbmVEaXNhYmxlZFwiO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBkbmREcmFnb3ZlcjpFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBkbmREcm9wOkV2ZW50RW1pdHRlcjxEbmREcm9wRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEbmREcm9wRXZlbnQ+KCk7XG5cbiAgQENvbnRlbnRDaGlsZCggRG5kUGxhY2Vob2xkZXJSZWZEaXJlY3RpdmUgKVxuICBwcml2YXRlIHJlYWRvbmx5IGRuZFBsYWNlaG9sZGVyUmVmPzpEbmRQbGFjZWhvbGRlclJlZkRpcmVjdGl2ZTtcblxuICBwcml2YXRlIHBsYWNlaG9sZGVyOkVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIGRpc2FibGVkOmJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGRyYWdFbnRlckV2ZW50SGFuZGxlcjooIGV2ZW50OkRyYWdFdmVudCApID0+IHZvaWQgPSAoIGV2ZW50OkRyYWdFdmVudCApID0+IHRoaXMub25EcmFnRW50ZXIoIGV2ZW50ICk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZHJhZ092ZXJFdmVudEhhbmRsZXI6KCBldmVudDpEcmFnRXZlbnQgKSA9PiB2b2lkID0gKCBldmVudDpEcmFnRXZlbnQgKSA9PiB0aGlzLm9uRHJhZ092ZXIoIGV2ZW50ICk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZHJhZ0xlYXZlRXZlbnRIYW5kbGVyOiggZXZlbnQ6RHJhZ0V2ZW50ICkgPT4gdm9pZCA9ICggZXZlbnQ6RHJhZ0V2ZW50ICkgPT4gdGhpcy5vbkRyYWdMZWF2ZSggZXZlbnQgKTtcblxuICBASW5wdXQoKVxuICBzZXQgZG5kRGlzYWJsZUlmKCB2YWx1ZTpib29sZWFuICkge1xuXG4gICAgdGhpcy5kaXNhYmxlZCA9ICEhdmFsdWU7XG5cbiAgICBpZiggdGhpcy5kaXNhYmxlZCApIHtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyggdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZG5kRHJvcHpvbmVEaXNhYmxlZENsYXNzICk7XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5kbmREcm9wem9uZURpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZG5kRGlzYWJsZURyb3BJZiggdmFsdWU6Ym9vbGVhbiApIHtcbiAgICB0aGlzLmRuZERpc2FibGVJZiA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgbmdab25lOk5nWm9uZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjpSZW5kZXJlcjIgKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcblxuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnRyeUdldFBsYWNlaG9sZGVyKCk7XG5cbiAgICB0aGlzLnJlbW92ZVBsYWNlaG9sZGVyRnJvbURPTSgpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoICgpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VudGVyXCIsIHRoaXMuZHJhZ0VudGVyRXZlbnRIYW5kbGVyICk7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJFdmVudEhhbmRsZXIgKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2xlYXZlXCIsIHRoaXMuZHJhZ0xlYXZlRXZlbnRIYW5kbGVyICk7XG4gICAgfSApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdlbnRlclwiLCB0aGlzLmRyYWdFbnRlckV2ZW50SGFuZGxlciApO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3ZlckV2ZW50SGFuZGxlciApO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ2xlYXZlXCIsIHRoaXMuZHJhZ0xlYXZlRXZlbnRIYW5kbGVyICk7XG4gIH1cblxuICBvbkRyYWdFbnRlciggZXZlbnQ6RG5kRXZlbnQgKSB7XG5cbiAgICAvLyBjaGVjayBpZiBhbm90aGVyIGRyb3B6b25lIGlzIGFjdGl2YXRlZFxuICAgIGlmKCBldmVudC5fZG5kRHJvcHpvbmVBY3RpdmUgPT09IHRydWUgKSB7XG5cbiAgICAgIHRoaXMuY2xlYW51cERyYWdvdmVyU3RhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzZXQgYXMgYWN0aXZlIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBpbnNpZGUgdGhpcyBkcm9wem9uZVxuICAgIGlmKCB0eXBlb2YgZXZlbnQuX2RuZERyb3B6b25lQWN0aXZlID09PSBcInVuZGVmaW5lZFwiICkge1xuXG4gICAgICBjb25zdCBuZXdUYXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgIGlmKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyggbmV3VGFyZ2V0ICkgKSB7XG5cbiAgICAgICAgZXZlbnQuX2RuZERyb3B6b25lQWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0aGlzIGRyYWcgZXZlbnQgaXMgYWxsb3dlZCB0byBkcm9wIG9uIHRoaXMgZHJvcHpvbmVcbiAgICBjb25zdCB0eXBlID0gZ2V0RG5kVHlwZSggZXZlbnQgKTtcbiAgICBpZiggdGhpcy5pc0Ryb3BBbGxvd2VkKCB0eXBlICkgPT09IGZhbHNlICkge1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWxsb3cgdGhlIGRyYWdlbnRlclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvbkRyYWdPdmVyKCBldmVudDpEcmFnRXZlbnQgKSB7XG4gICAgLy8gV2l0aCBuZXN0ZWQgZHJvcHpvbmVzLCB3ZSB3YW50IHRvIGlnbm9yZSB0aGlzIGV2ZW50IGlmIGEgY2hpbGQgZHJvcHpvbmVcbiAgICAvLyBoYXMgYWxyZWFkeSBoYW5kbGVkIGEgZHJhZ292ZXIuICBIaXN0b3JpY2FsbHksIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIHdhc1xuICAgIC8vIHVzZWQgdG8gcHJldmVudCB0aGlzIGJ1YmJsaW5nLCBidXQgdGhhdCBwcmV2ZW50cyBhbnkgZHJhZ292ZXJzIG91dHNpZGUgdGhlXG4gICAgLy8gbmd4LWRyYWctZHJvcCBjb21wb25lbnQsIGFuZCBzdG9wcyBvdGhlciB1c2UgY2FzZXMgc3VjaCBhcyBzY3JvbGxpbmcgb24gZHJhZy5cbiAgICAvLyBJbnN0ZWFkLCB3ZSBjYW4gY2hlY2sgaWYgdGhlIGV2ZW50IHdhcyBhbHJlYWR5IHByZXZlbnRlZCBieSBhIGNoaWxkIGFuZCBiYWlsIGVhcmx5LlxuICAgIGlmKCBldmVudC5kZWZhdWx0UHJldmVudGVkICkge1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgdGhpcyBkcmFnIGV2ZW50IGlzIGFsbG93ZWQgdG8gZHJvcCBvbiB0aGlzIGRyb3B6b25lXG4gICAgY29uc3QgdHlwZSA9IGdldERuZFR5cGUoIGV2ZW50ICk7XG4gICAgaWYoIHRoaXMuaXNEcm9wQWxsb3dlZCggdHlwZSApID09PSBmYWxzZSApIHtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tBbmRVcGRhdGVQbGFjZWhvbGRlclBvc2l0aW9uKCBldmVudCApO1xuXG4gICAgY29uc3QgZHJvcEVmZmVjdCA9IGdldERyb3BFZmZlY3QoIGV2ZW50LCB0aGlzLmRuZEVmZmVjdEFsbG93ZWQgKTtcblxuICAgIGlmKCBkcm9wRWZmZWN0ID09PSBcIm5vbmVcIiApIHtcblxuICAgICAgdGhpcy5jbGVhbnVwRHJhZ292ZXJTdGF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFsbG93IHRoZSBkcmFnb3ZlclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBzZXQgdGhlIGRyb3AgZWZmZWN0XG4gICAgc2V0RHJvcEVmZmVjdCggZXZlbnQsIGRyb3BFZmZlY3QgKTtcblxuICAgIHRoaXMuZG5kRHJhZ292ZXIuZW1pdCggZXZlbnQgKTtcblxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmRuZERyYWdvdmVyQ2xhc3MgKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoIFwiZHJvcFwiLCBbIFwiJGV2ZW50XCIgXSApXG4gIG9uRHJvcCggZXZlbnQ6RHJhZ0V2ZW50ICkge1xuXG4gICAgdHJ5IHtcblxuICAgICAgLy8gY2hlY2sgaWYgdGhpcyBkcmFnIGV2ZW50IGlzIGFsbG93ZWQgdG8gZHJvcCBvbiB0aGlzIGRyb3B6b25lXG4gICAgICBjb25zdCB0eXBlID0gZ2V0RG5kVHlwZSggZXZlbnQgKTtcbiAgICAgIGlmKCB0aGlzLmlzRHJvcEFsbG93ZWQoIHR5cGUgKSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhOkRyYWdEcm9wRGF0YSA9IGdldERyb3BEYXRhKCBldmVudCwgaXNFeHRlcm5hbERyYWcoKSApO1xuXG4gICAgICBpZiggdGhpcy5pc0Ryb3BBbGxvd2VkKCBkYXRhLnR5cGUgKSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBzaWduYWwgY3VzdG9tIGRyb3AgaGFuZGxpbmdcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGRyb3BFZmZlY3QgPSBnZXREcm9wRWZmZWN0KCBldmVudCApO1xuXG4gICAgICBzZXREcm9wRWZmZWN0KCBldmVudCwgZHJvcEVmZmVjdCApO1xuXG4gICAgICBpZiggZHJvcEVmZmVjdCA9PT0gXCJub25lXCIgKSB7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkcm9wSW5kZXggPSB0aGlzLmdldFBsYWNlaG9sZGVySW5kZXgoKTtcblxuICAgICAgLy8gaWYgZm9yIHdoYXRldmVyIHJlYXNvbiB0aGUgcGxhY2Vob2xkZXIgaXMgbm90IHByZXNlbnQgaW4gdGhlIERPTSBidXQgaXQgc2hvdWxkIGJlIHRoZXJlXG4gICAgICAvLyB3ZSBkb24ndCBhbGxvdy9lbWl0IHRoZSBkcm9wIGV2ZW50IHNpbmNlIGl0IGJyZWFrcyB0aGUgY29udHJhY3RcbiAgICAgIC8vIHNlZW1zIHRvIG9ubHkgaGFwcGVuIGlmIGRyYWcgYW5kIGRyb3AgaXMgZXhlY3V0ZWQgZmFzdGVyIHRoYW4gdGhlIERPTSB1cGRhdGVzXG4gICAgICBpZiggZHJvcEluZGV4ID09PSAtMSApIHtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZG5kRHJvcC5lbWl0KCB7XG4gICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgZHJvcEVmZmVjdDogZHJvcEVmZmVjdCxcbiAgICAgICAgaXNFeHRlcm5hbDogaXNFeHRlcm5hbERyYWcoKSxcbiAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxuICAgICAgICBpbmRleDogZHJvcEluZGV4LFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgfSApO1xuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIH1cbiAgICBmaW5hbGx5IHtcblxuICAgICAgdGhpcy5jbGVhbnVwRHJhZ292ZXJTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRHJhZ0xlYXZlKCBldmVudDpEbmRFdmVudCApIHtcblxuICAgIC8vIGNoZWNrIGlmIHN0aWxsIGluc2lkZSB0aGlzIGRyb3B6b25lIGFuZCBub3QgeWV0IGhhbmRsZWQgYnkgYW5vdGhlciBkcm9wem9uZVxuICAgIGlmKCB0eXBlb2YgZXZlbnQuX2RuZERyb3B6b25lQWN0aXZlID09PSBcInVuZGVmaW5lZFwiICkge1xuXG4gICAgICBjb25zdCBuZXdUYXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgIGlmKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyggbmV3VGFyZ2V0ICkgKSB7XG5cbiAgICAgICAgZXZlbnQuX2RuZERyb3B6b25lQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2xlYW51cERyYWdvdmVyU3RhdGUoKTtcblxuICAgIC8vIGNsZWFudXAgZHJvcCBlZmZlY3Qgd2hlbiBsZWF2aW5nIGRyb3B6b25lXG4gICAgc2V0RHJvcEVmZmVjdCggZXZlbnQsIFwibm9uZVwiICk7XG4gIH1cblxuICBwcml2YXRlIGlzRHJvcEFsbG93ZWQoIHR5cGU/OnN0cmluZyApOmJvb2xlYW4ge1xuXG4gICAgLy8gZHJvcHpvbmUgaXMgZGlzYWJsZWQgLT4gZGVueSBpdFxuICAgIGlmKCB0aGlzLmRpc2FibGVkID09PSB0cnVlICkge1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaWYgZHJhZyBkaWQgbm90IHN0YXJ0IGZyb20gb3VyIGRpcmVjdGl2ZVxuICAgIC8vIGFuZCBleHRlcm5hbCBkcmFnIHNvdXJjZXMgYXJlIG5vdCBhbGxvd2VkIC0+IGRlbnkgaXRcbiAgICBpZiggaXNFeHRlcm5hbERyYWcoKSA9PT0gdHJ1ZVxuICAgICAgJiYgdGhpcy5kbmRBbGxvd0V4dGVybmFsID09PSBmYWxzZSApIHtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIG5vIGZpbHRlcmluZyBieSB0eXBlcyAtPiBhbGxvdyBpdFxuICAgIGlmKCAhdGhpcy5kbmREcm9wem9uZSApIHtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gbm8gdHlwZSBzZXQgLT4gYWxsb3cgaXRcbiAgICBpZiggIXR5cGUgKSB7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmKCBBcnJheS5pc0FycmF5KCB0aGlzLmRuZERyb3B6b25lICkgPT09IGZhbHNlICkge1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiZG5kRHJvcHpvbmU6IGJvdW5kIHZhbHVlIHRvIFtkbmREcm9wem9uZV0gbXVzdCBiZSBhbiBhcnJheSFcIiApO1xuICAgIH1cblxuICAgIC8vIGlmIGRyb3B6b25lIGNvbnRhaW5zIHR5cGUgLT4gYWxsb3cgaXRcbiAgICByZXR1cm4gdGhpcy5kbmREcm9wem9uZS5pbmRleE9mKCB0eXBlICkgIT09IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlHZXRQbGFjZWhvbGRlcigpOkVsZW1lbnQgfCBudWxsIHtcblxuICAgIGlmKCB0eXBlb2YgdGhpcy5kbmRQbGFjZWhvbGRlclJlZiAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblxuICAgICAgcmV0dXJuIHRoaXMuZG5kUGxhY2Vob2xkZXJSZWYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gVE9ETyBuYXN0eSB3b3JrYXJvdW5kIG5lZWRlZCBiZWNhdXNlIGlmIG5nLWNvbnRhaW5lciAvIHRlbXBsYXRlIGlzIHVzZWQgQENvbnRlbnRDaGlsZCgpIG9yIERJIHdpbGwgZmFpbCBiZWNhdXNlXG4gICAgLy8gb2Ygd3JvbmcgY29udGV4dCBzZWUgYW5ndWxhciBidWcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTM1MTdcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvciggXCJbZG5kUGxhY2Vob2xkZXJSZWZdXCIgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlUGxhY2Vob2xkZXJGcm9tRE9NKCkge1xuXG4gICAgaWYoIHRoaXMucGxhY2Vob2xkZXIgIT09IG51bGxcbiAgICAgICYmIHRoaXMucGxhY2Vob2xkZXIucGFyZW50Tm9kZSAhPT0gbnVsbCApIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5wbGFjZWhvbGRlciApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tBbmRVcGRhdGVQbGFjZWhvbGRlclBvc2l0aW9uKCBldmVudDpEcmFnRXZlbnQgKTp2b2lkIHtcblxuICAgIGlmKCB0aGlzLnBsYWNlaG9sZGVyID09PSBudWxsICkge1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gbWFrZSBzdXJlIHRoZSBwbGFjZWhvbGRlciBpcyBpbiB0aGUgRE9NXG4gICAgaWYoIHRoaXMucGxhY2Vob2xkZXIucGFyZW50Tm9kZSAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgKSB7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnBsYWNlaG9sZGVyICk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHRoZSBwb3NpdGlvbiBpZiB0aGUgZXZlbnQgb3JpZ2luYXRlcyBmcm9tIGEgY2hpbGQgZWxlbWVudCBvZiB0aGUgZHJvcHpvbmVcbiAgICBjb25zdCBkaXJlY3RDaGlsZCA9IGdldERpcmVjdENoaWxkRWxlbWVudCggdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50LnRhcmdldCBhcyBFbGVtZW50ICk7XG5cbiAgICAvLyBlYXJseSBleGl0IGlmIG5vIGRpcmVjdCBjaGlsZCBvciBkaXJlY3QgY2hpbGQgaXMgcGxhY2Vob2xkZXJcbiAgICBpZiggZGlyZWN0Q2hpbGQgPT09IG51bGxcbiAgICAgIHx8IGRpcmVjdENoaWxkID09PSB0aGlzLnBsYWNlaG9sZGVyICkge1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcG9zaXRpb25QbGFjZWhvbGRlckJlZm9yZURpcmVjdENoaWxkID0gc2hvdWxkUG9zaXRpb25QbGFjZWhvbGRlckJlZm9yZUVsZW1lbnQoIGV2ZW50LCBkaXJlY3RDaGlsZCwgdGhpcy5kbmRIb3Jpem9udGFsICk7XG5cbiAgICBpZiggcG9zaXRpb25QbGFjZWhvbGRlckJlZm9yZURpcmVjdENoaWxkICkge1xuXG4gICAgICAvLyBkbyBpbnNlcnQgYmVmb3JlIG9ubHkgaWYgbmVjZXNzYXJ5XG4gICAgICBpZiggZGlyZWN0Q2hpbGQucHJldmlvdXNTaWJsaW5nICE9PSB0aGlzLnBsYWNlaG9sZGVyICkge1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5wbGFjZWhvbGRlciwgZGlyZWN0Q2hpbGQgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICAgIC8vIGRvIGluc2VydCBhZnRlciBvbmx5IGlmIG5lY2Vzc2FyeVxuICAgICAgaWYoIGRpcmVjdENoaWxkLm5leHRTaWJsaW5nICE9PSB0aGlzLnBsYWNlaG9sZGVyICkge1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5wbGFjZWhvbGRlciwgZGlyZWN0Q2hpbGQubmV4dFNpYmxpbmcgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBsYWNlaG9sZGVySW5kZXgoKTpudW1iZXIgfCB1bmRlZmluZWQge1xuXG4gICAgaWYoIHRoaXMucGxhY2Vob2xkZXIgPT09IG51bGwgKSB7XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoIGVsZW1lbnQuY2hpbGRyZW4sIHRoaXMucGxhY2Vob2xkZXIgKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW51cERyYWdvdmVyU3RhdGUoKSB7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5kbmREcmFnb3ZlckNsYXNzICk7XG5cbiAgICB0aGlzLnJlbW92ZVBsYWNlaG9sZGVyRnJvbURPTSgpO1xuICB9XG59XG4iXX0=