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
import { ConditionsComponent } from './components/conditions/conditions.component';
import { ConditionsDetailsComponent } from './components/conditions-details/conditions-details.component';
import { QuickRefComponent } from './components/quick-ref/quick-ref.component';
import { RulesComponent } from './components/rules/rules.component';
import { RulesDetailComponent } from './components/rules-detail/rules-detail.component';

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
    path: 'rules-details',
    component: RulesDetailComponent
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
    RulesDetailComponent
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