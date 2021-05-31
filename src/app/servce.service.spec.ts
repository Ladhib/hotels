import { TestBed } from '@angular/core/testing';

import { ServceService } from './servce.service';

describe('ServceService', () => {
  let service: ServceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
