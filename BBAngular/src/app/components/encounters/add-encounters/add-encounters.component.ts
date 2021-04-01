import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { encounter } from 'src/app/models/encounter';
import { location } from 'src/app/models/location';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { LogService } from 'src/app/services/bb-logging.service';
import { SharingDataService } from 'src/app/services/sharing-data.service';
import { campaign } from 'src/app/models/campaign';

@Component({
  selector: 'app-add-encounters',
  templateUrl: './add-encounters.component.html',
  styleUrls: ['./add-encounters.component.css']
})
export class AddEncountersComponent implements OnInit {
  encToAdd : encounter;
  setting: location;
  allSettings: location[] = [];
  locID: number;
  campaign: campaign;

  constructor(private BBService: BBRESTService, private router: Router, private logger: LogService, private sharingService: SharingDataService) { 
    this.setting = {
      locationID: 0,
      locationName: '',
      locationDescription: '',
      campaignID: 0
    }
    this.encToAdd = 
    {
      encounterID: 0,
      encounterTitle: '',
      encounterDescription: '',
      location: this.setting,
      campaignID: 0
    }
  }

  ngOnInit(): void {
    this.campaign = this.sharingService.getData();
    this.allSettings = this.campaign.campaignLocations;
    this.encToAdd.campaignID = this.campaign.campaignID;
  }

  onSubmit() {
    this.addLocationToEncounter();
    this.logger.debug(`${this.encToAdd.location}`);
    debugger;
    this.BBService.AddEncounter(this.encToAdd).subscribe(
      (encounter) => {
        this.addEncounterToCampaign(encounter);
        debugger;
        alert(`${encounter.encounterTitle} was added!`);
        this.logger.log(`${encounter.encounterTitle} added to Encounter table.`);
        this.router.navigate(['get-encounters']);
      }
    );
  }

  addLocationToEncounter() {
    this.allSettings.forEach(
      (setting) => {
        if (setting.locationID === this.locID) {
          this.encToAdd.location = setting
        }
      }
    );
  }

  addEncounterToCampaign(encounter: encounter) : void {
    this.campaign.campaignEncounters.push(encounter);
    this.BBService.EditCampaign(this.campaign).subscribe(
      (campaign) => {
        this.sharingService.setData(campaign);
      }
    );
  }
}
