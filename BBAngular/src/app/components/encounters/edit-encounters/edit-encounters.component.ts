import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BBRESTService } from '../../../services/bb-rest.service';
import { encounter } from 'src/app/models/encounter';
import { LogService } from 'src/app/services/bb-logging.service';
import { location } from 'src/app/models/location';
import { campaign } from 'src/app/models/campaign';
import { SharingDataService } from 'src/app/services/sharing-data.service';

@Component({
  selector: 'app-edit-encounters',
  templateUrl: './edit-encounters.component.html',
  styleUrls: ['./edit-encounters.component.css']
})
export class EditEncountersComponent implements OnInit {
  encounterToEdit : encounter;
  locID: number;
  locations: location[] = [];
  camp: campaign;
  constructor(private route: ActivatedRoute, private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService, private sharingService: SharingDataService) { 
    this.encounterToEdit = 
    {
      encounterID: 0,
      encounterTitle: '',
      encounterDescription: '',
      campaignID: 0,
      locationID: 0
    }
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(
      params => {
        this.BBService.GetEncounter(params.encounter).subscribe(
          (foundEncounter) => {
            this.encounterToEdit = foundEncounter;
          }
        )
      }
    );

    this.camp = this.sharingService.getData();
    this.locations = this.camp.campaignLocations;
    debugger;
  }

  onSubmit(): void {
    this.encounterToEdit.locationID = this.locID;
    debugger;
    this.BBService.EditEncounter(this.encounterToEdit).subscribe(
      () => {
        alert(`${this.encounterToEdit.encounterTitle}'s info was successfully edited`);
        this.logger.log(`${this.encounterToEdit.encounterTitle}'s info was successfully edited`);
        this.router.navigate(['get-encounters']);
      }
    )
  }



}