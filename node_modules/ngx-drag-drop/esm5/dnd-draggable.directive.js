/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgZone, Output, Renderer2 } from "@angular/core";
import { calculateDragImageOffset, setDragData, setDragImage } from "./dnd-utils";
import { dndState, endDrag, startDrag } from "./dnd-state";
var DndDragImageRefDirective = /** @class */ (function () {
    function DndDragImageRefDirective(parent, elementRef) {
        parent.registerDragImage(elementRef);
    }
    DndDragImageRefDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[dndDragImageRef]"
                },] }
    ];
    /** @nocollapse */
    DndDragImageRefDirective.ctorParameters = function () { return [
        { type: DndDraggableDirective },
        { type: ElementRef }
    ]; };
    return DndDragImageRefDirective;
}());
export { DndDragImageRefDirective };
var DndDraggableDirective = /** @class */ (function () {
    function DndDraggableDirective(elementRef, renderer, ngZone) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.dndEffectAllowed = "copy";
        this.dndDraggingClass = "dndDragging";
        this.dndDraggingSourceClass = "dndDraggingSource";
        this.dndDraggableDisabledClass = "dndDraggableDisabled";
        this.dndDragImageOffsetFunction = calculateDragImageOffset;
        this.dndStart = new EventEmitter();
        this.dndDrag = new EventEmitter();
        this.dndEnd = new EventEmitter();
        this.dndMoved = new EventEmitter();
        this.dndCopied = new EventEmitter();
        this.dndLinked = new EventEmitter();
        this.dndCanceled = new EventEmitter();
        this.draggable = true;
        this.isDragStarted = false;
        this.dragEventHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDrag(event); });
    }
    Object.defineProperty(DndDraggableDirective.prototype, "dndDisableIf", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.draggable = !value;
            if (this.draggable) {
                this.renderer.removeClass(this.elementRef.nativeElement, this.dndDraggableDisabledClass);
            }
            else {
                this.renderer.addClass(this.elementRef.nativeElement, this.dndDraggableDisabledClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DndDraggableDirective.prototype, "dndDisableDragIf", {
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
    DndDraggableDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.elementRef.nativeElement.addEventListener("drag", _this.dragEventHandler);
        }));
    };
    /**
     * @return {?}
     */
    DndDraggableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.removeEventListener("drag", this.dragEventHandler);
        if (this.isDragStarted === true) {
            endDrag();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDraggableDirective.prototype.onDragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.draggable === false) {
            return false;
        }
        // check if there is dnd handle and if the dnd handle was used to start the drag
        if (typeof this.dndHandle !== "undefined"
            && typeof event._dndUsingHandle === "undefined") {
            return false;
        }
        // initialize global state
        startDrag(event, this.dndEffectAllowed, this.dndType);
        this.isDragStarted = true;
        setDragData(event, { data: this.dndDraggable, type: this.dndType }, dndState.effectAllowed);
        this.dragImage = this.determineDragImage();
        // set dragging css class prior to setDragImage so styles are applied before
        // TODO breaking change: add class to elementRef rather than drag image which could be another element
        this.renderer.addClass(this.dragImage, this.dndDraggingClass);
        // set custom dragimage if present
        // set dragimage if drag is started from dndHandle
        if (typeof this.dndDragImageElementRef !== "undefined"
            || typeof event._dndUsingHandle !== "undefined") {
            setDragImage(event, this.dragImage, this.dndDragImageOffsetFunction);
        }
        // add dragging source css class on first drag event
        /** @type {?} */
        var unregister = this.renderer.listen(this.elementRef.nativeElement, "drag", (/**
         * @return {?}
         */
        function () {
            _this.renderer.addClass(_this.elementRef.nativeElement, _this.dndDraggingSourceClass);
            unregister();
        }));
        this.dndStart.emit(event);
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDraggableDirective.prototype.onDrag = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dndDrag.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDraggableDirective.prototype.onDragEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // get drop effect from custom stored state as its not reliable across browsers
        /** @type {?} */
        var dropEffect = dndState.dropEffect;
        /** @type {?} */
        var dropEffectEmitter;
        switch (dropEffect) {
            case "copy":
                dropEffectEmitter = this.dndCopied;
                break;
            case "link":
                dropEffectEmitter = this.dndLinked;
                break;
            case "move":
                dropEffectEmitter = this.dndMoved;
                break;
            default:
                dropEffectEmitter = this.dndCanceled;
                break;
        }
        dropEffectEmitter.emit(event);
        this.dndEnd.emit(event);
        // reset global state
        endDrag();
        this.isDragStarted = false;
        this.renderer.removeClass(this.dragImage, this.dndDraggingClass);
        // IE9 special hammering
        window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this.renderer.removeClass(_this.elementRef.nativeElement, _this.dndDraggingSourceClass);
        }), 0);
        event.stopPropagation();
    };
    /**
     * @param {?} handle
     * @return {?}
     */
    DndDraggableDirective.prototype.registerDragHandle = /**
     * @param {?} handle
     * @return {?}
     */
    function (handle) {
        this.dndHandle = handle;
    };
    /**
     * @param {?} elementRef
     * @return {?}
     */
    DndDraggableDirective.prototype.registerDragImage = /**
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        this.dndDragImageElementRef = elementRef;
    };
    /**
     * @private
     * @return {?}
     */
    DndDraggableDirective.prototype.determineDragImage = /**
     * @private
     * @return {?}
     */
    function () {
        // evaluate custom drag image existence
        if (typeof this.dndDragImageElementRef !== "undefined") {
            return (/** @type {?} */ (this.dndDragImageElementRef.nativeElement));
        }
        else {
            return this.elementRef.nativeElement;
        }
    };
    DndDraggableDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[dndDraggable]"
                },] }
    ];
    /** @nocollapse */
    DndDraggableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    DndDraggableDirective.propDecorators = {
        dndDraggable: [{ type: Input }],
        dndEffectAllowed: [{ type: Input }],
        dndType: [{ type: Input }],
        dndDraggingClass: [{ type: Input }],
        dndDraggingSourceClass: [{ type: Input }],
        dndDraggableDisabledClass: [{ type: Input }],
        dndDragImageOffsetFunction: [{ type: Input }],
        dndStart: [{ type: Output }],
        dndDrag: [{ type: Output }],
        dndEnd: [{ type: Output }],
        dndMoved: [{ type: Output }],
        dndCopied: [{ type: Output }],
        dndLinked: [{ type: Output }],
        dndCanceled: [{ type: Output }],
        draggable: [{ type: HostBinding, args: ["attr.draggable",] }],
        dndDisableIf: [{ type: Input }],
        dndDisableDragIf: [{ type: Input }],
        onDragStart: [{ type: HostListener, args: ["dragstart", ["$event"],] }],
        onDragEnd: [{ type: HostListener, args: ["dragend", ["$event"],] }]
    };
    return DndDraggableDirective;
}());
export { DndDraggableDirective };
if (false) {
    /** @type {?} */
    DndDraggableDirective.prototype.dndDraggable;
    /** @type {?} */
    DndDraggableDirective.prototype.dndEffectAllowed;
    /** @type {?} */
    DndDraggableDirective.prototype.dndType;
    /** @type {?} */
    DndDraggableDirective.prototype.dndDraggingClass;
    /** @type {?} */
    DndDraggableDirective.prototype.dndDraggingSourceClass;
    /** @type {?} */
    DndDraggableDirective.prototype.dndDraggableDisabledClass;
    /** @type {?} */
    DndDraggableDirective.prototype.dndDragImageOffsetFunction;
    /** @type {?} */
    DndDraggableDirective.prototype.dndStart;
    /** @type {?} */
    DndDraggableDirective.prototype.dndDrag;
    /** @type {?} */
    DndDraggableDirective.prototype.dndEnd;
    /** @type {?} */
    DndDraggableDirective.prototype.dndMoved;
    /** @type {?} */
    DndDraggableDirective.prototype.dndCopied;
    /** @type {?} */
    DndDraggableDirective.prototype.dndLinked;
    /** @type {?} */
    DndDraggableDirective.prototype.dndCanceled;
    /** @type {?} */
    DndDraggableDirective.prototype.draggable;
    /**
     * @type {?}
     * @private
     */
    DndDraggableDirective.prototype.dndHandle;
    /**
     * @type {?}
     * @private
     */
    DndDraggableDirective.prototype.dndDragImageElementRef;
    /**
     * @type {?}
     * @private
     */
    DndDraggableDirective.prototype.dragImage;
    /**
     * @type {?}
     * @private
     */
    DndDraggableDirective.prototype.isDragStarted;
    /**
     * @type {?}
     * @private
     */
    DndDraggableDirective.prototype.dragEventHandler;
    /**
     * @type {?}
     * @private
     */
    DndDraggableDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DndDraggableDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    DndDraggableDirective.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLWRyYWdnYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZHJhZy1kcm9wLyIsInNvdXJjZXMiOlsiZG5kLWRyYWdnYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQXdDLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFeEgsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRzNEO0lBS0Usa0NBQWEsTUFBNEIsRUFDNUIsVUFBcUI7UUFFaEMsTUFBTSxDQUFDLGlCQUFpQixDQUFFLFVBQVUsQ0FBRSxDQUFDO0lBQ3pDLENBQUM7O2dCQVRGLFNBQVMsU0FBRTtvQkFDVixRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7OztnQkFHcUIscUJBQXFCO2dCQXBCekMsVUFBVTs7SUF5QlosK0JBQUM7Q0FBQSxBQVZELElBVUM7U0FQWSx3QkFBd0I7QUFTckM7SUFnRkUsK0JBQXFCLFVBQXFCLEVBQ3JCLFFBQWtCLEVBQ2xCLE1BQWE7UUFGbEMsaUJBR0M7UUFIb0IsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQU87UUF6RWxDLHFCQUFnQixHQUFpQixNQUFNLENBQUM7UUFNeEMscUJBQWdCLEdBQUcsYUFBYSxDQUFDO1FBR2pDLDJCQUFzQixHQUFHLG1CQUFtQixDQUFDO1FBRzdDLDhCQUF5QixHQUFHLHNCQUFzQixDQUFDO1FBR25ELCtCQUEwQixHQUE4Qix3QkFBd0IsQ0FBQztRQUd4RSxhQUFR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YUFBYSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Z0JBek5GLFNBQVMsU0FBRTtvQkFDVixRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkE3QkMsVUFBVTtnQkFRVixTQUFTO2dCQUhULE1BQU07OzsrQkEyQkwsS0FBSzttQ0FHTCxLQUFLOzBCQUdMLEtBQUs7bUNBR0wsS0FBSzt5Q0FHTCxLQUFLOzRDQUdMLEtBQUs7NkNBR0wsS0FBSzsyQkFHTCxNQUFNOzBCQUdOLE1BQU07eUJBR04sTUFBTTsyQkFHTixNQUFNOzRCQUdOLE1BQU07NEJBR04sTUFBTTs4QkFHTixNQUFNOzRCQUdOLFdBQVcsU0FBRSxnQkFBZ0I7K0JBYTdCLEtBQUs7bUNBZUwsS0FBSzs4QkF1QkwsWUFBWSxTQUFFLFdBQVcsRUFBRSxDQUFFLFFBQVEsQ0FBRTs0QkFxRHZDLFlBQVksU0FBRSxTQUFTLEVBQUUsQ0FBRSxRQUFRLENBQUU7O0lBbUV4Qyw0QkFBQztDQUFBLEFBMU5ELElBME5DO1NBdk5ZLHFCQUFxQjs7O0lBRWhDLDZDQUNpQjs7SUFFakIsaURBQ3dDOztJQUV4Qyx3Q0FDZ0I7O0lBRWhCLGlEQUNpQzs7SUFFakMsdURBQzZDOztJQUU3QywwREFDbUQ7O0lBRW5ELDJEQUNpRjs7SUFFakYseUNBQzBFOztJQUUxRSx3Q0FDeUU7O0lBRXpFLHVDQUN3RTs7SUFFeEUseUNBQzBFOztJQUUxRSwwQ0FDMkU7O0lBRTNFLDBDQUMyRTs7SUFFM0UsNENBQzZFOztJQUU3RSwwQ0FDaUI7Ozs7O0lBRWpCLDBDQUFzQzs7Ozs7SUFFdEMsdURBQTJDOzs7OztJQUUzQywwQ0FBMEI7Ozs7O0lBRTFCLDhDQUFzQzs7Ozs7SUFFdEMsaURBQTRHOzs7OztJQXNCL0YsMkNBQTZCOzs7OztJQUM3Qix5Q0FBMEI7Ozs7O0lBQzFCLHVDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVEcmFnSW1hZ2VPZmZzZXQsIERuZERyYWdJbWFnZU9mZnNldEZ1bmN0aW9uLCBEbmRFdmVudCwgc2V0RHJhZ0RhdGEsIHNldERyYWdJbWFnZSB9IGZyb20gXCIuL2RuZC11dGlsc1wiO1xuaW1wb3J0IHsgRG5kSGFuZGxlRGlyZWN0aXZlIH0gZnJvbSBcIi4vZG5kLWhhbmRsZS5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IGRuZFN0YXRlLCBlbmREcmFnLCBzdGFydERyYWcgfSBmcm9tIFwiLi9kbmQtc3RhdGVcIjtcbmltcG9ydCB7IEVmZmVjdEFsbG93ZWQgfSBmcm9tIFwiLi9kbmQtdHlwZXNcIjtcblxuQERpcmVjdGl2ZSgge1xuICBzZWxlY3RvcjogXCJbZG5kRHJhZ0ltYWdlUmVmXVwiXG59IClcbmV4cG9ydCBjbGFzcyBEbmREcmFnSW1hZ2VSZWZEaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKCBwYXJlbnQ6RG5kRHJhZ2dhYmxlRGlyZWN0aXZlLFxuICAgICAgICAgICAgICAgZWxlbWVudFJlZjpFbGVtZW50UmVmICkge1xuXG4gICAgcGFyZW50LnJlZ2lzdGVyRHJhZ0ltYWdlKCBlbGVtZW50UmVmICk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSgge1xuICBzZWxlY3RvcjogXCJbZG5kRHJhZ2dhYmxlXVwiXG59IClcbmV4cG9ydCBjbGFzcyBEbmREcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpXG4gIGRuZERyYWdnYWJsZTphbnk7XG5cbiAgQElucHV0KClcbiAgZG5kRWZmZWN0QWxsb3dlZDpFZmZlY3RBbGxvd2VkID0gXCJjb3B5XCI7XG5cbiAgQElucHV0KClcbiAgZG5kVHlwZT86c3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGRuZERyYWdnaW5nQ2xhc3MgPSBcImRuZERyYWdnaW5nXCI7XG5cbiAgQElucHV0KClcbiAgZG5kRHJhZ2dpbmdTb3VyY2VDbGFzcyA9IFwiZG5kRHJhZ2dpbmdTb3VyY2VcIjtcblxuICBASW5wdXQoKVxuICBkbmREcmFnZ2FibGVEaXNhYmxlZENsYXNzID0gXCJkbmREcmFnZ2FibGVEaXNhYmxlZFwiO1xuXG4gIEBJbnB1dCgpXG4gIGRuZERyYWdJbWFnZU9mZnNldEZ1bmN0aW9uOkRuZERyYWdJbWFnZU9mZnNldEZ1bmN0aW9uID0gY2FsY3VsYXRlRHJhZ0ltYWdlT2Zmc2V0O1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBkbmRTdGFydDpFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBkbmREcmFnOkV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGRuZEVuZDpFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBkbmRNb3ZlZDpFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBkbmRDb3BpZWQ6RXZlbnRFbWl0dGVyPERyYWdFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZG5kTGlua2VkOkV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGRuZENhbmNlbGVkOkV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCBcImF0dHIuZHJhZ2dhYmxlXCIgKVxuICBkcmFnZ2FibGUgPSB0cnVlO1xuXG4gIHByaXZhdGUgZG5kSGFuZGxlPzpEbmRIYW5kbGVEaXJlY3RpdmU7XG5cbiAgcHJpdmF0ZSBkbmREcmFnSW1hZ2VFbGVtZW50UmVmPzpFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgZHJhZ0ltYWdlOkVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBpc0RyYWdTdGFydGVkOmJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGRyYWdFdmVudEhhbmRsZXI6KCBldmVudDpEcmFnRXZlbnQgKSA9PiB2b2lkID0gKCBldmVudDpEcmFnRXZlbnQgKSA9PiB0aGlzLm9uRHJhZyggZXZlbnQgKTtcblxuICBASW5wdXQoKVxuICBzZXQgZG5kRGlzYWJsZUlmKCB2YWx1ZTpib29sZWFuICkge1xuXG4gICAgdGhpcy5kcmFnZ2FibGUgPSAhdmFsdWU7XG5cbiAgICBpZiggdGhpcy5kcmFnZ2FibGUgKSB7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmRuZERyYWdnYWJsZURpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmRuZERyYWdnYWJsZURpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZG5kRGlzYWJsZURyYWdJZiggdmFsdWU6Ym9vbGVhbiApIHtcbiAgICB0aGlzLmRuZERpc2FibGVJZiA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgZWxlbWVudFJlZjpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTpOZ1pvbmUgKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhciggKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnXCIsIHRoaXMuZHJhZ0V2ZW50SGFuZGxlciApO1xuICAgIH0gKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnXCIsIHRoaXMuZHJhZ0V2ZW50SGFuZGxlciApO1xuICAgIGlmKHRoaXMuaXNEcmFnU3RhcnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgZW5kRHJhZygpXG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lciggXCJkcmFnc3RhcnRcIiwgWyBcIiRldmVudFwiIF0gKVxuICBvbkRyYWdTdGFydCggZXZlbnQ6RG5kRXZlbnQgKSB7XG5cbiAgICBpZiggdGhpcy5kcmFnZ2FibGUgPT09IGZhbHNlICkge1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgZG5kIGhhbmRsZSBhbmQgaWYgdGhlIGRuZCBoYW5kbGUgd2FzIHVzZWQgdG8gc3RhcnQgdGhlIGRyYWdcbiAgICBpZiggdHlwZW9mIHRoaXMuZG5kSGFuZGxlICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAmJiB0eXBlb2YgZXZlbnQuX2RuZFVzaW5nSGFuZGxlID09PSBcInVuZGVmaW5lZFwiICkge1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbGl6ZSBnbG9iYWwgc3RhdGVcbiAgICBzdGFydERyYWcoIGV2ZW50LCB0aGlzLmRuZEVmZmVjdEFsbG93ZWQsIHRoaXMuZG5kVHlwZSApO1xuXG4gICAgdGhpcy5pc0RyYWdTdGFydGVkID0gdHJ1ZTtcblxuICAgIHNldERyYWdEYXRhKCBldmVudCwge2RhdGE6IHRoaXMuZG5kRHJhZ2dhYmxlLCB0eXBlOiB0aGlzLmRuZFR5cGV9LCBkbmRTdGF0ZS5lZmZlY3RBbGxvd2VkICk7XG5cbiAgICB0aGlzLmRyYWdJbWFnZSA9IHRoaXMuZGV0ZXJtaW5lRHJhZ0ltYWdlKCk7XG5cbiAgICAvLyBzZXQgZHJhZ2dpbmcgY3NzIGNsYXNzIHByaW9yIHRvIHNldERyYWdJbWFnZSBzbyBzdHlsZXMgYXJlIGFwcGxpZWQgYmVmb3JlXG4gICAgLy8gVE9ETyBicmVha2luZyBjaGFuZ2U6IGFkZCBjbGFzcyB0byBlbGVtZW50UmVmIHJhdGhlciB0aGFuIGRyYWcgaW1hZ2Ugd2hpY2ggY291bGQgYmUgYW5vdGhlciBlbGVtZW50XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyggdGhpcy5kcmFnSW1hZ2UsIHRoaXMuZG5kRHJhZ2dpbmdDbGFzcyApO1xuXG4gICAgLy8gc2V0IGN1c3RvbSBkcmFnaW1hZ2UgaWYgcHJlc2VudFxuICAgIC8vIHNldCBkcmFnaW1hZ2UgaWYgZHJhZyBpcyBzdGFydGVkIGZyb20gZG5kSGFuZGxlXG4gICAgaWYoIHR5cGVvZiB0aGlzLmRuZERyYWdJbWFnZUVsZW1lbnRSZWYgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgIHx8IHR5cGVvZiBldmVudC5fZG5kVXNpbmdIYW5kbGUgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cbiAgICAgIHNldERyYWdJbWFnZSggZXZlbnQsIHRoaXMuZHJhZ0ltYWdlLCB0aGlzLmRuZERyYWdJbWFnZU9mZnNldEZ1bmN0aW9uICk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGRyYWdnaW5nIHNvdXJjZSBjc3MgY2xhc3Mgb24gZmlyc3QgZHJhZyBldmVudFxuICAgIGNvbnN0IHVucmVnaXN0ZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbiggdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIFwiZHJhZ1wiLCAoKSA9PiB7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmRuZERyYWdnaW5nU291cmNlQ2xhc3MgKTtcbiAgICAgIHVucmVnaXN0ZXIoKTtcbiAgICB9ICk7XG5cbiAgICB0aGlzLmRuZFN0YXJ0LmVtaXQoIGV2ZW50ICk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIG9uRHJhZyggZXZlbnQ6RHJhZ0V2ZW50ICkge1xuXG4gICAgdGhpcy5kbmREcmFnLmVtaXQoIGV2ZW50ICk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCBcImRyYWdlbmRcIiwgWyBcIiRldmVudFwiIF0gKVxuICBvbkRyYWdFbmQoIGV2ZW50OkRyYWdFdmVudCApIHtcblxuICAgIC8vIGdldCBkcm9wIGVmZmVjdCBmcm9tIGN1c3RvbSBzdG9yZWQgc3RhdGUgYXMgaXRzIG5vdCByZWxpYWJsZSBhY3Jvc3MgYnJvd3NlcnNcbiAgICBjb25zdCBkcm9wRWZmZWN0ID0gZG5kU3RhdGUuZHJvcEVmZmVjdDtcblxuICAgIGxldCBkcm9wRWZmZWN0RW1pdHRlcjpFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PjtcblxuICAgIHN3aXRjaCggZHJvcEVmZmVjdCApIHtcblxuICAgICAgY2FzZSBcImNvcHlcIjpcbiAgICAgICAgZHJvcEVmZmVjdEVtaXR0ZXIgPSB0aGlzLmRuZENvcGllZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJsaW5rXCI6XG4gICAgICAgIGRyb3BFZmZlY3RFbWl0dGVyID0gdGhpcy5kbmRMaW5rZWQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwibW92ZVwiOlxuICAgICAgICBkcm9wRWZmZWN0RW1pdHRlciA9IHRoaXMuZG5kTW92ZWQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkcm9wRWZmZWN0RW1pdHRlciA9IHRoaXMuZG5kQ2FuY2VsZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRyb3BFZmZlY3RFbWl0dGVyLmVtaXQoIGV2ZW50ICk7XG4gICAgdGhpcy5kbmRFbmQuZW1pdCggZXZlbnQgKTtcblxuICAgIC8vIHJlc2V0IGdsb2JhbCBzdGF0ZVxuICAgIGVuZERyYWcoKTtcblxuICAgIHRoaXMuaXNEcmFnU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyggdGhpcy5kcmFnSW1hZ2UsIHRoaXMuZG5kRHJhZ2dpbmdDbGFzcyApO1xuXG4gICAgLy8gSUU5IHNwZWNpYWwgaGFtbWVyaW5nXG4gICAgd2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmRuZERyYWdnaW5nU291cmNlQ2xhc3MgKTtcbiAgICB9LCAwICk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHJlZ2lzdGVyRHJhZ0hhbmRsZSggaGFuZGxlOkRuZEhhbmRsZURpcmVjdGl2ZSB8IHVuZGVmaW5lZCApIHtcblxuICAgIHRoaXMuZG5kSGFuZGxlID0gaGFuZGxlO1xuICB9XG5cbiAgcmVnaXN0ZXJEcmFnSW1hZ2UoIGVsZW1lbnRSZWY6RWxlbWVudFJlZiB8IHVuZGVmaW5lZCApIHtcblxuICAgIHRoaXMuZG5kRHJhZ0ltYWdlRWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gIH1cblxuICBwcml2YXRlIGRldGVybWluZURyYWdJbWFnZSgpOkVsZW1lbnQge1xuXG4gICAgLy8gZXZhbHVhdGUgY3VzdG9tIGRyYWcgaW1hZ2UgZXhpc3RlbmNlXG4gICAgaWYoIHR5cGVvZiB0aGlzLmRuZERyYWdJbWFnZUVsZW1lbnRSZWYgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLmRuZERyYWdJbWFnZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cbiAgfVxufVxuIl19