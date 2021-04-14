import { TestBed } from '@angular/core/testing';

import { GonggooglechartspecificService } from './gonggooglechartspecific.service';

describe('GonggooglechartspecificService', () => {
  let service: GonggooglechartspecificService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GonggooglechartspecificService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
