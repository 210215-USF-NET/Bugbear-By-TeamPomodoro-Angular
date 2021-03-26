import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { story } from 'src/app/models/story';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories: story[] = [];
  storyID : number;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService) {
    auth.user$.toPromise
  }

  ngOnInit(): void {
    this.BBService.GetStoriesAsync().subscribe(
      (result) => {
        this.stories = result;
      }
    );
  }

  GetStory(storyTitle: string) {
    this.router.navigate(['story-details'], { queryParams: { story: storyTitle } });
  }
}