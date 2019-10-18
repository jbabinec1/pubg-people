import { TestBed } from '@angular/core/testing';

import { SeasonstatsService } from './seasonstats.service';

describe('SeasonstatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeasonstatsService = TestBed.get(SeasonstatsService);
    expect(service).toBeTruthy();
  });
});
