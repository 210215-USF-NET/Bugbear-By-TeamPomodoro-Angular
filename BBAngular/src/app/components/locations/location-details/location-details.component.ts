import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'
import { LogService } from 'src/app/services/bb-logging.service';
import { location } from 'src/app/models/location';
import { campaign } from 'src/app/models/campaign';
import { SharingDataService } from 'src/app/services/sharing-data.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  location: location;
  campaign: campaign;
  userID: number;

  constructor(private BBService: BBRESTService, private route: ActivatedRoute, private router: Router, public auth: AuthService, private logger: LogService, private sharingService: SharingDataService) {
    this.location = {
      locationID: 0,
      locationName: '',
      locationDescription: '',
      campaignID: 52
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
          this.BBService.GetLocation(params.location).subscribe(
            foundlocation => {
              this.location = foundlocation;
            }
          )
        }
      );
  }

  DeleteLocation(locationToBeDeleted: location): void {
    if (confirm(`Are you sure you want to delete ${locationToBeDeleted.locationName}?`).valueOf()) {

      this.BBService.DeleteLocation(locationToBeDeleted.locationID).subscribe(
        () => {
          alert(`${locationToBeDeleted.locationName} has been deleted`);
          this.logger.info(`${locationToBeDeleted.locationName} has been deleted`);
          this.router.navigate(['get-locations']);
        }
      );
    }
  }
  EditLocation(locationID: number): void {
    this.router.navigate(['edit-locations'], { queryParams: { location: locationID } });
  }

}
