import { TestBed } from '@angular/core/testing';

import { AlertMessage2Service } from './alert-message2.service';

describe('AlertMessage2Service', () => {
  let service: AlertMessage2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertMessage2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
