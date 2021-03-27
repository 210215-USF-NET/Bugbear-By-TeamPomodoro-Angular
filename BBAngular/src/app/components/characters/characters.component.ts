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

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService) {
    
  }

  ngOnInit(): void {
    this.BBService.GetCharacters().subscribe(
      (result) => {
        this.characters = result;
      }
    );
  }

  GetCharacter(characterName: string) {
    this.router.navigate(['character-details'], { queryParams: { character: characterName } });
  }
}
