import { ElementRef, Renderer2 } from '@angular/core';
import { SliderElementDirective } from './slider-element.directive';
export declare class SliderLabelDirective extends SliderElementDirective {
    private _value;
    readonly value: string;
    constructor(elemRef: ElementRef, renderer: Renderer2);
    setValue(value: string): void;
}
