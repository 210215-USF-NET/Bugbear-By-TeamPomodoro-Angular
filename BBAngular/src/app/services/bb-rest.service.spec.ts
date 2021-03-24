import { TestBed } from '@angular/core/testing';
import { BBRESTService } from './bb-rest.service';

describe('BBRESTService', () => {
  let service: BBRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BBRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
