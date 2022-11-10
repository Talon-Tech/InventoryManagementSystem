import { TestBed } from '@angular/core/testing';

import { VendorsvcService } from './vendorsvc.service';

describe('VendorsvcService', () => {
  let service: VendorsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
