import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';
import { LogService } from 'src/app/services/bb-logging.service';
import { location } from 'src/app/models/location';

@Component({
  selector: 'app-add-locations',
  templateUrl: './add-locations.component.html',
  styleUrls: ['./add-locations.component.css']
})
export class AddLocationsComponent implements OnInit {
  locationToAdd: location;

  constructor(private BBService: BBRESTService, public auth: AuthService, private router: Router, private logger: LogService) {
    this.locationToAdd = 
    {
      locationName: '',
      locationDescription: '',
      locationID: 0
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.BBService.AddLocation(this.locationToAdd).subscribe(
      (location) => {
        alert(`${location.locationName} was added!`);
        this.router.navigate(['get-locations']);
      }
    );
  }
}
