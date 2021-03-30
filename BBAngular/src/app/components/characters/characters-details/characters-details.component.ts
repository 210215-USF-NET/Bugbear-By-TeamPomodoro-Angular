import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { character } from 'src/app/models/character';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharactersDetailsComponent implements OnInit {

  character: character;
  //the activated route allows me to unpack my route, i.e. get the route parameters
  constructor(private BBService: BBRESTService, private route: ActivatedRoute, private router: Router, public auth: AuthService) {
    this.character =
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
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(
        params => {
          this.BBService.GetCharacter(params.character).subscribe(
            foundCharacter => {
              this.character = foundCharacter
            }
          )
        }
      )
  }
  DeleteCharacter(character2BDeletedName: string, character2BDeletedID: number): void {
    if (confirm(`Are you sure you want to delete ${character2BDeletedName}?`).valueOf()) {
      this.BBService.DeleteCharacter(character2BDeletedID).subscribe(
        () => {
          alert(`${character2BDeletedName} has been deleted`);
          this.router.navigate(['characters']);
        }
      );
    }
  }
  EditCharacter(characterID: number): void {
    this.router.navigate(['edit-character'], { queryParams: { character: characterID } });
  }
}