import { TestBed } from '@angular/core/testing';

import { HomeloginService } from './homelogin.service';

describe('HomeloginService', () => {
  let service: HomeloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
