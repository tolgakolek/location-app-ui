(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('chartist'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-chartist', ['exports', '@angular/core', 'chartist', '@angular/common'], factory) :
    (factory((global['ngx-chartist'] = {}),global.ng.core,null,global.ng.common));
}(this, (function (exports,i0,Chartist,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
                return Chartist.extend.apply(Chartist, __spread([target], sources));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        NgxChartistService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxChartistService.ngInjectableDef = i0.defineInjectable({ factory: function NgxChartistService_Factory() { return new NgxChartistService(); }, token: NgxChartistService, providedIn: "root" });
        return NgxChartistService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxChartistComponent = /** @class */ (function () {
        function NgxChartistComponent(element) {
            this.element = element.nativeElement;
        }
        /**
         * @return {?}
         */
        NgxChartistComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.type || !this.data) {
                    Promise.reject('Expected at least type and data.');
                }
                return this.renderChart().then(function (chart) {
                    if (_this.events !== undefined) {
                        _this.bindEvents(chart);
                    }
                    return chart;
                });
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxChartistComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.element) {
                    this.update(changes);
                }
            };
        /**
         * @return {?}
         */
        NgxChartistComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.chart) {
                    this.chart.detach();
                }
            };
        /**
         * @return {?}
         */
        NgxChartistComponent.prototype.renderChart = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var promises = [
                    this.type,
                    this.element,
                    this.data,
                    this.options,
                    this.responsiveOptions
                ];
                if (this.lineSmooth) {
                    switch (this.lineSmooth['interpolation']) {
                        case 'cardinal': {
                            this.options['lineSmooth'] = Chartist.Interpolation.cardinal(this.lineSmooth['data']);
                            break;
                        }
                        case 'simple': {
                            this.options['lineSmooth'] = Chartist.Interpolation.simple(this.lineSmooth['data']);
                            break;
                        }
                        case 'none': {
                            this.options['lineSmooth'] = Chartist.Interpolation.none(this.lineSmooth['data']);
                            break;
                        }
                        case 'step': {
                            this.options['lineSmooth'] = Chartist.Interpolation.step(this.lineSmooth['data']);
                            break;
                        }
                    }
                }
                return Promise.all(promises).then(function (values) {
                    var _a = __read(values), type = _a[0], args = _a.slice(1);
                    if (!(type in Chartist)) {
                        throw new Error(type + " is not a valid chart type");
                    }
                    _this.chart = (( /** @type {?} */(Chartist)))[type].apply((( /** @type {?} */(Chartist))), __spread(args));
                    return _this.chart;
                });
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxChartistComponent.prototype.update = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this.chart || 'type' in changes) {
                    this.renderChart();
                }
                else {
                    if (changes.data) {
                        this.data = changes.data.currentValue;
                    }
                    if (changes.options) {
                        this.options = changes.options.currentValue;
                    }
                    (( /** @type {?} */(this.chart))).update(this.data, this.options);
                }
            };
        /**
         * @param {?} chart
         * @return {?}
         */
        NgxChartistComponent.prototype.bindEvents = /**
         * @param {?} chart
         * @return {?}
         */
            function (chart) {
                var e_1, _a;
                try {
                    for (var _b = __values(Object.keys(this.events)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var event_1 = _c.value;
                        chart.on(event_1, this.events[event_1]);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        NgxChartistComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-ngx-chartist',
                        template: '',
                        styles: [":host:not(.without-styles) ::ng-deep .ct-label{fill:rgba(0,0,0,.4);color:rgba(0,0,0,.4);font-size:.75rem;line-height:1}:host:not(.without-styles) ::ng-deep .ct-chart-bar .ct-label,:host:not(.without-styles) ::ng-deep .ct-chart-line .ct-label{display:block;display:flex}:host:not(.without-styles) ::ng-deep .ct-chart-donut .ct-label,:host:not(.without-styles) ::ng-deep .ct-chart-pie .ct-label{dominant-baseline:central}:host:not(.without-styles) ::ng-deep .ct-label.ct-horizontal.ct-start{align-items:flex-end;justify-content:flex-start;text-align:left;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-label.ct-horizontal.ct-end{align-items:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-label.ct-vertical.ct-start{align-items:flex-end;justify-content:flex-end;text-align:right;text-anchor:end}:host:not(.without-styles) ::ng-deep .ct-label.ct-vertical.ct-end{align-items:flex-end;justify-content:flex-start;text-align:left;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-chart-bar .ct-label.ct-horizontal.ct-start{align-items:flex-end;justify-content:center;text-align:center;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-chart-bar .ct-label.ct-horizontal.ct-end{align-items:flex-start;justify-content:center;text-align:center;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start{align-items:flex-end;justify-content:flex-start;text-align:left;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end{align-items:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start{align-items:center;justify-content:flex-end;text-align:right;text-anchor:end}:host:not(.without-styles) ::ng-deep .ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end{align-items:center;justify-content:flex-start;text-align:left;text-anchor:end}:host:not(.without-styles) ::ng-deep .ct-grid{stroke:rgba(0,0,0,.2);stroke-width:1px;stroke-dasharray:2px}:host:not(.without-styles) ::ng-deep .ct-grid-background{fill:none}:host:not(.without-styles) ::ng-deep .ct-point{stroke-width:10px;stroke-linecap:round}:host:not(.without-styles) ::ng-deep .ct-line{fill:none;stroke-width:4px}:host:not(.without-styles) ::ng-deep .ct-area{stroke:none;fill-opacity:.1}:host:not(.without-styles) ::ng-deep .ct-bar{fill:none;stroke-width:10px}:host:not(.without-styles) ::ng-deep .ct-slice-donut{fill:none;stroke-width:60px}:host:not(.without-styles) ::ng-deep .ct-series-a .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-a .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-a .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-a .ct-slice-donut{stroke:#d70206}:host:not(.without-styles) ::ng-deep .ct-series-a .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-a .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-a .ct-slice-pie{fill:#d70206}:host:not(.without-styles) ::ng-deep .ct-series-b .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-b .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-b .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-b .ct-slice-donut{stroke:#f05b4f}:host:not(.without-styles) ::ng-deep .ct-series-b .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-b .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-b .ct-slice-pie{fill:#f05b4f}:host:not(.without-styles) ::ng-deep .ct-series-c .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-c .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-c .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-c .ct-slice-donut{stroke:#f4c63d}:host:not(.without-styles) ::ng-deep .ct-series-c .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-c .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-c .ct-slice-pie{fill:#f4c63d}:host:not(.without-styles) ::ng-deep .ct-series-d .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-d .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-d .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-d .ct-slice-donut{stroke:#d17905}:host:not(.without-styles) ::ng-deep .ct-series-d .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-d .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-d .ct-slice-pie{fill:#d17905}:host:not(.without-styles) ::ng-deep .ct-series-e .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-e .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-e .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-e .ct-slice-donut{stroke:#453d3f}:host:not(.without-styles) ::ng-deep .ct-series-e .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-e .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-e .ct-slice-pie{fill:#453d3f}:host:not(.without-styles) ::ng-deep .ct-series-f .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-f .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-f .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-f .ct-slice-donut{stroke:#59922b}:host:not(.without-styles) ::ng-deep .ct-series-f .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-f .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-f .ct-slice-pie{fill:#59922b}:host:not(.without-styles) ::ng-deep .ct-series-g .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-g .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-g .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-g .ct-slice-donut{stroke:#0544d3}:host:not(.without-styles) ::ng-deep .ct-series-g .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-g .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-g .ct-slice-pie{fill:#0544d3}:host:not(.without-styles) ::ng-deep .ct-series-h .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-h .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-h .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-h .ct-slice-donut{stroke:#6b0392}:host:not(.without-styles) ::ng-deep .ct-series-h .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-h .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-h .ct-slice-pie{fill:#6b0392}:host:not(.without-styles) ::ng-deep .ct-series-i .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-i .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-i .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-i .ct-slice-donut{stroke:#f05b4f}:host:not(.without-styles) ::ng-deep .ct-series-i .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-i .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-i .ct-slice-pie{fill:#f05b4f}:host:not(.without-styles) ::ng-deep .ct-series-j .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-j .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-j .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-j .ct-slice-donut{stroke:#dda458}:host:not(.without-styles) ::ng-deep .ct-series-j .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-j .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-j .ct-slice-pie{fill:#dda458}:host:not(.without-styles) ::ng-deep .ct-series-k .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-k .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-k .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-k .ct-slice-donut{stroke:#eacf7d}:host:not(.without-styles) ::ng-deep .ct-series-k .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-k .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-k .ct-slice-pie{fill:#eacf7d}:host:not(.without-styles) ::ng-deep .ct-series-l .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-l .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-l .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-l .ct-slice-donut{stroke:#86797d}:host:not(.without-styles) ::ng-deep .ct-series-l .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-l .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-l .ct-slice-pie{fill:#86797d}:host:not(.without-styles) ::ng-deep .ct-series-m .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-m .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-m .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-m .ct-slice-donut{stroke:#b2c326}:host:not(.without-styles) ::ng-deep .ct-series-m .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-m .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-m .ct-slice-pie{fill:#b2c326}:host:not(.without-styles) ::ng-deep .ct-series-n .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-n .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-n .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-n .ct-slice-donut{stroke:#6188e2}:host:not(.without-styles) ::ng-deep .ct-series-n .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-n .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-n .ct-slice-pie{fill:#6188e2}:host:not(.without-styles) ::ng-deep .ct-series-o .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-o .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-o .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-o .ct-slice-donut{stroke:#a748ca}:host:not(.without-styles) ::ng-deep .ct-series-o .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-o .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-o .ct-slice-pie{fill:#a748ca}:host:not(.without-styles) ::ng-deep .ct-square{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-square:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:100%}:host:not(.without-styles) ::ng-deep .ct-square:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-square>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-minor-second{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-minor-second:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:93.75%}:host:not(.without-styles) ::ng-deep .ct-minor-second:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-minor-second>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-second{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-second:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:88.88889%}:host:not(.without-styles) ::ng-deep .ct-major-second:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-second>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-minor-third{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-minor-third:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:83.33333%}:host:not(.without-styles) ::ng-deep .ct-minor-third:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-minor-third>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-third{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-third:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:80%}:host:not(.without-styles) ::ng-deep .ct-major-third:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-third>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-perfect-fourth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-perfect-fourth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:75%}:host:not(.without-styles) ::ng-deep .ct-perfect-fourth:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-perfect-fourth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-perfect-fifth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-perfect-fifth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:66.66667%}:host:not(.without-styles) ::ng-deep .ct-perfect-fifth:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-perfect-fifth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-minor-sixth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-minor-sixth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:62.5%}:host:not(.without-styles) ::ng-deep .ct-minor-sixth:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-minor-sixth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-golden-section{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-golden-section:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:61.8047%}:host:not(.without-styles) ::ng-deep .ct-golden-section:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-golden-section>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-sixth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-sixth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:60%}:host:not(.without-styles) ::ng-deep .ct-major-sixth:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-sixth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-minor-seventh{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-minor-seventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:56.25%}:host:not(.without-styles) ::ng-deep .ct-minor-seventh:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-minor-seventh>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-seventh{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-seventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:53.33333%}:host:not(.without-styles) ::ng-deep .ct-major-seventh:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-seventh>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-octave{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-octave:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:50%}:host:not(.without-styles) ::ng-deep .ct-octave:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-octave>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-tenth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-tenth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:40%}:host:not(.without-styles) ::ng-deep .ct-major-tenth:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-tenth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-eleventh{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-eleventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:37.5%}:host:not(.without-styles) ::ng-deep .ct-major-eleventh:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-eleventh>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-twelfth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-twelfth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:33.33333%}:host:not(.without-styles) ::ng-deep .ct-major-twelfth:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-twelfth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-double-octave{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-double-octave:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:25%}:host:not(.without-styles) ::ng-deep .ct-double-octave:after{content:\"\";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-double-octave>svg{display:block;position:absolute;top:0;left:0}"]
                    }] }
        ];
        NgxChartistComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        NgxChartistComponent.propDecorators = {
            data: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            options: [{ type: i0.Input }],
            lineSmooth: [{ type: i0.Input }],
            responsiveOptions: [{ type: i0.Input }],
            events: [{ type: i0.Input }]
        };
        return NgxChartistComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxChartistModule = /** @class */ (function () {
        function NgxChartistModule() {
        }
        NgxChartistModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [NgxChartistComponent],
                        exports: [NgxChartistComponent],
                        providers: [
                            NgxChartistService
                        ]
                    },] }
        ];
        return NgxChartistModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgxChartistService = NgxChartistService;
    exports.NgxChartistComponent = NgxChartistComponent;
    exports.NgxChartistModule = NgxChartistModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoYXJ0aXN0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9uZ3gtY2hhcnRpc3QvbGliL25neC1jaGFydGlzdC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtY2hhcnRpc3QvbGliL25neC1jaGFydGlzdC5jb21wb25lbnQudHMiLCJuZzovL25neC1jaGFydGlzdC9saWIvbmd4LWNoYXJ0aXN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIENoYXJ0aXN0IGZyb20gJ2NoYXJ0aXN0JztcblxuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0RXNjYXBlTWFwID0gQ2hhcnRpc3QuSUNoYXJ0aXN0RXNjYXBlTWFwO1xuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0UGllQ2hhcnQgPSBDaGFydGlzdC5JQ2hhcnRpc3RQaWVDaGFydDtcbmV4cG9ydCB0eXBlIElDaGFydGlzdEJhckNoYXJ0ID0gQ2hhcnRpc3QuSUNoYXJ0aXN0QmFyQ2hhcnQ7XG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RMaW5lQ2hhcnQgPSBDaGFydGlzdC5JQ2hhcnRpc3RMaW5lQ2hhcnQ7XG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RDYW5kbGVDaGFydCA9IENoYXJ0aXN0LklDaGFydGlzdENhbmRsZUNoYXJ0O1xuZXhwb3J0IHR5cGUgSUZpeGVkU2NhbGVBeGlzU3RhdGljID0gQ2hhcnRpc3QuSUZpeGVkU2NhbGVBeGlzU3RhdGljO1xuZXhwb3J0IHR5cGUgSUF1dG9TY2FsZUF4aXNTdGF0aWMgPSBDaGFydGlzdC5JQXV0b1NjYWxlQXhpc1N0YXRpYztcbmV4cG9ydCB0eXBlIElTdGVwQXhpc1N0YXRpYyA9IENoYXJ0aXN0LklTdGVwQXhpc1N0YXRpYztcbmV4cG9ydCB0eXBlIElDaGFydGlzdFN2Z1N0YXRpYyA9IENoYXJ0aXN0LkNoYXJ0aXN0U3ZnU3RhdGljO1xuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0SW50ZXJwb2xhdGlvblN0YXRpYyA9IENoYXJ0aXN0LkNoYXJ0aXN0SW50ZXJwb2xhdGlvblN0YXRpYztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4Q2hhcnRpc3RTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldFByZWNpc2lvbigpOiBudW1iZXIge1xuICAgIHJldHVybiBDaGFydGlzdC5wcmVjaXNpb247XG4gIH1cblxuICBnZXRFc2NhcGluZ01hcCgpOiBJQ2hhcnRpc3RFc2NhcGVNYXAge1xuICAgIHJldHVybiBDaGFydGlzdC5lc2NhcGluZ01hcDtcbiAgfVxuXG4gIGdldFBpZSgpOiBJQ2hhcnRpc3RQaWVDaGFydCB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LlBpZTtcbiAgfVxuXG4gIGdldEJhcigpOiBJQ2hhcnRpc3RCYXJDaGFydCB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LkJhcjtcbiAgfVxuXG4gIGdldExpbmUoKTogSUNoYXJ0aXN0TGluZUNoYXJ0IHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuTGluZTtcbiAgfVxuXG4gIGdldENhbmRsZSgpOiBJQ2hhcnRpc3RDYW5kbGVDaGFydCB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LkNhbmRsZTtcbiAgfVxuXG4gIGdldEZpeGVkU2NhbGVBeGlzKCk6IElGaXhlZFNjYWxlQXhpc1N0YXRpYyB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LkZpeGVkU2NhbGVBeGlzO1xuICB9XG5cbiAgZ2V0QXV0b1NjYWxlQXhpcygpOiBJQXV0b1NjYWxlQXhpc1N0YXRpYyB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LkF1dG9TY2FsZUF4aXM7XG4gIH1cblxuICBnZXRTdGVwQXhpcygpOiBJU3RlcEF4aXNTdGF0aWMge1xuICAgIHJldHVybiBDaGFydGlzdC5TdGVwQXhpcztcbiAgfVxuXG4gIGdldFN2ZygpOiBJQ2hhcnRpc3RTdmdTdGF0aWMge1xuICAgIHJldHVybiBDaGFydGlzdC5Tdmc7XG4gIH1cblxuICBnZXRJbnRlcnBvbGF0aW9uKCk6IElDaGFydGlzdEludGVycG9sYXRpb25TdGF0aWMge1xuICAgIHJldHVybiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgZ2V0Tm9vcCgpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIENoYXJ0aXN0Lm5vb3A7XG4gIH1cblxuICBnZXRQbHVnaW5zKCk6IGFueSB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LnBsdWdpbnM7XG4gIH1cblxuICBhbHBoYU51bWVyYXRlKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LmFscGhhTnVtZXJhdGUobik7XG4gIH1cblxuICBleHRlbmQodGFyZ2V0OiBPYmplY3QsIC4uLnNvdXJjZXM6IE9iamVjdFtdKTogT2JqZWN0IHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuZXh0ZW5kKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cblxuICByZXBsYWNlQWxsKHN0cjogc3RyaW5nLCBzdWJTdHI6IHN0cmluZywgbmV3U3ViU3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBDaGFydGlzdC5yZXBsYWNlQWxsKHN0ciwgc3ViU3RyLCBuZXdTdWJTdHIpO1xuICB9XG5cbiAgZW5zdXJlVW5pdCh2YWx1ZTogbnVtYmVyLCB1bml0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBDaGFydGlzdC5lbnN1cmVVbml0KHZhbHVlLCB1bml0KTtcbiAgfVxuXG4gIHF1YW50aXR5KGlucHV0OiBzdHJpbmcgfCBudW1iZXIpOiBPYmplY3Qge1xuICAgIHJldHVybiBDaGFydGlzdC5xdWFudGl0eShpbnB1dCk7XG4gIH1cblxuICBxdWVyeShxdWVyeTogTm9kZSB8IHN0cmluZyk6IE5vZGUge1xuICAgIHJldHVybiBDaGFydGlzdC5xdWVyeShxdWVyeSk7XG4gIH1cblxuICB0aW1lcyhsZW5ndGg6IG51bWJlcik6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiBDaGFydGlzdC50aW1lcyhsZW5ndGgpO1xuICB9XG5cbiAgc3VtKHByZXZpb3VzOiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LnN1bShwcmV2aW91cywgY3VycmVudCk7XG4gIH1cblxuICBtYXBNdWx0aXBseShmYWN0b3I6IG51bWJlcik6IChudW06IG51bWJlcikgPT4gbnVtYmVyIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QubWFwTXVsdGlwbHkoZmFjdG9yKTtcbiAgfVxuXG4gIG1hcEFkZChhZGRlbmQ6IG51bWJlcik6IChudW06IG51bWJlcikgPT4gbnVtYmVyIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QubWFwQWRkKGFkZGVuZCk7XG4gIH1cblxuICBzZXJpYWxNYXAoYXJyOiBBcnJheTxhbnk+LCBjYjogRnVuY3Rpb24pOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gQ2hhcnRpc3Quc2VyaWFsTWFwKGFyciwgY2IpO1xuICB9XG5cbiAgcm91bmRXaXRoUHJlY2lzaW9uKHZhbHVlOiBudW1iZXIsIGRpZ2l0cz86IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LnJvdW5kV2l0aFByZWNpc2lvbih2YWx1ZSwgZGlnaXRzKTtcbiAgfVxuXG4gIGdldE11bHRpVmFsdWUodmFsdWU6IGFueSwgZGltZW5zaW9uPzogYW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuZ2V0TXVsdGlWYWx1ZSh2YWx1ZSwgZGltZW5zaW9uKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShkYXRhOiBPYmplY3QgfCBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBDaGFydGlzdC5zZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICBkZXNlcmlhbGl6ZShkYXRhOiBzdHJpbmcpOiBPYmplY3QgfCBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiBDaGFydGlzdC5kZXNlcmlhbGl6ZShkYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVN2Zyhjb250YWluZXI6IE5vZGUsIHdpZHRoOiBzdHJpbmcsIGhlaWdodDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IE9iamVjdCB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LmNyZWF0ZVN2Zyhjb250YWluZXIsIHdpZHRoLCBoZWlnaHQsIGNsYXNzTmFtZSk7XG4gIH1cblxuICAvLyBUaGVzZSBtZXRob2RzIGFyZSBkZXByZWNhdGVkXG4gIC8qXG4gIHB1YmxpYyBnZW5lcmF0ZVN2ZyhuYW1lOiBIVE1MRWxlbWVudCB8IHN0cmluZywgYXR0cmlidXRlczogT2JqZWN0LCBjbGFzc05hbWU/OiBzdHJpbmcsIHBhcmVudD86IE9iamVjdCwgaW5zZXJ0Rmlyc3Q/OiBib29sZWFuKTogQ2hhcnRTdmcge1xuICAgIHJldHVybiBuZXcgQ2hhcnRpc3QuU3ZnKG5hbWUsIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgcGFyZW50LCBpbnNlcnRGaXJzdCk7XG4gIH1cbiAgcHVibGljIGdldFN2Z0Vhc2luZyhlYXNpbmdOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuU3ZnLkVhc2luZ1tlYXNpbmdOYW1lXTtcbiAgfVxuICBwdWJsaWMgZ2V0SW50ZXJwb2xhdGlvbkZ1bmN0aW9uKGludGVycG9sYXRpb25UeXBlOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LkludGVycG9sYXRpb25baW50ZXJwb2xhdGlvblR5cGVdO1xuICB9XG4gIHB1YmxpYyBnZXRDaGFydGlzdFZhcihuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBDaGFydGlzdFsnbmFtZSddO1xuICB9XG4gICovXG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIENoYXJ0aXN0IGZyb20gJ2NoYXJ0aXN0JztcbmltcG9ydCB7SVBpZUNoYXJ0T3B0aW9uc30gZnJvbSAnY2hhcnRpc3QnO1xuXG4vLyB3b3JrYXJvdW5kLCB1bnRpbCBodHRwczovL2dpdGh1Yi5jb20vRGVmaW5pdGVseVR5cGVkL0RlZmluaXRlbHlUeXBlZC9wdWxsLzI1ODM5I2lzc3VlY29tbWVudC0zODk4MzMyMjVcbi8vIGlzIG1lcmdlZFxuZXhwb3J0IGludGVyZmFjZSBJTGluZUNoYXJ0T3B0aW9ucyBleHRlbmRzIENoYXJ0aXN0LklDaGFydE9wdGlvbnMge1xuICBheGlzWD86IENoYXJ0aXN0LklDaGFydGlzdFN0ZXBBeGlzIHwgQ2hhcnRpc3QuSUNoYXJ0aXN0Rml4ZWRTY2FsZUF4aXMgfCBDaGFydGlzdC5JQ2hhcnRpc3RBdXRvU2NhbGVBeGlzO1xuICBheGlzWT86IENoYXJ0aXN0LklDaGFydGlzdFN0ZXBBeGlzIHwgQ2hhcnRpc3QuSUNoYXJ0aXN0Rml4ZWRTY2FsZUF4aXMgfCBDaGFydGlzdC5JQ2hhcnRpc3RBdXRvU2NhbGVBeGlzO1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nO1xuICBzaG93TGluZT86IGJvb2xlYW47XG4gIHNob3dQb2ludD86IGJvb2xlYW47XG4gIHNob3dBcmVhPzogYm9vbGVhbjtcbiAgYXJlYUJhc2U/OiBudW1iZXI7XG4gIGxpbmVTbW9vdGg/OiBGdW5jdGlvbiB8IGJvb2xlYW47XG4gIGxvdz86IG51bWJlcjtcbiAgaGlnaD86IG51bWJlcjtcbiAgdGlja3M/OiBBcnJheTxzdHJpbmcgfCBudW1iZXI+O1xuICBjaGFydFBhZGRpbmc/OiBDaGFydGlzdC5JQ2hhcnRQYWRkaW5nO1xuICBmdWxsV2lkdGg/OiBib29sZWFuO1xuICBjbGFzc05hbWVzPzogQ2hhcnRpc3QuSUxpbmVDaGFydENsYXNzZXM7XG4gIHNlcmllczoge1xuICAgIFtrZXk6IHN0cmluZ106IHtcbiAgICAgIGxpbmVTbW9vdGg/OiBGdW5jdGlvbiB8IGJvb2xlYW47XG4gICAgICBzaG93TGluZT86IGJvb2xlYW47XG4gICAgICBzaG93UG9pbnQ/OiBib29sZWFuO1xuICAgICAgc2hvd0FyZWE/OiBib29sZWFuO1xuICAgICAgYXJlYUJhc2U/OiBudW1iZXI7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFBvc3NpYmxlIGNoYXJ0IHR5cGVzXG4gKiBAdHlwZSB7U3RyaW5nfVxuICovXG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RUeXBlID0gJ1BpZScgfCAnQmFyJyB8ICdMaW5lJztcblxuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0QmFzZSA9XG4gIHwgQ2hhcnRpc3QuSUNoYXJ0aXN0UGllQ2hhcnRcbiAgfCBDaGFydGlzdC5JQ2hhcnRpc3RCYXJDaGFydFxuICB8IENoYXJ0aXN0LklDaGFydGlzdExpbmVDaGFydDtcblxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnRpc3RMaW5lU21vb3RoIHtcbiAgaW50ZXJwb2xhdGlvbjogJ2NhcmRpbmFsJyB8ICdzaW1wbGUnIHwgJ25vbmUnIHwgJ3N0ZXAnO1xuICBkYXRhOiBDaGFydGlzdC5JQ2hhcnRpc3RJbnRlcnBvbGF0aW9uT3B0aW9ucyB8IENoYXJ0aXN0LklDaGFydGlzdFNpbXBsZUludGVycG9sYXRpb25PcHRpb25zXG4gICAgfCBDaGFydGlzdC5JQ2hhcnRpc3RDYXJkaW5hbEludGVycG9sYXRpb25PcHRpb25zIHwgQ2hhcnRpc3QuSUNoYXJ0aXN0U3RlcEludGVycG9sYXRpb25PcHRpb25zO1xufVxuXG4vLyBTVEFSVCBXT1JLQVJPVU5EIChidWdzIGluIFwidGltZS1zZXJpZXMtd2l0aC1tb21lbnRqc1wiIGFuZCBcImhvbGVzLWluLWRhdGFcIiBhbmQgXCJmaWxsZWQtaG9sZXMtaW4tZGF0YVwiKVxuLy8gVE9ETzogZG8gYSBwdWxsLXJlcXVlc3QgaW4gQHR5cGVzL2NoYXJ0aXN0cyB3aXRoIHRoaXMgZml4XG4vLyBUaGlzIGlzIG9uZSBvZiB0aGUgYnVncyByZXBvcnRlZDogaHR0cHM6Ly9naXRodWIuY29tL2dpb25rdW56L2NoYXJ0aXN0LWpzL2lzc3Vlcy8xMDc2XG5leHBvcnQgaW50ZXJmYWNlIElDaGFydGlzdERhdGFQb2ludCB7XG4gIHg6IG51bWJlciB8IERhdGU7XG4gIHk6IG51bWJlciB8IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIElDaGFydGlzdFNlcmllc0RhdGEge1xuICBuYW1lPzogc3RyaW5nO1xuICB2YWx1ZT86IG51bWJlcjtcbiAgZGF0YT86IEFycmF5PG51bWJlcj4gfCBBcnJheTxJQ2hhcnRpc3REYXRhUG9pbnQ+O1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIG1ldGE/OiBzdHJpbmc7IC8vIEkgYXNzdW1lIHRoaXMgY291bGQgcHJvYmFibHkgYmUgYSBudW1iZXIgYXMgd2VsbD9cbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0aXN0RGF0YSB7XG4gIGxhYmVscz86IEFycmF5PHN0cmluZz4gfCBBcnJheTxudW1iZXI+IHwgQXJyYXk8RGF0ZT47XG4gIHNlcmllczogQXJyYXk8SUNoYXJ0aXN0U2VyaWVzRGF0YT4gfCBBcnJheTxBcnJheTxJQ2hhcnRpc3REYXRhPj4gfCBBcnJheTxudW1iZXI+IHwgIEFycmF5PEFycmF5PG51bWJlcj4gfCBBcnJheTxJQ2hhcnRpc3REYXRhUG9pbnQ+Pjtcbn1cblxuLy8gZXhwb3J0IHR5cGUgSUNoYXJ0aXN0RGF0YSA9IENoYXJ0aXN0LklDaGFydGlzdERhdGE7XG5cbi8vIEVORCBXT1JLQVJPVU5EXG5cblxuLy8gd29ya2Fyb3VuZCwgdW50aWwgaHR0cHM6Ly9naXRodWIuY29tL0RlZmluaXRlbHlUeXBlZC9EZWZpbml0ZWx5VHlwZWQvcHVsbC8yNTgzOSNpc3N1ZWNvbW1lbnQtMzg5ODMzMjI1XG4vLyBpcyBtZXJnZWRcbmV4cG9ydCB0eXBlIElDaGFydGlzdE9wdGlvbnMgPSBJTGluZUNoYXJ0T3B0aW9ucyB8IENoYXJ0aXN0LklCYXJDaGFydE9wdGlvbnMgfCBJUGllQ2hhcnRPcHRpb25zO1xuLy8gZXhwb3J0IHR5cGUgSUNoYXJ0aXN0T3B0aW9ucyA9IENoYXJ0aXN0LklMaW5lQ2hhcnRPcHRpb25zIHwgQ2hhcnRpc3QuSUJhckNoYXJ0T3B0aW9ucyB8IElQaWVDaGFydE9wdGlvbnM7XG5cbi8vIFRoZSByaWdodCB3YXkgd291bGQgYmUgaGVyZSBcIkNoYXJ0aXN0LklSZXNwb25zaXZlT3B0aW9uVHVwbGU8Q2hhcnRPcHRpb25zPjtcIixcbi8vIGJ1dCB0aGVyZSBhcmUgcHJvYmxlbXMgd2hlbiBjcmVhdGluZyBhIHZhcmlhYmxlIHdpdGggc3VjaCBhIHR5cGVcbmV4cG9ydCB0eXBlIElDaGFydGlzdFJlc3BvbnNpdmVPcHRpb25UdXBsZSA9IEFycmF5PHN0cmluZyB8IElDaGFydGlzdE9wdGlvbnM+O1xuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0UmVzcG9uc2l2ZU9wdGlvbnMgPSBJQ2hhcnRpc3RSZXNwb25zaXZlT3B0aW9uVHVwbGVbXTtcblxuXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydGlzdEV2ZW50IHtcbiAgW2V2ZW50TmFtZTogc3RyaW5nXTogKGRhdGE6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnRpc3RTZXR0aW5nc1R5cGUge1xuICBkYXRhOiBJQ2hhcnRpc3REYXRhO1xuICBvcHRpb25zOiBJQ2hhcnRpc3RPcHRpb25zO1xuICBldmVudHM/OiBJQ2hhcnRpc3RFdmVudDtcbiAgbGluZVNtb290aD86IElDaGFydGlzdExpbmVTbW9vdGg7XG4gIHJlc3BvbnNpdmVPcHRpb25zPzogSUNoYXJ0aXN0UmVzcG9uc2l2ZU9wdGlvbnM7XG4gIHR5cGU/OiBJQ2hhcnRpc3RUeXBlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmd4LWNoYXJ0aXN0JyxcbiAgc3R5bGVzOiBbYDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbGFiZWx7ZmlsbDpyZ2JhKDAsMCwwLC40KTtjb2xvcjpyZ2JhKDAsMCwwLC40KTtmb250LXNpemU6Ljc1cmVtO2xpbmUtaGVpZ2h0OjF9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1jaGFydC1iYXIgLmN0LWxhYmVsLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtY2hhcnQtbGluZSAuY3QtbGFiZWx7ZGlzcGxheTpibG9jaztkaXNwbGF5OmZsZXh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1jaGFydC1kb251dCAuY3QtbGFiZWwsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1jaGFydC1waWUgLmN0LWxhYmVse2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWx9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3RleHQtYWxpZ246bGVmdDt0ZXh0LWFuY2hvcjpzdGFydH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWxhYmVsLmN0LWhvcml6b250YWwuY3QtZW5ke2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7dGV4dC1hbGlnbjpsZWZ0O3RleHQtYW5jaG9yOnN0YXJ0fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbGFiZWwuY3QtdmVydGljYWwuY3Qtc3RhcnR7YWxpZ24taXRlbXM6ZmxleC1lbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO3RleHQtYWxpZ246cmlnaHQ7dGV4dC1hbmNob3I6ZW5kfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbGFiZWwuY3QtdmVydGljYWwuY3QtZW5ke2FsaWduLWl0ZW1zOmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3RleHQtYWxpZ246bGVmdDt0ZXh0LWFuY2hvcjpzdGFydH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWNoYXJ0LWJhciAuY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1zdGFydHthbGlnbi1pdGVtczpmbGV4LWVuZDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyO3RleHQtYW5jaG9yOnN0YXJ0fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtY2hhcnQtYmFyIC5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LWVuZHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1hbmNob3I6c3RhcnR9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1jaGFydC1iYXIuY3QtaG9yaXpvbnRhbC1iYXJzIC5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3RleHQtYWxpZ246bGVmdDt0ZXh0LWFuY2hvcjpzdGFydH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWNoYXJ0LWJhci5jdC1ob3Jpem9udGFsLWJhcnMgLmN0LWxhYmVsLmN0LWhvcml6b250YWwuY3QtZW5ke2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7dGV4dC1hbGlnbjpsZWZ0O3RleHQtYW5jaG9yOnN0YXJ0fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtY2hhcnQtYmFyLmN0LWhvcml6b250YWwtYmFycyAuY3QtbGFiZWwuY3QtdmVydGljYWwuY3Qtc3RhcnR7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDt0ZXh0LWFsaWduOnJpZ2h0O3RleHQtYW5jaG9yOmVuZH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWNoYXJ0LWJhci5jdC1ob3Jpem9udGFsLWJhcnMgLmN0LWxhYmVsLmN0LXZlcnRpY2FsLmN0LWVuZHthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7dGV4dC1hbGlnbjpsZWZ0O3RleHQtYW5jaG9yOmVuZH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWdyaWR7c3Ryb2tlOnJnYmEoMCwwLDAsLjIpO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWRhc2hhcnJheToycHh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1ncmlkLWJhY2tncm91bmR7ZmlsbDpub25lfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtcG9pbnR7c3Ryb2tlLXdpZHRoOjEwcHg7c3Ryb2tlLWxpbmVjYXA6cm91bmR9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1saW5le2ZpbGw6bm9uZTtzdHJva2Utd2lkdGg6NHB4fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtYXJlYXtzdHJva2U6bm9uZTtmaWxsLW9wYWNpdHk6LjF9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1iYXJ7ZmlsbDpub25lO3N0cm9rZS13aWR0aDoxMHB4fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2xpY2UtZG9udXR7ZmlsbDpub25lO3N0cm9rZS13aWR0aDo2MHB4fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWEgLmN0LWJhciw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1hIC5jdC1saW5lLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0e3N0cm9rZTojZDcwMjA2fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtZG9udXQtc29saWQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtcGlle2ZpbGw6I2Q3MDIwNn06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1iIC5jdC1iYXIsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYiAuY3QtbGluZSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1iIC5jdC1wb2ludCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1iIC5jdC1zbGljZS1kb251dHtzdHJva2U6I2YwNWI0Zn06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1iIC5jdC1hcmVhLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWIgLmN0LXNsaWNlLWRvbnV0LXNvbGlkLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWIgLmN0LXNsaWNlLXBpZXtmaWxsOiNmMDViNGZ9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYyAuY3QtYmFyLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWMgLmN0LWxpbmUsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYyAuY3QtcG9pbnQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYyAuY3Qtc2xpY2UtZG9udXR7c3Ryb2tlOiNmNGM2M2R9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYyAuY3QtYXJlYSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1jIC5jdC1zbGljZS1kb251dC1zb2xpZCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1jIC5jdC1zbGljZS1waWV7ZmlsbDojZjRjNjNkfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWQgLmN0LWJhciw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1kIC5jdC1saW5lLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWQgLmN0LXBvaW50LDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWQgLmN0LXNsaWNlLWRvbnV0e3N0cm9rZTojZDE3OTA1fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWQgLmN0LWFyZWEsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZCAuY3Qtc2xpY2UtZG9udXQtc29saWQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZCAuY3Qtc2xpY2UtcGlle2ZpbGw6I2QxNzkwNX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1lIC5jdC1iYXIsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZSAuY3QtbGluZSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1lIC5jdC1wb2ludCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1lIC5jdC1zbGljZS1kb251dHtzdHJva2U6IzQ1M2QzZn06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1lIC5jdC1hcmVhLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWUgLmN0LXNsaWNlLWRvbnV0LXNvbGlkLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWUgLmN0LXNsaWNlLXBpZXtmaWxsOiM0NTNkM2Z9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZiAuY3QtYmFyLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWYgLmN0LWxpbmUsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZiAuY3QtcG9pbnQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZiAuY3Qtc2xpY2UtZG9udXR7c3Ryb2tlOiM1OTkyMmJ9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZiAuY3QtYXJlYSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1mIC5jdC1zbGljZS1kb251dC1zb2xpZCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1mIC5jdC1zbGljZS1waWV7ZmlsbDojNTk5MjJifTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWcgLmN0LWJhciw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1nIC5jdC1saW5lLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWcgLmN0LXBvaW50LDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWcgLmN0LXNsaWNlLWRvbnV0e3N0cm9rZTojMDU0NGQzfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWcgLmN0LWFyZWEsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZyAuY3Qtc2xpY2UtZG9udXQtc29saWQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZyAuY3Qtc2xpY2UtcGlle2ZpbGw6IzA1NDRkM306aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1oIC5jdC1iYXIsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaCAuY3QtbGluZSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1oIC5jdC1wb2ludCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1oIC5jdC1zbGljZS1kb251dHtzdHJva2U6IzZiMDM5Mn06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1oIC5jdC1hcmVhLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWggLmN0LXNsaWNlLWRvbnV0LXNvbGlkLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWggLmN0LXNsaWNlLXBpZXtmaWxsOiM2YjAzOTJ9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaSAuY3QtYmFyLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWkgLmN0LWxpbmUsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaSAuY3QtcG9pbnQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaSAuY3Qtc2xpY2UtZG9udXR7c3Ryb2tlOiNmMDViNGZ9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaSAuY3QtYXJlYSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1pIC5jdC1zbGljZS1kb251dC1zb2xpZCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1pIC5jdC1zbGljZS1waWV7ZmlsbDojZjA1YjRmfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWogLmN0LWJhciw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1qIC5jdC1saW5lLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWogLmN0LXBvaW50LDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWogLmN0LXNsaWNlLWRvbnV0e3N0cm9rZTojZGRhNDU4fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWogLmN0LWFyZWEsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaiAuY3Qtc2xpY2UtZG9udXQtc29saWQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaiAuY3Qtc2xpY2UtcGlle2ZpbGw6I2RkYTQ1OH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1rIC5jdC1iYXIsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtayAuY3QtbGluZSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1rIC5jdC1wb2ludCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1rIC5jdC1zbGljZS1kb251dHtzdHJva2U6I2VhY2Y3ZH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1rIC5jdC1hcmVhLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWsgLmN0LXNsaWNlLWRvbnV0LXNvbGlkLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWsgLmN0LXNsaWNlLXBpZXtmaWxsOiNlYWNmN2R9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbCAuY3QtYmFyLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWwgLmN0LWxpbmUsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbCAuY3QtcG9pbnQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbCAuY3Qtc2xpY2UtZG9udXR7c3Ryb2tlOiM4Njc5N2R9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbCAuY3QtYXJlYSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1sIC5jdC1zbGljZS1kb251dC1zb2xpZCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1sIC5jdC1zbGljZS1waWV7ZmlsbDojODY3OTdkfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW0gLmN0LWJhciw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1tIC5jdC1saW5lLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW0gLmN0LXBvaW50LDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW0gLmN0LXNsaWNlLWRvbnV0e3N0cm9rZTojYjJjMzI2fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW0gLmN0LWFyZWEsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbSAuY3Qtc2xpY2UtZG9udXQtc29saWQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbSAuY3Qtc2xpY2UtcGlle2ZpbGw6I2IyYzMyNn06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1uIC5jdC1iYXIsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbiAuY3QtbGluZSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1uIC5jdC1wb2ludCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1uIC5jdC1zbGljZS1kb251dHtzdHJva2U6IzYxODhlMn06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1uIC5jdC1hcmVhLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW4gLmN0LXNsaWNlLWRvbnV0LXNvbGlkLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW4gLmN0LXNsaWNlLXBpZXtmaWxsOiM2MTg4ZTJ9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbyAuY3QtYmFyLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW8gLmN0LWxpbmUsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbyAuY3QtcG9pbnQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbyAuY3Qtc2xpY2UtZG9udXR7c3Ryb2tlOiNhNzQ4Y2F9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbyAuY3QtYXJlYSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1vIC5jdC1zbGljZS1kb251dC1zb2xpZCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1vIC5jdC1zbGljZS1waWV7ZmlsbDojYTc0OGNhfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc3F1YXJle2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNxdWFyZTpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjEwMCV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zcXVhcmU6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNxdWFyZT5zdmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1taW5vci1zZWNvbmR7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWlub3Itc2Vjb25kOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206OTMuNzUlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWlub3Itc2Vjb25kOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1taW5vci1zZWNvbmQ+c3Zne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3Itc2Vjb25ke2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXNlY29uZDpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjg4Ljg4ODg5JX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXNlY29uZDphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTp0YWJsZTtjbGVhcjpib3RofTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3Itc2Vjb25kPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXRoaXJke2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXRoaXJkOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206ODMuMzMzMzMlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWlub3ItdGhpcmQ6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXRoaXJkPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXRoaXJke2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXRoaXJkOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206ODAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3ItdGhpcmQ6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXRoaXJkPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXBlcmZlY3QtZm91cnRoe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXBlcmZlY3QtZm91cnRoOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206NzUlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtcGVyZmVjdC1mb3VydGg6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXBlcmZlY3QtZm91cnRoPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXBlcmZlY3QtZmlmdGh7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtcGVyZmVjdC1maWZ0aDpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjY2LjY2NjY3JX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXBlcmZlY3QtZmlmdGg6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXBlcmZlY3QtZmlmdGg+c3Zne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWlub3Itc2l4dGh7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWlub3Itc2l4dGg6YmVmb3Jle2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDtjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbTo2Mi41JX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXNpeHRoOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1taW5vci1zaXh0aD5zdmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1nb2xkZW4tc2VjdGlvbntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1nb2xkZW4tc2VjdGlvbjpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjYxLjgwNDclfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtZ29sZGVuLXNlY3Rpb246YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWdvbGRlbi1zZWN0aW9uPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXNpeHRoe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXNpeHRoOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206NjAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3Itc2l4dGg6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXNpeHRoPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXNldmVudGh7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWlub3Itc2V2ZW50aDpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjU2LjI1JX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXNldmVudGg6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXNldmVudGg+c3Zne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3Itc2V2ZW50aHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci1zZXZlbnRoOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206NTMuMzMzMzMlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3Itc2V2ZW50aDphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTp0YWJsZTtjbGVhcjpib3RofTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3Itc2V2ZW50aD5zdmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1vY3RhdmV7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtb2N0YXZlOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206NTAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtb2N0YXZlOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1vY3RhdmU+c3Zne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3ItdGVudGh7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3ItdGVudGg6YmVmb3Jle2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDtjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbTo0MCV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci10ZW50aDphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTp0YWJsZTtjbGVhcjpib3RofTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3ItdGVudGg+c3Zne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3ItZWxldmVudGh7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3ItZWxldmVudGg6YmVmb3Jle2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDtjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbTozNy41JX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLWVsZXZlbnRoOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci1lbGV2ZW50aD5zdmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci10d2VsZnRoe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXR3ZWxmdGg6YmVmb3Jle2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDtjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbTozMy4zMzMzMyV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci10d2VsZnRoOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci10d2VsZnRoPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWRvdWJsZS1vY3RhdmV7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtZG91YmxlLW9jdGF2ZTpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjI1JX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWRvdWJsZS1vY3RhdmU6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWRvdWJsZS1vY3RhdmU+c3Zne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfWBdLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgTmd4Q2hhcnRpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZGF0YTogUHJvbWlzZTxJQ2hhcnRpc3REYXRhPiB8IElDaGFydGlzdERhdGE7XG5cbiAgQElucHV0KCkgcHVibGljIHR5cGU6IFByb21pc2U8SUNoYXJ0aXN0VHlwZT4gfCBJQ2hhcnRpc3RUeXBlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBvcHRpb25zOiBQcm9taXNlPElDaGFydGlzdE9wdGlvbnM+IHwgSUNoYXJ0aXN0T3B0aW9ucztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgbGluZVNtb290aDogUHJvbWlzZTxJQ2hhcnRpc3RMaW5lU21vb3RoPiB8IElDaGFydGlzdExpbmVTbW9vdGg7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJlc3BvbnNpdmVPcHRpb25zOiBQcm9taXNlPElDaGFydGlzdFJlc3BvbnNpdmVPcHRpb25zPiB8IElDaGFydGlzdFJlc3BvbnNpdmVPcHRpb25zO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBldmVudHM6IFByb21pc2U8SUNoYXJ0aXN0RXZlbnQ+IHwgSUNoYXJ0aXN0RXZlbnQ7XG5cbiAgcHVibGljIGNoYXJ0OiBJQ2hhcnRpc3RCYXNlO1xuXG5cbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IFByb21pc2U8SUNoYXJ0aXN0QmFzZT4ge1xuICAgIGlmICghdGhpcy50eXBlIHx8ICF0aGlzLmRhdGEpIHtcbiAgICAgIFByb21pc2UucmVqZWN0KCdFeHBlY3RlZCBhdCBsZWFzdCB0eXBlIGFuZCBkYXRhLicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlbmRlckNoYXJ0KCkudGhlbigoY2hhcnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cyhjaGFydCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGFydDtcbiAgICB9KTtcbiAgfVxuXG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlckNoYXJ0KCk6IFByb21pc2U8SUNoYXJ0aXN0QmFzZT4ge1xuICAgIGNvbnN0IHByb21pc2VzOiBhbnlbXSA9IFtcbiAgICAgIHRoaXMudHlwZSxcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMuZGF0YSxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnNcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMubGluZVNtb290aCkge1xuICAgICAgc3dpdGNoICh0aGlzLmxpbmVTbW9vdGhbJ2ludGVycG9sYXRpb24nXSkge1xuICAgICAgICBjYXNlICdjYXJkaW5hbCc6IHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNbJ2xpbmVTbW9vdGgnXSA9IENoYXJ0aXN0LkludGVycG9sYXRpb24uY2FyZGluYWwodGhpcy5saW5lU21vb3RoWydkYXRhJ10pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3NpbXBsZSc6IHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNbJ2xpbmVTbW9vdGgnXSA9IENoYXJ0aXN0LkludGVycG9sYXRpb24uc2ltcGxlKHRoaXMubGluZVNtb290aFsnZGF0YSddKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdub25lJzoge1xuICAgICAgICAgIHRoaXMub3B0aW9uc1snbGluZVNtb290aCddID0gQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5ub25lKHRoaXMubGluZVNtb290aFsnZGF0YSddKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdzdGVwJzoge1xuICAgICAgICAgIHRoaXMub3B0aW9uc1snbGluZVNtb290aCddID0gQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5zdGVwKHRoaXMubGluZVNtb290aFsnZGF0YSddKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgIGNvbnN0IFt0eXBlLCAuLi5hcmdzXTogYW55ID0gdmFsdWVzO1xuXG4gICAgICBpZiAoISh0eXBlIGluIENoYXJ0aXN0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dHlwZX0gaXMgbm90IGEgdmFsaWQgY2hhcnQgdHlwZWApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNoYXJ0ID0gKENoYXJ0aXN0IGFzIGFueSlbdHlwZV0oLi4uYXJncyk7XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYXJ0O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNoYXJ0IHx8ICd0eXBlJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLnJlbmRlckNoYXJ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gY2hhbmdlcy5kYXRhLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZXMub3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgICAgKHRoaXMuY2hhcnQgYXMgYW55KS51cGRhdGUodGhpcy5kYXRhLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBiaW5kRXZlbnRzKGNoYXJ0OiBhbnkpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKSkge1xuICAgICAgY2hhcnQub24oZXZlbnQsIHRoaXMuZXZlbnRzW2V2ZW50XSk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4Q2hhcnRpc3RDb21wb25lbnQgfSBmcm9tICcuL25neC1jaGFydGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hDaGFydGlzdFNlcnZpY2V9IGZyb20gJy4vbmd4LWNoYXJ0aXN0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neENoYXJ0aXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW05neENoYXJ0aXN0Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTmd4Q2hhcnRpc3RTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Q2hhcnRpc3RNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiQ2hhcnRpc3QucHJlY2lzaW9uIiwiQ2hhcnRpc3QuZXNjYXBpbmdNYXAiLCJDaGFydGlzdC5QaWUiLCJDaGFydGlzdC5CYXIiLCJDaGFydGlzdC5MaW5lIiwiQ2hhcnRpc3QuQ2FuZGxlIiwiQ2hhcnRpc3QuRml4ZWRTY2FsZUF4aXMiLCJDaGFydGlzdC5BdXRvU2NhbGVBeGlzIiwiQ2hhcnRpc3QuU3RlcEF4aXMiLCJDaGFydGlzdC5TdmciLCJDaGFydGlzdC5JbnRlcnBvbGF0aW9uIiwiQ2hhcnRpc3Qubm9vcCIsIkNoYXJ0aXN0LnBsdWdpbnMiLCJDaGFydGlzdC5hbHBoYU51bWVyYXRlIiwiQ2hhcnRpc3QuZXh0ZW5kIiwiQ2hhcnRpc3QucmVwbGFjZUFsbCIsIkNoYXJ0aXN0LmVuc3VyZVVuaXQiLCJDaGFydGlzdC5xdWFudGl0eSIsIkNoYXJ0aXN0LnF1ZXJ5IiwiQ2hhcnRpc3QudGltZXMiLCJDaGFydGlzdC5zdW0iLCJDaGFydGlzdC5tYXBNdWx0aXBseSIsIkNoYXJ0aXN0Lm1hcEFkZCIsIkNoYXJ0aXN0LnNlcmlhbE1hcCIsIkNoYXJ0aXN0LnJvdW5kV2l0aFByZWNpc2lvbiIsIkNoYXJ0aXN0LmdldE11bHRpVmFsdWUiLCJDaGFydGlzdC5zZXJpYWxpemUiLCJDaGFydGlzdC5kZXNlcmlhbGl6ZSIsIkNoYXJ0aXN0LmNyZWF0ZVN2ZyIsIkluamVjdGFibGUiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLHNCQTRGeUIsQ0FBQztRQUN0QixJQUFJLENBQUMs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