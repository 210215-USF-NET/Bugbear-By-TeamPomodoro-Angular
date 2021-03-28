import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEncountersComponent } from './add-encounters.component';

describe('AddEncountersComponent', () => {
  let component: AddEncountersComponent;
  let fixture: ComponentFixture<AddEncountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEncountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEncountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
