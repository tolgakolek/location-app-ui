import { TestBed } from '@angular/core/testing';

import { DeviceTypeService } from './device-type.service';

describe('DeviceTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceTypeService = TestBed.get(DeviceTypeService);
    expect(service).toBeTruthy();
  });
});
