import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BBRESTService } from '../../../services/bb-rest.service';
import { LogService } from 'src/app/services/bb-logging.service';
import { location } from 'src/app/models/location';

@Component({
  selector: 'app-edit-locations',
  templateUrl: './edit-locations.component.html',
  styleUrls: ['./edit-locations.component.css']
})
export class EditLocationsComponent implements OnInit {
  locationToEdit: location;
  
  constructor(private route: ActivatedRoute, private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService) { 
    this.locationToEdit = {
      locationName: '',
      locationDescription: '',
      locationID: 0
    }
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(
      params => {
        this.BBService.GetLocation(params.location).subscribe(
          (foundlocation) => {
            this.locationToEdit = foundlocation;
          }
        )
      }
    )
  }

  onSubmit(): void {
    this.BBService.EditLocation(this.locationToEdit).subscribe(
      () => {
        alert(`${this.locationToEdit.locationName}'s info was successfully edited`);
        this.router.navigate(['get-locations']);
      }
    )
  }

}
