import { TestBed } from '@angular/core/testing';

import { ServiceFService } from './service-f.service';

describe('ServiceFService', () => {
  let service: ServiceFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
