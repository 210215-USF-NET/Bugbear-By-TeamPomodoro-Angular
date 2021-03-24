import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { OKTA_CONFIG, OktaAuthModule, OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { LoginComponent } from './components/login/login.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { CallbackComponent } from './components/login/callback.component';

const config = {
  issuer: 'https://dev-76430569.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/login/callback',
  clientId: '0oacufqwvov7S1Q4S5d6',
  pkce: true,
  registration: true
}

export function onAuthRequired(oktaAuth, injector) {
  const router = injector.get(Router);

  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

const appRoutes: Routes = [
  {
    path: 'login/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'campaigns',
    component: CampaignsComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    CharactersComponent,
    CampaignsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }