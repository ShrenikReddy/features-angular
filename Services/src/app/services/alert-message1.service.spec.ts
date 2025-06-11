import { TestBed } from '@angular/core/testing';

import { AlertMessage1Service } from './alert-message1.service';

describe('AlertMessage1Service', () => {
  let service: AlertMessage1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertMessage1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
