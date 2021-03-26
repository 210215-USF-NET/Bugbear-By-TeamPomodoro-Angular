import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../src/environments/environmentConnections';
import { Observable } from 'rxjs';
import { character } from '../models/character';
import { user } from '../models/user';
import { story } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class BBRESTService {
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  }
  urlCharacter: string = env.BB_REST + '/character';
  urlCampaign: string = env.BB_REST + '/campaign';
  urlEncounter: string = env.BB_REST + '/encounter';
  urlItem: string = env.BB_REST + '/item';
  urlLocation: string = env.BB_REST + '/location';
  urlMap: string = env.BB_REST + '/map';
  urlNPC: string = env.BB_REST + '/npc';
  urlStory: string = env.BB_REST + '/story';
  urlUser: string = env.BB_REST + '/user';

  constructor(private http: HttpClient) { }

  GetCharacters(): Observable<character[]> {
    return this.http.get<character[]>(this.urlCharacter, this.httpOptions);
  }
  GetUserByEmail(email : string): Observable<user>{
    return this.http.get<user>(`${this.urlUser}/${email}`, this.httpOptions);;
  }
  AddCharacter(character2Add : character): Observable<character>{
    return this.http.post<character>(this.urlCharacter, character2Add, this.httpOptions);
  }
  GetCharacter(characterName: string): Observable<character> {
    return this.http.get<character>(`${this.urlCharacter}/${characterName}`, this.httpOptions);
  }
  DeleteCharacter(character2BDeleted: string): Observable<any> {
    return this.http.delete<any>(`${this.urlCharacter}/${character2BDeleted}`, this.httpOptions);
  }
  EditCharacter(character2BEdited: character): Observable<any> {
    return this.http.put<any>(`${this.urlCharacter}/${character2BEdited.characterID}`, character2BEdited, this.httpOptions)
  }
  GetStoriesAsync(): Observable<story[]> {
    return this.http.get<story[]>(this.urlStory, this.httpOptions);
  }

  AddStoryAsync(storyToAdd: story): Observable<story> {
    return this.http.post<story>(this.urlStory, storyToAdd, this.httpOptions);
  }
}
