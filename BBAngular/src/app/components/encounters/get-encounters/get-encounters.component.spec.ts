import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEncountersComponent } from './get-encounters.component';

describe('GetEncountersComponent', () => {
  let component: GetEncountersComponent;
  let fixture: ComponentFixture<GetEncountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEncountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEncountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
