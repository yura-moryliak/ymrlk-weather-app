import { TestBed } from '@angular/core/testing';

import { PexelClientService } from './pexel-api-client.service';

describe('PexelClientService', () => {
  let service: PexelClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PexelClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
