import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { character } from 'src/app/models/character';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';
import { LogService } from 'src/app/services/bb-logging.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  character2Add: character;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService) {
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
      items: []
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
  }

  onSubmit(): void {
    this.BBService.AddCharacter(this.character2Add).subscribe(
      (character) => {
        alert(`${character.characterName} was added!`)
        this.logger.log(`${character.characterName} added to Characters table.`);
        this.router.navigate(['characters'])
      }
    )
  }
}