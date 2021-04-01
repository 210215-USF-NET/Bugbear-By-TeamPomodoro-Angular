import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { encounter } from 'src/app/models/encounter';
import { location } from 'src/app/models/location';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { LogService } from 'src/app/services/bb-logging.service';

@Component({
  selector: 'app-add-encounters',
  templateUrl: './add-encounters.component.html',
  styleUrls: ['./add-encounters.component.css']
})
export class AddEncountersComponent implements OnInit {
  encToAdd : encounter;
  setting: location;
  constructor(private BBService: BBRESTService, private router: Router, private logger: LogService) { 
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
  }

  onSubmit() {
    this.BBService.AddEncounter(this.encToAdd).subscribe(
      (encounter) => {
        alert(`${encounter.encounterTitle} was added!`);
        this.logger.log(`${encounter.encounterTitle} added to Encounter table.`);
        this.router.navigate(['get-encounters']);
      }
    )
  }
}
