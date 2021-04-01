import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLocationsComponent } from './get-locations.component';

describe('GetLocationsComponent', () => {
  let component: GetLocationsComponent;
  let fixture: ComponentFixture<GetLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
