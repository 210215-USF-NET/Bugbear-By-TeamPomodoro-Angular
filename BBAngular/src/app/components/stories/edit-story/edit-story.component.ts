import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BBRESTService } from '../../../services/bb-rest.service';
import { story } from 'src/app/models/story';
import { LogService } from 'src/app/services/bb-logging.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
  storyToEdit : story;
  constructor(private route: ActivatedRoute, private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService) { 
    this.storyToEdit = 
    {
      storyTitle: '',
      storyDescription: '',
      dateCreated: new Date(Date.now()),
      storyID: 0,
      campaignID: 0
    }
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(
      params => {
        this.BBService.GetStory(params.story).subscribe(
          (foundStory) => {
            this.storyToEdit = foundStory;
          }
        )
      }
    )
  }

  onSubmit(): void {
    this.BBService.EditStory(this.storyToEdit).subscribe(
      () => {
        alert(`${this.storyToEdit.storyTitle}'s info was successfully edited`);
        this.router.navigate(['get-stories']);
      }
    )
  }
}
