import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCampaignDetailsComponent } from './get-campaign-details.component';

describe('GetCampaignDetailsComponent', () => {
  let component: GetCampaignDetailsComponent;
  let fixture: ComponentFixture<GetCampaignDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCampaignDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCampaignDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
