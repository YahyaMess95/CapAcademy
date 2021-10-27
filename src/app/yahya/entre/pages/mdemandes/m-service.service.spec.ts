import { TestBed } from '@angular/core/testing';

import { MServiceService } from './m-service.service';

describe('MServiceService', () => {
  let service: MServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
