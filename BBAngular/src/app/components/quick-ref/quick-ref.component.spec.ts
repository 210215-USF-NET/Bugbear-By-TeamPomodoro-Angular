import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickRefComponent } from './quick-ref.component';

describe('QuickRefComponent', () => {
  let component: QuickRefComponent;
  let fixture: ComponentFixture<QuickRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
