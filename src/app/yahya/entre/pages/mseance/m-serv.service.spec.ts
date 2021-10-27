import { TestBed } from '@angular/core/testing';

import { MServService } from './m-serv.service';

describe('MServService', () => {
  let service: MServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
