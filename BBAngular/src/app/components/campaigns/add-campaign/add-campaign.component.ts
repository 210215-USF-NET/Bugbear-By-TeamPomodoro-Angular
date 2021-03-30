import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { campaign } from 'src/app/models/campaign';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css']
})
export class AddCampaignComponent implements OnInit {
  campaign2Add: campaign;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService) {
    this.campaign2Add = {
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
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        result => {
          this.campaign2Add.gameMasterID = result.userID
        }
      )
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.BBService.AddCampaign(this.campaign2Add).subscribe(
      (campaign) => {
        console.log(campaign)
        alert(`${campaign.campaignName} was added!`)
        this.router.navigate(['campaigns'])
      }
    )
  }
}
