import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TransitLayerManager } from '../services/managers/transit-layer-manager';
export declare class AgmTransitLayer implements OnInit, OnChanges, OnDestroy {
    private _manager;
    private _addedToManager;
    private _id;
    private static _transitLayerOptions;
    /**
     * Hide/show transit layer
     */
    visible: boolean;
    constructor(_manager: TransitLayerManager);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _updateTransitLayerOptions;
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
}
