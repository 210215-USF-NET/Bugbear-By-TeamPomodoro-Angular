import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { env } from '../environments/environmentConnections';
import { AddCharacterComponent } from './components/characters/add-character/add-character.component';
import { EditCharacterComponent } from './components/characters/edit-character/edit-character.component';
import { StoriesComponent } from './components/stories/stories.component';
import { AddStoryComponent } from './components/stories/add-story/add-story.component';
import { CharactersDetailsComponent } from './components/characters/characters-details/characters-details.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { ConditionsDetailsComponent } from './components/conditions-details/conditions-details.component';
import { QuickRefComponent } from './components/quick-ref/quick-ref.component';
import { RulesComponent } from './components/rules/rules.component';
import { RulesDetailComponent } from './components/rules-detail/rules-detail.component';
import { AddCampaignComponent } from './components/campaigns/add-campaign/add-campaign.component';
import { CampaignDetailsComponent } from './components/campaigns/campaign-details/campaign-details.component';
import { EditCampaignComponent } from './components/campaigns/edit-campaign/edit-campaign.component';
import { EditStoryComponent } from './components/stories/edit-story/edit-story.component';
import { GetEncountersComponent } from './components/encounters/get-encounters/get-encounters.component';
import { AddEncountersComponent } from './components/encounters/add-encounters/add-encounters.component';
import { HomeComponent } from './components/home/home.component';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'campaigns',
    component: CampaignsComponent,
    canActivate: [AuthGuard]
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
    component: CharactersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-character',
    component: AddCharacterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'character-details',
    component: CharactersDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-character',
    component: EditCharacterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stories',
    component: StoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-story',
    component: AddStoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-story',
    component: EditStoryComponent
  },
  {
    path: 'conditions',
    component: ConditionsComponent
  },
  {
    path: 'conditions-details',
    component: ConditionsDetailsComponent
  },
  {
    path: 'quickRef',
    component: QuickRefComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'get-encounters',
    component: GetEncountersComponent
  },
  {
    path: 'rules-details',
    component: RulesDetailComponent
  },
  {
    path: 'add-encounters',
    component: AddEncountersComponent
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
    ConditionsComponent,
    ConditionsDetailsComponent,
    CharactersDetailsComponent,
    QuickRefComponent,
    RulesComponent,
    RulesDetailComponent,
    GetEncountersComponent,
    AddEncountersComponent,
    EditStoryComponent,
    AddCampaignComponent,
    EditCampaignComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatSidenavModule,
    MarkdownModule.forRoot(),
    AuthModule.forRoot({
      domain: env.AUTH_DOMAIN,
      clientId: env.CLIENT_ID,
      scope: 'openid email profile'
    }),
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }