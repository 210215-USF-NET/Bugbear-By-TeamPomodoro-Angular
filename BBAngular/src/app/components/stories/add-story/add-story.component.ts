import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { story } from 'src/app/models/story';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';
import { campaign } from 'src/app/models/campaign';
import { SharingDataService } from 'src/app/services/sharing-data.service';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  storyToAdd : story;
  campaign: campaign;
  story: story;

  constructor(private BBService: BBRESTService, public auth: AuthService, private router: Router, private sharingService: SharingDataService) {
    this.storyToAdd = 
    {
      storyTitle: '',
      storyDescription: '',
      dateCreated: new Date(Date.now()),
      storyID: 0,
      campaignID: 0
    }
    
  }

  ngOnInit(): void {
    console.log(this.sharingService.getData())
    this.campaign = this.sharingService.getData();
    this.storyToAdd.campaignID = this.campaign.campaignID;
  }

  onSubmit(): void {
    console.log(this.storyToAdd)
    debugger;
    this.BBService.AddStory(this.storyToAdd).subscribe(
      (story) => {
        debugger;
        this.story = story;
        this.addStoryToCampaign();
        alert(`${story.storyTitle} was added!`);
        this.router.navigate(['stories']);
      }
    );
  }

  addStoryToCampaign(): void {
    this.BBService.GetStory(this.story.storyID).subscribe(
      (story) => {
        this.campaign.campaignStories.push(story);
        this.BBService.EditCampaign(this.campaign).subscribe(
          (campaign) => {
            this.sharingService.setData(campaign);
          }
        );
      }
    );
  }
}
