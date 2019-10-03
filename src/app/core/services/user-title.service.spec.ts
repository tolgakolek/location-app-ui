import { TestBed } from '@angular/core/testing';

import { UserTitleService } from './user-title.service';

describe('UserTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserTitleService = TestBed.get(UserTitleService);
    expect(service).toBeTruthy();
  });
});
