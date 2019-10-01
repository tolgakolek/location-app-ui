/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, HostListener } from "@angular/core";
import { DndDraggableDirective } from "./dnd-draggable.directive";
export class DndHandleDirective {
    /**
     * @param {?} parent
     */
    constructor(parent) {
        this.draggable = true;
        parent.registerDragHandle(this);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragEvent(event) {
        event._dndUsingHandle = true;
    }
}
DndHandleDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dndHandle]"
            },] }
];
/** @nocollapse */
DndHandleDirective.ctorParameters = () => [
    { type: DndDraggableDirective }
];
DndHandleDirective.propDecorators = {
    draggable: [{ type: HostBinding, args: ["attr.draggable",] }],
    onDragEvent: [{ type: HostListener, args: ["dragstart", ["$event"],] }, { type: HostListener, args: ["dragend", ["$event"],] }]
};
if (false) {
    /** @type {?} */
    DndHandleDirective.prototype.draggable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLWhhbmRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZHJhZy1kcm9wLyIsInNvdXJjZXMiOlsiZG5kLWhhbmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtsRSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBSzdCLFlBQWEsTUFBNEI7UUFGekMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUlmLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUlELFdBQVcsQ0FBRSxLQUFjO1FBRXpCLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7OztZQWxCRixTQUFTLFNBQUU7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7YUFDeEI7Ozs7WUFKUSxxQkFBcUI7Ozt3QkFPM0IsV0FBVyxTQUFFLGdCQUFnQjswQkFRN0IsWUFBWSxTQUFFLFdBQVcsRUFBRSxDQUFFLFFBQVEsQ0FBRSxjQUN2QyxZQUFZLFNBQUUsU0FBUyxFQUFFLENBQUUsUUFBUSxDQUFFOzs7O0lBVHRDLHVDQUNpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEbmRFdmVudCB9IGZyb20gXCIuL2RuZC11dGlsc1wiO1xuaW1wb3J0IHsgRG5kRHJhZ2dhYmxlRGlyZWN0aXZlIH0gZnJvbSBcIi4vZG5kLWRyYWdnYWJsZS5kaXJlY3RpdmVcIjtcblxuQERpcmVjdGl2ZSgge1xuICBzZWxlY3RvcjogXCJbZG5kSGFuZGxlXVwiXG59IClcbmV4cG9ydCBjbGFzcyBEbmRIYW5kbGVEaXJlY3RpdmUge1xuXG4gIEBIb3N0QmluZGluZyggXCJhdHRyLmRyYWdnYWJsZVwiIClcbiAgZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciggcGFyZW50OkRuZERyYWdnYWJsZURpcmVjdGl2ZSApIHtcblxuICAgIHBhcmVudC5yZWdpc3RlckRyYWdIYW5kbGUoIHRoaXMgKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoIFwiZHJhZ3N0YXJ0XCIsIFsgXCIkZXZlbnRcIiBdIClcbiAgQEhvc3RMaXN0ZW5lciggXCJkcmFnZW5kXCIsIFsgXCIkZXZlbnRcIiBdIClcbiAgb25EcmFnRXZlbnQoIGV2ZW50OkRuZEV2ZW50ICkge1xuXG4gICAgZXZlbnQuX2RuZFVzaW5nSGFuZGxlID0gdHJ1ZTtcbiAgfVxufVxuIl19