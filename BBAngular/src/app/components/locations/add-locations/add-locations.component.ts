import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';
import { LogService } from 'src/app/services/bb-logging.service';
import { location } from 'src/app/models/location';
import { campaign } from 'src/app/models/campaign';
import { SharingDataService } from 'src/app/services/sharing-data.service';

@Component({
  selector: 'app-add-locations',
  templateUrl: './add-locations.component.html',
  styleUrls: ['./add-locations.component.css']
})
export class AddLocationsComponent implements OnInit {
  locationToAdd: location;
  campaign: campaign;

  constructor(private BBService: BBRESTService, public auth: AuthService, private router: Router, private logger: LogService, private sharingService: SharingDataService) {
    this.locationToAdd = 
    {
      locationName: '',
      locationDescription: '',
      locationID: 0,
      campaignID: 52
    }
  }

  ngOnInit(): void {
    this.campaign = this.sharingService.getData();
    this.locationToAdd.campaignID = this.campaign.campaignID;
  }

  onSubmit(): void {
    this.BBService.AddLocation(this.locationToAdd).subscribe(
      (location) => {
        this.addLocationToCampaign(location);
        alert(`${location.locationName} was added!`);
        this.router.navigate(['get-locations']);
      }
    );
  }

  addLocationToCampaign(location: location): void {
    this.campaign.campaignLocations.push(location);
    this.BBService.EditCampaign(this.campaign).subscribe(
      (campaign) => {
        this.sharingService.setData(campaign)
      }
    );
  }
}
