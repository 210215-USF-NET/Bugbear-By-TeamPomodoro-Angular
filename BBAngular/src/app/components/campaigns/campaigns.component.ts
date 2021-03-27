import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { campaign } from 'src/app/models/campaign';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {
  campaign: campaign[] = [];

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.BBService.GetCampaigns().subscribe(
      (result) => {
        this.campaign = result;
      }
    );
  }

  GetCampaign(campaignName: string) {
    this.router.navigate(['campaign-details'], {queryParams : { Campaign: campaignName }});
  }
}
