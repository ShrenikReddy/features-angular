import { TestBed } from '@angular/core/testing';

import { LogMessage1Service } from './log-message1.service';

describe('LogMessage1Service', () => {
  let service: LogMessage1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogMessage1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
