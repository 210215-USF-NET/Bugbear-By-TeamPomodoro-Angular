import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCampaignsComponent } from './get-campaigns.component';

describe('GetCampaignsComponent', () => {
  let component: GetCampaignsComponent;
  let fixture: ComponentFixture<GetCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
