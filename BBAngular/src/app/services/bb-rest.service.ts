import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../src/environments/environmentConnections';
import { Observable } from 'rxjs';
import { character } from '../models/character';
import { user } from '../models/user';

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

  GetCharactersAsync(): Observable<character[]> {
    return this.http.get<character[]>(this.urlCharacter, this.httpOptions);
  }
  GetUserByEmailAsync(string): Observable<user>{
    return this.http.get<user>(this.urlUser, this.httpOptions);
  }
}
