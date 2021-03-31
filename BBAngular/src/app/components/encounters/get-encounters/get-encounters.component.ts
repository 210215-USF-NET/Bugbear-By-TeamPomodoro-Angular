import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { encounter } from 'src/app/models/encounter';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-get-encounters',
  templateUrl: './get-encounters.component.html',
  styleUrls: ['./get-encounters.component.css']
})
export class GetEncountersComponent implements OnInit {
encounters: encounter[] = [];
encounterID : number;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService) { 
    auth.user$.toPromise
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.BBService.GetEncounters().subscribe(
        (result) => {
          result.forEach(story => {
            if(/*story.userID*/0 === /*user.userID*/0)
            {
              this.encounters.push(story)
            }
          })
        }
      )
    })
  }

  GetEncounter(encounterID: number) {
    this.router.navigate(['encounters-details'], { queryParams: { encounter: encounterID } });
  }
}
