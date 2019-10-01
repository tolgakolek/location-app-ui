import { SimpleChange } from '@angular/core';
import { AgmPolylinePoint } from './polyline-point';
describe('AgmPolylinePoint', function () {
    describe('ngOnChanges', function () {
        it('should emit positionChanged on latitude change', function () {
            var polylinePoint = new AgmPolylinePoint();
            polylinePoint.latitude = 50;
            polylinePoint.longitude = -50;
            polylinePoint.positionChanged.emit = jest.fn();
            var positionChanges = { 'latitude': new SimpleChange('previousLat', 'newLat', false) };
            polylinePoint.ngOnChanges(positionChanges);
            expect(polylinePoint.positionChanged.emit).toHaveBeenCalledWith({ lat: 'newLat', lng: -50 });
        });
        it('should emit positionChanged on longitude change', function () {
            var polylinePoint = new AgmPolylinePoint();
            polylinePoint.latitude = 50;
            polylinePoint.longitude = -50;
            polylinePoint.positionChanged.emit = jest.fn();
            var positionChanges = { 'longitude': new SimpleChange('previousLng', 'newLng', false) };
            polylinePoint.ngOnChanges(positionChanges);
            expect(polylinePoint.positionChanged.emit).toHaveBeenCalledWith({ lat: 50, lng: 'newLng' });
        });
        it('should emit positionChanged on latitude and longitude change', function () {
            var polylinePoint = new AgmPolylinePoint();
            polylinePoint.latitude = 50;
            polylinePoint.longitude = -50;
            polylinePoint.positionChanged.emit = jest.fn();
            var positionChanges = {
                'latitude': new SimpleChange('previousLat', 'newLat', false),
                'longitude': new SimpleChange('previousLng', 'newLng', false)
            };
            polylinePoint.ngOnChanges(positionChanges);
            expect(polylinePoint.positionChanged.emit)
                .toHaveBeenCalledWith({ lat: 'newLat', lng: 'newLng' });
        });
    });
});
//# sourceMappingURL=polyline-point.spec.js.map