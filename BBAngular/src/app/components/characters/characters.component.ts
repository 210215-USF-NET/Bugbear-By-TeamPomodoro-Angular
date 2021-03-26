import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { character } from 'src/app/models/character';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: character[] = [];

  constructor(private BBService: BBRESTService, private router: Router) { }

  ngOnInit(): void {
    this.BBService.GetCharactersAsync().subscribe(
      (result) => {
        this.characters = result;
        console.log(result)
      }
    );
  }

  GetCharacter(characterName: string) {
    this.router.navigate(['character-details'], { queryParams: { character: characterName } });
  }
}
