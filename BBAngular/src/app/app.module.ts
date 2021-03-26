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
import { ConditionsComponent } from './components/conditions/conditions.component';
import { QuickRefComponent } from './components/quick-ref/quick-ref.component';
import { ConditionsDetailsComponent } from './components/conditions-details/conditions-details.component';
import { env } from '../environments/environmentConnections';
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
    path: 'conditions',
    component: ConditionsComponent
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
    ConditionsComponent,
    QuickRefComponent,
    ConditionsDetailsComponent,
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
      clientId: env.CLIENT_ID
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }