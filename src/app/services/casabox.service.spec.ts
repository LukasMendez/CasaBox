import { TestBed } from '@angular/core/testing';

import { CasaboxService } from './casabox.service';

describe('CasaboxService', () => {
  let service: CasaboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasaboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
