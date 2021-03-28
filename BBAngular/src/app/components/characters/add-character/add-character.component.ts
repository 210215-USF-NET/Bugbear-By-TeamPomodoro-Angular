import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { character } from '../../../models/character';
import { BBRESTService } from '../../../services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  character2Add: character;
  userIdentification : number;
  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService) {
    this.character2Add =
          {
            characterID: 0,
            characterName: '',
            money: 0,
            userID: 0,
            hp: 0,
            xpLevel: 0,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
            itemList: []
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
        alert(`${character.characterName} was added!`);
        this.router.navigate(['characters']);
      }
    );
  }
}