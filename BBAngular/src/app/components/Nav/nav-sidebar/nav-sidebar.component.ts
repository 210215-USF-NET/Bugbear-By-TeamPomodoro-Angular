import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { campaign } from 'src/app/models/campaign';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.css']
})
export class NavSidebarComponent implements OnInit {
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
}
