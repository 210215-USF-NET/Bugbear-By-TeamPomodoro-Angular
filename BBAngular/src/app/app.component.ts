// src/app/app.component.ts
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'BugBear';

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}