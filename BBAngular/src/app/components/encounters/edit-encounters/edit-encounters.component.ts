import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BBRESTService } from '../../../services/bb-rest.service';
import { encounter } from 'src/app/models/encounter';

@Component({
  selector: 'app-edit-encounters',
  templateUrl: './edit-encounters.component.html',
  styleUrls: ['./edit-encounters.component.css']
})
export class EditEncountersComponent implements OnInit {
  encounterToEdit : encounter;
  constructor(private route: ActivatedRoute, private BBService: BBRESTService, private router: Router, public auth: AuthService) { 
    this.encounterToEdit = 
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
          (foundEncounter) => {
            this.encounterToEdit = foundEncounter;
          }
        )
      }
    )
  }

  onSubmit(): void {
    this.BBService.EditEncounter(this.encounterToEdit).subscribe(
      () => {
        alert(`${this.encounterToEdit.encounterTitle}'s info was successfully edited`);
        this.router.navigate(['get-encounters']);
      }
    )
  }
}