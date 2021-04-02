import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { campaign } from 'src/app/models/campaign';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';
import { LogService } from 'src/app/services/bb-logging.service';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css']
})
export class AddCampaignComponent implements OnInit {
  campaign2Add: campaign;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService) {
    this.campaign2Add = {
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
          this.campaign2Add.gameMasterID = result.userID;
          this.logger.log(`User logged in: ${result.email}`, "more information", "even more");
        }
      )
    });
    
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.BBService.AddCampaign(this.campaign2Add).subscribe(
      (campaign) => {
        console.log(campaign)
        alert(`${campaign.campaignName} was added!`);
        this.logger.log(`${campaign.campaignName} added to Campaigns table.`);
        this.router.navigate(['get-campaigns'])
      }
    )
  }
}
