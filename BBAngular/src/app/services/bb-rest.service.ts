import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../src/environments/environmentConnections';
import { Observable } from 'rxjs';
import { character } from '../models/character';
import { story } from '../models/story';
import { encounter } from '../models/encounter';

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

  GetStoriesAsync(): Observable<story[]> {
    return this.http.get<story[]>(this.urlStory, this.httpOptions);
  }

  AddStoryAsync(storyToAdd: story): Observable<story> {
    return this.http.post<story>(this.urlStory, storyToAdd, this.httpOptions);
  }

  GetEncountersAsync(): Observable<encounter[]> {
    return this.http.get<encounter[]>(this.urlEncounter, this.httpOptions);
  }

  AddEncounterAsync(encToAdd: encounter): Observable<encounter> {
    return this.http.post<encounter>(this.urlEncounter, encToAdd, this.httpOptions);
  }
}
