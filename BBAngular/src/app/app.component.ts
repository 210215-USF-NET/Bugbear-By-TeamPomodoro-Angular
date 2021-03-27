// src/app/app.component.ts
import { Component, Inject, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'BugBear';

  constructor(@Inject(DOCUMENT) public document: Document, private BBService: BBRESTService, public auth: AuthService) {
    
  }
}