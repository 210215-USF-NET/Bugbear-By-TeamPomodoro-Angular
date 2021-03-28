// src/app/app.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { user } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'BugBear';

  constructor(@Inject(DOCUMENT) public document: Document, private BBService: BBRESTService, public auth: AuthService) {
  }

  ngOnInit()
  {
    
  }
}