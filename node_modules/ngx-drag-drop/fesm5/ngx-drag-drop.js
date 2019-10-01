import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgZone, Output, Renderer2, ContentChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DROP_EFFECTS = (/** @type {?} */ (["move", "copy", "link"]));
/** @type {?} */
var CUSTOM_MIME_TYPE = "application/x-dnd";
/** @type {?} */
var JSON_MIME_TYPE = "application/json";
/** @type {?} */
var MSIE_MIME_TYPE = "Text";
/**
 * @param {?} mimeType
 * @return {?}
 */
function mimeTypeIsCustom(mimeType) {
    return mimeType.substr(0, CUSTOM_MIME_TYPE.length) === CUSTOM_MIME_TYPE;
}
/**
 * @param {?} event
 * @return {?}
 */
function getWellKnownMimeType(event) {
    if (event.dataTransfer) {
        /** @type {?} */
        var types = event.dataTransfer.types;
        // IE 9 workaround.
        if (!types) {
            return MSIE_MIME_TYPE;
        }
        for (var i = 0; i < types.length; i++) {
            if (types[i] === MSIE_MIME_TYPE
                || types[i] === JSON_MIME_TYPE
                || mimeTypeIsCustom(types[i])) {
                return types[i];
            }
        }
    }
    return null;
}
/**
 * @param {?} event
 * @param {?} data
 * @param {?} effectAllowed
 * @return {?}
 */
function setDragData(event, data, effectAllowed) {
    // Internet Explorer and Microsoft Edge don't support custom mime types, see design doc:
    // https://github.com/marceljuenemann/angular-drag-and-drop-lists/wiki/Data-Transfer-Design
    /** @type {?} */
    var mimeType = CUSTOM_MIME_TYPE + (data.type ? ("-" + data.type) : "");
    /** @type {?} */
    var dataString = JSON.stringify(data);
    try {
        event.dataTransfer.setData(mimeType, dataString);
    }
    catch (e) {
        //   Setting a custom MIME type did not work, we are probably in IE or Edge.
        try {
            event.dataTransfer.setData(JSON_MIME_TYPE, dataString);
        }
        catch (e) {
            //   We are in Internet Explorer and can only use the Text MIME type. Also note that IE
            //   does not allow changing the cursor in the dragover event, therefore we have to choose
            //   the one we want to display now by setting effectAllowed.
            /** @type {?} */
            var effectsAllowed = filterEffects(DROP_EFFECTS, effectAllowed);
            event.dataTransfer.effectAllowed = effectsAllowed[0];
            event.dataTransfer.setData(MSIE_MIME_TYPE, dataString);
        }
    }
}
/**
 * @param {?} event
 * @param {?} dragIsExternal
 * @return {?}
 */
function getDropData(event, dragIsExternal) {
    // check if the mime type is well known
    /** @type {?} */
    var mimeType = getWellKnownMimeType(event);
    // drag did not originate from [dndDraggable]
    if (dragIsExternal === true) {
        if (mimeType !== null
            && mimeTypeIsCustom(mimeType)) {
            // the type of content is well known and safe to handle
            return JSON.parse(event.dataTransfer.getData(mimeType));
        }
        // the contained data is unknown, let user handle it
        return {};
    }
    // the type of content is well known and safe to handle
    return JSON.parse(event.dataTransfer.getData(mimeType));
}
/**
 * @param {?} effects
 * @param {?} allowed
 * @return {?}
 */
function filterEffects(effects, allowed) {
    if (allowed === "all"
        || allowed === "uninitialized") {
        return effects;
    }
    return effects.filter((/**
     * @param {?} effect
     * @return {?}
     */
    function (effect) {
        return allowed.toLowerCase().indexOf(effect) !== -1;
    }));
}
/**
 * @param {?} parentElement
 * @param {?} childElement
 * @return {?}
 */
function getDirectChildElement(parentElement, childElement) {
    /** @type {?} */
    var directChild = childElement;
    while (directChild.parentNode !== parentElement) {
        // reached root node without finding given parent
        if (!directChild.parentNode) {
            return null;
        }
        directChild = directChild.parentNode;
    }
    return (/** @type {?} */ (directChild));
}
/**
 * @param {?} event
 * @param {?} element
 * @param {?} horizontal
 * @return {?}
 */
function shouldPositionPlaceholderBeforeElement(event, element, horizontal) {
    /** @type {?} */
    var bounds = element.getBoundingClientRect();
    // If the pointer is in the upper half of the list item element,
    // we position the placeholder before the list item, otherwise after it.
    if (horizontal) {
        return (event.clientX < bounds.left + bounds.width / 2);
    }
    return (event.clientY < bounds.top + bounds.height / 2);
}
/**
 * @param {?} event
 * @param {?} dragImage
 * @return {?}
 */
function calculateDragImageOffset(event, dragImage) {
    /** @type {?} */
    var dragImageComputedStyle = window.getComputedStyle(dragImage);
    /** @type {?} */
    var paddingTop = parseFloat(dragImageComputedStyle.paddingTop) || 0;
    /** @type {?} */
    var paddingLeft = parseFloat(dragImageComputedStyle.paddingLeft) || 0;
    /** @type {?} */
    var borderTop = parseFloat(dragImageComputedStyle.borderTopWidth) || 0;
    /** @type {?} */
    var borderLeft = parseFloat(dragImageComputedStyle.borderLeftWidth) || 0;
    return {
        x: event.offsetX + paddingLeft + borderLeft,
        y: event.offsetY + paddingTop + borderTop
    };
}
/**
 * @param {?} event
 * @param {?} dragImage
 * @param {?} offsetFunction
 * @return {?}
 */
function setDragImage(event, dragImage, offsetFunction) {
    /** @type {?} */
    var offset = offsetFunction(event, dragImage) || { x: 0, y: 0 };
    ((/** @type {?} */ (event.dataTransfer))).setDragImage(dragImage, offset.x, offset.y);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var _dndState = {
    isDragging: false,
    dropEffect: "none",
    effectAllowed: "all",
    type: undefined
};
/**
 * @param {?} event
 * @param {?} effectAllowed
 * @param {?} type
 * @return {?}
 */
function startDrag(event, effectAllowed, type) {
    _dndState.isDragging = true;
    _dndState.dropEffect = "none";
    _dndState.effectAllowed = effectAllowed;
    _dndState.type = type;
    event.dataTransfer.effectAllowed = effectAllowed;
}
/**
 * @return {?}
 */
function endDrag() {
    _dndState.isDragging = false;
    _dndState.dropEffect = undefined;
    _dndState.effectAllowed = undefined;
    _dndState.type = undefined;
}
/**
 * @param {?} event
 * @param {?} dropEffect
 * @return {?}
 */
function setDropEffect(event, dropEffect) {
    if (_dndState.isDragging === true) {
        _dndState.dropEffect = dropEffect;
    }
    event.dataTransfer.dropEffect = dropEffect;
}
/**
 * @param {?} event
 * @param {?=} effectAllowed
 * @return {?}
 */
function getDropEffect(event, effectAllowed) {
    /** @type {?} */
    var dataTransferEffectAllowed = (event.dataTransfer) ? (/** @type {?} */ (event.dataTransfer.effectAllowed)) : "uninitialized";
    /** @type {?} */
    var effects = filterEffects(DROP_EFFECTS, dataTransferEffectAllowed);
    if (_dndState.isDragging === true) {
        effects = filterEffects(effects, _dndState.effectAllowed);
    }
    if (effectAllowed) {
        effects = filterEffects(effects, effectAllowed);
    }
    // MacOS automatically filters dataTransfer.effectAllowed depending on the modifier keys,
    // therefore the following modifier keys will only affect other operating systems.
    if (effects.length === 0) {
        return "none";
    }
    if (event.ctrlKey && effects.indexOf("copy") !== -1) {
        return "copy";
    }
    if (event.altKey && effects.indexOf("link") !== -1) {
        return "link";
    }
    return (/** @type {?} */ (effects[0]));
}
/**
 * @param {?} event
 * @return {?}
 */
function getDndType(event) {
    if (_dndState.isDragging === true) {
        return _dndState.type;
    }
    /** @type {?} */
    var mimeType = getWellKnownMimeType(event);
    if (mimeType === null) {
        return undefined;
    }
    if (mimeType === MSIE_MIME_TYPE
        || mimeType === JSON_MIME_TYPE) {
        return undefined;
    }
    return mimeType.substr(CUSTOM_MIME_TYPE.length + 1) || undefined;
}
/**
 * @return {?}
 */
function isExternalDrag() {
    return _dndState.isDragging === false;
}
/** @type {?} */
var dndState = (/** @type {?} */ (_dndState));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DndHandleDirective = /** @class */ (function () {
    function DndHandleDirective(parent) {
        this.draggable = true;
        parent.registerDragHandle(this);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DndHandleDirective.prototype.onDragEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event._dndUsingHandle = true;
    };
    DndHandleDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[dndHandle]"
                },] }
    ];
    /** @nocollapse */
    DndHandleDirective.ctorParameters = function () { return [
        { type: DndDraggableDirective }
    ]; };
    DndHandleDirective.propDecorators = {
        draggable: [{ type: HostBinding, args: ["attr.draggable",] }],
        onDragEvent: [{ type: HostListener, args: ["dragstart", ["$event"],] }, { type: HostListener, args: ["dragend", ["$event"],] }]
    };
    return DndHandleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DndModule = /** @class */ (function () {
    function DndModule() {
    }
    DndModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DndDraggableDirective,
                        DndDropzoneDirective,
                        DndHandleDirective,
                        DndPlaceholderRefDirective,
                        DndDragImageRefDirective
                    ],
                    exports: [
                        DndDraggableDirective,
                        DndDropzoneDirective,
                        DndHandleDirective,
                        DndPlaceholderRefDirective,
                        DndDragImageRefDirective
                    ]
                },] }
    ];
    return DndModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DndDragImageRefDirective, DndDraggableDirective, DndPlaceholderRefDirective, DndDropzoneDirective, DndHandleDirective, DndModule };

//# sourceMappingURL=ngx-drag-drop.js.map