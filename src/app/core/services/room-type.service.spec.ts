import { TestBed } from '@angular/core/testing';

import { RoomTypeService } from './room-type.service';

describe('RoomTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomTypeService = TestBed.get(RoomTypeService);
    expect(service).toBeTruthy();
  });
});
