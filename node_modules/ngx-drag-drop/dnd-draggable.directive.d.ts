import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy, Renderer2 } from "@angular/core";
import { DndDragImageOffsetFunction, DndEvent } from "./dnd-utils";
import { DndHandleDirective } from "./dnd-handle.directive";
import { EffectAllowed } from "./dnd-types";
export declare class DndDragImageRefDirective {
    constructor(parent: DndDraggableDirective, elementRef: ElementRef);
}
export declare class DndDraggableDirective implements AfterViewInit, OnDestroy {
    private elementRef;
    private renderer;
    private ngZone;
    dndDraggable: any;
    dndEffectAllowed: EffectAllowed;
    dndType?: string;
    dndDraggingClass: string;
    dndDraggingSourceClass: string;
    dndDraggableDisabledClass: string;
    dndDragImageOffsetFunction: DndDragImageOffsetFunction;
    readonly dndStart: EventEmitter<DragEvent>;
    readonly dndDrag: EventEmitter<DragEvent>;
    readonly dndEnd: EventEmitter<DragEvent>;
    readonly dndMoved: EventEmitter<DragEvent>;
    readonly dndCopied: EventEmitter<DragEvent>;
    readonly dndLinked: EventEmitter<DragEvent>;
    readonly dndCanceled: EventEmitter<DragEvent>;
    draggable: boolean;
    private dndHandle?;
    private dndDragImageElementRef?;
    private dragImage;
    private isDragStarted;
    private readonly dragEventHandler;
    dndDisableIf: boolean;
    dndDisableDragIf: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onDragStart(event: DndEvent): boolean;
    onDrag(event: DragEvent): void;
    onDragEnd(event: DragEvent): void;
    registerDragHandle(handle: DndHandleDirective | undefined): void;
    registerDragImage(elementRef: ElementRef | undefined): void;
    private determineDragImage;
}
