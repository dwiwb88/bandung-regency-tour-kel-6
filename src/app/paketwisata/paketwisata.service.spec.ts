import { TestBed } from '@angular/core/testing';

import { PaketwisataService } from './paketwisata.service';

describe('PaketwisataService', () => {
  let service: PaketwisataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaketwisataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
