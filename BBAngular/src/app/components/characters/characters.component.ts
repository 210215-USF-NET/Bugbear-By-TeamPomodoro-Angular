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
    this.BBService.GetCharactersAsync().subscribe(
      (result) => {
        result.forEach(function (item) {
          if (item.userID === this.BBService.GetUserByEmailAsync(localStorage.getItem('email')).userID) {
            this.characters.push(item);
          }
        });
      }
    );
  }

  GetCharacter(characterName: string) {
    this.router.navigate(['character-details'], { queryParams: { character: characterName } });
  }
  GetUserByEmail(email : string) {
    this.router.navigate(['user-details'], { queryParams: { user: email } });
  }
}
