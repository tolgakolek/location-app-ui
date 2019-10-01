/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CUSTOM_MIME_TYPE, DROP_EFFECTS, filterEffects, getWellKnownMimeType, JSON_MIME_TYPE, MSIE_MIME_TYPE } from "./dnd-utils";
/**
 * @record
 */
export function DndState() { }
if (false) {
    /** @type {?} */
    DndState.prototype.isDragging;
    /** @type {?|undefined} */
    DndState.prototype.dropEffect;
    /** @type {?|undefined} */
    DndState.prototype.effectAllowed;
    /** @type {?|undefined} */
    DndState.prototype.type;
}
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
export function startDrag(event, effectAllowed, type) {
    _dndState.isDragging = true;
    _dndState.dropEffect = "none";
    _dndState.effectAllowed = effectAllowed;
    _dndState.type = type;
    event.dataTransfer.effectAllowed = effectAllowed;
}
/**
 * @return {?}
 */
export function endDrag() {
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
export function setDropEffect(event, dropEffect) {
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
export function getDropEffect(event, effectAllowed) {
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
export function getDndType(event) {
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
export function isExternalDrag() {
    return _dndState.isDragging === false;
}
/** @type {?} */
export var dndState = (/** @type {?} */ (_dndState));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLXN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRyYWctZHJvcC8iLCJzb3VyY2VzIjpbImRuZC1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osYUFBYSxFQUNiLG9CQUFvQixFQUNwQixjQUFjLEVBQ2QsY0FBYyxFQUNmLE1BQU0sYUFBYSxDQUFDOzs7O0FBR3JCLDhCQUtDOzs7SUFKQyw4QkFBbUI7O0lBQ25CLDhCQUF1Qjs7SUFDdkIsaUNBQTZCOztJQUM3Qix3QkFBYTs7O0lBR1QsU0FBUyxHQUFZO0lBQ3pCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLElBQUksRUFBRSxTQUFTO0NBQ2hCOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBRSxLQUFlLEVBQUUsYUFBMkIsRUFBRSxJQUF1QjtJQUU5RixTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUM1QixTQUFTLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUM5QixTQUFTLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN4QyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUV0QixLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkQsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxPQUFPO0lBRXJCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzdCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQzdCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUUsS0FBZSxFQUFFLFVBQXFCO0lBRW5FLElBQUksU0FBUyxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUc7UUFFbEMsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDbkM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0MsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBRSxLQUFlLEVBQUUsYUFBeUM7O1FBRWpGLHlCQUF5QixHQUFpQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQWlCLENBQUMsQ0FBQyxDQUFDLGVBQWU7O1FBRXRJLE9BQU8sR0FBRyxhQUFhLENBQUUsWUFBWSxFQUFFLHlCQUF5QixDQUFFO0lBRXRFLElBQUksU0FBUyxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUc7UUFFbEMsT0FBTyxHQUFHLGFBQWEsQ0FBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBRSxDQUFDO0tBQzdEO0lBRUQsSUFBSSxhQUFhLEVBQUc7UUFFbEIsT0FBTyxHQUFHLGFBQWEsQ0FBRSxPQUFPLEVBQUUsYUFBYSxDQUFFLENBQUM7S0FDbkQ7SUFFRCx5RkFBeUY7SUFDekYsa0ZBQWtGO0lBQ2xGLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUc7UUFFekIsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUVELElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFFLE1BQU0sQ0FBRSxLQUFLLENBQUMsQ0FBQyxFQUFHO1FBRXRELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBRSxNQUFNLENBQUUsS0FBSyxDQUFDLENBQUMsRUFBRztRQUVyRCxPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsT0FBTyxtQkFBQSxPQUFPLENBQUUsQ0FBQyxDQUFFLEVBQWMsQ0FBQztBQUNwQyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUUsS0FBZTtJQUV6QyxJQUFJLFNBQVMsQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFHO1FBRWxDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQztLQUN2Qjs7UUFFSyxRQUFRLEdBQUcsb0JBQW9CLENBQUUsS0FBSyxDQUFFO0lBRTlDLElBQUksUUFBUSxLQUFLLElBQUksRUFBRztRQUV0QixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUVELElBQUksUUFBUSxLQUFLLGNBQWM7V0FDMUIsUUFBUSxLQUFLLGNBQWMsRUFBRztRQUVqQyxPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUVELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBRSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLElBQUksU0FBUyxDQUFDO0FBQ3JFLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYztJQUU1QixPQUFPLFNBQVMsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDO0FBQ3hDLENBQUM7O0FBRUQsTUFBTSxLQUFPLFFBQVEsR0FBc0IsbUJBQUEsU0FBUyxFQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENVU1RPTV9NSU1FX1RZUEUsXG4gIERST1BfRUZGRUNUUyxcbiAgZmlsdGVyRWZmZWN0cyxcbiAgZ2V0V2VsbEtub3duTWltZVR5cGUsXG4gIEpTT05fTUlNRV9UWVBFLFxuICBNU0lFX01JTUVfVFlQRVxufSBmcm9tIFwiLi9kbmQtdXRpbHNcIjtcbmltcG9ydCB7IERyb3BFZmZlY3QsIEVmZmVjdEFsbG93ZWQgfSBmcm9tIFwiLi9kbmQtdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEbmRTdGF0ZSB7XG4gIGlzRHJhZ2dpbmc6Ym9vbGVhbjtcbiAgZHJvcEVmZmVjdD86RHJvcEVmZmVjdDtcbiAgZWZmZWN0QWxsb3dlZD86RWZmZWN0QWxsb3dlZDtcbiAgdHlwZT86c3RyaW5nO1xufVxuXG5jb25zdCBfZG5kU3RhdGU6RG5kU3RhdGUgPSB7XG4gIGlzRHJhZ2dpbmc6IGZhbHNlLFxuICBkcm9wRWZmZWN0OiBcIm5vbmVcIixcbiAgZWZmZWN0QWxsb3dlZDogXCJhbGxcIixcbiAgdHlwZTogdW5kZWZpbmVkXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnREcmFnKCBldmVudDpEcmFnRXZlbnQsIGVmZmVjdEFsbG93ZWQ6RWZmZWN0QWxsb3dlZCwgdHlwZTpzdHJpbmcgfCB1bmRlZmluZWQgKSB7XG5cbiAgX2RuZFN0YXRlLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICBfZG5kU3RhdGUuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xuICBfZG5kU3RhdGUuZWZmZWN0QWxsb3dlZCA9IGVmZmVjdEFsbG93ZWQ7XG4gIF9kbmRTdGF0ZS50eXBlID0gdHlwZTtcblxuICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IGVmZmVjdEFsbG93ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmREcmFnKCkge1xuXG4gIF9kbmRTdGF0ZS5pc0RyYWdnaW5nID0gZmFsc2U7XG4gIF9kbmRTdGF0ZS5kcm9wRWZmZWN0ID0gdW5kZWZpbmVkO1xuICBfZG5kU3RhdGUuZWZmZWN0QWxsb3dlZCA9IHVuZGVmaW5lZDtcbiAgX2RuZFN0YXRlLnR5cGUgPSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREcm9wRWZmZWN0KCBldmVudDpEcmFnRXZlbnQsIGRyb3BFZmZlY3Q6RHJvcEVmZmVjdCApIHtcblxuICBpZiggX2RuZFN0YXRlLmlzRHJhZ2dpbmcgPT09IHRydWUgKSB7XG5cbiAgICBfZG5kU3RhdGUuZHJvcEVmZmVjdCA9IGRyb3BFZmZlY3Q7XG4gIH1cblxuICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IGRyb3BFZmZlY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREcm9wRWZmZWN0KCBldmVudDpEcmFnRXZlbnQsIGVmZmVjdEFsbG93ZWQ/OkVmZmVjdEFsbG93ZWQgfCBEcm9wRWZmZWN0ICk6RHJvcEVmZmVjdCB7XG5cbiAgY29uc3QgZGF0YVRyYW5zZmVyRWZmZWN0QWxsb3dlZDpFZmZlY3RBbGxvd2VkID0gKGV2ZW50LmRhdGFUcmFuc2ZlcikgPyBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCBhcyBFZmZlY3RBbGxvd2VkIDogXCJ1bmluaXRpYWxpemVkXCI7XG5cbiAgbGV0IGVmZmVjdHMgPSBmaWx0ZXJFZmZlY3RzKCBEUk9QX0VGRkVDVFMsIGRhdGFUcmFuc2ZlckVmZmVjdEFsbG93ZWQgKTtcblxuICBpZiggX2RuZFN0YXRlLmlzRHJhZ2dpbmcgPT09IHRydWUgKSB7XG5cbiAgICBlZmZlY3RzID0gZmlsdGVyRWZmZWN0cyggZWZmZWN0cywgX2RuZFN0YXRlLmVmZmVjdEFsbG93ZWQgKTtcbiAgfVxuXG4gIGlmKCBlZmZlY3RBbGxvd2VkICkge1xuXG4gICAgZWZmZWN0cyA9IGZpbHRlckVmZmVjdHMoIGVmZmVjdHMsIGVmZmVjdEFsbG93ZWQgKTtcbiAgfVxuXG4gIC8vIE1hY09TIGF1dG9tYXRpY2FsbHkgZmlsdGVycyBkYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCBkZXBlbmRpbmcgb24gdGhlIG1vZGlmaWVyIGtleXMsXG4gIC8vIHRoZXJlZm9yZSB0aGUgZm9sbG93aW5nIG1vZGlmaWVyIGtleXMgd2lsbCBvbmx5IGFmZmVjdCBvdGhlciBvcGVyYXRpbmcgc3lzdGVtcy5cbiAgaWYoIGVmZmVjdHMubGVuZ3RoID09PSAwICkge1xuXG4gICAgcmV0dXJuIFwibm9uZVwiO1xuICB9XG5cbiAgaWYoIGV2ZW50LmN0cmxLZXkgJiYgZWZmZWN0cy5pbmRleE9mKCBcImNvcHlcIiApICE9PSAtMSApIHtcblxuICAgIHJldHVybiBcImNvcHlcIjtcbiAgfVxuXG4gIGlmKCBldmVudC5hbHRLZXkgJiYgZWZmZWN0cy5pbmRleE9mKCBcImxpbmtcIiApICE9PSAtMSApIHtcblxuICAgIHJldHVybiBcImxpbmtcIjtcbiAgfVxuXG4gIHJldHVybiBlZmZlY3RzWyAwIF0gYXMgRHJvcEVmZmVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERuZFR5cGUoIGV2ZW50OkRyYWdFdmVudCApOnN0cmluZyB8IHVuZGVmaW5lZCB7XG5cbiAgaWYoIF9kbmRTdGF0ZS5pc0RyYWdnaW5nID09PSB0cnVlICkge1xuXG4gICAgcmV0dXJuIF9kbmRTdGF0ZS50eXBlO1xuICB9XG5cbiAgY29uc3QgbWltZVR5cGUgPSBnZXRXZWxsS25vd25NaW1lVHlwZSggZXZlbnQgKTtcblxuICBpZiggbWltZVR5cGUgPT09IG51bGwgKSB7XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYoIG1pbWVUeXBlID09PSBNU0lFX01JTUVfVFlQRVxuICAgIHx8IG1pbWVUeXBlID09PSBKU09OX01JTUVfVFlQRSApIHtcblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gbWltZVR5cGUuc3Vic3RyKCBDVVNUT01fTUlNRV9UWVBFLmxlbmd0aCArIDEgKSB8fCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V4dGVybmFsRHJhZygpOmJvb2xlYW4ge1xuXG4gIHJldHVybiBfZG5kU3RhdGUuaXNEcmFnZ2luZyA9PT0gZmFsc2U7XG59XG5cbmV4cG9ydCBjb25zdCBkbmRTdGF0ZTpSZWFkb25seTxEbmRTdGF0ZT4gPSBfZG5kU3RhdGUgYXMgUmVhZG9ubHk8RG5kU3RhdGU+O1xuIl19