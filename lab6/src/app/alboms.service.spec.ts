import { TestBed } from '@angular/core/testing';

import { AlbomsService } from './alboms.service';

describe('AlbomsService', () => {
  let service: AlbomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
