import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  authService;
  widget = new OktaSignIn({
    el: '#okta-signin-container',
    baseUrl: 'https://dev-76430569.okta.com',
    authParams: {
      pkce: true
    },
    clientId: '0oacufqwvov7S1Q4S5d6',
    redirectUri: window.location.origin + '/login/callback'
  });

  constructor(oktaAuth: OktaAuthService, router: Router) {
    this.authService = oktaAuth;

    // Show the widget when prompted, otherwise remove it from the DOM.
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case '/login':
            break;
          case '/protected':
            break;
          default:
            this.widget.remove();
            break;
        }
      }
    });
  }

  ngOnInit() {
    this.widget.showSignInAndRedirect().catch(err => {
      throw (err);
    });
  }
}