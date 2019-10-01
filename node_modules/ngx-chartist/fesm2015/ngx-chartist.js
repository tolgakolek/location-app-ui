import { Injectable, NgModule, Component, ElementRef, Input, defineInjectable } from '@angular/core';
import * as Chartist from 'chartist';
import { precision, escapingMap, Pie, Bar, Line, Candle, FixedScaleAxis, AutoScaleAxis, StepAxis, Svg, Interpolation, noop, plugins, alphaNumerate, extend, replaceAll, ensureUnit, quantity, query, times, sum, mapMultiply, mapAdd, serialMap, roundWithPrecision, getMultiValue, serialize, deserialize, createSvg } from 'chartist';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxChartistService {
    constructor() { }
    /**
     * @return {?}
     */
    getPrecision() {
        return precision;
    }
    /**
     * @return {?}
     */
    getEscapingMap() {
        return escapingMap;
    }
    /**
     * @return {?}
     */
    getPie() {
        return Pie;
    }
    /**
     * @return {?}
     */
    getBar() {
        return Bar;
    }
    /**
     * @return {?}
     */
    getLine() {
        return Line;
    }
    /**
     * @return {?}
     */
    getCandle() {
        return Candle;
    }
    /**
     * @return {?}
     */
    getFixedScaleAxis() {
        return FixedScaleAxis;
    }
    /**
     * @return {?}
     */
    getAutoScaleAxis() {
        return AutoScaleAxis;
    }
    /**
     * @return {?}
     */
    getStepAxis() {
        return StepAxis;
    }
    /**
     * @return {?}
     */
    getSvg() {
        return Svg;
    }
    /**
     * @return {?}
     */
    getInterpolation() {
        return Interpolation;
    }
    /**
     * @return {?}
     */
    getNoop() {
        return noop;
    }
    /**
     * @return {?}
     */
    getPlugins() {
        return plugins;
    }
    /**
     * @param {?} n
     * @return {?}
     */
    alphaNumerate(n) {
        return alphaNumerate(n);
    }
    /**
     * @param {?} target
     * @param {...?} sources
     * @return {?}
     */
    extend(target, ...sources) {
        return extend(target, ...sources);
    }
    /**
     * @param {?} str
     * @param {?} subStr
     * @param {?} newSubStr
     * @return {?}
     */
    replaceAll(str, subStr, newSubStr) {
        return replaceAll(str, subStr, newSubStr);
    }
    /**
     * @param {?} value
     * @param {?} unit
     * @return {?}
     */
    ensureUnit(value, unit) {
        return ensureUnit(value, unit);
    }
    /**
     * @param {?} input
     * @return {?}
     */
    quantity(input) {
        return quantity(input);
    }
    /**
     * @param {?} query
     * @return {?}
     */
    query(query$$1) {
        return query(query$$1);
    }
    /**
     * @param {?} length
     * @return {?}
     */
    times(length) {
        return times(length);
    }
    /**
     * @param {?} previous
     * @param {?} current
     * @return {?}
     */
    sum(previous, current) {
        return sum(previous, current);
    }
    /**
     * @param {?} factor
     * @return {?}
     */
    mapMultiply(factor) {
        return mapMultiply(factor);
    }
    /**
     * @param {?} addend
     * @return {?}
     */
    mapAdd(addend) {
        return mapAdd(addend);
    }
    /**
     * @param {?} arr
     * @param {?} cb
     * @return {?}
     */
    serialMap(arr, cb) {
        return serialMap(arr, cb);
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @return {?}
     */
    roundWithPrecision(value, digits) {
        return roundWithPrecision(value, digits);
    }
    /**
     * @param {?} value
     * @param {?=} dimension
     * @return {?}
     */
    getMultiValue(value, dimension) {
        return getMultiValue(value, dimension);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    serialize(data) {
        return serialize(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    deserialize(data) {
        return deserialize(data);
    }
    /**
     * @param {?} container
     * @param {?} width
     * @param {?} height
     * @param {?} className
     * @return {?}
     */
    createSvg(container, width, height, className) {
        return createSvg(container, width, height, className);
    }
}
NgxChartistService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgxChartistService.ctorParameters = () => [];
/** @nocollapse */ NgxChartistService.ngInjectableDef = defineInjectable({ factory: function NgxChartistService_Factory() { return new NgxChartistService(); }, token: NgxChartistService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxChartistComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.type || !this.data) {
            Promise.reject('Expected at least type and data.');
        }
        return this.renderChart().then((chart) => {
            if (this.events !== undefined) {
                this.bindEvents(chart);
            }
            return chart;
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.element) {
            this.update(changes);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.detach();
        }
    }
    /**
     * @return {?}
     */
    renderChart() {
        /** @type {?} */
        const promises = [
            this.type,
            this.element,
            this.data,
            this.options,
            this.responsiveOptions
        ];
        if (this.lineSmooth) {
            switch (this.lineSmooth['interpolation']) {
                case 'cardinal': {
                    this.options['lineSmooth'] = Interpolation.cardinal(this.lineSmooth['data']);
                    break;
                }
                case 'simple': {
                    this.options['lineSmooth'] = Interpolation.simple(this.lineSmooth['data']);
                    break;
                }
                case 'none': {
                    this.options['lineSmooth'] = Interpolation.none(this.lineSmooth['data']);
                    break;
                }
                case 'step': {
                    this.options['lineSmooth'] = Interpolation.step(this.lineSmooth['data']);
                    break;
                }
            }
        }
        return Promise.all(promises).then((values) => {
            const [type, ...args] = values;
            if (!(type in Chartist)) {
                throw new Error(`${type} is not a valid chart type`);
            }
            this.chart = ((/** @type {?} */ (Chartist)))[type](...args);
            return this.chart;
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    update(changes) {
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
            ((/** @type {?} */ (this.chart))).update(this.data, this.options);
        }
    }
    /**
     * @param {?} chart
     * @return {?}
     */
    bindEvents(chart) {
        for (const event of Object.keys(this.events)) {
            chart.on(event, this.events[event]);
        }
    }
}
NgxChartistComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ngx-chartist',
                template: '',
                styles: [`:host:not(.without-styles) ::ng-deep .ct-label{fill:rgba(0,0,0,.4);color:rgba(0,0,0,.4);font-size:.75rem;line-height:1}:host:not(.without-styles) ::ng-deep .ct-chart-bar .ct-label,:host:not(.without-styles) ::ng-deep .ct-chart-line .ct-label{display:block;display:flex}:host:not(.without-styles) ::ng-deep .ct-chart-donut .ct-label,:host:not(.without-styles) ::ng-deep .ct-chart-pie .ct-label{dominant-baseline:central}:host:not(.without-styles) ::ng-deep .ct-label.ct-horizontal.ct-start{align-items:flex-end;justify-content:flex-start;text-align:left;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-label.ct-horizontal.ct-end{align-items:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-label.ct-vertical.ct-start{align-items:flex-end;justify-content:flex-end;text-align:right;text-anchor:end}:host:not(.without-styles) ::ng-deep .ct-label.ct-vertical.ct-end{align-items:flex-end;justify-content:flex-start;text-align:left;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-chart-bar .ct-label.ct-horizontal.ct-start{align-items:flex-end;justify-content:center;text-align:center;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-chart-bar .ct-label.ct-horizontal.ct-end{align-items:flex-start;justify-content:center;text-align:center;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start{align-items:flex-end;justify-content:flex-start;text-align:left;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end{align-items:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}:host:not(.without-styles) ::ng-deep .ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start{align-items:center;justify-content:flex-end;text-align:right;text-anchor:end}:host:not(.without-styles) ::ng-deep .ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end{align-items:center;justify-content:flex-start;text-align:left;text-anchor:end}:host:not(.without-styles) ::ng-deep .ct-grid{stroke:rgba(0,0,0,.2);stroke-width:1px;stroke-dasharray:2px}:host:not(.without-styles) ::ng-deep .ct-grid-background{fill:none}:host:not(.without-styles) ::ng-deep .ct-point{stroke-width:10px;stroke-linecap:round}:host:not(.without-styles) ::ng-deep .ct-line{fill:none;stroke-width:4px}:host:not(.without-styles) ::ng-deep .ct-area{stroke:none;fill-opacity:.1}:host:not(.without-styles) ::ng-deep .ct-bar{fill:none;stroke-width:10px}:host:not(.without-styles) ::ng-deep .ct-slice-donut{fill:none;stroke-width:60px}:host:not(.without-styles) ::ng-deep .ct-series-a .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-a .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-a .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-a .ct-slice-donut{stroke:#d70206}:host:not(.without-styles) ::ng-deep .ct-series-a .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-a .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-a .ct-slice-pie{fill:#d70206}:host:not(.without-styles) ::ng-deep .ct-series-b .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-b .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-b .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-b .ct-slice-donut{stroke:#f05b4f}:host:not(.without-styles) ::ng-deep .ct-series-b .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-b .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-b .ct-slice-pie{fill:#f05b4f}:host:not(.without-styles) ::ng-deep .ct-series-c .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-c .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-c .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-c .ct-slice-donut{stroke:#f4c63d}:host:not(.without-styles) ::ng-deep .ct-series-c .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-c .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-c .ct-slice-pie{fill:#f4c63d}:host:not(.without-styles) ::ng-deep .ct-series-d .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-d .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-d .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-d .ct-slice-donut{stroke:#d17905}:host:not(.without-styles) ::ng-deep .ct-series-d .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-d .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-d .ct-slice-pie{fill:#d17905}:host:not(.without-styles) ::ng-deep .ct-series-e .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-e .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-e .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-e .ct-slice-donut{stroke:#453d3f}:host:not(.without-styles) ::ng-deep .ct-series-e .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-e .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-e .ct-slice-pie{fill:#453d3f}:host:not(.without-styles) ::ng-deep .ct-series-f .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-f .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-f .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-f .ct-slice-donut{stroke:#59922b}:host:not(.without-styles) ::ng-deep .ct-series-f .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-f .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-f .ct-slice-pie{fill:#59922b}:host:not(.without-styles) ::ng-deep .ct-series-g .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-g .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-g .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-g .ct-slice-donut{stroke:#0544d3}:host:not(.without-styles) ::ng-deep .ct-series-g .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-g .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-g .ct-slice-pie{fill:#0544d3}:host:not(.without-styles) ::ng-deep .ct-series-h .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-h .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-h .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-h .ct-slice-donut{stroke:#6b0392}:host:not(.without-styles) ::ng-deep .ct-series-h .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-h .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-h .ct-slice-pie{fill:#6b0392}:host:not(.without-styles) ::ng-deep .ct-series-i .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-i .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-i .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-i .ct-slice-donut{stroke:#f05b4f}:host:not(.without-styles) ::ng-deep .ct-series-i .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-i .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-i .ct-slice-pie{fill:#f05b4f}:host:not(.without-styles) ::ng-deep .ct-series-j .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-j .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-j .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-j .ct-slice-donut{stroke:#dda458}:host:not(.without-styles) ::ng-deep .ct-series-j .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-j .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-j .ct-slice-pie{fill:#dda458}:host:not(.without-styles) ::ng-deep .ct-series-k .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-k .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-k .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-k .ct-slice-donut{stroke:#eacf7d}:host:not(.without-styles) ::ng-deep .ct-series-k .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-k .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-k .ct-slice-pie{fill:#eacf7d}:host:not(.without-styles) ::ng-deep .ct-series-l .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-l .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-l .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-l .ct-slice-donut{stroke:#86797d}:host:not(.without-styles) ::ng-deep .ct-series-l .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-l .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-l .ct-slice-pie{fill:#86797d}:host:not(.without-styles) ::ng-deep .ct-series-m .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-m .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-m .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-m .ct-slice-donut{stroke:#b2c326}:host:not(.without-styles) ::ng-deep .ct-series-m .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-m .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-m .ct-slice-pie{fill:#b2c326}:host:not(.without-styles) ::ng-deep .ct-series-n .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-n .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-n .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-n .ct-slice-donut{stroke:#6188e2}:host:not(.without-styles) ::ng-deep .ct-series-n .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-n .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-n .ct-slice-pie{fill:#6188e2}:host:not(.without-styles) ::ng-deep .ct-series-o .ct-bar,:host:not(.without-styles) ::ng-deep .ct-series-o .ct-line,:host:not(.without-styles) ::ng-deep .ct-series-o .ct-point,:host:not(.without-styles) ::ng-deep .ct-series-o .ct-slice-donut{stroke:#a748ca}:host:not(.without-styles) ::ng-deep .ct-series-o .ct-area,:host:not(.without-styles) ::ng-deep .ct-series-o .ct-slice-donut-solid,:host:not(.without-styles) ::ng-deep .ct-series-o .ct-slice-pie{fill:#a748ca}:host:not(.without-styles) ::ng-deep .ct-square{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-square:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:100%}:host:not(.without-styles) ::ng-deep .ct-square:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-square>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-minor-second{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-minor-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:93.75%}:host:not(.without-styles) ::ng-deep .ct-minor-second:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-minor-second>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-second{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:88.88889%}:host:not(.without-styles) ::ng-deep .ct-major-second:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-second>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-minor-third{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-minor-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:83.33333%}:host:not(.without-styles) ::ng-deep .ct-minor-third:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-minor-third>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-third{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:80%}:host:not(.without-styles) ::ng-deep .ct-major-third:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-third>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-perfect-fourth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-perfect-fourth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:75%}:host:not(.without-styles) ::ng-deep .ct-perfect-fourth:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-perfect-fourth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-perfect-fifth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-perfect-fifth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:66.66667%}:host:not(.without-styles) ::ng-deep .ct-perfect-fifth:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-perfect-fifth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-minor-sixth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-minor-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:62.5%}:host:not(.without-styles) ::ng-deep .ct-minor-sixth:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-minor-sixth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-golden-section{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-golden-section:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:61.8047%}:host:not(.without-styles) ::ng-deep .ct-golden-section:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-golden-section>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-sixth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:60%}:host:not(.without-styles) ::ng-deep .ct-major-sixth:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-sixth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-minor-seventh{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-minor-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:56.25%}:host:not(.without-styles) ::ng-deep .ct-minor-seventh:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-minor-seventh>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-seventh{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:53.33333%}:host:not(.without-styles) ::ng-deep .ct-major-seventh:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-seventh>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-octave{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:50%}:host:not(.without-styles) ::ng-deep .ct-octave:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-octave>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-tenth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-tenth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:40%}:host:not(.without-styles) ::ng-deep .ct-major-tenth:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-tenth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-eleventh{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-eleventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:37.5%}:host:not(.without-styles) ::ng-deep .ct-major-eleventh:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-eleventh>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-major-twelfth{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-major-twelfth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:33.33333%}:host:not(.without-styles) ::ng-deep .ct-major-twelfth:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-major-twelfth>svg{display:block;position:absolute;top:0;left:0}:host:not(.without-styles) ::ng-deep .ct-double-octave{display:block;position:relative;width:100%}:host:not(.without-styles) ::ng-deep .ct-double-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:25%}:host:not(.without-styles) ::ng-deep .ct-double-octave:after{content:"";display:table;clear:both}:host:not(.without-styles) ::ng-deep .ct-double-octave>svg{display:block;position:absolute;top:0;left:0}`]
            }] }
];
NgxChartistComponent.ctorParameters = () => [
    { type: ElementRef }
];
NgxChartistComponent.propDecorators = {
    data: [{ type: Input }],
    type: [{ type: Input }],
    options: [{ type: Input }],
    lineSmooth: [{ type: Input }],
    responsiveOptions: [{ type: Input }],
    events: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxChartistModule {
}
NgxChartistModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [NgxChartistComponent],
                exports: [NgxChartistComponent],
                providers: [
                    NgxChartistService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxChartistService, NgxChartistComponent, NgxChartistModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoYXJ0aXN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtY2hhcnRpc3QvbGliL25neC1jaGFydGlzdC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtY2hhcnRpc3QvbGliL25neC1jaGFydGlzdC5jb21wb25lbnQudHMiLCJuZzovL25neC1jaGFydGlzdC9saWIvbmd4LWNoYXJ0aXN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBDaGFydGlzdCBmcm9tICdjaGFydGlzdCc7XG5cbmV4cG9ydCB0eXBlIElDaGFydGlzdEVzY2FwZU1hcCA9IENoYXJ0aXN0LklDaGFydGlzdEVzY2FwZU1hcDtcbmV4cG9ydCB0eXBlIElDaGFydGlzdFBpZUNoYXJ0ID0gQ2hhcnRpc3QuSUNoYXJ0aXN0UGllQ2hhcnQ7XG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RCYXJDaGFydCA9IENoYXJ0aXN0LklDaGFydGlzdEJhckNoYXJ0O1xuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0TGluZUNoYXJ0ID0gQ2hhcnRpc3QuSUNoYXJ0aXN0TGluZUNoYXJ0O1xuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0Q2FuZGxlQ2hhcnQgPSBDaGFydGlzdC5JQ2hhcnRpc3RDYW5kbGVDaGFydDtcbmV4cG9ydCB0eXBlIElGaXhlZFNjYWxlQXhpc1N0YXRpYyA9IENoYXJ0aXN0LklGaXhlZFNjYWxlQXhpc1N0YXRpYztcbmV4cG9ydCB0eXBlIElBdXRvU2NhbGVBeGlzU3RhdGljID0gQ2hhcnRpc3QuSUF1dG9TY2FsZUF4aXNTdGF0aWM7XG5leHBvcnQgdHlwZSBJU3RlcEF4aXNTdGF0aWMgPSBDaGFydGlzdC5JU3RlcEF4aXNTdGF0aWM7XG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RTdmdTdGF0aWMgPSBDaGFydGlzdC5DaGFydGlzdFN2Z1N0YXRpYztcbmV4cG9ydCB0eXBlIElDaGFydGlzdEludGVycG9sYXRpb25TdGF0aWMgPSBDaGFydGlzdC5DaGFydGlzdEludGVycG9sYXRpb25TdGF0aWM7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neENoYXJ0aXN0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRQcmVjaXNpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QucHJlY2lzaW9uO1xuICB9XG5cbiAgZ2V0RXNjYXBpbmdNYXAoKTogSUNoYXJ0aXN0RXNjYXBlTWFwIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuZXNjYXBpbmdNYXA7XG4gIH1cblxuICBnZXRQaWUoKTogSUNoYXJ0aXN0UGllQ2hhcnQge1xuICAgIHJldHVybiBDaGFydGlzdC5QaWU7XG4gIH1cblxuICBnZXRCYXIoKTogSUNoYXJ0aXN0QmFyQ2hhcnQge1xuICAgIHJldHVybiBDaGFydGlzdC5CYXI7XG4gIH1cblxuICBnZXRMaW5lKCk6IElDaGFydGlzdExpbmVDaGFydCB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LkxpbmU7XG4gIH1cblxuICBnZXRDYW5kbGUoKTogSUNoYXJ0aXN0Q2FuZGxlQ2hhcnQge1xuICAgIHJldHVybiBDaGFydGlzdC5DYW5kbGU7XG4gIH1cblxuICBnZXRGaXhlZFNjYWxlQXhpcygpOiBJRml4ZWRTY2FsZUF4aXNTdGF0aWMge1xuICAgIHJldHVybiBDaGFydGlzdC5GaXhlZFNjYWxlQXhpcztcbiAgfVxuXG4gIGdldEF1dG9TY2FsZUF4aXMoKTogSUF1dG9TY2FsZUF4aXNTdGF0aWMge1xuICAgIHJldHVybiBDaGFydGlzdC5BdXRvU2NhbGVBeGlzO1xuICB9XG5cbiAgZ2V0U3RlcEF4aXMoKTogSVN0ZXBBeGlzU3RhdGljIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuU3RlcEF4aXM7XG4gIH1cblxuICBnZXRTdmcoKTogSUNoYXJ0aXN0U3ZnU3RhdGljIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuU3ZnO1xuICB9XG5cbiAgZ2V0SW50ZXJwb2xhdGlvbigpOiBJQ2hhcnRpc3RJbnRlcnBvbGF0aW9uU3RhdGljIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIGdldE5vb3AoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiBDaGFydGlzdC5ub29wO1xuICB9XG5cbiAgZ2V0UGx1Z2lucygpOiBhbnkge1xuICAgIHJldHVybiBDaGFydGlzdC5wbHVnaW5zO1xuICB9XG5cbiAgYWxwaGFOdW1lcmF0ZShuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBDaGFydGlzdC5hbHBoYU51bWVyYXRlKG4pO1xuICB9XG5cbiAgZXh0ZW5kKHRhcmdldDogT2JqZWN0LCAuLi5zb3VyY2VzOiBPYmplY3RbXSk6IE9iamVjdCB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LmV4dGVuZCh0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgcmVwbGFjZUFsbChzdHI6IHN0cmluZywgc3ViU3RyOiBzdHJpbmcsIG5ld1N1YlN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QucmVwbGFjZUFsbChzdHIsIHN1YlN0ciwgbmV3U3ViU3RyKTtcbiAgfVxuXG4gIGVuc3VyZVVuaXQodmFsdWU6IG51bWJlciwgdW5pdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuZW5zdXJlVW5pdCh2YWx1ZSwgdW5pdCk7XG4gIH1cblxuICBxdWFudGl0eShpbnB1dDogc3RyaW5nIHwgbnVtYmVyKTogT2JqZWN0IHtcbiAgICByZXR1cm4gQ2hhcnRpc3QucXVhbnRpdHkoaW5wdXQpO1xuICB9XG5cbiAgcXVlcnkocXVlcnk6IE5vZGUgfCBzdHJpbmcpOiBOb2RlIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QucXVlcnkocXVlcnkpO1xuICB9XG5cbiAgdGltZXMobGVuZ3RoOiBudW1iZXIpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gQ2hhcnRpc3QudGltZXMobGVuZ3RoKTtcbiAgfVxuXG4gIHN1bShwcmV2aW91czogbnVtYmVyLCBjdXJyZW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBDaGFydGlzdC5zdW0ocHJldmlvdXMsIGN1cnJlbnQpO1xuICB9XG5cbiAgbWFwTXVsdGlwbHkoZmFjdG9yOiBudW1iZXIpOiAobnVtOiBudW1iZXIpID0+IG51bWJlciB7XG4gICAgcmV0dXJuIENoYXJ0aXN0Lm1hcE11bHRpcGx5KGZhY3Rvcik7XG4gIH1cblxuICBtYXBBZGQoYWRkZW5kOiBudW1iZXIpOiAobnVtOiBudW1iZXIpID0+IG51bWJlciB7XG4gICAgcmV0dXJuIENoYXJ0aXN0Lm1hcEFkZChhZGRlbmQpO1xuICB9XG5cbiAgc2VyaWFsTWFwKGFycjogQXJyYXk8YW55PiwgY2I6IEZ1bmN0aW9uKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LnNlcmlhbE1hcChhcnIsIGNiKTtcbiAgfVxuXG4gIHJvdW5kV2l0aFByZWNpc2lvbih2YWx1ZTogbnVtYmVyLCBkaWdpdHM/OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBDaGFydGlzdC5yb3VuZFdpdGhQcmVjaXNpb24odmFsdWUsIGRpZ2l0cyk7XG4gIH1cblxuICBnZXRNdWx0aVZhbHVlKHZhbHVlOiBhbnksIGRpbWVuc2lvbj86IGFueSk6IG51bWJlciB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LmdldE11bHRpVmFsdWUodmFsdWUsIGRpbWVuc2lvbik7XG4gIH1cblxuICBzZXJpYWxpemUoZGF0YTogT2JqZWN0IHwgc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQ2hhcnRpc3Quc2VyaWFsaXplKGRhdGEpO1xuICB9XG5cbiAgZGVzZXJpYWxpemUoZGF0YTogc3RyaW5nKTogT2JqZWN0IHwgc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuZGVzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICBjcmVhdGVTdmcoY29udGFpbmVyOiBOb2RlLCB3aWR0aDogc3RyaW5nLCBoZWlnaHQ6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBPYmplY3Qge1xuICAgIHJldHVybiBDaGFydGlzdC5jcmVhdGVTdmcoY29udGFpbmVyLCB3aWR0aCwgaGVpZ2h0LCBjbGFzc05hbWUpO1xuICB9XG5cbiAgLy8gVGhlc2UgbWV0aG9kcyBhcmUgZGVwcmVjYXRlZFxuICAvKlxuICBwdWJsaWMgZ2VuZXJhdGVTdmcobmFtZTogSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGF0dHJpYnV0ZXM6IE9iamVjdCwgY2xhc3NOYW1lPzogc3RyaW5nLCBwYXJlbnQ/OiBPYmplY3QsIGluc2VydEZpcnN0PzogYm9vbGVhbik6IENoYXJ0U3ZnIHtcbiAgICByZXR1cm4gbmV3IENoYXJ0aXN0LlN2ZyhuYW1lLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHBhcmVudCwgaW5zZXJ0Rmlyc3QpO1xuICB9XG4gIHB1YmxpYyBnZXRTdmdFYXNpbmcoZWFzaW5nTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LlN2Zy5FYXNpbmdbZWFzaW5nTmFtZV07XG4gIH1cbiAgcHVibGljIGdldEludGVycG9sYXRpb25GdW5jdGlvbihpbnRlcnBvbGF0aW9uVHlwZTogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uW2ludGVycG9sYXRpb25UeXBlXTtcbiAgfVxuICBwdWJsaWMgZ2V0Q2hhcnRpc3RWYXIobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gQ2hhcnRpc3RbJ25hbWUnXTtcbiAgfVxuICAqL1xuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBDaGFydGlzdCBmcm9tICdjaGFydGlzdCc7XG5pbXBvcnQge0lQaWVDaGFydE9wdGlvbnN9IGZyb20gJ2NoYXJ0aXN0JztcblxuLy8gd29ya2Fyb3VuZCwgdW50aWwgaHR0cHM6Ly9naXRodWIuY29tL0RlZmluaXRlbHlUeXBlZC9EZWZpbml0ZWx5VHlwZWQvcHVsbC8yNTgzOSNpc3N1ZWNvbW1lbnQtMzg5ODMzMjI1XG4vLyBpcyBtZXJnZWRcbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmVDaGFydE9wdGlvbnMgZXh0ZW5kcyBDaGFydGlzdC5JQ2hhcnRPcHRpb25zIHtcbiAgYXhpc1g/OiBDaGFydGlzdC5JQ2hhcnRpc3RTdGVwQXhpcyB8IENoYXJ0aXN0LklDaGFydGlzdEZpeGVkU2NhbGVBeGlzIHwgQ2hhcnRpc3QuSUNoYXJ0aXN0QXV0b1NjYWxlQXhpcztcbiAgYXhpc1k/OiBDaGFydGlzdC5JQ2hhcnRpc3RTdGVwQXhpcyB8IENoYXJ0aXN0LklDaGFydGlzdEZpeGVkU2NhbGVBeGlzIHwgQ2hhcnRpc3QuSUNoYXJ0aXN0QXV0b1NjYWxlQXhpcztcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIGhlaWdodD86IG51bWJlciB8IHN0cmluZztcbiAgc2hvd0xpbmU/OiBib29sZWFuO1xuICBzaG93UG9pbnQ/OiBib29sZWFuO1xuICBzaG93QXJlYT86IGJvb2xlYW47XG4gIGFyZWFCYXNlPzogbnVtYmVyO1xuICBsaW5lU21vb3RoPzogRnVuY3Rpb24gfCBib29sZWFuO1xuICBsb3c/OiBudW1iZXI7XG4gIGhpZ2g/OiBudW1iZXI7XG4gIHRpY2tzPzogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPjtcbiAgY2hhcnRQYWRkaW5nPzogQ2hhcnRpc3QuSUNoYXJ0UGFkZGluZztcbiAgZnVsbFdpZHRoPzogYm9vbGVhbjtcbiAgY2xhc3NOYW1lcz86IENoYXJ0aXN0LklMaW5lQ2hhcnRDbGFzc2VzO1xuICBzZXJpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiB7XG4gICAgICBsaW5lU21vb3RoPzogRnVuY3Rpb24gfCBib29sZWFuO1xuICAgICAgc2hvd0xpbmU/OiBib29sZWFuO1xuICAgICAgc2hvd1BvaW50PzogYm9vbGVhbjtcbiAgICAgIHNob3dBcmVhPzogYm9vbGVhbjtcbiAgICAgIGFyZWFCYXNlPzogbnVtYmVyO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBQb3NzaWJsZSBjaGFydCB0eXBlc1xuICogQHR5cGUge1N0cmluZ31cbiAqL1xuZXhwb3J0IHR5cGUgSUNoYXJ0aXN0VHlwZSA9ICdQaWUnIHwgJ0JhcicgfCAnTGluZSc7XG5cbmV4cG9ydCB0eXBlIElDaGFydGlzdEJhc2UgPVxuICB8IENoYXJ0aXN0LklDaGFydGlzdFBpZUNoYXJ0XG4gIHwgQ2hhcnRpc3QuSUNoYXJ0aXN0QmFyQ2hhcnRcbiAgfCBDaGFydGlzdC5JQ2hhcnRpc3RMaW5lQ2hhcnQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0aXN0TGluZVNtb290aCB7XG4gIGludGVycG9sYXRpb246ICdjYXJkaW5hbCcgfCAnc2ltcGxlJyB8ICdub25lJyB8ICdzdGVwJztcbiAgZGF0YTogQ2hhcnRpc3QuSUNoYXJ0aXN0SW50ZXJwb2xhdGlvbk9wdGlvbnMgfCBDaGFydGlzdC5JQ2hhcnRpc3RTaW1wbGVJbnRlcnBvbGF0aW9uT3B0aW9uc1xuICAgIHwgQ2hhcnRpc3QuSUNoYXJ0aXN0Q2FyZGluYWxJbnRlcnBvbGF0aW9uT3B0aW9ucyB8IENoYXJ0aXN0LklDaGFydGlzdFN0ZXBJbnRlcnBvbGF0aW9uT3B0aW9ucztcbn1cblxuLy8gU1RBUlQgV09SS0FST1VORCAoYnVncyBpbiBcInRpbWUtc2VyaWVzLXdpdGgtbW9tZW50anNcIiBhbmQgXCJob2xlcy1pbi1kYXRhXCIgYW5kIFwiZmlsbGVkLWhvbGVzLWluLWRhdGFcIilcbi8vIFRPRE86IGRvIGEgcHVsbC1yZXF1ZXN0IGluIEB0eXBlcy9jaGFydGlzdHMgd2l0aCB0aGlzIGZpeFxuLy8gVGhpcyBpcyBvbmUgb2YgdGhlIGJ1Z3MgcmVwb3J0ZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9naW9ua3Vuei9jaGFydGlzdC1qcy9pc3N1ZXMvMTA3NlxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnRpc3REYXRhUG9pbnQge1xuICB4OiBudW1iZXIgfCBEYXRlO1xuICB5OiBudW1iZXIgfCBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnRpc3RTZXJpZXNEYXRhIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmFsdWU/OiBudW1iZXI7XG4gIGRhdGE/OiBBcnJheTxudW1iZXI+IHwgQXJyYXk8SUNoYXJ0aXN0RGF0YVBvaW50PjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBtZXRhPzogc3RyaW5nOyAvLyBJIGFzc3VtZSB0aGlzIGNvdWxkIHByb2JhYmx5IGJlIGEgbnVtYmVyIGFzIHdlbGw/XG59XG5leHBvcnQgaW50ZXJmYWNlIElDaGFydGlzdERhdGEge1xuICBsYWJlbHM/OiBBcnJheTxzdHJpbmc+IHwgQXJyYXk8bnVtYmVyPiB8IEFycmF5PERhdGU+O1xuICBzZXJpZXM6IEFycmF5PElDaGFydGlzdFNlcmllc0RhdGE+IHwgQXJyYXk8QXJyYXk8SUNoYXJ0aXN0RGF0YT4+IHwgQXJyYXk8bnVtYmVyPiB8ICBBcnJheTxBcnJheTxudW1iZXI+IHwgQXJyYXk8SUNoYXJ0aXN0RGF0YVBvaW50Pj47XG59XG5cbi8vIGV4cG9ydCB0eXBlIElDaGFydGlzdERhdGEgPSBDaGFydGlzdC5JQ2hhcnRpc3REYXRhO1xuXG4vLyBFTkQgV09SS0FST1VORFxuXG5cbi8vIHdvcmthcm91bmQsIHVudGlsIGh0dHBzOi8vZ2l0aHViLmNvbS9EZWZpbml0ZWx5VHlwZWQvRGVmaW5pdGVseVR5cGVkL3B1bGwvMjU4MzkjaXNzdWVjb21tZW50LTM4OTgzMzIyNVxuLy8gaXMgbWVyZ2VkXG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RPcHRpb25zID0gSUxpbmVDaGFydE9wdGlvbnMgfCBDaGFydGlzdC5JQmFyQ2hhcnRPcHRpb25zIHwgSVBpZUNoYXJ0T3B0aW9ucztcbi8vIGV4cG9ydCB0eXBlIElDaGFydGlzdE9wdGlvbnMgPSBDaGFydGlzdC5JTGluZUNoYXJ0T3B0aW9ucyB8IENoYXJ0aXN0LklCYXJDaGFydE9wdGlvbnMgfCBJUGllQ2hhcnRPcHRpb25zO1xuXG4vLyBUaGUgcmlnaHQgd2F5IHdvdWxkIGJlIGhlcmUgXCJDaGFydGlzdC5JUmVzcG9uc2l2ZU9wdGlvblR1cGxlPENoYXJ0T3B0aW9ucz47XCIsXG4vLyBidXQgdGhlcmUgYXJlIHByb2JsZW1zIHdoZW4gY3JlYXRpbmcgYSB2YXJpYWJsZSB3aXRoIHN1Y2ggYSB0eXBlXG5leHBvcnQgdHlwZSBJQ2hhcnRpc3RSZXNwb25zaXZlT3B0aW9uVHVwbGUgPSBBcnJheTxzdHJpbmcgfCBJQ2hhcnRpc3RPcHRpb25zPjtcbmV4cG9ydCB0eXBlIElDaGFydGlzdFJlc3BvbnNpdmVPcHRpb25zID0gSUNoYXJ0aXN0UmVzcG9uc2l2ZU9wdGlvblR1cGxlW107XG5cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnRpc3RFdmVudCB7XG4gIFtldmVudE5hbWU6IHN0cmluZ106IChkYXRhOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0aXN0U2V0dGluZ3NUeXBlIHtcbiAgZGF0YTogSUNoYXJ0aXN0RGF0YTtcbiAgb3B0aW9uczogSUNoYXJ0aXN0T3B0aW9ucztcbiAgZXZlbnRzPzogSUNoYXJ0aXN0RXZlbnQ7XG4gIGxpbmVTbW9vdGg/OiBJQ2hhcnRpc3RMaW5lU21vb3RoO1xuICByZXNwb25zaXZlT3B0aW9ucz86IElDaGFydGlzdFJlc3BvbnNpdmVPcHRpb25zO1xuICB0eXBlPzogSUNoYXJ0aXN0VHlwZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC1jaGFydGlzdCcsXG4gIHN0eWxlczogW2A6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWxhYmVse2ZpbGw6cmdiYSgwLDAsMCwuNCk7Y29sb3I6cmdiYSgwLDAsMCwuNCk7Zm9udC1zaXplOi43NXJlbTtsaW5lLWhlaWdodDoxfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtY2hhcnQtYmFyIC5jdC1sYWJlbCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWNoYXJ0LWxpbmUgLmN0LWxhYmVse2Rpc3BsYXk6YmxvY2s7ZGlzcGxheTpmbGV4fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtY2hhcnQtZG9udXQgLmN0LWxhYmVsLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtY2hhcnQtcGllIC5jdC1sYWJlbHtkb21pbmFudC1iYXNlbGluZTpjZW50cmFsfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1zdGFydHthbGlnbi1pdGVtczpmbGV4LWVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt0ZXh0LWFsaWduOmxlZnQ7dGV4dC1hbmNob3I6c3RhcnR9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LWVuZHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3RleHQtYWxpZ246bGVmdDt0ZXh0LWFuY2hvcjpzdGFydH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWxhYmVsLmN0LXZlcnRpY2FsLmN0LXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDt0ZXh0LWFsaWduOnJpZ2h0O3RleHQtYW5jaG9yOmVuZH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWxhYmVsLmN0LXZlcnRpY2FsLmN0LWVuZHthbGlnbi1pdGVtczpmbGV4LWVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt0ZXh0LWFsaWduOmxlZnQ7dGV4dC1hbmNob3I6c3RhcnR9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1jaGFydC1iYXIgLmN0LWxhYmVsLmN0LWhvcml6b250YWwuY3Qtc3RhcnR7YWxpZ24taXRlbXM6ZmxleC1lbmQ7anVzdGlmeS1jb250ZW50OmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWFuY2hvcjpzdGFydH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWNoYXJ0LWJhciAuY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1lbmR7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyO3RleHQtYW5jaG9yOnN0YXJ0fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtY2hhcnQtYmFyLmN0LWhvcml6b250YWwtYmFycyAuY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1zdGFydHthbGlnbi1pdGVtczpmbGV4LWVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt0ZXh0LWFsaWduOmxlZnQ7dGV4dC1hbmNob3I6c3RhcnR9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1jaGFydC1iYXIuY3QtaG9yaXpvbnRhbC1iYXJzIC5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LWVuZHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3RleHQtYWxpZ246bGVmdDt0ZXh0LWFuY2hvcjpzdGFydH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWNoYXJ0LWJhci5jdC1ob3Jpem9udGFsLWJhcnMgLmN0LWxhYmVsLmN0LXZlcnRpY2FsLmN0LXN0YXJ0e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7dGV4dC1hbGlnbjpyaWdodDt0ZXh0LWFuY2hvcjplbmR9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1jaGFydC1iYXIuY3QtaG9yaXpvbnRhbC1iYXJzIC5jdC1sYWJlbC5jdC12ZXJ0aWNhbC5jdC1lbmR7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3RleHQtYWxpZ246bGVmdDt0ZXh0LWFuY2hvcjplbmR9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1ncmlke3N0cm9rZTpyZ2JhKDAsMCwwLC4yKTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1kYXNoYXJyYXk6MnB4fTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtZ3JpZC1iYWNrZ3JvdW5ke2ZpbGw6bm9uZX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXBvaW50e3N0cm9rZS13aWR0aDoxMHB4O3N0cm9rZS1saW5lY2FwOnJvdW5kfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbGluZXtmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjRweH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWFyZWF7c3Ryb2tlOm5vbmU7ZmlsbC1vcGFjaXR5Oi4xfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtYmFye2ZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MTBweH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNsaWNlLWRvbnV0e2ZpbGw6bm9uZTtzdHJva2Utd2lkdGg6NjBweH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1hIC5jdC1iYXIsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYSAuY3QtbGluZSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1hIC5jdC1wb2ludCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1hIC5jdC1zbGljZS1kb251dHtzdHJva2U6I2Q3MDIwNn06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1hIC5jdC1hcmVhLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0LXNvbGlkLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLXBpZXtmaWxsOiNkNzAyMDZ9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYiAuY3QtYmFyLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWIgLmN0LWxpbmUsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYiAuY3Qtc2xpY2UtZG9udXR7c3Ryb2tlOiNmMDViNGZ9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1iIC5jdC1zbGljZS1kb251dC1zb2xpZCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1iIC5jdC1zbGljZS1waWV7ZmlsbDojZjA1YjRmfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWMgLmN0LWJhciw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1jIC5jdC1saW5lLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWMgLmN0LXBvaW50LDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWMgLmN0LXNsaWNlLWRvbnV0e3N0cm9rZTojZjRjNjNkfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWMgLmN0LWFyZWEsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYyAuY3Qtc2xpY2UtZG9udXQtc29saWQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtYyAuY3Qtc2xpY2UtcGlle2ZpbGw6I2Y0YzYzZH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1kIC5jdC1iYXIsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZCAuY3QtbGluZSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1kIC5jdC1wb2ludCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1kIC5jdC1zbGljZS1kb251dHtzdHJva2U6I2QxNzkwNX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1kIC5jdC1hcmVhLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWQgLmN0LXNsaWNlLWRvbnV0LXNvbGlkLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWQgLmN0LXNsaWNlLXBpZXtmaWxsOiNkMTc5MDV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZSAuY3QtYmFyLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWUgLmN0LWxpbmUsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZSAuY3QtcG9pbnQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZSAuY3Qtc2xpY2UtZG9udXR7c3Ryb2tlOiM0NTNkM2Z9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZSAuY3QtYXJlYSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1lIC5jdC1zbGljZS1kb251dC1zb2xpZCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1lIC5jdC1zbGljZS1waWV7ZmlsbDojNDUzZDNmfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWYgLmN0LWJhciw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1mIC5jdC1saW5lLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWYgLmN0LXBvaW50LDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWYgLmN0LXNsaWNlLWRvbnV0e3N0cm9rZTojNTk5MjJifTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWYgLmN0LWFyZWEsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZiAuY3Qtc2xpY2UtZG9udXQtc29saWQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZiAuY3Qtc2xpY2UtcGlle2ZpbGw6IzU5OTIyYn06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1nIC5jdC1iYXIsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtZyAuY3QtbGluZSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1nIC5jdC1wb2ludCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1nIC5jdC1zbGljZS1kb251dHtzdHJva2U6IzA1NDRkM306aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1nIC5jdC1hcmVhLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWcgLmN0LXNsaWNlLWRvbnV0LXNvbGlkLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWcgLmN0LXNsaWNlLXBpZXtmaWxsOiMwNTQ0ZDN9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaCAuY3QtYmFyLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWggLmN0LWxpbmUsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaCAuY3QtcG9pbnQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaCAuY3Qtc2xpY2UtZG9udXR7c3Ryb2tlOiM2YjAzOTJ9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaCAuY3QtYXJlYSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1oIC5jdC1zbGljZS1kb251dC1zb2xpZCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1oIC5jdC1zbGljZS1waWV7ZmlsbDojNmIwMzkyfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWkgLmN0LWJhciw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1pIC5jdC1saW5lLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWkgLmN0LXBvaW50LDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWkgLmN0LXNsaWNlLWRvbnV0e3N0cm9rZTojZjA1YjRmfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWkgLmN0LWFyZWEsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaSAuY3Qtc2xpY2UtZG9udXQtc29saWQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaSAuY3Qtc2xpY2UtcGlle2ZpbGw6I2YwNWI0Zn06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1qIC5jdC1iYXIsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtaiAuY3QtbGluZSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1qIC5jdC1wb2ludCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1qIC5jdC1zbGljZS1kb251dHtzdHJva2U6I2RkYTQ1OH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1qIC5jdC1hcmVhLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWogLmN0LXNsaWNlLWRvbnV0LXNvbGlkLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWogLmN0LXNsaWNlLXBpZXtmaWxsOiNkZGE0NTh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtayAuY3QtYmFyLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWsgLmN0LWxpbmUsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtayAuY3QtcG9pbnQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtayAuY3Qtc2xpY2UtZG9udXR7c3Ryb2tlOiNlYWNmN2R9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtayAuY3QtYXJlYSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1rIC5jdC1zbGljZS1kb251dC1zb2xpZCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1rIC5jdC1zbGljZS1waWV7ZmlsbDojZWFjZjdkfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWwgLmN0LWJhciw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1sIC5jdC1saW5lLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWwgLmN0LXBvaW50LDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWwgLmN0LXNsaWNlLWRvbnV0e3N0cm9rZTojODY3OTdkfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLWwgLmN0LWFyZWEsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbCAuY3Qtc2xpY2UtZG9udXQtc29saWQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbCAuY3Qtc2xpY2UtcGlle2ZpbGw6Izg2Nzk3ZH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1tIC5jdC1iYXIsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbSAuY3QtbGluZSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1tIC5jdC1wb2ludCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1tIC5jdC1zbGljZS1kb251dHtzdHJva2U6I2IyYzMyNn06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1tIC5jdC1hcmVhLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW0gLmN0LXNsaWNlLWRvbnV0LXNvbGlkLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW0gLmN0LXNsaWNlLXBpZXtmaWxsOiNiMmMzMjZ9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbiAuY3QtYmFyLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW4gLmN0LWxpbmUsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbiAuY3QtcG9pbnQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbiAuY3Qtc2xpY2UtZG9udXR7c3Ryb2tlOiM2MTg4ZTJ9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbiAuY3QtYXJlYSw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1uIC5jdC1zbGljZS1kb251dC1zb2xpZCw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1uIC5jdC1zbGljZS1waWV7ZmlsbDojNjE4OGUyfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW8gLmN0LWJhciw6aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNlcmllcy1vIC5jdC1saW5lLDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW8gLmN0LXBvaW50LDpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW8gLmN0LXNsaWNlLWRvbnV0e3N0cm9rZTojYTc0OGNhfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc2VyaWVzLW8gLmN0LWFyZWEsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbyAuY3Qtc2xpY2UtZG9udXQtc29saWQsOmhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zZXJpZXMtbyAuY3Qtc2xpY2UtcGlle2ZpbGw6I2E3NDhjYX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXNxdWFyZXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zcXVhcmU6YmVmb3Jle2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDtjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbToxMDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtc3F1YXJlOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1zcXVhcmU+c3Zne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWlub3Itc2Vjb25ke2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXNlY29uZDpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjkzLjc1JX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXNlY29uZDphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTp0YWJsZTtjbGVhcjpib3RofTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWlub3Itc2Vjb25kPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXNlY29uZHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci1zZWNvbmQ6YmVmb3Jle2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDtjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbTo4OC44ODg4OSV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci1zZWNvbmQ6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXNlY29uZD5zdmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1taW5vci10aGlyZHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1taW5vci10aGlyZDpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjgzLjMzMzMzJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXRoaXJkOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1taW5vci10aGlyZD5zdmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci10aGlyZHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci10aGlyZDpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjgwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXRoaXJkOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci10aGlyZD5zdmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1wZXJmZWN0LWZvdXJ0aHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1wZXJmZWN0LWZvdXJ0aDpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjc1JX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXBlcmZlY3QtZm91cnRoOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1wZXJmZWN0LWZvdXJ0aD5zdmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1wZXJmZWN0LWZpZnRoe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LXBlcmZlY3QtZmlmdGg6YmVmb3Jle2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDtjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbTo2Ni42NjY2NyV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1wZXJmZWN0LWZpZnRoOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1wZXJmZWN0LWZpZnRoPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXNpeHRoe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXNpeHRoOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206NjIuNSV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1taW5vci1zaXh0aDphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTp0YWJsZTtjbGVhcjpib3RofTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWlub3Itc2l4dGg+c3Zne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtZ29sZGVuLXNlY3Rpb257ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtZ29sZGVuLXNlY3Rpb246YmVmb3Jle2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDtjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbTo2MS44MDQ3JX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWdvbGRlbi1zZWN0aW9uOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1nb2xkZW4tc2VjdGlvbj5zdmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci1zaXh0aHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci1zaXh0aDpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjYwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXNpeHRoOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci1zaXh0aD5zdmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1taW5vci1zZXZlbnRoe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1pbm9yLXNldmVudGg6YmVmb3Jle2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDtjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbTo1Ni4yNSV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1taW5vci1zZXZlbnRoOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1taW5vci1zZXZlbnRoPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXNldmVudGh7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3Itc2V2ZW50aDpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjUzLjMzMzMzJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXNldmVudGg6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXNldmVudGg+c3Zne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtb2N0YXZle2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW9jdGF2ZTpiZWZvcmV7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjUwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW9jdGF2ZTphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTp0YWJsZTtjbGVhcjpib3RofTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3Qtb2N0YXZlPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXRlbnRoe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXRlbnRoOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206NDAlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3ItdGVudGg6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLXRlbnRoPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLWVsZXZlbnRoe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LW1ham9yLWVsZXZlbnRoOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206MzcuNSV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci1lbGV2ZW50aDphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTp0YWJsZTtjbGVhcjpib3RofTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3ItZWxldmVudGg+c3Zne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3ItdHdlbGZ0aHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1tYWpvci10d2VsZnRoOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206MzMuMzMzMzMlfTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3ItdHdlbGZ0aDphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTp0YWJsZTtjbGVhcjpib3RofTpob3N0Om5vdCgud2l0aG91dC1zdHlsZXMpIDo6bmctZGVlcCAuY3QtbWFqb3ItdHdlbGZ0aD5zdmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1kb3VibGUtb2N0YXZle2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdDpub3QoLndpdGhvdXQtc3R5bGVzKSA6Om5nLWRlZXAgLmN0LWRvdWJsZS1vY3RhdmU6YmVmb3Jle2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDtjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbToyNSV9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1kb3VibGUtb2N0YXZlOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9Omhvc3Q6bm90KC53aXRob3V0LXN0eWxlcykgOjpuZy1kZWVwIC5jdC1kb3VibGUtb2N0YXZlPnN2Z3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH1gXSxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIE5neENoYXJ0aXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGRhdGE6IFByb21pc2U8SUNoYXJ0aXN0RGF0YT4gfCBJQ2hhcnRpc3REYXRhO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyB0eXBlOiBQcm9taXNlPElDaGFydGlzdFR5cGU+IHwgSUNoYXJ0aXN0VHlwZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgb3B0aW9uczogUHJvbWlzZTxJQ2hhcnRpc3RPcHRpb25zPiB8IElDaGFydGlzdE9wdGlvbnM7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGxpbmVTbW9vdGg6IFByb21pc2U8SUNoYXJ0aXN0TGluZVNtb290aD4gfCBJQ2hhcnRpc3RMaW5lU21vb3RoO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByZXNwb25zaXZlT3B0aW9uczogUHJvbWlzZTxJQ2hhcnRpc3RSZXNwb25zaXZlT3B0aW9ucz4gfCBJQ2hhcnRpc3RSZXNwb25zaXZlT3B0aW9ucztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZXZlbnRzOiBQcm9taXNlPElDaGFydGlzdEV2ZW50PiB8IElDaGFydGlzdEV2ZW50O1xuXG4gIHB1YmxpYyBjaGFydDogSUNoYXJ0aXN0QmFzZTtcblxuXG4gIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiBQcm9taXNlPElDaGFydGlzdEJhc2U+IHtcbiAgICBpZiAoIXRoaXMudHlwZSB8fCAhdGhpcy5kYXRhKSB7XG4gICAgICBQcm9taXNlLnJlamVjdCgnRXhwZWN0ZWQgYXQgbGVhc3QgdHlwZSBhbmQgZGF0YS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJDaGFydCgpLnRoZW4oKGNoYXJ0KSA9PiB7XG4gICAgICBpZiAodGhpcy5ldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoY2hhcnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hhcnQ7XG4gICAgfSk7XG4gIH1cblxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy51cGRhdGUoY2hhbmdlcyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJDaGFydCgpOiBQcm9taXNlPElDaGFydGlzdEJhc2U+IHtcbiAgICBjb25zdCBwcm9taXNlczogYW55W10gPSBbXG4gICAgICB0aGlzLnR5cGUsXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLmRhdGEsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICB0aGlzLnJlc3BvbnNpdmVPcHRpb25zXG4gICAgXTtcblxuICAgIGlmICh0aGlzLmxpbmVTbW9vdGgpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5saW5lU21vb3RoWydpbnRlcnBvbGF0aW9uJ10pIHtcbiAgICAgICAgY2FzZSAnY2FyZGluYWwnOiB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zWydsaW5lU21vb3RoJ10gPSBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLmNhcmRpbmFsKHRoaXMubGluZVNtb290aFsnZGF0YSddKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdzaW1wbGUnOiB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zWydsaW5lU21vb3RoJ10gPSBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLnNpbXBsZSh0aGlzLmxpbmVTbW9vdGhbJ2RhdGEnXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnbm9uZSc6IHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNbJ2xpbmVTbW9vdGgnXSA9IENoYXJ0aXN0LkludGVycG9sYXRpb24ubm9uZSh0aGlzLmxpbmVTbW9vdGhbJ2RhdGEnXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnc3RlcCc6IHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNbJ2xpbmVTbW9vdGgnXSA9IENoYXJ0aXN0LkludGVycG9sYXRpb24uc3RlcCh0aGlzLmxpbmVTbW9vdGhbJ2RhdGEnXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigodmFsdWVzKSA9PiB7XG4gICAgICBjb25zdCBbdHlwZSwgLi4uYXJnc106IGFueSA9IHZhbHVlcztcblxuICAgICAgaWYgKCEodHlwZSBpbiBDaGFydGlzdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGV9IGlzIG5vdCBhIHZhbGlkIGNoYXJ0IHR5cGVgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFydCA9IChDaGFydGlzdCBhcyBhbnkpW3R5cGVdKC4uLmFyZ3MpO1xuXG4gICAgICByZXR1cm4gdGhpcy5jaGFydDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jaGFydCB8fCAndHlwZScgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5yZW5kZXJDaGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICAgICh0aGlzLmNoYXJ0IGFzIGFueSkudXBkYXRlKHRoaXMuZGF0YSwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYmluZEV2ZW50cyhjaGFydDogYW55KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBldmVudCBvZiBPYmplY3Qua2V5cyh0aGlzLmV2ZW50cykpIHtcbiAgICAgIGNoYXJ0Lm9uKGV2ZW50LCB0aGlzLmV2ZW50c1tldmVudF0pO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neENoYXJ0aXN0Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtY2hhcnRpc3QuY29tcG9uZW50JztcbmltcG9ydCB7Tmd4Q2hhcnRpc3RTZXJ2aWNlfSBmcm9tICcuL25neC1jaGFydGlzdC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3hDaGFydGlzdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ3hDaGFydGlzdENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5neENoYXJ0aXN0U2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neENoYXJ0aXN0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkNoYXJ0aXN0LnByZWNpc2lvbiIsIkNoYXJ0aXN0LmVzY2FwaW5nTWFwIiwiQ2hhcnRpc3QuUGllIiwiQ2hhcnRpc3QuQmFyIiwiQ2hhcnRpc3QuTGluZSIsIkNoYXJ0aXN0LkNhbmRsZSIsIkNoYXJ0aXN0LkZpeGVkU2NhbGVBeGlzIiwiQ2hhcnRpc3QuQXV0b1NjYWxlQXhpcyIsIkNoYXJ0aXN0LlN0ZXBBeGlzIiwiQ2hhcnRpc3QuU3ZnIiwiQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbiIsIkNoYXJ0aXN0Lm5vb3AiLCJDaGFydGlzdC5wbHVnaW5zIiwiQ2hhcnRpc3QuYWxwaGFOdW1lcmF0ZSIsIkNoYXJ0aXN0LmV4dGVuZCIsIkNoYXJ0aXN0LnJlcGxhY2VBbGwiLCJDaGFydGlzdC5lbnN1cmVVbml0IiwiQ2hhcnRpc3QucXVhbnRpdHkiLCJxdWVyeSIsIkNoYXJ0aXN0LnF1ZXJ5IiwiQ2hhcnRpc3QudGltZXMiLCJDaGFydGlzdC5zdW0iLCJDaGFydGlzdC5tYXBNdWx0aXBseSIsIkNoYXJ0aXN0Lm1hcEFkZCIsIkNoYXJ0aXN0LnNlcmlhbE1hcCIsIkNoYXJ0aXN0LnJvdW5kV2l0aFByZWNpc2lvbiIsIkNoYXJ0aXN0LmdldE11bHRpVmFsdWUiLCJDaGFydGlzdC5zZXJpYWxpemUiLCJDaGFydGlzdC5kZXNlcmlhbGl6ZSIsIkNoYXJ0aXN0LmNyZWF0ZVN2ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFtQkUsaUJBQWlCOzs7O0lBRWpCLFlBQVk7UUFDVixPQUFPQSxTQUFrQixDQUFDO0tBQzNCOzs7O0lBRUQsY0FBYztRQUNaLE9BQU9DLFdBQW9CLENBQUM7S0FDN0I7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBT0MsR0FBWSxDQUFDO0tBQ3JCOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU9DLEdBQVksQ0FBQztLQUNyQjs7OztJQUVELE9BQU87UUFDTCxPQUFPQyxJQUFhLENBQUM7S0FDdEI7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBT0MsTUFBZSxDQUFDO0tBQ3hCOzs7O0lBRUQsaUJBQWlCO1FBQ2YsT0FBT0MsY0FBdUIsQ0FBQztLQUNoQzs7OztJQUVELGdCQUFnQjtRQUNkLE9BQU9DLGFBQXNCLENBQUM7S0FDL0I7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBT0MsUUFBaUIsQ0FBQztLQUMxQjs7OztJQUVELE1BQU07UUFDSixPQUFPQyxHQUFZLENBQUM7S0FDckI7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPQyxhQUFzQixDQUFDO0tBQy9COzs7O0lBRUQsT0FBTztRQUNMLE9BQU9DLElBQWEsQ0FBQztLQUN0Qjs7OztJQUVELFVBQVU7UUFDUixPQUFPQyxPQUFnQixDQUFDO0tBQ3pCOzs7OztJQUVELGFBQWEsQ0FBQyxDQUFTO1FBQ3JCLE9BQU9DLGFBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEM7Ozs7OztJQUVE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