import { TestBed } from '@angular/core/testing';

import { VerifierService } from './verifier.service';

describe('VerifierService', () => {
  let service: VerifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
