import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { campaign } from 'src/app/models/campaign';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { SharingDataService } from 'src/app/services/sharing-data.service';

@Component({
  selector: 'app-get-campaign-details',
  templateUrl: './get-campaign-details.component.html',
  styleUrls: ['./get-campaign-details.component.css']
})
export class GetCampaignDetailsComponent implements OnInit {
  campaign: campaign;
  userID: number;

  constructor(private BBService: BBRESTService, private router: Router, private route: ActivatedRoute, public auth: AuthService, private sharingService: SharingDataService) {
    this.campaign = {
      campaignID: 0,
      campaignName: "",
      description: "",
      gameMasterID: 0,
      campaignCharacters: [],
      campaignEncounters: [],
      campaignLocations:[],
      campaignMaps: [],
      campaignNPCs: [],
      campaignStories:[]
    }
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        result => {
          this.userID = result.userID
        }
      )
    })
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(
        params => {
          this.BBService.GetCampaign(params.campaign).subscribe(
            foundCampaign => {
              this.campaign = foundCampaign;
              this.sharingService.setData(foundCampaign);
            }
          );
        }
      )
  }

  DeleteCampaign(campaign2BDeletedName: string, campaign2BDeletedID : number): void {
    if (confirm(`Are you sure you want to delete ${campaign2BDeletedName}?`).valueOf()) {
      this.BBService.DeleteCampaign(campaign2BDeletedID).subscribe(
        () => {
          alert(`${campaign2BDeletedName} has been deleted`)
          this.router.navigate(['get-campaigns'])
        }
      );
    }
  }
  EditCampaign(campaignID: number): void {
    console.log(this.sharingService.getData())
    this.router.navigate(['edit-campaign'], { queryParams: { campaign: campaignID } })
  }
  ManageCampaign(campaign: campaign) : void {
    this.router.navigate(['manage-campaign'], { queryParams: { campaign: campaign }})
  }
}
