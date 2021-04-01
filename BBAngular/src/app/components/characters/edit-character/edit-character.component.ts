import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { character } from 'src/app/models/character';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { LogService } from 'src/app/services/bb-logging.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {

  character2Edit: character;
  constructor(private route: ActivatedRoute, private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService) {
    this.character2Edit =
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
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.BBService.GetCharacter(params.character).subscribe(
          (characterFound) => {
            this.character2Edit = characterFound;
          }
        )
      }
    )
  }
  onSubmit(): void {
    this.BBService.EditCharacter(this.character2Edit).subscribe(
      () => {
        alert(`${this.character2Edit.characterName}'s info was successfully edited`);
        this.logger.log(`${this.character2Edit.characterName} edited in Characters table.`);
        this.router.navigate(['get-characters']);
      }
    )
  }
}