import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { campaign } from 'src/app/models/campaign';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {
  campaign: campaign;

  constructor(private BBService: BBRESTService, private router: Router, private route: ActivatedRoute, public auth: AuthService) {
    this.campaign = {
      campaignID: 0,
      campaignName: "",
      description: "",
      gameMasterID: 0,
      campaignUsers: [],
      campaignCharacters: [],
      campaignEncounters: [],
      campaignLocations:[],
      campaignMaps: [],
      campaignNPCs: [],
      campaignStories:[]
    }
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(
        params => {
          this.BBService.GetCampaign(params.campaign).subscribe(
            foundCampaign => {
              this.campaign = foundCampaign
            }
          )
        }
      )
  }
  DeleteCampaign(campaign2BDeletedName: string, campaign2BDeletedID : number): void {
    if (confirm(`Are you sure you want to delete ${campaign2BDeletedName}?`).valueOf()) {
      this.BBService.DeleteCampaign(campaign2BDeletedID).subscribe(
        () => {
          alert(`${campaign2BDeletedName} has been deleted`)
          this.router.navigate(['campaigns'])
        }
      );
    }
  }
  EditCampaign(campaignID: number): void {
    this.router.navigate(['edit-campaign'], { queryParams: { campaign: campaignID } })
  }
  ManageCampaign(campaign: campaign) : void {
    this.router.navigate(['manage-campaign'], { queryParams: { campaign: campaign }})
  }
}
