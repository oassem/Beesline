import { TestBed } from '@angular/core/testing';

import { IsnotLoggedGuard } from './isnot-logged.guard';

describe('IsnotLoggedGuard', () => {
  let guard: IsnotLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsnotLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
