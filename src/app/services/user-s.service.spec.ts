import { TestBed } from '@angular/core/testing';

import { UserSService } from './user-s.service';

describe('UserSService', () => {
  let service: UserSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
