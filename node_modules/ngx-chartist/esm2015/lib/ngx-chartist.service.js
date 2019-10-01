/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as Chartist from 'chartist';
import * as i0 from "@angular/core";
export class NgxChartistService {
    constructor() { }
    /**
     * @return {?}
     */
    getPrecision() {
        return Chartist.precision;
    }
    /**
     * @return {?}
     */
    getEscapingMap() {
        return Chartist.escapingMap;
    }
    /**
     * @return {?}
     */
    getPie() {
        return Chartist.Pie;
    }
    /**
     * @return {?}
     */
    getBar() {
        return Chartist.Bar;
    }
    /**
     * @return {?}
     */
    getLine() {
        return Chartist.Line;
    }
    /**
     * @return {?}
     */
    getCandle() {
        return Chartist.Candle;
    }
    /**
     * @return {?}
     */
    getFixedScaleAxis() {
        return Chartist.FixedScaleAxis;
    }
    /**
     * @return {?}
     */
    getAutoScaleAxis() {
        return Chartist.AutoScaleAxis;
    }
    /**
     * @return {?}
     */
    getStepAxis() {
        return Chartist.StepAxis;
    }
    /**
     * @return {?}
     */
    getSvg() {
        return Chartist.Svg;
    }
    /**
     * @return {?}
     */
    getInterpolation() {
        return Chartist.Interpolation;
    }
    /**
     * @return {?}
     */
    getNoop() {
        return Chartist.noop;
    }
    /**
     * @return {?}
     */
    getPlugins() {
        return Chartist.plugins;
    }
    /**
     * @param {?} n
     * @return {?}
     */
    alphaNumerate(n) {
        return Chartist.alphaNumerate(n);
    }
    /**
     * @param {?} target
     * @param {...?} sources
     * @return {?}
     */
    extend(target, ...sources) {
        return Chartist.extend(target, ...sources);
    }
    /**
     * @param {?} str
     * @param {?} subStr
     * @param {?} newSubStr
     * @return {?}
     */
    replaceAll(str, subStr, newSubStr) {
        return Chartist.replaceAll(str, subStr, newSubStr);
    }
    /**
     * @param {?} value
     * @param {?} unit
     * @return {?}
     */
    ensureUnit(value, unit) {
        return Chartist.ensureUnit(value, unit);
    }
    /**
     * @param {?} input
     * @return {?}
     */
    quantity(input) {
        return Chartist.quantity(input);
    }
    /**
     * @param {?} query
     * @return {?}
     */
    query(query) {
        return Chartist.query(query);
    }
    /**
     * @param {?} length
     * @return {?}
     */
    times(length) {
        return Chartist.times(length);
    }
    /**
     * @param {?} previous
     * @param {?} current
     * @return {?}
     */
    sum(previous, current) {
        return Chartist.sum(previous, current);
    }
    /**
     * @param {?} factor
     * @return {?}
     */
    mapMultiply(factor) {
        return Chartist.mapMultiply(factor);
    }
    /**
     * @param {?} addend
     * @return {?}
     */
    mapAdd(addend) {
        return Chartist.mapAdd(addend);
    }
    /**
     * @param {?} arr
     * @param {?} cb
     * @return {?}
     */
    serialMap(arr, cb) {
        return Chartist.serialMap(arr, cb);
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @return {?}
     */
    roundWithPrecision(value, digits) {
        return Chartist.roundWithPrecision(value, digits);
    }
    /**
     * @param {?} value
     * @param {?=} dimension
     * @return {?}
     */
    getMultiValue(value, dimension) {
        return Chartist.getMultiValue(value, dimension);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    serialize(data) {
        return Chartist.serialize(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    deserialize(data) {
        return Chartist.deserialize(data);
    }
    /**
     * @param {?} container
     * @param {?} width
     * @param {?} height
     * @param {?} className
     * @return {?}
     */
    createSvg(container, width, height, className) {
        return Chartist.createSvg(container, width, height, className);
    }
}
NgxChartistService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgxChartistService.ctorParameters = () => [];
/** @nocollapse */ NgxChartistService.ngInjectableDef = i0.defineInjectable({ factory: function NgxChartistService_Factory() { return new NgxChartistService(); }, token: NgxChartistService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoYXJ0aXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hhcnRpc3QvIiwic291cmNlcyI6WyJsaWIvbmd4LWNoYXJ0aXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7O0FBZ0JyQyxNQUFNO0lBRUosZ0JBQWdCLENBQUM7Ozs7SUFFakIsWUFBWTtRQUNWLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLE9BQU8sUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxDQUFTO1FBQ3JCLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBYyxFQUFFLEdBQUcsT0FBaUI7UUFDekMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBVyxFQUFFLE1BQWMsRUFBRSxTQUFpQjtRQUN2RCxPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDcEMsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFzQjtRQUM3QixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBb0I7UUFDeEIsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLE1BQWM7UUFDbEIsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxRQUFnQixFQUFFLE9BQWU7UUFDbkMsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFjO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFjO1FBQ25CLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBZSxFQUFFLEVBQVk7UUFDckMsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxLQUFhLEVBQUUsTUFBZTtRQUMvQyxPQUFPLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQVUsRUFBRSxTQUFlO1FBQ3ZDLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBOEI7UUFDdEMsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQVk7UUFDdEIsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7Ozs7O0lBRUQsU0FBUyxDQUFDLFNBQWUsRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFFLFNBQWlCO1FBQ3pFLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7WUF6SEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgQ2hhcnRpc3QgZnJvbSAnY2hhcnRpc3QnO1xuXG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RFc2NhcGVNYXAgPSBDaGFydGlzdC5JQ2hhcnRpc3RFc2NhcGVNYXA7XG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RQaWVDaGFydCA9IENoYXJ0aXN0LklDaGFydGlzdFBpZUNoYXJ0O1xuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0QmFyQ2hhcnQgPSBDaGFydGlzdC5JQ2hhcnRpc3RCYXJDaGFydDtcbmV4cG9ydCB0eXBlIElDaGFydGlzdExpbmVDaGFydCA9IENoYXJ0aXN0LklDaGFydGlzdExpbmVDaGFydDtcbmV4cG9ydCB0eXBlIElDaGFydGlzdENhbmRsZUNoYXJ0ID0gQ2hhcnRpc3QuSUNoYXJ0aXN0Q2FuZGxlQ2hhcnQ7XG5leHBvcnQgdHlwZSBJRml4ZWRTY2FsZUF4aXNTdGF0aWMgPSBDaGFydGlzdC5JRml4ZWRTY2FsZUF4aXNTdGF0aWM7XG5leHBvcnQgdHlwZSBJQXV0b1NjYWxlQXhpc1N0YXRpYyA9IENoYXJ0aXN0LklBdXRvU2NhbGVBeGlzU3RhdGljO1xuZXhwb3J0IHR5cGUgSVN0ZXBBeGlzU3RhdGljID0gQ2hhcnRpc3QuSVN0ZXBBeGlzU3RhdGljO1xuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0U3ZnU3RhdGljID0gQ2hhcnRpc3QuQ2hhcnRpc3RTdmdTdGF0aWM7XG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RJbnRlcnBvbGF0aW9uU3RhdGljID0gQ2hhcnRpc3QuQ2hhcnRpc3RJbnRlcnBvbGF0aW9uU3RhdGljO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hDaGFydGlzdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0UHJlY2lzaW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LnByZWNpc2lvbjtcbiAgfVxuXG4gIGdldEVzY2FwaW5nTWFwKCk6IElDaGFydGlzdEVzY2FwZU1hcCB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LmVzY2FwaW5nTWFwO1xuICB9XG5cbiAgZ2V0UGllKCk6IElDaGFydGlzdFBpZUNoYXJ0IHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuUGllO1xuICB9XG5cbiAgZ2V0QmFyKCk6IElDaGFydGlzdEJhckNoYXJ0IHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuQmFyO1xuICB9XG5cbiAgZ2V0TGluZSgpOiBJQ2hhcnRpc3RMaW5lQ2hhcnQge1xuICAgIHJldHVybiBDaGFydGlzdC5MaW5lO1xuICB9XG5cbiAgZ2V0Q2FuZGxlKCk6IElDaGFydGlzdENhbmRsZUNoYXJ0IHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuQ2FuZGxlO1xuICB9XG5cbiAgZ2V0Rml4ZWRTY2FsZUF4aXMoKTogSUZpeGVkU2NhbGVBeGlzU3RhdGljIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuRml4ZWRTY2FsZUF4aXM7XG4gIH1cblxuICBnZXRBdXRvU2NhbGVBeGlzKCk6IElBdXRvU2NhbGVBeGlzU3RhdGljIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuQXV0b1NjYWxlQXhpcztcbiAgfVxuXG4gIGdldFN0ZXBBeGlzKCk6IElTdGVwQXhpc1N0YXRpYyB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LlN0ZXBBeGlzO1xuICB9XG5cbiAgZ2V0U3ZnKCk6IElDaGFydGlzdFN2Z1N0YXRpYyB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LlN2ZztcbiAgfVxuXG4gIGdldEludGVycG9sYXRpb24oKTogSUNoYXJ0aXN0SW50ZXJwb2xhdGlvblN0YXRpYyB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LkludGVycG9sYXRpb247XG4gIH1cblxuICBnZXROb29wKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gQ2hhcnRpc3Qubm9vcDtcbiAgfVxuXG4gIGdldFBsdWdpbnMoKTogYW55IHtcbiAgICByZXR1cm4gQ2hhcnRpc3QucGx1Z2lucztcbiAgfVxuXG4gIGFscGhhTnVtZXJhdGUobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuYWxwaGFOdW1lcmF0ZShuKTtcbiAgfVxuXG4gIGV4dGVuZCh0YXJnZXQ6IE9iamVjdCwgLi4uc291cmNlczogT2JqZWN0W10pOiBPYmplY3Qge1xuICAgIHJldHVybiBDaGFydGlzdC5leHRlbmQodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIHJlcGxhY2VBbGwoc3RyOiBzdHJpbmcsIHN1YlN0cjogc3RyaW5nLCBuZXdTdWJTdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LnJlcGxhY2VBbGwoc3RyLCBzdWJTdHIsIG5ld1N1YlN0cik7XG4gIH1cblxuICBlbnN1cmVVbml0KHZhbHVlOiBudW1iZXIsIHVuaXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LmVuc3VyZVVuaXQodmFsdWUsIHVuaXQpO1xuICB9XG5cbiAgcXVhbnRpdHkoaW5wdXQ6IHN0cmluZyB8IG51bWJlcik6IE9iamVjdCB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LnF1YW50aXR5KGlucHV0KTtcbiAgfVxuXG4gIHF1ZXJ5KHF1ZXJ5OiBOb2RlIHwgc3RyaW5nKTogTm9kZSB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LnF1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIHRpbWVzKGxlbmd0aDogbnVtYmVyKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LnRpbWVzKGxlbmd0aCk7XG4gIH1cblxuICBzdW0ocHJldmlvdXM6IG51bWJlciwgY3VycmVudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gQ2hhcnRpc3Quc3VtKHByZXZpb3VzLCBjdXJyZW50KTtcbiAgfVxuXG4gIG1hcE11bHRpcGx5KGZhY3RvcjogbnVtYmVyKTogKG51bTogbnVtYmVyKSA9PiBudW1iZXIge1xuICAgIHJldHVybiBDaGFydGlzdC5tYXBNdWx0aXBseShmYWN0b3IpO1xuICB9XG5cbiAgbWFwQWRkKGFkZGVuZDogbnVtYmVyKTogKG51bTogbnVtYmVyKSA9PiBudW1iZXIge1xuICAgIHJldHVybiBDaGFydGlzdC5tYXBBZGQoYWRkZW5kKTtcbiAgfVxuXG4gIHNlcmlhbE1hcChhcnI6IEFycmF5PGFueT4sIGNiOiBGdW5jdGlvbik6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiBDaGFydGlzdC5zZXJpYWxNYXAoYXJyLCBjYik7XG4gIH1cblxuICByb3VuZFdpdGhQcmVjaXNpb24odmFsdWU6IG51bWJlciwgZGlnaXRzPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gQ2hhcnRpc3Qucm91bmRXaXRoUHJlY2lzaW9uKHZhbHVlLCBkaWdpdHMpO1xuICB9XG5cbiAgZ2V0TXVsdGlWYWx1ZSh2YWx1ZTogYW55LCBkaW1lbnNpb24/OiBhbnkpOiBudW1iZXIge1xuICAgIHJldHVybiBDaGFydGlzdC5nZXRNdWx0aVZhbHVlKHZhbHVlLCBkaW1lbnNpb24pO1xuICB9XG5cbiAgc2VyaWFsaXplKGRhdGE6IE9iamVjdCB8IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LnNlcmlhbGl6ZShkYXRhKTtcbiAgfVxuXG4gIGRlc2VyaWFsaXplKGRhdGE6IHN0cmluZyk6IE9iamVjdCB8IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LmRlc2VyaWFsaXplKGRhdGEpO1xuICB9XG5cbiAgY3JlYXRlU3ZnKGNvbnRhaW5lcjogTm9kZSwgd2lkdGg6IHN0cmluZywgaGVpZ2h0OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogT2JqZWN0IHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuY3JlYXRlU3ZnKGNvbnRhaW5lciwgd2lkdGgsIGhlaWdodCwgY2xhc3NOYW1lKTtcbiAgfVxuXG4gIC8vIFRoZXNlIG1ldGhvZHMgYXJlIGRlcHJlY2F0ZWRcbiAgLypcbiAgcHVibGljIGdlbmVyYXRlU3ZnKG5hbWU6IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBhdHRyaWJ1dGVzOiBPYmplY3QsIGNsYXNzTmFtZT86IHN0cmluZywgcGFyZW50PzogT2JqZWN0LCBpbnNlcnRGaXJzdD86IGJvb2xlYW4pOiBDaGFydFN2ZyB7XG4gICAgcmV0dXJuIG5ldyBDaGFydGlzdC5TdmcobmFtZSwgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBwYXJlbnQsIGluc2VydEZpcnN0KTtcbiAgfVxuICBwdWJsaWMgZ2V0U3ZnRWFzaW5nKGVhc2luZ05hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBDaGFydGlzdC5TdmcuRWFzaW5nW2Vhc2luZ05hbWVdO1xuICB9XG4gIHB1YmxpYyBnZXRJbnRlcnBvbGF0aW9uRnVuY3Rpb24oaW50ZXJwb2xhdGlvblR5cGU6IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbltpbnRlcnBvbGF0aW9uVHlwZV07XG4gIH1cbiAgcHVibGljIGdldENoYXJ0aXN0VmFyKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIENoYXJ0aXN0WyduYW1lJ107XG4gIH1cbiAgKi9cblxufVxuIl19