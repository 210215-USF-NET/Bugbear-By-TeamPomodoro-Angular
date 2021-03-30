import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isLoggedIn: boolean;
  error: any;
  user2Add: user;

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, public router: Router, private BBService: BBRESTService) {
    this.user2Add =
    {
      userID: 0,
      email: '',
      characters: []
    }
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(result => {
      this.isLoggedIn = result;
      if (this.isLoggedIn == true) {
        this.auth.user$.subscribe(user => {
          this.BBService.GetUserByEmail(user.email).subscribe(
            result => result,
            error => {
              this.error = error.status;
              if (this.error == 404) {
                this.user2Add.email = user.email;
                this.BBService.AddUser(this.user2Add).subscribe();
              }
            }
          )
        })
      }
    })
  }
}
