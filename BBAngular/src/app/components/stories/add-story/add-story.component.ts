import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { story } from 'src/app/models/story';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  storyToAdd : story;
  constructor(private BBService: BBRESTService, public auth: AuthService, private router: Router) {
    this.storyToAdd = 
    {
      storyTitle: '',
      storyDescription: '',
      dateCreated: new Date(Date.now()),
      campaignID: 0,
      storyID: 0,
      userID: 0
    }
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        result => {
          this.storyToAdd.userID = result.userID
        }
      )
    }
    )
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.BBService.AddStory(this.storyToAdd).subscribe(
      (story) => {
        alert(`${story.storyTitle} was added!`);
        this.router.navigate(['stories']);
      }
    );
  }
}
