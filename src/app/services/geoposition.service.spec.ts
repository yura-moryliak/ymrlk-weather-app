import { TestBed } from '@angular/core/testing';

import { GeoPositionService } from './geoposition.service';

describe('GeoPositionService', () => {
  let service: GeoPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
