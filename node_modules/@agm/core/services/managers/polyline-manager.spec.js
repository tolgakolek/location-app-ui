import { NgZone, QueryList } from '@angular/core';
import { TestBed, inject, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { AgmPolyline } from '../../directives/polyline';
import { GoogleMapsAPIWrapper } from '../../services/google-maps-api-wrapper';
import { PolylineManager } from '../../services/managers/polyline-manager';
import { Subject } from 'rxjs';
describe('PolylineManager', function () {
    beforeAll(function () {
        window.google = {
            maps: {
                Point: /** @class */ (function () {
                    function Point(x, y) {
                        this.x = x;
                        this.y = y;
                    }
                    return Point;
                }()),
                SymbolPath: {
                    BACKWARD_CLOSED_ARROW: 3,
                    BACKWARD_OPEN_ARROW: 4,
                    CIRCLE: 0,
                    FORWARD_CLOSED_ARROW: 1,
                    FORWARD_OPEN_ARROW: 2,
                }
            }
        };
    });
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                { provide: NgZone, useFactory: function () { return new NgZone({ enableLongStackTrace: true }); } },
                PolylineManager, {
                    provide: GoogleMapsAPIWrapper,
                    useValue: {
                        createPolyline: jest.fn(),
                        getNativeMap: function () { return Promise.resolve(); },
                    }
                }
            ]
        });
    }); // end beforeEach
    describe('Create a new polyline', function () {
        it('should call the mapsApiWrapper when creating a new polyline', fakeAsync(inject([PolylineManager, GoogleMapsAPIWrapper], function (polylineManager, apiWrapper) {
            var newPolyline = new AgmPolyline(polylineManager);
            polylineManager.addPolyline(newPolyline);
            flushMicrotasks();
            expect(apiWrapper.createPolyline).toHaveBeenCalledWith({
                clickable: true,
                draggable: false,
                editable: false,
                geodesic: false,
                strokeColor: undefined,
                strokeOpacity: undefined,
                strokeWeight: undefined,
                visible: true,
                zIndex: undefined,
                path: [],
                icons: [],
            });
        })));
    });
    describe('Icons', function () {
        it('should call the mapsApiWrapper when creating a new polyline', fakeAsync(inject([PolylineManager, GoogleMapsAPIWrapper], function (polylineManager, apiWrapper) {
            var newPolyline = new AgmPolyline(polylineManager);
            newPolyline.iconSequences = Object.assign(new QueryList(), {
                changes: new Subject(),
                toArray: function () { return [{
                        fixedRotation: true,
                        offset: '1px',
                        repeat: '50px',
                        anchorX: 10,
                        anchorY: 15,
                        fillColor: 'blue',
                        fillOpacity: 0.5,
                        rotation: 60,
                        scale: 2,
                        strokeColor: 'green',
                        strokeOpacity: 0.7,
                        strokeWeight: 1.5,
                        path: 'CIRCLE',
                    }
                ]; }
            });
            polylineManager.addPolyline(newPolyline);
            flushMicrotasks();
            expect(apiWrapper.createPolyline).toHaveBeenCalledWith({
                clickable: true,
                draggable: false,
                editable: false,
                geodesic: false,
                strokeColor: undefined,
                strokeOpacity: undefined,
                strokeWeight: undefined,
                visible: true,
                zIndex: undefined,
                path: [],
                icons: [{
                        'fixedRotation': true,
                        'icon': {
                            'anchor': { 'x': 10, 'y': 15 },
                            'fillColor': 'blue',
                            'fillOpacity': 0.5,
                            'path': 0,
                            'rotation': 60,
                            'scale': 2,
                            'strokeColor': 'green',
                            'strokeOpacity': 0.7,
                            'strokeWeight': 1.5
                        },
                        'offset': '1px',
                        'repeat': '50px'
                    }],
            });
        })));
        it('should update the icons when the data structure changes', fakeAsync(inject([PolylineManager, GoogleMapsAPIWrapper], function (polylineManager, apiWrapper) {
            var testPolyline = {
                setOptions: jest.fn()
            };
            apiWrapper.createPolyline.mockReturnValue(Promise.resolve(testPolyline));
            var iconArray = [{
                    fixedRotation: true,
                    offset: '1px',
                    repeat: '50px',
                    anchorX: 10,
                    anchorY: 15,
                    fillColor: 'blue',
                    fillOpacity: 0.5,
                    rotation: 60,
                    scale: 2,
                    strokeColor: 'green',
                    strokeOpacity: 0.7,
                    strokeWeight: 1.5,
                    path: 'CIRCLE',
                }];
            var iconChanges = new Subject();
            var newPolyline = new AgmPolyline(polylineManager);
            newPolyline.iconSequences = Object.assign(new QueryList(), { changes: iconChanges, toArray: function () { return iconArray; } });
            polylineManager.addPolyline(newPolyline);
            flushMicrotasks();
            iconArray.push({
                fixedRotation: false,
                offset: '2px',
                repeat: '20px',
                anchorX: 11,
                anchorY: 16,
                fillColor: 'cyan',
                fillOpacity: 0.6,
                rotation: 120,
                scale: 0.5,
                strokeColor: 'yellow',
                strokeOpacity: 0.2,
                strokeWeight: 3,
                path: 'BACKWARD_OPEN_ARROW',
            });
            polylineManager.updateIconSequences(newPolyline);
            flushMicrotasks();
            expect(testPolyline.setOptions.mock.calls.length).toBe(1);
            expect(testPolyline.setOptions.mock.calls[0][0])
                .toEqual({ 'icons': [{ 'fixedRotation': true,
                        'icon': { 'anchor': { 'x': 10, 'y': 15 },
                            'fillColor': 'blue',
                            'fillOpacity': 0.5,
                            'path': 0,
                            'rotation': 60,
                            'scale': 2,
                            'strokeColor': 'green',
                            'strokeOpacity': 0.7,
                            'strokeWeight': 1.5 },
                        'offset': '1px',
                        'repeat': '50px' },
                    { 'fixedRotation': false,
                        'icon': { 'anchor': { 'x': 11, 'y': 16 },
                            'fillColor': 'cyan',
                            'fillOpacity': 0.6,
                            'path': 4,
                            'rotation': 120,
                            'scale': 0.5,
                            'strokeColor': 'yellow',
                            'strokeOpacity': 0.2,
                            'strokeWeight': 3
                        },
                        'offset': '2px',
                        'repeat': '20px' }]
            });
        })));
    });
    describe('Delete a polyline', function () {
        it('should set the map to null when deleting a existing polyline', fakeAsync(inject([PolylineManager, GoogleMapsAPIWrapper], function (polylineManager, apiWrapper) {
            var newPolyline = new AgmPolyline(polylineManager);
            var polylineInstance = {
                setMap: jest.fn()
            };
            apiWrapper.createPolyline.mockReturnValue(Promise.resolve(polylineInstance));
            polylineManager.addPolyline(newPolyline);
            flushMicrotasks();
            polylineManager.deletePolyline(newPolyline);
            flushMicrotasks();
            expect(polylineInstance.setMap).toHaveBeenCalledWith(null);
        })));
    });
});
//# sourceMappingURL=polyline-manager.spec.js.map