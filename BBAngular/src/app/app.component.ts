// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService, public router: Router) {
    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
    this.oktaAuth.signInWithRedirect({
      originalUri: '/'
    });
  }

  async logout() {
    // Terminates the session with Okta and removes current tokens.
    await this.oktaAuth.signOut();
    this.router.navigateByUrl('/');
  }
}
