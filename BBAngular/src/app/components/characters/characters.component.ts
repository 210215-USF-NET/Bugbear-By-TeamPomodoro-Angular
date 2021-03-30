import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { character } from 'src/app/models/character';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: character[] = [];

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService) {
    
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        currentUser => {
          this.BBService.GetCharacters().subscribe(
            (result) => {
              result.forEach(character => {
                if(character.userID === currentUser.userID)
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
