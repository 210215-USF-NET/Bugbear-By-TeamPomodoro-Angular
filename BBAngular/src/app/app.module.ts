import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { env } from '../environments/environmentConnections';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { EditCharacterComponent } from './components/edit-character/edit-character.component';
import { StoriesComponent } from './components/stories/stories.component';
import { AddStoryComponent } from './components/stories/add-story/add-story.component';

const appRoutes: Routes = [
  {
    path: 'campaigns',
    component: CampaignsComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'add-character',
    component: AddCharacterComponent
  },
  {
    path: 'character-details',
    component: CharacterDetailsComponent
  },
  {
    path: 'edit-character',
    component: EditCharacterComponent
  },
  {
    path: 'stories',
    component: StoriesComponent
  },
  {
    path: 'add-story',
    component: AddStoryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CharactersComponent,
    CampaignsComponent,
    UserProfileComponent,
    AddCharacterComponent,
    CharacterDetailsComponent,
    EditCharacterComponent,
    StoriesComponent,
    AddStoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule,
    FormsModule,
    AuthModule.forRoot({
      domain: env.AUTH_DOMAIN,
      clientId: env.CLIENT_ID,
      scope: 'openid email profile'
    }),
  ],
  providers: [
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}