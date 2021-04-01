import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { character } from 'src/app/models/character';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';
import { LogService } from 'src/app/services/bb-logging.service';
import { SharingDataService } from 'src/app/services/sharing-data.service';
import { campaign } from 'src/app/models/campaign';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  character2Add: character;
  campaign: campaign;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService, private sharingService: SharingDataService) {
    this.character2Add =
    {
      characterID: 0,
      characterName: '',
      money: 0,
      hp: 0,
      userID: 0,
      xpLevel: 0,
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
      items: [],
      campaignID: 0
    }
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        result => {
          this.character2Add.userID = result.userID
        }
      )
    })
    
  }

  ngOnInit(): void {
    this.campaign = this.sharingService.getData();
    this.character2Add.campaignID = this.campaign.campaignID;
  }

  onSubmit(): void {
    console.log(this.character2Add);
    this.BBService.AddCharacter(this.character2Add).subscribe(
      (character) => {
        this.addCharacterToCampaign(character);
        alert(`${character.characterName} was added!`)
        this.logger.log(`${character.characterName} added to Characters table.`);
        this.router.navigate(['get-characters'])
      }
    )
  }

  addCharacterToCampaign(character: character): void {
    this.campaign.campaignCharacters.push(character);
    this.BBService.EditCampaign(this.campaign).subscribe(
      (campaign) => {
        this.sharingService.setData(campaign);
      }
    );
  }
}