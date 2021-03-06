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
    };

    this.encToAdd = 
    {
      encounterID: 0,
      encounterTitle: '',
      encounterDescription: '',
      locationID: 0,
      campaignID: 0
    };
  }

  ngOnInit(): void {
    this.campaign = this.sharingService.getData();
    this.logger.log(`${this.campaign.campaignID}`);
    this.logger.log(`${this.campaign.campaignLocations.pop().campaignID}`);
    this.allSettings = this.campaign.campaignLocations;
    this.encToAdd.campaignID = this.campaign.campaignID;
  }

  onSubmit() {
    this.encToAdd.locationID = this.locID;
    this.logger.debug(`${this.encToAdd.locationID}`);
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

  addEncounterToCampaign(encounter: encounter) : void {
    this.campaign.campaignEncounters.push(encounter);
    this.BBService.EditCampaign(this.campaign).subscribe(
      (campaign) => {
        this.sharingService.setData(campaign);
      }
    );
  }
}
