import { TestBed } from '@angular/core/testing';

import { CustomerOperationsService } from './customer-operations.service';

describe('CustomerOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerOperationsService = TestBed.get(CustomerOperationsService);
    expect(service).toBeTruthy();
  });
});
