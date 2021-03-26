import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { condition } from '../models/conditions';
import { conditionDetail } from '../models/conditionDetail';

@Injectable({
  providedIn: 'root'
})
export class DndRefService {

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  }
  url: string = "http://www.dnd5eapi.co/api";

  constructor(private http: HttpClient) { }

  GetConditions(): Observable<condition[]>{
    return this.http.get<condition[]>(this.url + "/conditions", this.httpOptions);
  }

  GetCondition(conditionName: string): Observable<conditionDetail[]>{
    return this.http.get<conditionDetail[]>(this.url + "/conditions/" + conditionName, this.httpOptions);
  }

}
