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
export class DndPlaceholderRefDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
DndPlaceholderRefDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dndPlaceholderRef]"
            },] }
];
/** @nocollapse */
DndPlaceholderRefDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    DndPlaceholderRefDirective.prototype.elementRef;
}
export class DndDropzoneDirective {
    /**
     * @param {?} ngZone
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(ngZone, elementRef, renderer) {
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
        (event) => this.onDragEnter(event));
        this.dragOverEventHandler = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onDragOver(event));
        this.dragLeaveEventHandler = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onDragLeave(event));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dndDisableIf(value) {
        this.disabled = !!value;
        if (this.disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, this.dndDropzoneDisabledClass);
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, this.dndDropzoneDisabledClass);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dndDisableDropIf(value) {
        this.dndDisableIf = value;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.placeholder = this.tryGetPlaceholder();
        this.removePlaceholderFromDOM();
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.elementRef.nativeElement.addEventListener("dragenter", this.dragEnterEventHandler);
            this.elementRef.nativeElement.addEventListener("dragover", this.dragOverEventHandler);
            this.elementRef.nativeElement.addEventListener("dragleave", this.dragLeaveEventHandler);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.elementRef.nativeElement.removeEventListener("dragenter", this.dragEnterEventHandler);
        this.elementRef.nativeElement.removeEventListener("dragover", this.dragOverEventHandler);
        this.elementRef.nativeElement.removeEventListener("dragleave", this.dragLeaveEventHandler);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragEnter(event) {
        // check if another dropzone is activated
        if (event._dndDropzoneActive === true) {
            this.cleanupDragoverState();
            return;
        }
        // set as active if the target element is inside this dropzone
        if (typeof event._dndDropzoneActive === "undefined") {
            /** @type {?} */
            const newTarget = document.elementFromPoint(event.clientX, event.clientY);
            if (this.elementRef.nativeElement.contains(newTarget)) {
                event._dndDropzoneActive = true;
            }
        }
        // check if this drag event is allowed to drop on this dropzone
        /** @type {?} */
        const type = getDndType(event);
        if (this.isDropAllowed(type) === false) {
            return;
        }
        // allow the dragenter
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
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
        const type = getDndType(event);
        if (this.isDropAllowed(type) === false) {
            return;
        }
        this.checkAndUpdatePlaceholderPosition(event);
        /** @type {?} */
        const dropEffect = getDropEffect(event, this.dndEffectAllowed);
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        try {
            // check if this drag event is allowed to drop on this dropzone
            /** @type {?} */
            const type = getDndType(event);
            if (this.isDropAllowed(type) === false) {
                return;
            }
            /** @type {?} */
            const data = getDropData(event, isExternalDrag());
            if (this.isDropAllowed(data.type) === false) {
                return;
            }
            // signal custom drop handling
            event.preventDefault();
            /** @type {?} */
            const dropEffect = getDropEffect(event);
            setDropEffect(event, dropEffect);
            if (dropEffect === "none") {
                return;
            }
            /** @type {?} */
            const dropIndex = this.getPlaceholderIndex();
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        // check if still inside this dropzone and not yet handled by another dropzone
        if (typeof event._dndDropzoneActive === "undefined") {
            /** @type {?} */
            const newTarget = document.elementFromPoint(event.clientX, event.clientY);
            if (this.elementRef.nativeElement.contains(newTarget)) {
                event._dndDropzoneActive = true;
                return;
            }
        }
        this.cleanupDragoverState();
        // cleanup drop effect when leaving dropzone
        setDropEffect(event, "none");
    }
    /**
     * @private
     * @param {?=} type
     * @return {?}
     */
    isDropAllowed(type) {
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
    }
    /**
     * @private
     * @return {?}
     */
    tryGetPlaceholder() {
        if (typeof this.dndPlaceholderRef !== "undefined") {
            return (/** @type {?} */ (this.dndPlaceholderRef.elementRef.nativeElement));
        }
        // TODO nasty workaround needed because if ng-container / template is used @ContentChild() or DI will fail because
        // of wrong context see angular bug https://github.com/angular/angular/issues/13517
        return this.elementRef.nativeElement.querySelector("[dndPlaceholderRef]");
    }
    /**
     * @private
     * @return {?}
     */
    removePlaceholderFromDOM() {
        if (this.placeholder !== null
            && this.placeholder.parentNode !== null) {
            this.placeholder.parentNode.removeChild(this.placeholder);
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    checkAndUpdatePlaceholderPosition(event) {
        if (this.placeholder === null) {
            return;
        }
        // make sure the placeholder is in the DOM
        if (this.placeholder.parentNode !== this.elementRef.nativeElement) {
            this.renderer.appendChild(this.elementRef.nativeElement, this.placeholder);
        }
        // update the position if the event originates from a child element of the dropzone
        /** @type {?} */
        const directChild = getDirectChildElement(this.elementRef.nativeElement, (/** @type {?} */ (event.target)));
        // early exit if no direct child or direct child is placeholder
        if (directChild === null
            || directChild === this.placeholder) {
            return;
        }
        /** @type {?} */
        const positionPlaceholderBeforeDirectChild = shouldPositionPlaceholderBeforeElement(event, directChild, this.dndHorizontal);
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
    }
    /**
     * @private
     * @return {?}
     */
    getPlaceholderIndex() {
        if (this.placeholder === null) {
            return undefined;
        }
        /** @type {?} */
        const element = (/** @type {?} */ (this.elementRef.nativeElement));
        return Array.prototype.indexOf.call(element.children, this.placeholder);
    }
    /**
     * @private
     * @return {?}
     */
    cleanupDragoverState() {
        this.renderer.removeClass(this.elementRef.nativeElement, this.dndDragoverClass);
        this.removePlaceholderFromDOM();
    }
}
DndDropzoneDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dndDropzone]"
            },] }
];
/** @nocollapse */
DndDropzoneDirective.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLWRyb3B6b25lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kcmFnLWRyb3AvIiwic291cmNlcyI6WyJkbmQtZHJvcHpvbmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLHFCQUFxQixFQUNyQixXQUFXLEVBQ1gsc0NBQXNDLEVBQ3ZDLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFHdkYsa0NBT0M7OztJQU5DLDZCQUFnQjs7SUFDaEIsa0NBQXNCOztJQUN0QixrQ0FBbUI7O0lBQ25CLDRCQUFVOztJQUNWLDZCQUFjOztJQUNkLDRCQUFVOztBQU1aLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFFckMsWUFBNkIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztJQUNsRCxDQUFDOzs7WUFORixTQUFTLFNBQUU7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjthQUNoQzs7OztZQTlCQyxVQUFVOzs7O0lBaUNHLGdEQUFxQzs7QUFPcEQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBeUQvQixZQUFxQixNQUFhLEVBQ2IsVUFBcUIsRUFDckIsUUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWxEdkMscUJBQWdCLEdBQVcsS0FBSyxDQUFDO1FBR2pDLGtCQUFhLEdBQVcsS0FBSyxDQUFDO1FBRzlCLHFCQUFnQixHQUFVLGFBQWEsQ0FBQztRQUd4Qyw2QkFBd0IsR0FBRyxxQkFBcUIsQ0FBQztRQUd4QyxnQkFBVyxHQUEyQixJQUFJLFlBQVksRUFBYSxDQUFDO1FBR3BFLFlBQU8sR0FBOEIsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFLdkUsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO1FBRWxDLGFBQVEsR0FBVyxLQUFLLENBQUM7UUFFaEIsMEJBQXFCOzs7O1FBQStCLENBQUUsS0FBZSxFQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLEtBQUssQ0FBRSxFQUFDO1FBQ3JHLHlCQUFvQjs7OztRQUErQixDQUFFLEtBQWUsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBRSxLQUFLLENBQUUsRUFBQztRQUNuRywwQkFBcUI7Ozs7UUFBK0IsQ0FBRSxLQUFlLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsS0FBSyxDQUFFLEVBQUM7SUF5QnRILENBQUM7Ozs7O0lBdkJELElBQ0ksWUFBWSxDQUFFLEtBQWE7UUFFN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRztZQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUUsQ0FBQztTQUN4RjthQUNJO1lBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFFLENBQUM7U0FDM0Y7SUFDSCxDQUFDOzs7OztJQUVELElBQ0ksZ0JBQWdCLENBQUUsS0FBYTtRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7O0lBT0QsZUFBZTtRQUViLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFNUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFFLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFFLENBQUM7WUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBRSxDQUFDO1lBQ3hGLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUUsQ0FBQztRQUM1RixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBRSxDQUFDO1FBQzdGLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUUsQ0FBQztRQUMzRixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFFLENBQUM7SUFDL0YsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUUsS0FBYztRQUV6Qix5Q0FBeUM7UUFDekMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEtBQUssSUFBSSxFQUFHO1lBRXRDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLE9BQU87U0FDUjtRQUVELDhEQUE4RDtRQUM5RCxJQUFJLE9BQU8sS0FBSyxDQUFDLGtCQUFrQixLQUFLLFdBQVcsRUFBRzs7a0JBRTlDLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFFO1lBRTNFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFFLFNBQVMsQ0FBRSxFQUFHO2dCQUV4RCxLQUFLLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO2FBQ2pDO1NBQ0Y7OztjQUdLLElBQUksR0FBRyxVQUFVLENBQUUsS0FBSyxDQUFFO1FBQ2hDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUUsS0FBSyxLQUFLLEVBQUc7WUFFekMsT0FBTztTQUNSO1FBRUQsc0JBQXNCO1FBQ3RCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBRSxLQUFlO1FBQ3pCLDBFQUEwRTtRQUMxRSw2RUFBNkU7UUFDN0UsNkVBQTZFO1FBQzdFLGdGQUFnRjtRQUNoRixzRkFBc0Y7UUFDdEYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEVBQUc7WUFFM0IsT0FBTztTQUNSOzs7Y0FHSyxJQUFJLEdBQUcsVUFBVSxDQUFFLEtBQUssQ0FBRTtRQUNoQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFFLEtBQUssS0FBSyxFQUFHO1lBRXpDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxpQ0FBaUMsQ0FBRSxLQUFLLENBQUUsQ0FBQzs7Y0FFMUMsVUFBVSxHQUFHLGFBQWEsQ0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFFO1FBRWhFLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRztZQUUxQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixPQUFPO1NBQ1I7UUFFRCxxQkFBcUI7UUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLHNCQUFzQjtRQUN0QixhQUFhLENBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDO0lBQ2pGLENBQUM7Ozs7O0lBR0QsTUFBTSxDQUFFLEtBQWU7UUFFckIsSUFBSTs7O2tCQUdJLElBQUksR0FBRyxVQUFVLENBQUUsS0FBSyxDQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUUsS0FBSyxLQUFLLEVBQUc7Z0JBRXpDLE9BQU87YUFDUjs7a0JBRUssSUFBSSxHQUFnQixXQUFXLENBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxDQUFFO1lBRWhFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLEtBQUssS0FBSyxFQUFHO2dCQUU5QyxPQUFPO2FBQ1I7WUFFRCw4QkFBOEI7WUFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztrQkFFakIsVUFBVSxHQUFHLGFBQWEsQ0FBRSxLQUFLLENBQUU7WUFFekMsYUFBYSxDQUFFLEtBQUssRUFBRSxVQUFVLENBQUUsQ0FBQztZQUVuQyxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUc7Z0JBRTFCLE9BQU87YUFDUjs7a0JBRUssU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUU1QywwRkFBMEY7WUFDMUYsa0VBQWtFO1lBQ2xFLGdGQUFnRjtZQUNoRixJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRztnQkFFckIsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUU7Z0JBQ2pCLEtBQUssRUFBRSxLQUFLO2dCQUNaLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixVQUFVLEVBQUUsY0FBYyxFQUFFO2dCQUM1QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBRSxDQUFDO1lBRUosS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBRXpCO2dCQUNPO1lBRU4sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBRSxLQUFjO1FBRXpCLDhFQUE4RTtRQUM5RSxJQUFJLE9BQU8sS0FBSyxDQUFDLGtCQUFrQixLQUFLLFdBQVcsRUFBRzs7a0JBRTlDLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFFO1lBRTNFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFFLFNBQVMsQ0FBRSxFQUFHO2dCQUV4RCxLQUFLLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxPQUFPO2FBQ1I7U0FDRjtRQUVELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRTVCLDRDQUE0QztRQUM1QyxhQUFhLENBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBRSxJQUFZO1FBRWpDLGtDQUFrQztRQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFHO1lBRTNCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCwyQ0FBMkM7UUFDM0MsdURBQXVEO1FBQ3ZELElBQUksY0FBYyxFQUFFLEtBQUssSUFBSTtlQUN4QixJQUFJLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxFQUFHO1lBRXJDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUc7WUFFdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELDBCQUEwQjtRQUMxQixJQUFJLENBQUMsSUFBSSxFQUFHO1lBRVYsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFFLEtBQUssS0FBSyxFQUFHO1lBRWhELE1BQU0sSUFBSSxLQUFLLENBQUUsNkRBQTZELENBQUUsQ0FBQztTQUNsRjtRQUVELHdDQUF3QztRQUN4QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRU8saUJBQWlCO1FBRXZCLElBQUksT0FBTyxJQUFJLENBQUMsaUJBQWlCLEtBQUssV0FBVyxFQUFHO1lBRWxELE9BQU8sbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQVcsQ0FBQztTQUNuRTtRQUVELGtIQUFrSDtRQUNsSCxtRkFBbUY7UUFDbkYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUUscUJBQXFCLENBQUUsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVPLHdCQUF3QjtRQUU5QixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSTtlQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUc7WUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQztTQUM3RDtJQUNILENBQUM7Ozs7OztJQUVPLGlDQUFpQyxDQUFFLEtBQWU7UUFFeEQsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRztZQUU5QixPQUFPO1NBQ1I7UUFFRCwwQ0FBMEM7UUFDMUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRztZQUVsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7U0FDOUU7OztjQUdLLFdBQVcsR0FBRyxxQkFBcUIsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFXLENBQUU7UUFFbkcsK0RBQStEO1FBQy9ELElBQUksV0FBVyxLQUFLLElBQUk7ZUFDbkIsV0FBVyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUc7WUFFdEMsT0FBTztTQUNSOztjQUVLLG9DQUFvQyxHQUFHLHNDQUFzQyxDQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRTtRQUU3SCxJQUFJLG9DQUFvQyxFQUFHO1lBRXpDLHFDQUFxQztZQUNyQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRztnQkFFckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUUsQ0FBQzthQUM1RjtTQUNGO2FBQ0k7WUFFSCxvQ0FBb0M7WUFDcEMsSUFBSSxXQUFXLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUc7Z0JBRWpELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBRSxDQUFDO2FBQ3hHO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVPLG1CQUFtQjtRQUV6QixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFHO1lBRTlCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCOztjQUVLLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBZTtRQUU1RCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVPLG9CQUFvQjtRQUUxQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUUsQ0FBQztRQUVsRixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUE5VkYsU0FBUyxTQUFFO2dCQUNWLFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBbkNDLE1BQU07WUFKTixVQUFVO1lBT1YsU0FBUzs7OzBCQW1DUixLQUFLOytCQUdMLEtBQUs7K0JBR0wsS0FBSzs0QkFHTCxLQUFLOytCQUdMLEtBQUs7dUNBR0wsS0FBSzswQkFHTCxNQUFNO3NCQUdOLE1BQU07Z0NBR04sWUFBWSxTQUFFLDBCQUEwQjsyQkFXeEMsS0FBSzsrQkFlTCxLQUFLO3FCQW1HTCxZQUFZLFNBQUUsTUFBTSxFQUFFLENBQUUsUUFBUSxDQUFFOzs7O0lBckpuQywyQ0FDc0I7O0lBRXRCLGdEQUMrQjs7SUFFL0IsZ0RBQ2lDOztJQUVqQyw2Q0FDOEI7O0lBRTlCLGdEQUN3Qzs7SUFFeEMsd0RBQ2lEOztJQUVqRCwyQ0FDNkU7O0lBRTdFLHVDQUMrRTs7Ozs7SUFFL0UsaURBQytEOzs7OztJQUUvRCwyQ0FBMEM7Ozs7O0lBRTFDLHdDQUFpQzs7Ozs7SUFFakMscURBQXNIOzs7OztJQUN0SCxvREFBb0g7Ozs7O0lBQ3BILHFEQUFzSDs7Ozs7SUFzQnpHLHNDQUFxQjs7Ozs7SUFDckIsMENBQTZCOzs7OztJQUM3Qix3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIERuZEV2ZW50LFxuICBEcmFnRHJvcERhdGEsXG4gIGdldERpcmVjdENoaWxkRWxlbWVudCxcbiAgZ2V0RHJvcERhdGEsXG4gIHNob3VsZFBvc2l0aW9uUGxhY2Vob2xkZXJCZWZvcmVFbGVtZW50XG59IGZyb20gXCIuL2RuZC11dGlsc1wiO1xuaW1wb3J0IHsgZ2V0RG5kVHlwZSwgZ2V0RHJvcEVmZmVjdCwgaXNFeHRlcm5hbERyYWcsIHNldERyb3BFZmZlY3QgfSBmcm9tIFwiLi9kbmQtc3RhdGVcIjtcbmltcG9ydCB7IERyb3BFZmZlY3QsIEVmZmVjdEFsbG93ZWQgfSBmcm9tIFwiLi9kbmQtdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEbmREcm9wRXZlbnQge1xuICBldmVudDpEcmFnRXZlbnQ7XG4gIGRyb3BFZmZlY3Q6RHJvcEVmZmVjdDtcbiAgaXNFeHRlcm5hbDpib29sZWFuO1xuICBkYXRhPzphbnk7XG4gIGluZGV4PzpudW1iZXI7XG4gIHR5cGU/OmFueTtcbn1cblxuQERpcmVjdGl2ZSgge1xuICBzZWxlY3RvcjogXCJbZG5kUGxhY2Vob2xkZXJSZWZdXCJcbn0gKVxuZXhwb3J0IGNsYXNzIERuZFBsYWNlaG9sZGVyUmVmRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvciggcHVibGljIHJlYWRvbmx5IGVsZW1lbnRSZWY6RWxlbWVudFJlZiApIHtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKCB7XG4gIHNlbGVjdG9yOiBcIltkbmREcm9wem9uZV1cIlxufSApXG5leHBvcnQgY2xhc3MgRG5kRHJvcHpvbmVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpXG4gIGRuZERyb3B6b25lPzpzdHJpbmdbXTtcblxuICBASW5wdXQoKVxuICBkbmRFZmZlY3RBbGxvd2VkOkVmZmVjdEFsbG93ZWQ7XG5cbiAgQElucHV0KClcbiAgZG5kQWxsb3dFeHRlcm5hbDpib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZG5kSG9yaXpvbnRhbDpib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZG5kRHJhZ292ZXJDbGFzczpzdHJpbmcgPSBcImRuZERyYWdvdmVyXCI7XG5cbiAgQElucHV0KClcbiAgZG5kRHJvcHpvbmVEaXNhYmxlZENsYXNzID0gXCJkbmREcm9wem9uZURpc2FibGVkXCI7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGRuZERyYWdvdmVyOkV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGRuZERyb3A6RXZlbnRFbWl0dGVyPERuZERyb3BFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPERuZERyb3BFdmVudD4oKTtcblxuICBAQ29udGVudENoaWxkKCBEbmRQbGFjZWhvbGRlclJlZkRpcmVjdGl2ZSApXG4gIHByaXZhdGUgcmVhZG9ubHkgZG5kUGxhY2Vob2xkZXJSZWY/OkRuZFBsYWNlaG9sZGVyUmVmRGlyZWN0aXZlO1xuXG4gIHByaXZhdGUgcGxhY2Vob2xkZXI6RWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgZGlzYWJsZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZHJhZ0VudGVyRXZlbnRIYW5kbGVyOiggZXZlbnQ6RHJhZ0V2ZW50ICkgPT4gdm9pZCA9ICggZXZlbnQ6RHJhZ0V2ZW50ICkgPT4gdGhpcy5vbkRyYWdFbnRlciggZXZlbnQgKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkcmFnT3ZlckV2ZW50SGFuZGxlcjooIGV2ZW50OkRyYWdFdmVudCApID0+IHZvaWQgPSAoIGV2ZW50OkRyYWdFdmVudCApID0+IHRoaXMub25EcmFnT3ZlciggZXZlbnQgKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkcmFnTGVhdmVFdmVudEhhbmRsZXI6KCBldmVudDpEcmFnRXZlbnQgKSA9PiB2b2lkID0gKCBldmVudDpEcmFnRXZlbnQgKSA9PiB0aGlzLm9uRHJhZ0xlYXZlKCBldmVudCApO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkbmREaXNhYmxlSWYoIHZhbHVlOmJvb2xlYW4gKSB7XG5cbiAgICB0aGlzLmRpc2FibGVkID0gISF2YWx1ZTtcblxuICAgIGlmKCB0aGlzLmRpc2FibGVkICkge1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5kbmREcm9wem9uZURpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmRuZERyb3B6b25lRGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkbmREaXNhYmxlRHJvcElmKCB2YWx1ZTpib29sZWFuICkge1xuICAgIHRoaXMuZG5kRGlzYWJsZUlmID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBuZ1pvbmU6Tmdab25lLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOlJlbmRlcmVyMiApIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuXG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMudHJ5R2V0UGxhY2Vob2xkZXIoKTtcblxuICAgIHRoaXMucmVtb3ZlUGxhY2Vob2xkZXJGcm9tRE9NKCk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhciggKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnZW50ZXJcIiwgdGhpcy5kcmFnRW50ZXJFdmVudEhhbmRsZXIgKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3ZlckV2ZW50SGFuZGxlciApO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnbGVhdmVcIiwgdGhpcy5kcmFnTGVhdmVFdmVudEhhbmRsZXIgKTtcbiAgICB9ICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VudGVyXCIsIHRoaXMuZHJhZ0VudGVyRXZlbnRIYW5kbGVyICk7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnb3ZlclwiLCB0aGlzLmRyYWdPdmVyRXZlbnRIYW5kbGVyICk7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnbGVhdmVcIiwgdGhpcy5kcmFnTGVhdmVFdmVudEhhbmRsZXIgKTtcbiAgfVxuXG4gIG9uRHJhZ0VudGVyKCBldmVudDpEbmRFdmVudCApIHtcblxuICAgIC8vIGNoZWNrIGlmIGFub3RoZXIgZHJvcHpvbmUgaXMgYWN0aXZhdGVkXG4gICAgaWYoIGV2ZW50Ll9kbmREcm9wem9uZUFjdGl2ZSA9PT0gdHJ1ZSApIHtcblxuICAgICAgdGhpcy5jbGVhbnVwRHJhZ292ZXJTdGF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNldCBhcyBhY3RpdmUgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGluc2lkZSB0aGlzIGRyb3B6b25lXG4gICAgaWYoIHR5cGVvZiBldmVudC5fZG5kRHJvcHpvbmVBY3RpdmUgPT09IFwidW5kZWZpbmVkXCIgKSB7XG5cbiAgICAgIGNvbnN0IG5ld1RhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuICAgICAgaWYoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKCBuZXdUYXJnZXQgKSApIHtcblxuICAgICAgICBldmVudC5fZG5kRHJvcHpvbmVBY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIHRoaXMgZHJhZyBldmVudCBpcyBhbGxvd2VkIHRvIGRyb3Agb24gdGhpcyBkcm9wem9uZVxuICAgIGNvbnN0IHR5cGUgPSBnZXREbmRUeXBlKCBldmVudCApO1xuICAgIGlmKCB0aGlzLmlzRHJvcEFsbG93ZWQoIHR5cGUgKSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhbGxvdyB0aGUgZHJhZ2VudGVyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uRHJhZ092ZXIoIGV2ZW50OkRyYWdFdmVudCApIHtcbiAgICAvLyBXaXRoIG5lc3RlZCBkcm9wem9uZXMsIHdlIHdhbnQgdG8gaWdub3JlIHRoaXMgZXZlbnQgaWYgYSBjaGlsZCBkcm9wem9uZVxuICAgIC8vIGhhcyBhbHJlYWR5IGhhbmRsZWQgYSBkcmFnb3Zlci4gIEhpc3RvcmljYWxseSwgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgd2FzXG4gICAgLy8gdXNlZCB0byBwcmV2ZW50IHRoaXMgYnViYmxpbmcsIGJ1dCB0aGF0IHByZXZlbnRzIGFueSBkcmFnb3ZlcnMgb3V0c2lkZSB0aGVcbiAgICAvLyBuZ3gtZHJhZy1kcm9wIGNvbXBvbmVudCwgYW5kIHN0b3BzIG90aGVyIHVzZSBjYXNlcyBzdWNoIGFzIHNjcm9sbGluZyBvbiBkcmFnLlxuICAgIC8vIEluc3RlYWQsIHdlIGNhbiBjaGVjayBpZiB0aGUgZXZlbnQgd2FzIGFscmVhZHkgcHJldmVudGVkIGJ5IGEgY2hpbGQgYW5kIGJhaWwgZWFybHkuXG4gICAgaWYoIGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgKSB7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0aGlzIGRyYWcgZXZlbnQgaXMgYWxsb3dlZCB0byBkcm9wIG9uIHRoaXMgZHJvcHpvbmVcbiAgICBjb25zdCB0eXBlID0gZ2V0RG5kVHlwZSggZXZlbnQgKTtcbiAgICBpZiggdGhpcy5pc0Ryb3BBbGxvd2VkKCB0eXBlICkgPT09IGZhbHNlICkge1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0FuZFVwZGF0ZVBsYWNlaG9sZGVyUG9zaXRpb24oIGV2ZW50ICk7XG5cbiAgICBjb25zdCBkcm9wRWZmZWN0ID0gZ2V0RHJvcEVmZmVjdCggZXZlbnQsIHRoaXMuZG5kRWZmZWN0QWxsb3dlZCApO1xuXG4gICAgaWYoIGRyb3BFZmZlY3QgPT09IFwibm9uZVwiICkge1xuXG4gICAgICB0aGlzLmNsZWFudXBEcmFnb3ZlclN0YXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWxsb3cgdGhlIGRyYWdvdmVyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIHNldCB0aGUgZHJvcCBlZmZlY3RcbiAgICBzZXREcm9wRWZmZWN0KCBldmVudCwgZHJvcEVmZmVjdCApO1xuXG4gICAgdGhpcy5kbmREcmFnb3Zlci5lbWl0KCBldmVudCApO1xuXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyggdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZG5kRHJhZ292ZXJDbGFzcyApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lciggXCJkcm9wXCIsIFsgXCIkZXZlbnRcIiBdIClcbiAgb25Ecm9wKCBldmVudDpEcmFnRXZlbnQgKSB7XG5cbiAgICB0cnkge1xuXG4gICAgICAvLyBjaGVjayBpZiB0aGlzIGRyYWcgZXZlbnQgaXMgYWxsb3dlZCB0byBkcm9wIG9uIHRoaXMgZHJvcHpvbmVcbiAgICAgIGNvbnN0IHR5cGUgPSBnZXREbmRUeXBlKCBldmVudCApO1xuICAgICAgaWYoIHRoaXMuaXNEcm9wQWxsb3dlZCggdHlwZSApID09PSBmYWxzZSApIHtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGE6RHJhZ0Ryb3BEYXRhID0gZ2V0RHJvcERhdGEoIGV2ZW50LCBpc0V4dGVybmFsRHJhZygpICk7XG5cbiAgICAgIGlmKCB0aGlzLmlzRHJvcEFsbG93ZWQoIGRhdGEudHlwZSApID09PSBmYWxzZSApIHtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHNpZ25hbCBjdXN0b20gZHJvcCBoYW5kbGluZ1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgZHJvcEVmZmVjdCA9IGdldERyb3BFZmZlY3QoIGV2ZW50ICk7XG5cbiAgICAgIHNldERyb3BFZmZlY3QoIGV2ZW50LCBkcm9wRWZmZWN0ICk7XG5cbiAgICAgIGlmKCBkcm9wRWZmZWN0ID09PSBcIm5vbmVcIiApIHtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRyb3BJbmRleCA9IHRoaXMuZ2V0UGxhY2Vob2xkZXJJbmRleCgpO1xuXG4gICAgICAvLyBpZiBmb3Igd2hhdGV2ZXIgcmVhc29uIHRoZSBwbGFjZWhvbGRlciBpcyBub3QgcHJlc2VudCBpbiB0aGUgRE9NIGJ1dCBpdCBzaG91bGQgYmUgdGhlcmVcbiAgICAgIC8vIHdlIGRvbid0IGFsbG93L2VtaXQgdGhlIGRyb3AgZXZlbnQgc2luY2UgaXQgYnJlYWtzIHRoZSBjb250cmFjdFxuICAgICAgLy8gc2VlbXMgdG8gb25seSBoYXBwZW4gaWYgZHJhZyBhbmQgZHJvcCBpcyBleGVjdXRlZCBmYXN0ZXIgdGhhbiB0aGUgRE9NIHVwZGF0ZXNcbiAgICAgIGlmKCBkcm9wSW5kZXggPT09IC0xICkge1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kbmREcm9wLmVtaXQoIHtcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICBkcm9wRWZmZWN0OiBkcm9wRWZmZWN0LFxuICAgICAgICBpc0V4dGVybmFsOiBpc0V4dGVybmFsRHJhZygpLFxuICAgICAgICBkYXRhOiBkYXRhLmRhdGEsXG4gICAgICAgIGluZGV4OiBkcm9wSW5kZXgsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICB9ICk7XG5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgfVxuICAgIGZpbmFsbHkge1xuXG4gICAgICB0aGlzLmNsZWFudXBEcmFnb3ZlclN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25EcmFnTGVhdmUoIGV2ZW50OkRuZEV2ZW50ICkge1xuXG4gICAgLy8gY2hlY2sgaWYgc3RpbGwgaW5zaWRlIHRoaXMgZHJvcHpvbmUgYW5kIG5vdCB5ZXQgaGFuZGxlZCBieSBhbm90aGVyIGRyb3B6b25lXG4gICAgaWYoIHR5cGVvZiBldmVudC5fZG5kRHJvcHpvbmVBY3RpdmUgPT09IFwidW5kZWZpbmVkXCIgKSB7XG5cbiAgICAgIGNvbnN0IG5ld1RhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuICAgICAgaWYoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKCBuZXdUYXJnZXQgKSApIHtcblxuICAgICAgICBldmVudC5fZG5kRHJvcHpvbmVBY3RpdmUgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhbnVwRHJhZ292ZXJTdGF0ZSgpO1xuXG4gICAgLy8gY2xlYW51cCBkcm9wIGVmZmVjdCB3aGVuIGxlYXZpbmcgZHJvcHpvbmVcbiAgICBzZXREcm9wRWZmZWN0KCBldmVudCwgXCJub25lXCIgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNEcm9wQWxsb3dlZCggdHlwZT86c3RyaW5nICk6Ym9vbGVhbiB7XG5cbiAgICAvLyBkcm9wem9uZSBpcyBkaXNhYmxlZCAtPiBkZW55IGl0XG4gICAgaWYoIHRoaXMuZGlzYWJsZWQgPT09IHRydWUgKSB7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBpZiBkcmFnIGRpZCBub3Qgc3RhcnQgZnJvbSBvdXIgZGlyZWN0aXZlXG4gICAgLy8gYW5kIGV4dGVybmFsIGRyYWcgc291cmNlcyBhcmUgbm90IGFsbG93ZWQgLT4gZGVueSBpdFxuICAgIGlmKCBpc0V4dGVybmFsRHJhZygpID09PSB0cnVlXG4gICAgICAmJiB0aGlzLmRuZEFsbG93RXh0ZXJuYWwgPT09IGZhbHNlICkge1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gbm8gZmlsdGVyaW5nIGJ5IHR5cGVzIC0+IGFsbG93IGl0XG4gICAgaWYoICF0aGlzLmRuZERyb3B6b25lICkge1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBubyB0eXBlIHNldCAtPiBhbGxvdyBpdFxuICAgIGlmKCAhdHlwZSApIHtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYoIEFycmF5LmlzQXJyYXkoIHRoaXMuZG5kRHJvcHpvbmUgKSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvciggXCJkbmREcm9wem9uZTogYm91bmQgdmFsdWUgdG8gW2RuZERyb3B6b25lXSBtdXN0IGJlIGFuIGFycmF5IVwiICk7XG4gICAgfVxuXG4gICAgLy8gaWYgZHJvcHpvbmUgY29udGFpbnMgdHlwZSAtPiBhbGxvdyBpdFxuICAgIHJldHVybiB0aGlzLmRuZERyb3B6b25lLmluZGV4T2YoIHR5cGUgKSAhPT0gLTE7XG4gIH1cblxuICBwcml2YXRlIHRyeUdldFBsYWNlaG9sZGVyKCk6RWxlbWVudCB8IG51bGwge1xuXG4gICAgaWYoIHR5cGVvZiB0aGlzLmRuZFBsYWNlaG9sZGVyUmVmICE9PSBcInVuZGVmaW5lZFwiICkge1xuXG4gICAgICByZXR1cm4gdGhpcy5kbmRQbGFjZWhvbGRlclJlZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyBUT0RPIG5hc3R5IHdvcmthcm91bmQgbmVlZGVkIGJlY2F1c2UgaWYgbmctY29udGFpbmVyIC8gdGVtcGxhdGUgaXMgdXNlZCBAQ29udGVudENoaWxkKCkgb3IgREkgd2lsbCBmYWlsIGJlY2F1c2VcbiAgICAvLyBvZiB3cm9uZyBjb250ZXh0IHNlZSBhbmd1bGFyIGJ1ZyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMzUxN1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCBcIltkbmRQbGFjZWhvbGRlclJlZl1cIiApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVQbGFjZWhvbGRlckZyb21ET00oKSB7XG5cbiAgICBpZiggdGhpcy5wbGFjZWhvbGRlciAhPT0gbnVsbFxuICAgICAgJiYgdGhpcy5wbGFjZWhvbGRlci5wYXJlbnROb2RlICE9PSBudWxsICkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0aGlzLnBsYWNlaG9sZGVyICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0FuZFVwZGF0ZVBsYWNlaG9sZGVyUG9zaXRpb24oIGV2ZW50OkRyYWdFdmVudCApOnZvaWQge1xuXG4gICAgaWYoIHRoaXMucGxhY2Vob2xkZXIgPT09IG51bGwgKSB7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhlIHBsYWNlaG9sZGVyIGlzIGluIHRoZSBET01cbiAgICBpZiggdGhpcy5wbGFjZWhvbGRlci5wYXJlbnROb2RlICE9PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApIHtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCggdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucGxhY2Vob2xkZXIgKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdGhlIHBvc2l0aW9uIGlmIHRoZSBldmVudCBvcmlnaW5hdGVzIGZyb20gYSBjaGlsZCBlbGVtZW50IG9mIHRoZSBkcm9wem9uZVxuICAgIGNvbnN0IGRpcmVjdENoaWxkID0gZ2V0RGlyZWN0Q2hpbGRFbGVtZW50KCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQgKTtcblxuICAgIC8vIGVhcmx5IGV4aXQgaWYgbm8gZGlyZWN0IGNoaWxkIG9yIGRpcmVjdCBjaGlsZCBpcyBwbGFjZWhvbGRlclxuICAgIGlmKCBkaXJlY3RDaGlsZCA9PT0gbnVsbFxuICAgICAgfHwgZGlyZWN0Q2hpbGQgPT09IHRoaXMucGxhY2Vob2xkZXIgKSB7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvblBsYWNlaG9sZGVyQmVmb3JlRGlyZWN0Q2hpbGQgPSBzaG91bGRQb3NpdGlvblBsYWNlaG9sZGVyQmVmb3JlRWxlbWVudCggZXZlbnQsIGRpcmVjdENoaWxkLCB0aGlzLmRuZEhvcml6b250YWwgKTtcblxuICAgIGlmKCBwb3NpdGlvblBsYWNlaG9sZGVyQmVmb3JlRGlyZWN0Q2hpbGQgKSB7XG5cbiAgICAgIC8vIGRvIGluc2VydCBiZWZvcmUgb25seSBpZiBuZWNlc3NhcnlcbiAgICAgIGlmKCBkaXJlY3RDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT09IHRoaXMucGxhY2Vob2xkZXIgKSB7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnBsYWNlaG9sZGVyLCBkaXJlY3RDaGlsZCApO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgLy8gZG8gaW5zZXJ0IGFmdGVyIG9ubHkgaWYgbmVjZXNzYXJ5XG4gICAgICBpZiggZGlyZWN0Q2hpbGQubmV4dFNpYmxpbmcgIT09IHRoaXMucGxhY2Vob2xkZXIgKSB7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnBsYWNlaG9sZGVyLCBkaXJlY3RDaGlsZC5uZXh0U2libGluZyApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxhY2Vob2xkZXJJbmRleCgpOm51bWJlciB8IHVuZGVmaW5lZCB7XG5cbiAgICBpZiggdGhpcy5wbGFjZWhvbGRlciA9PT0gbnVsbCApIHtcblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCggZWxlbWVudC5jaGlsZHJlbiwgdGhpcy5wbGFjZWhvbGRlciApO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbnVwRHJhZ292ZXJTdGF0ZSgpIHtcblxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmRuZERyYWdvdmVyQ2xhc3MgKTtcblxuICAgIHRoaXMucmVtb3ZlUGxhY2Vob2xkZXJGcm9tRE9NKCk7XG4gIH1cbn1cbiJdfQ==