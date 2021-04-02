import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { location } from 'src/app/models/location'
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'
import { LogService } from 'src/app/services/bb-logging.service'
import { campaign } from 'src/app/models/campaign'
import { SharingDataService } from 'src/app/services/sharing-data.service'

@Component({
  selector: 'app-get-locations',
  templateUrl: './get-locations.component.html',
  styleUrls: ['./get-locations.component.css']
})
export class GetLocationsComponent implements OnInit {
  locations: location[] = [];
  locationID: number;
  campaign: campaign;
  userID: number;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService, private sharingService: SharingDataService) {
    auth.user$.toPromise
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
    this.BBService.GetLocations().subscribe(
      (result) => {
        result.forEach(location => {
          if (this.campaign.campaignLocations.some(l => l.locationID == location.locationID)) {
            this.locations.push(location)
            this.logger.debug(`${location.locationName} added to page array`)
          }
        })
      }
    )
  }

  GetLocation(locationID: number) {
    this.logger.info(`Getting details for location ${locationID}`)
    this.router.navigate(['location-details'], { queryParams: { location: locationID } });
  }
}
