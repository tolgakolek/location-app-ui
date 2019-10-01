import { AgmTransitLayer } from '../../directives/transit-layer';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { TransitLayerOptions } from '../google-maps-types';
/**
 * This class manages a Transit Layer for a Google Map instance.
 */
export declare class TransitLayerManager {
    private _wrapper;
    private _layers;
    constructor(_wrapper: GoogleMapsAPIWrapper);
    /**
     * Adds a transit layer to a map and local layer manager
     * @param {AgmTransitLayer} layer - a transitLayer object
     * @param {TransitLayerOptions} options - TransitLayerOptions options
     * @returns void
     */
    addTransitLayer(layer: AgmTransitLayer, options: TransitLayerOptions): void;
    /**
     * Sets layer options
     * @param {AgmTransitLayer} transitLayer object
     * @param {options} TransitLayerOptions
     * @returns Promise<void>
     */
    setOptions(layer: AgmTransitLayer, options: TransitLayerOptions): Promise<void>;
    /**
     * Deletes a transit layer
     * @param {AgmTransitLayer} layer - the transit layer to delete
     * @returns  Promise<void>
     */
    deleteTransitLayer(layer: AgmTransitLayer): Promise<void>;
    /**
     * Hide/Show a Google Map transit layer
     * @param {AgmTransitLayer} transitLayer object
     * @param {options} TransitLayerOptions
     * @returns Promise<void>
     */
    toggleTransitLayerVisibility(layer: AgmTransitLayer, options: TransitLayerOptions): Promise<void>;
}
