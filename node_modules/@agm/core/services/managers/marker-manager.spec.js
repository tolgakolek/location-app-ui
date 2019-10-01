import { NgZone } from '@angular/core';
import { TestBed, inject, fakeAsync, flushMicrotasks, tick } from '@angular/core/testing';
import { AgmMarker } from './../../directives/marker';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { MarkerManager } from './../managers/marker-manager';
describe('MarkerManager', function () {
    var animMap = {
        BOUNCE: 1,
        DROP: 2,
    };
    beforeAll(function () {
        window.google = {
            maps: {
                Animation: animMap,
            }
        };
    });
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                { provide: NgZone, useFactory: function () { return new NgZone({ enableLongStackTrace: true }); } },
                MarkerManager, {
                    provide: GoogleMapsAPIWrapper,
                    useValue: {
                        createMarker: jest.fn().mockReturnValue(Promise.resolve()),
                        getNativeMap: jest.fn().mockReturnValue(Promise.resolve()),
                    }
                }
            ]
        });
    });
    describe('Create a new marker', function () {
        it('should call the mapsApiWrapper when creating a new marker', fakeAsync(inject([MarkerManager, GoogleMapsAPIWrapper], function (markerManager, apiWrapper) {
            var newMarker = new AgmMarker(markerManager);
            newMarker.latitude = 34.4;
            newMarker.longitude = 22.3;
            newMarker.label = 'A';
            markerManager.addMarker(newMarker);
            flushMicrotasks();
            expect(apiWrapper.createMarker).toHaveBeenCalledWith({
                position: { lat: 34.4, lng: 22.3 },
                label: 'A',
                draggable: false,
                icon: undefined,
                opacity: 1,
                visible: true,
                zIndex: 1,
                title: undefined,
                clickable: true,
                animation: undefined
            });
        })));
    });
    describe('Delete a marker', function () {
        it('should set the map to null when deleting a existing marker', fakeAsync(inject([MarkerManager, GoogleMapsAPIWrapper], function (markerManager, apiWrapper) {
            var newMarker = new AgmMarker(markerManager);
            newMarker.latitude = 34.4;
            newMarker.longitude = 22.3;
            newMarker.label = 'A';
            var markerInstance = {
                setMap: jest.fn()
            };
            apiWrapper.createMarker.mockReturnValue(Promise.resolve(markerInstance));
            markerManager.addMarker(newMarker);
            markerManager.deleteMarker(newMarker).then(function () { expect(markerInstance.setMap).toHaveBeenCalledWith(null); });
        })));
    });
    describe('set marker icon', function () {
        it('should update that marker via setIcon method when the markerUrl changes', fakeAsync(inject([MarkerManager, GoogleMapsAPIWrapper], function (markerManager, apiWrapper) {
            var newMarker = new AgmMarker(markerManager);
            newMarker.latitude = 34.4;
            newMarker.longitude = 22.3;
            newMarker.label = 'A';
            var markerInstance = {
                setMap: jest.fn(),
                setIcon: jest.fn()
            };
            apiWrapper.createMarker.mockReturnValue(Promise.resolve(markerInstance));
            markerManager.addMarker(newMarker);
            flushMicrotasks();
            expect(apiWrapper.createMarker).toHaveBeenCalledWith({
                position: { lat: 34.4, lng: 22.3 },
                label: 'A',
                draggable: false,
                icon: undefined,
                opacity: 1,
                visible: true,
                zIndex: 1,
                title: undefined,
                clickable: true,
                animation: undefined
            });
            var iconUrl = 'http://angular-maps.com/icon.png';
            newMarker.iconUrl = iconUrl;
            return markerManager.updateIcon(newMarker).then(function () { expect(markerInstance.setIcon).toHaveBeenCalledWith(iconUrl); });
        })));
    });
    describe('set marker opacity', function () {
        it('should update that marker via setOpacity method when the markerOpacity changes', fakeAsync(inject([MarkerManager, GoogleMapsAPIWrapper], function (markerManager, apiWrapper) {
            var newMarker = new AgmMarker(markerManager);
            newMarker.latitude = 34.4;
            newMarker.longitude = 22.3;
            newMarker.label = 'A';
            var markerInstance = {
                setMap: jest.fn(),
                setOpacity: jest.fn()
            };
            apiWrapper.createMarker.mockReturnValue(Promise.resolve(markerInstance));
            markerManager.addMarker(newMarker);
            flushMicrotasks();
            expect(apiWrapper.createMarker).toHaveBeenCalledWith({
                position: { lat: 34.4, lng: 22.3 },
                label: 'A',
                draggable: false,
                icon: undefined,
                visible: true,
                opacity: 1,
                zIndex: 1,
                title: undefined,
                clickable: true,
                animation: undefined
            });
            var opacity = 0.4;
            newMarker.opacity = opacity;
            return markerManager.updateOpacity(newMarker).then(function () { expect(markerInstance.setOpacity).toHaveBeenCalledWith(opacity); });
        })));
    });
    describe('set visible option', function () {
        it('should update that marker via setVisible method when the visible changes', fakeAsync(inject([MarkerManager, GoogleMapsAPIWrapper], function (markerManager, apiWrapper) {
            var newMarker = new AgmMarker(markerManager);
            newMarker.latitude = 34.4;
            newMarker.longitude = 22.3;
            newMarker.label = 'A';
            newMarker.visible = false;
            var markerInstance = {
                setMap: jest.fn(),
                setVisible: jest.fn()
            };
            apiWrapper.createMarker.mockReturnValue(Promise.resolve(markerInstance));
            markerManager.addMarker(newMarker);
            flushMicrotasks();
            expect(apiWrapper.createMarker).toHaveBeenCalledWith({
                position: { lat: 34.4, lng: 22.3 },
                label: 'A',
                draggable: false,
                icon: undefined,
                visible: false,
                opacity: 1,
                zIndex: 1,
                title: undefined,
                clickable: true,
                animation: undefined
            });
            newMarker.visible = true;
            return markerManager.updateVisible(newMarker).then(function () { expect(markerInstance.setVisible).toHaveBeenCalledWith(true); });
        })));
    });
    describe('set zIndex option', function () {
        it('should update that marker via setZIndex method when the zIndex changes', fakeAsync(inject([MarkerManager, GoogleMapsAPIWrapper], function (markerManager, apiWrapper) {
            var newMarker = new AgmMarker(markerManager);
            newMarker.latitude = 34.4;
            newMarker.longitude = 22.3;
            newMarker.label = 'A';
            newMarker.visible = false;
            var markerInstance = {
                setMap: jest.fn(),
                setZIndex: jest.fn()
            };
            apiWrapper.createMarker.mockReturnValue(Promise.resolve(markerInstance));
            markerManager.addMarker(newMarker);
            flushMicrotasks();
            expect(apiWrapper.createMarker).toHaveBeenCalledWith({
                position: { lat: 34.4, lng: 22.3 },
                label: 'A',
                draggable: false,
                icon: undefined,
                visible: false,
                opacity: 1,
                zIndex: 1,
                title: undefined,
                clickable: true,
                animation: undefined
            });
            var zIndex = 10;
            newMarker.zIndex = zIndex;
            return markerManager.updateZIndex(newMarker).then(function () { expect(markerInstance.setZIndex).toHaveBeenCalledWith(zIndex); });
        })));
    });
    describe('set animation option', function () {
        it('should update that marker via setAnimation method when the animation changes', fakeAsync(inject([MarkerManager, GoogleMapsAPIWrapper], function (markerManager, apiWrapper) {
            var newMarker = new AgmMarker(markerManager);
            newMarker.latitude = 34.4;
            newMarker.longitude = 22.3;
            newMarker.label = 'A';
            newMarker.visible = false;
            newMarker.animation = null;
            var markerInstance = {
                setMap: jest.fn(),
                setAnimation: jest.fn().mockReturnValue(new Promise(function (resolve) { return setTimeout(resolve, 500); }))
            };
            apiWrapper.createMarker.mockReturnValue(Promise.resolve(markerInstance));
            markerManager.addMarker(newMarker);
            flushMicrotasks();
            expect(apiWrapper.createMarker).toHaveBeenCalledWith({
                position: { lat: 34.4, lng: 22.3 },
                label: 'A',
                draggable: false,
                icon: undefined,
                visible: false,
                opacity: 1,
                zIndex: 1,
                title: undefined,
                clickable: true,
                animation: null
            });
            var animation = 'BOUNCE';
            newMarker.animation = animation;
            var updatePromise = markerManager.updateAnimation(newMarker);
            tick(600);
            updatePromise.then(function () { return expect(markerInstance.setAnimation).toHaveBeenCalledWith(animMap.BOUNCE); });
        })));
    });
});
//# sourceMappingURL=marker-manager.spec.js.map