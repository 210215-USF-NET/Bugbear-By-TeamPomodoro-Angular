import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { user } from 'src/app/models/user';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private router: Router, public auth: AuthService) {

  }
}
