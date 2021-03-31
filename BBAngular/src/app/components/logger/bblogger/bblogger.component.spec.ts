import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbloggerComponent } from './bblogger.component';

describe('BbloggerComponent', () => {
  let component: BbloggerComponent;
  let fixture: ComponentFixture<BbloggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbloggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
