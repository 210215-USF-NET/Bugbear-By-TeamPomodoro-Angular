import { Component, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { story } from 'src/app/models/story'
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'
import { LogService } from 'src/app/services/bb-logging.service'
import { campaign } from 'src/app/models/campaign'
import { SharingDataService } from 'src/app/services/sharing-data.service'

@Component({
  selector: 'app-get-stories',
  templateUrl: './get-stories.component.html',
  styleUrls: ['./get-stories.component.css']
})
export class GetStoriesComponent implements OnInit {
  stories: story[] = []
  storyID : number
  campaign: campaign;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService, private sharingService: SharingDataService) {
    auth.user$.toPromise
    this.campaign = this.sharingService.getData()
  }

  ngOnInit(): void {
    console.log(this.sharingService.getData())
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        user => {
          this.BBService.GetStories().subscribe(
            (result) => {
              result.forEach(story => {
                console.log(story)
                if(this.campaign.campaignStories.some(s => s.storyID == story.storyID))
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
