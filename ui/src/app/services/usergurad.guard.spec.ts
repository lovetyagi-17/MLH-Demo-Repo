import { TestBed } from '@angular/core/testing';

import { UserguradGuard } from './usergurad.guard';

describe('UserguradGuard', () => {
  let guard: UserguradGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserguradGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
