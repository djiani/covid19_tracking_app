import { TestBed } from '@angular/core/testing';

import { FectchDataService } from './fectch-data.service';

describe('FectchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FectchDataService = TestBed.get(FectchDataService);
    expect(service).toBeTruthy();
  });
});
