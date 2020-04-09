import { TestBed } from '@angular/core/testing';

import { MasterPageObservableService } from './master-page-observable.service';

describe('MasterPageObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterPageObservableService = TestBed.get(MasterPageObservableService);
    expect(service).toBeTruthy();
  });
});
