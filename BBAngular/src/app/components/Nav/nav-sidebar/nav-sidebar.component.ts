import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  sideIsExpanded: boolean

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
    this.sideIsExpanded = false
  }

  
  ngOnInit(): void {
  }

  rotateArrow(): void {
    if(this.sideIsExpanded === false){
      document.getElementById('expand-arrow').style.transform = 'translateY(8px) rotate(180deg)'
      this.sideIsExpanded = true
    }
    else{
      document.getElementById('expand-arrow').style.transform = 'translateY(0px) rotate(0deg)'
      this.sideIsExpanded = false
    }
  }
}
