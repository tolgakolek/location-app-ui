/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as Chartist from 'chartist';
import * as i0 from "@angular/core";
var NgxChartistService = /** @class */ (function () {
    function NgxChartistService() {
    }
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getPrecision = /**
     * @return {?}
     */
    function () {
        return Chartist.precision;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getEscapingMap = /**
     * @return {?}
     */
    function () {
        return Chartist.escapingMap;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getPie = /**
     * @return {?}
     */
    function () {
        return Chartist.Pie;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getBar = /**
     * @return {?}
     */
    function () {
        return Chartist.Bar;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getLine = /**
     * @return {?}
     */
    function () {
        return Chartist.Line;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getCandle = /**
     * @return {?}
     */
    function () {
        return Chartist.Candle;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getFixedScaleAxis = /**
     * @return {?}
     */
    function () {
        return Chartist.FixedScaleAxis;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getAutoScaleAxis = /**
     * @return {?}
     */
    function () {
        return Chartist.AutoScaleAxis;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getStepAxis = /**
     * @return {?}
     */
    function () {
        return Chartist.StepAxis;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getSvg = /**
     * @return {?}
     */
    function () {
        return Chartist.Svg;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getInterpolation = /**
     * @return {?}
     */
    function () {
        return Chartist.Interpolation;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getNoop = /**
     * @return {?}
     */
    function () {
        return Chartist.noop;
    };
    /**
     * @return {?}
     */
    NgxChartistService.prototype.getPlugins = /**
     * @return {?}
     */
    function () {
        return Chartist.plugins;
    };
    /**
     * @param {?} n
     * @return {?}
     */
    NgxChartistService.prototype.alphaNumerate = /**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        return Chartist.alphaNumerate(n);
    };
    /**
     * @param {?} target
     * @param {...?} sources
     * @return {?}
     */
    NgxChartistService.prototype.extend = /**
     * @param {?} target
     * @param {...?} sources
     * @return {?}
     */
    function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        return Chartist.extend.apply(Chartist, tslib_1.__spread([target], sources));
    };
    /**
     * @param {?} str
     * @param {?} subStr
     * @param {?} newSubStr
     * @return {?}
     */
    NgxChartistService.prototype.replaceAll = /**
     * @param {?} str
     * @param {?} subStr
     * @param {?} newSubStr
     * @return {?}
     */
    function (str, subStr, newSubStr) {
        return Chartist.replaceAll(str, subStr, newSubStr);
    };
    /**
     * @param {?} value
     * @param {?} unit
     * @return {?}
     */
    NgxChartistService.prototype.ensureUnit = /**
     * @param {?} value
     * @param {?} unit
     * @return {?}
     */
    function (value, unit) {
        return Chartist.ensureUnit(value, unit);
    };
    /**
     * @param {?} input
     * @return {?}
     */
    NgxChartistService.prototype.quantity = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return Chartist.quantity(input);
    };
    /**
     * @param {?} query
     * @return {?}
     */
    NgxChartistService.prototype.query = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return Chartist.query(query);
    };
    /**
     * @param {?} length
     * @return {?}
     */
    NgxChartistService.prototype.times = /**
     * @param {?} length
     * @return {?}
     */
    function (length) {
        return Chartist.times(length);
    };
    /**
     * @param {?} previous
     * @param {?} current
     * @return {?}
     */
    NgxChartistService.prototype.sum = /**
     * @param {?} previous
     * @param {?} current
     * @return {?}
     */
    function (previous, current) {
        return Chartist.sum(previous, current);
    };
    /**
     * @param {?} factor
     * @return {?}
     */
    NgxChartistService.prototype.mapMultiply = /**
     * @param {?} factor
     * @return {?}
     */
    function (factor) {
        return Chartist.mapMultiply(factor);
    };
    /**
     * @param {?} addend
     * @return {?}
     */
    NgxChartistService.prototype.mapAdd = /**
     * @param {?} addend
     * @return {?}
     */
    function (addend) {
        return Chartist.mapAdd(addend);
    };
    /**
     * @param {?} arr
     * @param {?} cb
     * @return {?}
     */
    NgxChartistService.prototype.serialMap = /**
     * @param {?} arr
     * @param {?} cb
     * @return {?}
     */
    function (arr, cb) {
        return Chartist.serialMap(arr, cb);
    };
    /**
     * @param {?} value
     * @param {?=} digits
     * @return {?}
     */
    NgxChartistService.prototype.roundWithPrecision = /**
     * @param {?} value
     * @param {?=} digits
     * @return {?}
     */
    function (value, digits) {
        return Chartist.roundWithPrecision(value, digits);
    };
    /**
     * @param {?} value
     * @param {?=} dimension
     * @return {?}
     */
    NgxChartistService.prototype.getMultiValue = /**
     * @param {?} value
     * @param {?=} dimension
     * @return {?}
     */
    function (value, dimension) {
        return Chartist.getMultiValue(value, dimension);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxChartistService.prototype.serialize = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return Chartist.serialize(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxChartistService.prototype.deserialize = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return Chartist.deserialize(data);
    };
    /**
     * @param {?} container
     * @param {?} width
     * @param {?} height
     * @param {?} className
     * @return {?}
     */
    NgxChartistService.prototype.createSvg = /**
     * @param {?} container
     * @param {?} width
     * @param {?} height
     * @param {?} className
     * @return {?}
     */
    function (container, width, height, className) {
        return Chartist.createSvg(container, width, height, className);
    };
    NgxChartistService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgxChartistService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxChartistService.ngInjectableDef = i0.defineInjectable({ factory: function NgxChartistService_Factory() { return new NgxChartistService(); }, token: NgxChartistService, providedIn: "root" });
    return NgxChartistService;
}());
export { NgxChartistService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoYXJ0aXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hhcnRpc3QvIiwic291cmNlcyI6WyJsaWIvbmd4LWNoYXJ0aXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxRQUFRLE1BQU0sVUFBVSxDQUFDOztBQWFyQztJQUtFO0lBQWdCLENBQUM7Ozs7SUFFakIseUNBQVk7OztJQUFaO1FBQ0UsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCwyQ0FBYzs7O0lBQWQ7UUFDRSxPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELG1DQUFNOzs7SUFBTjtRQUNFLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsbUNBQU07OztJQUFOO1FBQ0UsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxvQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELHNDQUFTOzs7SUFBVDtRQUNFLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsOENBQWlCOzs7SUFBakI7UUFDRSxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELDZDQUFnQjs7O0lBQWhCO1FBQ0UsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELG1DQUFNOzs7SUFBTjtRQUNFLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsNkNBQWdCOzs7SUFBaEI7UUFD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LEtBQWEsRUFBRSxNQUFjLEVBQUUsU0FBaUI7UUFDekUsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O2dCQXpIRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzZCQWhCRDtDQXlKQyxBQTNJRCxJQTJJQztTQXhJWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBDaGFydGlzdCBmcm9tICdjaGFydGlzdCc7XG5cbmV4cG9ydCB0eXBlIElDaGFydGlzdEVzY2FwZU1hcCA9IENoYXJ0aXN0LklDaGFydGlzdEVzY2FwZU1hcDtcbmV4cG9ydCB0eXBlIElDaGFydGlzdFBpZUNoYXJ0ID0gQ2hhcnRpc3QuSUNoYXJ0aXN0UGllQ2hhcnQ7XG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RCYXJDaGFydCA9IENoYXJ0aXN0LklDaGFydGlzdEJhckNoYXJ0O1xuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0TGluZUNoYXJ0ID0gQ2hhcnRpc3QuSUNoYXJ0aXN0TGluZUNoYXJ0O1xuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0Q2FuZGxlQ2hhcnQgPSBDaGFydGlzdC5JQ2hhcnRpc3RDYW5kbGVDaGFydDtcbmV4cG9ydCB0eXBlIElGaXhlZFNjYWxlQXhpc1N0YXRpYyA9IENoYXJ0aXN0LklGaXhlZFNjYWxlQXhpc1N0YXRpYztcbmV4cG9ydCB0eXBlIElBdXRvU2NhbGVBeGlzU3RhdGljID0gQ2hhcnRpc3QuSUF1dG9TY2FsZUF4aXNTdGF0aWM7XG5leHBvcnQgdHlwZSBJU3RlcEF4aXNTdGF0aWMgPSBDaGFydGlzdC5JU3RlcEF4aXNTdGF0aWM7XG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RTdmdTdGF0aWMgPSBDaGFydGlzdC5DaGFydGlzdFN2Z1N0YXRpYztcbmV4cG9ydCB0eXBlIElDaGFydGlzdEludGVycG9sYXRpb25TdGF0aWMgPSBDaGFydGlzdC5DaGFydGlzdEludGVycG9sYXRpb25TdGF0aWM7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neENoYXJ0aXN0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRQcmVjaXNpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QucHJlY2lzaW9uO1xuICB9XG5cbiAgZ2V0RXNjYXBpbmdNYXAoKTogSUNoYXJ0aXN0RXNjYXBlTWFwIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuZXNjYXBpbmdNYXA7XG4gIH1cblxuICBnZXRQaWUoKTogSUNoYXJ0aXN0UGllQ2hhcnQge1xuICAgIHJldHVybiBDaGFydGlzdC5QaWU7XG4gIH1cblxuICBnZXRCYXIoKTogSUNoYXJ0aXN0QmFyQ2hhcnQge1xuICAgIHJldHVybiBDaGFydGlzdC5CYXI7XG4gIH1cblxuICBnZXRMaW5lKCk6IElDaGFydGlzdExpbmVDaGFydCB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LkxpbmU7XG4gIH1cblxuICBnZXRDYW5kbGUoKTogSUNoYXJ0aXN0Q2FuZGxlQ2hhcnQge1xuICAgIHJldHVybiBDaGFydGlzdC5DYW5kbGU7XG4gIH1cblxuICBnZXRGaXhlZFNjYWxlQXhpcygpOiBJRml4ZWRTY2FsZUF4aXNTdGF0aWMge1xuICAgIHJldHVybiBDaGFydGlzdC5GaXhlZFNjYWxlQXhpcztcbiAgfVxuXG4gIGdldEF1dG9TY2FsZUF4aXMoKTogSUF1dG9TY2FsZUF4aXNTdGF0aWMge1xuICAgIHJldHVybiBDaGFydGlzdC5BdXRvU2NhbGVBeGlzO1xuICB9XG5cbiAgZ2V0U3RlcEF4aXMoKTogSVN0ZXBBeGlzU3RhdGljIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuU3RlcEF4aXM7XG4gIH1cblxuICBnZXRTdmcoKTogSUNoYXJ0aXN0U3ZnU3RhdGljIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuU3ZnO1xuICB9XG5cbiAgZ2V0SW50ZXJwb2xhdGlvbigpOiBJQ2hhcnRpc3RJbnRlcnBvbGF0aW9uU3RhdGljIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIGdldE5vb3AoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiBDaGFydGlzdC5ub29wO1xuICB9XG5cbiAgZ2V0UGx1Z2lucygpOiBhbnkge1xuICAgIHJldHVybiBDaGFydGlzdC5wbHVnaW5zO1xuICB9XG5cbiAgYWxwaGFOdW1lcmF0ZShuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBDaGFydGlzdC5hbHBoYU51bWVyYXRlKG4pO1xuICB9XG5cbiAgZXh0ZW5kKHRhcmdldDogT2JqZWN0LCAuLi5zb3VyY2VzOiBPYmplY3RbXSk6IE9iamVjdCB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LmV4dGVuZCh0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgcmVwbGFjZUFsbChzdHI6IHN0cmluZywgc3ViU3RyOiBzdHJpbmcsIG5ld1N1YlN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QucmVwbGFjZUFsbChzdHIsIHN1YlN0ciwgbmV3U3ViU3RyKTtcbiAgfVxuXG4gIGVuc3VyZVVuaXQodmFsdWU6IG51bWJlciwgdW5pdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuZW5zdXJlVW5pdCh2YWx1ZSwgdW5pdCk7XG4gIH1cblxuICBxdWFudGl0eShpbnB1dDogc3RyaW5nIHwgbnVtYmVyKTogT2JqZWN0IHtcbiAgICByZXR1cm4gQ2hhcnRpc3QucXVhbnRpdHkoaW5wdXQpO1xuICB9XG5cbiAgcXVlcnkocXVlcnk6IE5vZGUgfCBzdHJpbmcpOiBOb2RlIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QucXVlcnkocXVlcnkpO1xuICB9XG5cbiAgdGltZXMobGVuZ3RoOiBudW1iZXIpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gQ2hhcnRpc3QudGltZXMobGVuZ3RoKTtcbiAgfVxuXG4gIHN1bShwcmV2aW91czogbnVtYmVyLCBjdXJyZW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBDaGFydGlzdC5zdW0ocHJldmlvdXMsIGN1cnJlbnQpO1xuICB9XG5cbiAgbWFwTXVsdGlwbHkoZmFjdG9yOiBudW1iZXIpOiAobnVtOiBudW1iZXIpID0+IG51bWJlciB7XG4gICAgcmV0dXJuIENoYXJ0aXN0Lm1hcE11bHRpcGx5KGZhY3Rvcik7XG4gIH1cblxuICBtYXBBZGQoYWRkZW5kOiBudW1iZXIpOiAobnVtOiBudW1iZXIpID0+IG51bWJlciB7XG4gICAgcmV0dXJuIENoYXJ0aXN0Lm1hcEFkZChhZGRlbmQpO1xuICB9XG5cbiAgc2VyaWFsTWFwKGFycjogQXJyYXk8YW55PiwgY2I6IEZ1bmN0aW9uKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LnNlcmlhbE1hcChhcnIsIGNiKTtcbiAgfVxuXG4gIHJvdW5kV2l0aFByZWNpc2lvbih2YWx1ZTogbnVtYmVyLCBkaWdpdHM/OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBDaGFydGlzdC5yb3VuZFdpdGhQcmVjaXNpb24odmFsdWUsIGRpZ2l0cyk7XG4gIH1cblxuICBnZXRNdWx0aVZhbHVlKHZhbHVlOiBhbnksIGRpbWVuc2lvbj86IGFueSk6IG51bWJlciB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LmdldE11bHRpVmFsdWUodmFsdWUsIGRpbWVuc2lvbik7XG4gIH1cblxuICBzZXJpYWxpemUoZGF0YTogT2JqZWN0IHwgc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQ2hhcnRpc3Quc2VyaWFsaXplKGRhdGEpO1xuICB9XG5cbiAgZGVzZXJpYWxpemUoZGF0YTogc3RyaW5nKTogT2JqZWN0IHwgc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuZGVzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICBjcmVhdGVTdmcoY29udGFpbmVyOiBOb2RlLCB3aWR0aDogc3RyaW5nLCBoZWlnaHQ6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBPYmplY3Qge1xuICAgIHJldHVybiBDaGFydGlzdC5jcmVhdGVTdmcoY29udGFpbmVyLCB3aWR0aCwgaGVpZ2h0LCBjbGFzc05hbWUpO1xuICB9XG5cbiAgLy8gVGhlc2UgbWV0aG9kcyBhcmUgZGVwcmVjYXRlZFxuICAvKlxuICBwdWJsaWMgZ2VuZXJhdGVTdmcobmFtZTogSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGF0dHJpYnV0ZXM6IE9iamVjdCwgY2xhc3NOYW1lPzogc3RyaW5nLCBwYXJlbnQ/OiBPYmplY3QsIGluc2VydEZpcnN0PzogYm9vbGVhbik6IENoYXJ0U3ZnIHtcbiAgICByZXR1cm4gbmV3IENoYXJ0aXN0LlN2ZyhuYW1lLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHBhcmVudCwgaW5zZXJ0Rmlyc3QpO1xuICB9XG4gIHB1YmxpYyBnZXRTdmdFYXNpbmcoZWFzaW5nTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LlN2Zy5FYXNpbmdbZWFzaW5nTmFtZV07XG4gIH1cbiAgcHVibGljIGdldEludGVycG9sYXRpb25GdW5jdGlvbihpbnRlcnBvbGF0aW9uVHlwZTogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uW2ludGVycG9sYXRpb25UeXBlXTtcbiAgfVxuICBwdWJsaWMgZ2V0Q2hhcnRpc3RWYXIobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gQ2hhcnRpc3RbJ25hbWUnXTtcbiAgfVxuICAqL1xuXG59XG4iXX0=