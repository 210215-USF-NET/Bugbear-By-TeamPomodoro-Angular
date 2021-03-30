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
  campaigns: campaign[] = [];

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService) {
    
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        currentUser => {
          this.BBService.GetCampaigns().subscribe(
            (result) => {
              result.forEach(campaign => {
                if(campaign.campaignUsers !== null && (campaign.campaignUsers.includes(currentUser) || campaign.gameMasterID === currentUser.userID))
                {
                  this.campaigns.push(campaign)
                }
              })
            }
          )
        }
      )
    })
  }
  GetCampaign(campaignID: number) {
    this.router.navigate(['campaign-details'], { queryParams: { campaign: campaignID } })
  }
}
