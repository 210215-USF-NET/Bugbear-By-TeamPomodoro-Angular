import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { encounter } from 'src/app/models/encounter'
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'
import { LogService } from 'src/app/services/bb-logging.service'

@Component({
  selector: 'app-encounters-details',
  templateUrl: './encounters-details.component.html',
  styleUrls: ['./encounters-details.component.css']
})
export class EncountersDetailsComponent implements OnInit {
  logger: LogService;
  encounter: encounter;
  
  constructor(private BBService: BBRESTService, private route: ActivatedRoute, private router: Router, public auth: AuthService) { 
    this.encounter = 
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
            foundEncounter => {
              this.encounter = foundEncounter;
            }
          )
        }
      );
  }

  DeleteEncounter(encounterToBeDeleted: encounter): void {
    if (confirm(`Are you sure you want to delete ${encounterToBeDeleted.encounterTitle}?`).valueOf()) {
      this.logger.log('1');
      this.BBService.DeleteEncounter(encounterToBeDeleted.encounterID).subscribe(
        () => {
          console.log("2nd message", 'third message');
          alert(`${encounterToBeDeleted.encounterTitle} has been deleted`);
          console.log("3");
          this.router.navigate(['get-encounters']);
        }
      );
    }
  }
  EditEncounter(encounterID: number): void {
    this.router.navigate(['edit-encounter'], { queryParams: { encounter: encounterID } });
  }
}
