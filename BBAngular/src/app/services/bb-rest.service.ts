import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { character } from '../models/character';

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
  url: string = 'https://localhost:5001/api/character';

  constructor(private http: HttpClient) { }

  GetCharactersAsync(): Observable<character[]> {
    return this.http.get<character[]>(this.url, this.httpOptions);
  }
}
