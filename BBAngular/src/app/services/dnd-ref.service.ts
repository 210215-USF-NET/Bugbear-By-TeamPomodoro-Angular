import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { condition } from '../models/conditions';
import { conditionDetail } from '../models/conditionDetail';
import { rule } from '../models/rule';
import { ruleDetail } from '../models/ruleDetail';

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
  url: string = "https://www.dnd5eapi.co/api";

  constructor(private http: HttpClient) { }

  GetConditions(): Observable<condition[]>{
    return this.http.get<condition[]>(this.url + "/conditions", this.httpOptions);
  }

  GetCondition(conditionName: string): Observable<conditionDetail>{
    return this.http.get<conditionDetail>(this.url + "/conditions/" + conditionName, this.httpOptions);
  }

  GetRules(): Observable<rule[]>{
    return this.http.get<rule[]>(this.url + "/rule-sections/", this.httpOptions);
  }

  GetRule(ruleName: string): Observable<ruleDetail>{
    return this.http.get<ruleDetail>(this.url + "/rule-sections/" + ruleName, this.httpOptions);
  }

}