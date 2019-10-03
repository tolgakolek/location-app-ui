import { TestBed } from '@angular/core/testing';

import { UserContactTypeService } from './user-contact-type.service';

describe('UserContactTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserContactTypeService = TestBed.get(UserContactTypeService);
    expect(service).toBeTruthy();
  });
});
