import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEncountersComponent } from './edit-encounters.component';

describe('EditEncountersComponent', () => {
  let component: EditEncountersComponent;
  let fixture: ComponentFixture<EditEncountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEncountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEncountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
