import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { character } from 'src/app/models/character';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';
import { SharingDataService } from 'src/app/services/sharing-data.service';
import { campaign } from 'src/app/models/campaign';

@Component({
  selector: 'app-get-characters',
  templateUrl: './get-characters.component.html',
  styleUrls: ['./get-characters.component.css']
})
export class GetCharactersComponent implements OnInit {
  characters: character[] = [];
  campaign: campaign;
  userID: number;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService, private sharingService: SharingDataService) {
    this.campaign = this.sharingService.getData();
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        currentUser => {
          this.userID = currentUser.userID;
          this.BBService.GetCharacters().subscribe(
            (result) => {
              result.forEach(character => {
                if(character.campaignID == this.campaign.campaignID)
                {
                  this.characters.push(character);
                }
              });
            }
          );
        }
      )
    })
  }
  GetCharacter(characterID: number) {
    this.router.navigate(['character-details'], { queryParams: { character: characterID } });
  }
}
