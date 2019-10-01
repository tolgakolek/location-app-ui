import { NgZone } from '@angular/core';
import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { AgmTransitLayer } from '../../directives/transit-layer';
import { GoogleMapsAPIWrapper } from '../../services/google-maps-api-wrapper';
import { TransitLayerManager } from '../../services/managers/transit-layer-manager';
describe('TransitLayerManager', function () {
    beforeAll(function () {
        window.google = {
            maps: {
                TransitLayer: /** @class */ (function () {
                    function TransitLayer() {
                        this.setMap = jest.fn();
                    }
                    return TransitLayer;
                }()),
            }
        };
    });
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                { provide: NgZone, useFactory: function () { return new NgZone({ enableLongStackTrace: true }); } },
                {
                    provide: GoogleMapsAPIWrapper,
                    useValue: {
                        getNativeMap: function () { return Promise.resolve(); },
                        createTransitLayer: jest.fn()
                    }
                },
                TransitLayerManager,
            ]
        });
    }); // end beforeEach
    describe('Create a new TransitLayer', function () {
        it('should call mapsApiWrapper when creating a new transit', fakeAsync(inject([TransitLayerManager, GoogleMapsAPIWrapper], function (transitLayerManager, apiWrapper) {
            var newTransitLayer = new AgmTransitLayer(transitLayerManager);
            var opt = { visible: false };
            transitLayerManager.addTransitLayer(newTransitLayer, opt);
            expect(apiWrapper.createTransitLayer).toHaveBeenCalled();
        })));
    });
    describe('Toggling visibility of TransitLayer', function () {
        it('should update that transit layer via setOptions method when the options changes', fakeAsync(inject([TransitLayerManager, GoogleMapsAPIWrapper], function (transitLayerManager, apiWrapper) {
            var newTransitLayer = new AgmTransitLayer(transitLayerManager);
            newTransitLayer.visible = true;
            var transitLayerInstance = {
                setMap: jest.fn(),
                setOptions: jest.fn()
            };
            apiWrapper.createTransitLayer.mockReturnValue(Promise.resolve(transitLayerInstance));
            transitLayerManager.addTransitLayer(newTransitLayer, { visible: true });
            expect(apiWrapper.createTransitLayer).toHaveBeenCalledWith({
                visible: true
            });
            newTransitLayer.visible = false;
            transitLayerManager.setOptions(newTransitLayer, { visible: false }).then(function () {
                expect(transitLayerInstance.setMap).toHaveBeenCalledWith(null);
            });
        })));
    });
});
//# sourceMappingURL=transit-layer-manager.spec.js.map