import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { encounter } from 'src/app/models/encounter'
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css']
})
export class EncounterDetailsComponent implements OnInit {

  encounter: encounter;

  constructor(private BBService: BBRESTService, private route: ActivatedRoute, private router: Router, public auth: AuthService) { 
    this.encounter = 
    {
      encounterID: 0,
      encounterTitle: '',
      encounterDescription: '',
      location: 
        {
          locationID: 0,
          locationName: '',
          locationDescription: ''
        }
    }
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(
        params => {
          this.BBService.GetEncounter(params.encounter).subscribe(
            foundencounter => {
              this.encounter = foundencounter;
            }
          )
        }
      );
  }

  DeleteEncounter(encounterToBeDeleted: encounter): void {
    if (confirm(`Are you sure you want to delete ${encounterToBeDeleted.encounterTitle}?`).valueOf()) {
      console.log("1");
      this.BBService.DeleteEncounter(encounterToBeDeleted.encounterID).subscribe(
        () => {
          console.log("2");
          alert(`${encounterToBeDeleted.encounterTitle} has been deleted`);
          console.log("3");
          this.router.navigate(['stories']);
        }
      );
    }
  }
  EditEncounter(encounterID: number): void {
    this.router.navigate(['edit-encounter'], { queryParams: { encounter: encounterID } });
  }

}
