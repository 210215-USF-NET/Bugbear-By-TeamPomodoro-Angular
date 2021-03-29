import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncountersDetailsComponent } from './encounters-details.component';

describe('EncountersDetailsComponent', () => {
  let component: EncountersDetailsComponent;
  let fixture: ComponentFixture<EncountersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncountersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncountersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
