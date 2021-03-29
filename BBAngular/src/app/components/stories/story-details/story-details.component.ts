import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { story } from 'src/app/models/story'
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css']
})
export class StoryDetailsComponent implements OnInit {

  story: story;

  constructor(private BBService: BBRESTService, private route: ActivatedRoute, private router: Router, public auth: AuthService) { 
    this.story = 
    {
      storyTitle: '',
      storyDescription: '',
      dateCreated: new Date(Date.now()),
      campaignID: 0,
      storyID: 0,
      userID: 0
    }
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

  DeleteStory(storyToBeDeleted: number): void {
    if (confirm(`Are you sure you want to delete ${storyToBeDeleted}?`).valueOf()) {
      this.BBService.DeleteStory(storyToBeDeleted).subscribe(
        () => {
          alert(`${storyToBeDeleted} has been deleted`);
          this.router.navigate(['stories']);
        }
      );
    }
  }
  EditStory(storyID: number): void {
    this.router.navigate(['edit-story'], { queryParams: { story: storyID } });
  }

}