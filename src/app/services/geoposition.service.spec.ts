import { TestBed } from '@angular/core/testing';

import { GeopositionService } from './geoposition.service';

describe('GeopositionService', () => {
  let service: GeopositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeopositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
