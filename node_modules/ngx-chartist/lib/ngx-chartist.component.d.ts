import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as Chartist from 'chartist';
import { IPieChartOptions } from 'chartist';
export interface ILineChartOptions extends Chartist.IChartOptions {
    axisX?: Chartist.IChartistStepAxis | Chartist.IChartistFixedScaleAxis | Chartist.IChartistAutoScaleAxis;
    axisY?: Chartist.IChartistStepAxis | Chartist.IChartistFixedScaleAxis | Chartist.IChartistAutoScaleAxis;
    width?: number | string;
    height?: number | string;
    showLine?: boolean;
    showPoint?: boolean;
    showArea?: boolean;
    areaBase?: number;
    lineSmooth?: Function | boolean;
    low?: number;
    high?: number;
    ticks?: Array<string | number>;
    chartPadding?: Chartist.IChartPadding;
    fullWidth?: boolean;
    classNames?: Chartist.ILineChartClasses;
    series: {
        [key: string]: {
            lineSmooth?: Function | boolean;
            showLine?: boolean;
            showPoint?: boolean;
            showArea?: boolean;
            areaBase?: number;
        };
    };
}
/**
 * Possible chart types
 * @type {String}
 */
export declare type IChartistType = 'Pie' | 'Bar' | 'Line';
export declare type IChartistBase = Chartist.IChartistPieChart | Chartist.IChartistBarChart | Chartist.IChartistLineChart;
export interface IChartistLineSmooth {
    interpolation: 'cardinal' | 'simple' | 'none' | 'step';
    data: Chartist.IChartistInterpolationOptions | Chartist.IChartistSimpleInterpolationOptions | Chartist.IChartistCardinalInterpolationOptions | Chartist.IChartistStepInterpolationOptions;
}
export interface IChartistDataPoint {
    x: number | Date;
    y: number | Date;
}
export interface IChartistSeriesData {
    name?: string;
    value?: number;
    data?: Array<number> | Array<IChartistDataPoint>;
    className?: string;
    meta?: string;
}
export interface IChartistData {
    labels?: Array<string> | Array<number> | Array<Date>;
    series: Array<IChartistSeriesData> | Array<Array<IChartistData>> | Array<number> | Array<Array<number> | Array<IChartistDataPoint>>;
}
export declare type IChartistOptions = ILineChartOptions | Chartist.IBarChartOptions | IPieChartOptions;
export declare type IChartistResponsiveOptionTuple = Array<string | IChartistOptions>;
export declare type IChartistResponsiveOptions = IChartistResponsiveOptionTuple[];
export interface IChartistEvent {
    [eventName: string]: (data: any) => void;
}
export interface IChartistSettingsType {
    data: IChartistData;
    options: IChartistOptions;
    events?: IChartistEvent;
    lineSmooth?: IChartistLineSmooth;
    responsiveOptions?: IChartistResponsiveOptions;
    type?: IChartistType;
}
export declare class NgxChartistComponent implements OnInit, OnChanges, OnDestroy {
    data: Promise<IChartistData> | IChartistData;
    type: Promise<IChartistType> | IChartistType;
    options: Promise<IChartistOptions> | IChartistOptions;
    lineSmooth: Promise<IChartistLineSmooth> | IChartistLineSmooth;
    responsiveOptions: Promise<IChartistResponsiveOptions> | IChartistResponsiveOptions;
    events: Promise<IChartistEvent> | IChartistEvent;
    chart: IChartistBase;
    private element;
    constructor(element: ElementRef);
    ngOnInit(): Promise<IChartistBase>;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    renderChart(): Promise<IChartistBase>;
    update(changes: SimpleChanges): void;
    bindEvents(chart: any): void;
}
