import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { character } from '../../models/character';
import { BBRESTService } from '../../services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: character[] = [];
  userID : number;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService) {
    
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        user => {
          this.BBService.GetCharacters().subscribe(
            (result) => {
              result.forEach(character => {
                if(character.userID === user.userID)
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
  GetCharacter(characterName: string) {
    this.router.navigate(['character-details'], { queryParams: { character: characterName } });
  }
}
