import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { campaign } from 'src/app/models/campaign';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.css']
})
export class NavSidebarComponent implements OnInit {
  campaign: campaign;
  constructor(private BBService: BBRESTService, public auth: AuthService) {

  }

  ngOnInit(): void {
  }

}
