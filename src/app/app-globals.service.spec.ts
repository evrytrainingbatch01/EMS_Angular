import { TestBed } from '@angular/core/testing';

import { AppGlobalsService } from './app-globals.service';

describe('AppGlobalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppGlobalsService = TestBed.get(AppGlobalsService);
    expect(service).toBeTruthy();
  });
});
