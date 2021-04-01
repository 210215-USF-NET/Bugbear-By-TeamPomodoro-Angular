import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/Nav/nav-menu/nav-menu.component';
import { GetCharactersComponent } from './components/characters/get-characters/get-characters.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { env } from '../environments/environmentConnections';
import { AddCharacterComponent } from './components/characters/add-character/add-character.component';
import { EditCharacterComponent } from './components/characters/edit-character/edit-character.component';
import { GetStoriesComponent } from './components/stories/get-stories/get-stories.component';
import { AddStoryComponent } from './components/stories/add-story/add-story.component';
import { CharactersDetailsComponent } from './components/characters/characters-details/characters-details.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { ConditionsDetailsComponent } from './components/conditions-details/conditions-details.component';
import { QuickRefComponent } from './components/quick-ref/quick-ref.component';
import { RulesComponent } from './components/rules/rules.component';
import { RulesDetailComponent } from './components/rules-detail/rules-detail.component';
import { AddCampaignComponent } from './components/campaigns/add-campaign/add-campaign.component';
import { EditCampaignComponent } from './components/campaigns/edit-campaign/edit-campaign.component';
import { EditStoryComponent } from './components/stories/edit-story/edit-story.component';
import { GetEncountersComponent } from './components/encounters/get-encounters/get-encounters.component';
import { AddEncountersComponent } from './components/encounters/add-encounters/add-encounters.component';
import { HomeComponent } from './components/home/home.component';
import { ManageCampaignComponent } from './components/campaigns/manage-campaign/manage-campaign.component';
import { StoryDetailsComponent } from './components/stories/story-details/story-details.component';
import { EditEncountersComponent } from './components/encounters/edit-encounters/edit-encounters.component';
import { EncountersDetailsComponent } from './components/encounters/encounters-details/encounters-details.component';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavSidebarComponent } from './components/Nav/nav-sidebar/nav-sidebar.component';
import { GetCampaignsComponent } from './components/campaigns/get-campaigns/get-campaigns.component';
import { GetCampaignDetailsComponent } from './components/campaigns/get-campaign-details/get-campaign-details.component';
import { ChatComponent } from './components/chat/chat.component';
import { LogService } from './services/bb-logging.service';
import { LogPublishersService } from 'src/app/services/bb-log-publisher.service';
import { GetItemsComponent } from './components/items/get-items/get-items.component';
import { AddItemsComponent } from './components/items/add-items/add-items.component';
import { ItemDetailsComponent } from './components/items/item-details/item-details.component';
import { EditItemsComponent } from './components/items/edit-items/edit-items.component';
import { GetLocationsComponent } from './components/locations/get-locations/get-locations.component';
import { AddLocationsComponent } from './components/locations/add-locations/add-locations.component';
import { EditLocationsComponent } from './components/locations/edit-locations/edit-locations.component';
import { LocationDetailsComponent } from './components/locations/location-details/location-details.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'get-campaigns',
    component: GetCampaignsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-campaign',
    component: AddCampaignComponent
  },
  {
    path: 'get-campaign-details',
    component: GetCampaignDetailsComponent
  },
  {
    path: 'edit-campaign',
    component: EditCampaignComponent
  },
  {
    path: 'manage-campaign',
    component: ManageCampaignComponent
  },
  {
    path: 'get-characters',
    component: GetCharactersComponent,
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
    component: GetStoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-story',
    component: AddStoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'story-details',
    component: StoryDetailsComponent,
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
    component: GetEncountersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rules-details',
    component: RulesDetailComponent
  },
  {
    path: 'add-encounters',
    component: AddEncountersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-encounter',
    component: EditEncountersComponent
  },
  {
    path:'encounters-details',
    component: EncountersDetailsComponent
  },
  {
    path: 'nav-sidebar',
    component: NavSidebarComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'get-items',
    component: GetItemsComponent
  },
  {
    path:'add-items',
    component: AddItemsComponent
  },
  {
    path:'edit-items',
    component: EditItemsComponent
  },
  {
    path:'item-details',
    component: ItemDetailsComponent
  },
  {
    path:'get-locations',
    component: GetLocationsComponent
  },
  {
    path:'add-locations',
    component: AddLocationsComponent
  },
  {
    path:'edit-locations',
    component: EditLocationsComponent
  },
  {
    path:'location-details',
    component: LocationDetailsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    GetCharactersComponent,
    GetCampaignsComponent,
    UserProfileComponent,
    AddCharacterComponent,
    CharactersDetailsComponent,
    EditCharacterComponent,
    GetStoriesComponent,
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
    EditEncountersComponent,
    EditStoryComponent,
    AddCampaignComponent,
    EditCampaignComponent,
    HomeComponent,
    NavSidebarComponent,
    GetCampaignDetailsComponent,
    ChatComponent,
    GetItemsComponent,
    AddItemsComponent,
    ItemDetailsComponent,
    EditItemsComponent,
    GetLocationsComponent,
    AddLocationsComponent,
    EditLocationsComponent,
    LocationDetailsComponent,
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
  bootstrap: [AppComponent],
  providers: [LogService, LogPublishersService]
})
export class AppModule { }