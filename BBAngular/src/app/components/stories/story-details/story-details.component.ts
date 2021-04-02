import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { story } from 'src/app/models/story'
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'
import { LogService } from 'src/app/services/bb-logging.service';
import { campaign } from 'src/app/models/campaign';
import { SharingDataService } from 'src/app/services/sharing-data.service';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css']
})
export class StoryDetailsComponent implements OnInit {

  story: story;
  userID: number;
  campaign: campaign;

  constructor(private BBService: BBRESTService, private route: ActivatedRoute, private router: Router, public auth: AuthService, private logger: LogService, private sharingService: SharingDataService) { 
    this.story = 
    {
      storyTitle: '',
      storyDescription: '',
      dateCreated: new Date(Date.now()),
      storyID: 0,
      campaignID: 0
    }
    this.campaign = {
      campaignID: 0,
      campaignName: "",
      description: "",
      gameMasterID: 0,
      campaignUsers: [],
      campaignCharacters: [],
      campaignEncounters: [],
      campaignLocations:[],
      campaignMaps: [],
      campaignNPCs: [],
      campaignStories:[]
    }
    this.campaign = this.sharingService.getData();
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        result => {
          this.userID = result.userID
        }
      )
    })
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(
        params => {
          this.BBService.GetStory(params.story).subscribe(
            foundstory => {
              this.story = foundstory;
            }
          )
        }
      );
  }

  DeleteStory(storyToBeDeleted: story): void {
    if (confirm(`Are you sure you want to delete ${storyToBeDeleted.storyTitle}?`).valueOf()) {
      this.BBService.DeleteStory(storyToBeDeleted.storyID).subscribe(
        () => {
          alert(`${storyToBeDeleted.storyTitle} has been deleted`);
          this.logger.info(`${storyToBeDeleted.storyTitle} deleted`)
          this.router.navigate(['get-stories']);
        }
      );
    }
  }
  EditStory(storyID: number): void {
    this.router.navigate(['edit-story'], { queryParams: { story: storyID } });
  }

}
