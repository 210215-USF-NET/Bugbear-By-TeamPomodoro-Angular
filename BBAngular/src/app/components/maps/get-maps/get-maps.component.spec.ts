import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMapsComponent } from './get-maps.component';

describe('GetMapsComponent', () => {
  let component: GetMapsComponent;
  let fixture: ComponentFixture<GetMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
