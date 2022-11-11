import { TestBed } from '@angular/core/testing';

import { AuthGService } from './auth-g.service';

describe('AuthGService', () => {
  let service: AuthGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
