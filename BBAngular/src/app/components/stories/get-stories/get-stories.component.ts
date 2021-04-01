import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { story } from 'src/app/models/story'
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'
import { LogService } from 'src/app/services/bb-logging.service'

@Component({
  selector: 'app-get-stories',
  templateUrl: './get-stories.component.html',
  styleUrls: ['./get-stories.component.css']
})
export class GetStoriesComponent implements OnInit {
  stories: story[] = []
  storyID : number

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService) {
    auth.user$.toPromise
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        user => {
          this.BBService.GetStories().subscribe(
            (result) => {
              result.forEach(story => {
                if(/*story.userID*/0 === /*user.userID*/0)
                {
                  this.stories.push(story)
                }
              })
            }
          )
        }
      )
    })
  }

  GetStory(storyID: number) {
    this.router.navigate(['story-details'], { queryParams: { story: storyID } });
  }
}
