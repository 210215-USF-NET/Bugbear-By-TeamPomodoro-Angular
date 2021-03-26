import { TestBed } from '@angular/core/testing';

import { DndRefService } from './dnd-ref.service';

describe('DndRefService', () => {
  let service: DndRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DndRefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
