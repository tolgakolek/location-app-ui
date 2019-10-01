var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input } from '@angular/core';
/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 *
 * @export
 * @class AgmPolylineIcon
 */
var AgmPolylineIcon = /** @class */ (function () {
    function AgmPolylineIcon() {
    }
    AgmPolylineIcon.prototype.ngOnInit = function () {
        if (this.path == null) {
            throw new Error('Icon Sequence path is required');
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgmPolylineIcon.prototype, "fixedRotation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "offset", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "repeat", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "anchorX", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "anchorY", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "fillColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "fillOpacity", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "path", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "rotation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "scale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "strokeColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "strokeOpacity", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "strokeWeight", void 0);
    AgmPolylineIcon = __decorate([
        Directive({ selector: 'agm-polyline agm-icon-sequence' })
    ], AgmPolylineIcon);
    return AgmPolylineIcon;
}());
export { AgmPolylineIcon };
//# sourceMappingURL=polyline-icon.js.map