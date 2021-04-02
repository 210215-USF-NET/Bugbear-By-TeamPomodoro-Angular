import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { encounter } from 'src/app/models/encounter';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';
import { campaign } from 'src/app/models/campaign';
import { SharingDataService } from 'src/app/services/sharing-data.service';

@Component({
  selector: 'app-get-encounters',
  templateUrl: './get-encounters.component.html',
  styleUrls: ['./get-encounters.component.css']
})
export class GetEncountersComponent implements OnInit {
encounters: encounter[] = [];
encounterID : number;
campaign: campaign;
locationNames = new Map();

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService, private sharingService: SharingDataService) { 
    this.campaign = this.sharingService.getData();
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.BBService.GetEncounters().subscribe(
        (result) => {
          result.forEach(encounter => {
            if(this.campaign.campaignEncounters.some(e => e.encounterID == encounter.encounterID))
            {
              this.encounters.push(encounter)
            }
          })
        }
      )
    });
  }

  GetEncounter(encounterID: number) {
    this.router.navigate(['encounters-details'], { queryParams: { encounter: encounterID } });
  }

}
