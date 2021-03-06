import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { campaign } from 'src/app/models/campaign';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { LogService } from 'src/app/services/bb-logging.service';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.css']
})
export class EditCampaignComponent implements OnInit {
  campaign2Edit: campaign;

  constructor(private BBService: BBRESTService, private router: Router, private route: ActivatedRoute, public auth: AuthService, private logger: LogService) {
    this.campaign2Edit = {
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
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.BBService.GetCampaign(params.campaign).subscribe(
          (campaignFound) => {
            this.campaign2Edit = campaignFound;
          }
        )
      }
    )
  }
  onSubmit(): void {
    this.BBService.EditCampaign(this.campaign2Edit).subscribe(
      () => {
        alert(`${this.campaign2Edit.campaignName}'s info was successfully edited`);
        this.logger.log(`${this.campaign2Edit.campaignName} edited in Campaigns table.`);
        this.router.navigate(['get-campaigns']);
      }
    )
  }
}
