/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, HostListener } from "@angular/core";
import { DndDraggableDirective } from "./dnd-draggable.directive";
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
export { DndHandleDirective };
if (false) {
    /** @type {?} */
    DndHandleDirective.prototype.draggable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLWhhbmRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZHJhZy1kcm9wLyIsInNvdXJjZXMiOlsiZG5kLWhhbmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQVFFLDRCQUFhLE1BQTRCO1FBRnpDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFJZixNQUFNLENBQUMsa0JBQWtCLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFJRCx3Q0FBVzs7OztJQUZYLFVBRWEsS0FBYztRQUV6QixLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDOztnQkFsQkYsU0FBUyxTQUFFO29CQUNWLFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjs7OztnQkFKUSxxQkFBcUI7Ozs0QkFPM0IsV0FBVyxTQUFFLGdCQUFnQjs4QkFRN0IsWUFBWSxTQUFFLFdBQVcsRUFBRSxDQUFFLFFBQVEsQ0FBRSxjQUN2QyxZQUFZLFNBQUUsU0FBUyxFQUFFLENBQUUsUUFBUSxDQUFFOztJQUt4Qyx5QkFBQztDQUFBLEFBbkJELElBbUJDO1NBaEJZLGtCQUFrQjs7O0lBRTdCLHVDQUNpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEbmRFdmVudCB9IGZyb20gXCIuL2RuZC11dGlsc1wiO1xuaW1wb3J0IHsgRG5kRHJhZ2dhYmxlRGlyZWN0aXZlIH0gZnJvbSBcIi4vZG5kLWRyYWdnYWJsZS5kaXJlY3RpdmVcIjtcblxuQERpcmVjdGl2ZSgge1xuICBzZWxlY3RvcjogXCJbZG5kSGFuZGxlXVwiXG59IClcbmV4cG9ydCBjbGFzcyBEbmRIYW5kbGVEaXJlY3RpdmUge1xuXG4gIEBIb3N0QmluZGluZyggXCJhdHRyLmRyYWdnYWJsZVwiIClcbiAgZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciggcGFyZW50OkRuZERyYWdnYWJsZURpcmVjdGl2ZSApIHtcblxuICAgIHBhcmVudC5yZWdpc3RlckRyYWdIYW5kbGUoIHRoaXMgKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoIFwiZHJhZ3N0YXJ0XCIsIFsgXCIkZXZlbnRcIiBdIClcbiAgQEhvc3RMaXN0ZW5lciggXCJkcmFnZW5kXCIsIFsgXCIkZXZlbnRcIiBdIClcbiAgb25EcmFnRXZlbnQoIGV2ZW50OkRuZEV2ZW50ICkge1xuXG4gICAgZXZlbnQuX2RuZFVzaW5nSGFuZGxlID0gdHJ1ZTtcbiAgfVxufVxuIl19