import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { encounter } from 'src/app/models/encounter';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-add-encounters',
  templateUrl: './add-encounters.component.html',
  styleUrls: ['./add-encounters.component.css']
})
export class AddEncountersComponent implements OnInit {
  encToAdd : encounter;
  constructor(private BBService: BBRESTService, private router: Router) { 
    this.encToAdd = 
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
  }

  onSubmit() {
    this.BBService.AddEncounter(this.encToAdd).subscribe(
      (encounter) => {
        alert(`${encounter.encounterTitle} was added!`);
        this.router.navigate(['get-encounters']);
      }
    )
  }
}
