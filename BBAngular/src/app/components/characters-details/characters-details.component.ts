import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { character } from '../../models/character';
import { BBRESTService } from '../../services/bb-rest.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
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
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(
        params => {
          this.BBService.GetCharacter(params.character).subscribe(
            foundCharacter => {
              this.character = foundCharacter;
            }
          )
        }
      );
  }
  DeleteCharacter(character2BDeleted: string): void {
    if (confirm(`Are you sure you want to delete ${character2BDeleted}?`).valueOf()) {
      this.BBService.DeleteCharacter(character2BDeleted).subscribe(
        () => {
          alert(`${character2BDeleted} has been deleted`);
          this.router.navigate(['characters']);
        }
      );
    }
  }
  EditCharacter(characterID: string): void {
    this.router.navigate(['edit-character'], { queryParams: { character: characterID } });
  }
}