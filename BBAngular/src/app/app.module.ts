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
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { EditCharacterComponent } from './components/edit-character/edit-character.component';
import { StoriesComponent } from './components/stories/stories.component';
import { AddStoryComponent } from './components/stories/add-story/add-story.component';
import { CharactersDetailsComponent } from './components/characters-details/characters-details.component';
import { AddCampaignComponent } from './components/campaigns/add-campaign/add-campaign.component';
import { CampaignDetailsComponent } from './components/campaigns/campaign-details/campaign-details.component';
import { EditCampaignComponent } from './components/campaigns/edit-campaign/edit-campaign.component';

const appRoutes: Routes = [
  {
    path: 'campaigns',
    component: CampaignsComponent
  },
  {
    path: 'add-campaign',
    component: AddCampaignComponent
  },
  {
    path: 'campaign-details',
    component: CampaignDetailsComponent
  },
  {
    path: 'edit-campaign',
    component: EditCampaignComponent
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
    component: CharactersDetailsComponent
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
    CharactersDetailsComponent,
    EditCharacterComponent,
    StoriesComponent,
    AddStoryComponent,
    CharactersDetailsComponent,
    AddCampaignComponent,
    CampaignDetailsComponent,
    EditCampaignComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }