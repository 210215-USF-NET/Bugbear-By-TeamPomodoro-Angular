import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { location } from 'src/app/models/location'
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'
import { LogService } from 'src/app/services/bb-logging.service'

@Component({
  selector: 'app-get-locations',
  templateUrl: './get-locations.component.html',
  styleUrls: ['./get-locations.component.css']
})
export class GetLocationsComponent implements OnInit {
  locations: location[] = [];
  locationID: number;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService) {
    auth.user$.toPromise
  }

  ngOnInit(): void {
    this.BBService.GetLocations().subscribe(
      (result) => {
        result.forEach(location => {
          this.locations.push(location)
          this.logger.debug(`${location.locationName} added to page array`)
        })
      }
    )
  }

  GetLocation(locationID: number) {
    this.logger.info(`Getting details for location ${locationID}`)
    this.router.navigate(['location-details'], { queryParams: { location: locationID } });
  }
}
