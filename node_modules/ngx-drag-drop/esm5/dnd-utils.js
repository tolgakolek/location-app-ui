/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function DragDropData() { }
if (false) {
    /** @type {?|undefined} */
    DragDropData.prototype.data;
    /** @type {?|undefined} */
    DragDropData.prototype.type;
}
/**
 * @record
 */
export function DndEvent() { }
if (false) {
    /** @type {?|undefined} */
    DndEvent.prototype._dndUsingHandle;
    /** @type {?|undefined} */
    DndEvent.prototype._dndDropzoneActive;
}
/** @type {?} */
export var DROP_EFFECTS = (/** @type {?} */ (["move", "copy", "link"]));
/** @type {?} */
export var CUSTOM_MIME_TYPE = "application/x-dnd";
/** @type {?} */
export var JSON_MIME_TYPE = "application/json";
/** @type {?} */
export var MSIE_MIME_TYPE = "Text";
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
export function getWellKnownMimeType(event) {
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
export function setDragData(event, data, effectAllowed) {
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
export function getDropData(event, dragIsExternal) {
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
export function filterEffects(effects, allowed) {
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
export function getDirectChildElement(parentElement, childElement) {
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
export function shouldPositionPlaceholderBeforeElement(event, element, horizontal) {
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
export function calculateDragImageOffset(event, dragImage) {
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
export function setDragImage(event, dragImage, offsetFunction) {
    /** @type {?} */
    var offset = offsetFunction(event, dragImage) || { x: 0, y: 0 };
    ((/** @type {?} */ (event.dataTransfer))).setDragImage(dragImage, offset.x, offset.y);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRyYWctZHJvcC8iLCJzb3VyY2VzIjpbImRuZC11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsa0NBR0M7OztJQUZDLDRCQUFVOztJQUNWLDRCQUFhOzs7OztBQUdmLDhCQUdDOzs7SUFGQyxtQ0FBeUI7O0lBQ3pCLHNDQUF5Qjs7O0FBSzNCLE1BQU0sS0FBTyxZQUFZLEdBQUcsbUJBQUEsQ0FBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBRSxFQUFnQjs7QUFFdEUsTUFBTSxLQUFPLGdCQUFnQixHQUFHLG1CQUFtQjs7QUFDbkQsTUFBTSxLQUFPLGNBQWMsR0FBRyxrQkFBa0I7O0FBQ2hELE1BQU0sS0FBTyxjQUFjLEdBQUcsTUFBTTs7Ozs7QUFFcEMsU0FBUyxnQkFBZ0IsQ0FBRSxRQUFlO0lBRXhDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFFLEtBQUssZ0JBQWdCLENBQUM7QUFDNUUsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUUsS0FBZTtJQUVuRCxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUc7O1lBRWpCLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUs7UUFFdEMsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUc7WUFFWCxPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFHO1lBRXRDLElBQUksS0FBSyxDQUFFLENBQUMsQ0FBRSxLQUFLLGNBQWM7bUJBQzVCLEtBQUssQ0FBRSxDQUFDLENBQUUsS0FBSyxjQUFjO21CQUM3QixnQkFBZ0IsQ0FBRSxLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUUsRUFBRztnQkFFcEMsT0FBTyxL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QUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFFLENBQUM7QUFDNUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyb3BFZmZlY3QsIEVmZmVjdEFsbG93ZWQgfSBmcm9tIFwiLi9kbmQtdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEcmFnRHJvcERhdGEge1xuICBkYXRhPzphbnk7XG4gIHR5cGU/OnN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEbmRFdmVudCBleHRlbmRzIERyYWdFdmVudCB7XG4gIF9kbmRVc2luZ0hhbmRsZT86Ym9vbGVhbjtcbiAgX2RuZERyb3B6b25lQWN0aXZlPzp0cnVlO1xufVxuXG5leHBvcnQgdHlwZSBEbmREcmFnSW1hZ2VPZmZzZXRGdW5jdGlvbiA9ICggZXZlbnQ6RHJhZ0V2ZW50LCBkcmFnSW1hZ2U6RWxlbWVudCApID0+IHsgeDpudW1iZXIsIHk6bnVtYmVyIH07XG5cbmV4cG9ydCBjb25zdCBEUk9QX0VGRkVDVFMgPSBbIFwibW92ZVwiLCBcImNvcHlcIiwgXCJsaW5rXCIgXSBhcyBEcm9wRWZmZWN0W107XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fTUlNRV9UWVBFID0gXCJhcHBsaWNhdGlvbi94LWRuZFwiO1xuZXhwb3J0IGNvbnN0IEpTT05fTUlNRV9UWVBFID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5leHBvcnQgY29uc3QgTVNJRV9NSU1FX1RZUEUgPSBcIlRleHRcIjtcblxuZnVuY3Rpb24gbWltZVR5cGVJc0N1c3RvbSggbWltZVR5cGU6c3RyaW5nICkge1xuXG4gIHJldHVybiBtaW1lVHlwZS5zdWJzdHIoIDAsIENVU1RPTV9NSU1FX1RZUEUubGVuZ3RoICkgPT09IENVU1RPTV9NSU1FX1RZUEU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWxsS25vd25NaW1lVHlwZSggZXZlbnQ6RHJhZ0V2ZW50ICk6c3RyaW5nIHwgbnVsbCB7XG5cbiAgaWYoIGV2ZW50LmRhdGFUcmFuc2ZlciApIHtcblxuICAgIGNvbnN0IHR5cGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzO1xuXG4gICAgLy8gSUUgOSB3b3JrYXJvdW5kLlxuICAgIGlmKCAhdHlwZXMgKSB7XG5cbiAgICAgIHJldHVybiBNU0lFX01JTUVfVFlQRTtcbiAgICB9XG5cbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrICkge1xuXG4gICAgICBpZiggdHlwZXNbIGkgXSA9PT0gTVNJRV9NSU1FX1RZUEVcbiAgICAgICAgfHwgdHlwZXNbIGkgXSA9PT0gSlNPTl9NSU1FX1RZUEVcbiAgICAgICAgfHwgbWltZVR5cGVJc0N1c3RvbSggdHlwZXNbIGkgXSApICkge1xuXG4gICAgICAgIHJldHVybiB0eXBlc1sgaSBdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RHJhZ0RhdGEoIGV2ZW50OkRyYWdFdmVudCwgZGF0YTpEcmFnRHJvcERhdGEsIGVmZmVjdEFsbG93ZWQ6RWZmZWN0QWxsb3dlZCApOnZvaWQge1xuXG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBNaWNyb3NvZnQgRWRnZSBkb24ndCBzdXBwb3J0IGN1c3RvbSBtaW1lIHR5cGVzLCBzZWUgZGVzaWduIGRvYzpcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hcmNlbGp1ZW5lbWFubi9hbmd1bGFyLWRyYWctYW5kLWRyb3AtbGlzdHMvd2lraS9EYXRhLVRyYW5zZmVyLURlc2lnblxuICBjb25zdCBtaW1lVHlwZSA9IENVU1RPTV9NSU1FX1RZUEUgKyAoZGF0YS50eXBlID8gKFwiLVwiICsgZGF0YS50eXBlKSA6IFwiXCIpO1xuXG4gIGNvbnN0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSggZGF0YSApO1xuXG4gIHRyeSB7XG5cbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSggbWltZVR5cGUsIGRhdGFTdHJpbmcgKTtcblxuICB9XG4gIGNhdGNoKCBlICkge1xuXG4gICAgLy8gICBTZXR0aW5nIGEgY3VzdG9tIE1JTUUgdHlwZSBkaWQgbm90IHdvcmssIHdlIGFyZSBwcm9iYWJseSBpbiBJRSBvciBFZGdlLlxuICAgIHRyeSB7XG5cbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCBKU09OX01JTUVfVFlQRSwgZGF0YVN0cmluZyApO1xuXG4gICAgfVxuICAgIGNhdGNoKCBlICkge1xuXG4gICAgICAvLyAgIFdlIGFyZSBpbiBJbnRlcm5ldCBFeHBsb3JlciBhbmQgY2FuIG9ubHkgdXNlIHRoZSBUZXh0IE1JTUUgdHlwZS4gQWxzbyBub3RlIHRoYXQgSUVcbiAgICAgIC8vICAgZG9lcyBub3QgYWxsb3cgY2hhbmdpbmcgdGhlIGN1cnNvciBpbiB0aGUgZHJhZ292ZXIgZXZlbnQsIHRoZXJlZm9yZSB3ZSBoYXZlIHRvIGNob29zZVxuICAgICAgLy8gICB0aGUgb25lIHdlIHdhbnQgdG8gZGlzcGxheSBub3cgYnkgc2V0dGluZyBlZmZlY3RBbGxvd2VkLlxuICAgICAgY29uc3QgZWZmZWN0c0FsbG93ZWQgPSBmaWx0ZXJFZmZlY3RzKCBEUk9QX0VGRkVDVFMsIGVmZmVjdEFsbG93ZWQgKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gZWZmZWN0c0FsbG93ZWRbIDAgXTtcblxuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoIE1TSUVfTUlNRV9UWVBFLCBkYXRhU3RyaW5nICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREcm9wRGF0YSggZXZlbnQ6RHJhZ0V2ZW50LCBkcmFnSXNFeHRlcm5hbDpib29sZWFuICk6RHJhZ0Ryb3BEYXRhIHtcblxuICAvLyBjaGVjayBpZiB0aGUgbWltZSB0eXBlIGlzIHdlbGwga25vd25cbiAgY29uc3QgbWltZVR5cGUgPSBnZXRXZWxsS25vd25NaW1lVHlwZSggZXZlbnQgKTtcblxuICAvLyBkcmFnIGRpZCBub3Qgb3JpZ2luYXRlIGZyb20gW2RuZERyYWdnYWJsZV1cbiAgaWYoIGRyYWdJc0V4dGVybmFsID09PSB0cnVlICkge1xuXG4gICAgaWYoIG1pbWVUeXBlICE9PSBudWxsXG4gICAgICAmJiBtaW1lVHlwZUlzQ3VzdG9tKCBtaW1lVHlwZSApICkge1xuXG4gICAgICAvLyB0aGUgdHlwZSBvZiBjb250ZW50IGlzIHdlbGwga25vd24gYW5kIHNhZmUgdG8gaGFuZGxlXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSggZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoIG1pbWVUeXBlICkgKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgY29udGFpbmVkIGRhdGEgaXMgdW5rbm93biwgbGV0IHVzZXIgaGFuZGxlIGl0XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLy8gdGhlIHR5cGUgb2YgY29udGVudCBpcyB3ZWxsIGtub3duIGFuZCBzYWZlIHRvIGhhbmRsZVxuICByZXR1cm4gSlNPTi5wYXJzZSggZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoIG1pbWVUeXBlICkgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckVmZmVjdHMoIGVmZmVjdHM6RHJvcEVmZmVjdFtdLCBhbGxvd2VkOkVmZmVjdEFsbG93ZWQgfCBEcm9wRWZmZWN0ICk6RHJvcEVmZmVjdFtdIHtcblxuICBpZiggYWxsb3dlZCA9PT0gXCJhbGxcIlxuICAgIHx8IGFsbG93ZWQgPT09IFwidW5pbml0aWFsaXplZFwiICkge1xuXG4gICAgcmV0dXJuIGVmZmVjdHM7XG4gIH1cblxuICByZXR1cm4gZWZmZWN0cy5maWx0ZXIoIGZ1bmN0aW9uKCBlZmZlY3QgKSB7XG5cbiAgICByZXR1cm4gYWxsb3dlZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoIGVmZmVjdCApICE9PSAtMTtcbiAgfSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0Q2hpbGRFbGVtZW50KCBwYXJlbnRFbGVtZW50OkVsZW1lbnQsIGNoaWxkRWxlbWVudDpFbGVtZW50ICk6RWxlbWVudCB8IG51bGwge1xuXG4gIGxldCBkaXJlY3RDaGlsZDpOb2RlID0gY2hpbGRFbGVtZW50O1xuXG4gIHdoaWxlKCBkaXJlY3RDaGlsZC5wYXJlbnROb2RlICE9PSBwYXJlbnRFbGVtZW50ICkge1xuXG4gICAgLy8gcmVhY2hlZCByb290IG5vZGUgd2l0aG91dCBmaW5kaW5nIGdpdmVuIHBhcmVudFxuICAgIGlmKCAhZGlyZWN0Q2hpbGQucGFyZW50Tm9kZSApIHtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZGlyZWN0Q2hpbGQgPSBkaXJlY3RDaGlsZC5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdENoaWxkIGFzIEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRQb3NpdGlvblBsYWNlaG9sZGVyQmVmb3JlRWxlbWVudCggZXZlbnQ6RHJhZ0V2ZW50LCBlbGVtZW50OkVsZW1lbnQsIGhvcml6b250YWw6Ym9vbGVhbiApIHtcblxuICBjb25zdCBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIC8vIElmIHRoZSBwb2ludGVyIGlzIGluIHRoZSB1cHBlciBoYWxmIG9mIHRoZSBsaXN0IGl0ZW0gZWxlbWVudCxcbiAgLy8gd2UgcG9zaXRpb24gdGhlIHBsYWNlaG9sZGVyIGJlZm9yZSB0aGUgbGlzdCBpdGVtLCBvdGhlcndpc2UgYWZ0ZXIgaXQuXG4gIGlmKCBob3Jpem9udGFsICkge1xuXG4gICAgcmV0dXJuIChldmVudC5jbGllbnRYIDwgYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGggLyAyKTtcbiAgfVxuXG4gIHJldHVybiAoZXZlbnQuY2xpZW50WSA8IGJvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0IC8gMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEcmFnSW1hZ2VPZmZzZXQoIGV2ZW50OkRyYWdFdmVudCwgZHJhZ0ltYWdlOkVsZW1lbnQgKTp7IHg6bnVtYmVyLCB5Om51bWJlciB9IHtcblxuICBjb25zdCBkcmFnSW1hZ2VDb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGRyYWdJbWFnZSApO1xuICBjb25zdCBwYWRkaW5nVG9wID0gcGFyc2VGbG9hdCggZHJhZ0ltYWdlQ29tcHV0ZWRTdHlsZS5wYWRkaW5nVG9wICkgfHwgMDtcbiAgY29uc3QgcGFkZGluZ0xlZnQgPSBwYXJzZUZsb2F0KCBkcmFnSW1hZ2VDb21wdXRlZFN0eWxlLnBhZGRpbmdMZWZ0ICkgfHwgMDtcbiAgY29uc3QgYm9yZGVyVG9wID0gcGFyc2VGbG9hdCggZHJhZ0ltYWdlQ29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BXaWR0aCApIHx8IDA7XG4gIGNvbnN0IGJvcmRlckxlZnQgPSBwYXJzZUZsb2F0KCBkcmFnSW1hZ2VDb21wdXRlZFN0eWxlLmJvcmRlckxlZnRXaWR0aCApIHx8IDA7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBldmVudC5vZmZzZXRYICsgcGFkZGluZ0xlZnQgKyBib3JkZXJMZWZ0LFxuICAgIHk6IGV2ZW50Lm9mZnNldFkgKyBwYWRkaW5nVG9wICsgYm9yZGVyVG9wXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREcmFnSW1hZ2UoIGV2ZW50OkRyYWdFdmVudCwgZHJhZ0ltYWdlOkVsZW1lbnQsIG9mZnNldEZ1bmN0aW9uOkRuZERyYWdJbWFnZU9mZnNldEZ1bmN0aW9uICk6dm9pZCB7XG5cbiAgY29uc3Qgb2Zmc2V0ID0gb2Zmc2V0RnVuY3Rpb24oIGV2ZW50LCBkcmFnSW1hZ2UgKSB8fCB7eDogMCwgeTogMH07XG5cbiAgKGV2ZW50LmRhdGFUcmFuc2ZlciBhcyBhbnkpLnNldERyYWdJbWFnZSggZHJhZ0ltYWdlLCBvZmZzZXQueCwgb2Zmc2V0LnkgKTtcbn1cbiJdfQ==