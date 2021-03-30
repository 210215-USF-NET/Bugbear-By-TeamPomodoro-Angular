// src/app/app.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { user } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'BugBear';
  isExpanded = false;
  isLoggedIn: boolean;
  error: any;
  user2Add: user;

  constructor(@Inject(DOCUMENT) public document: Document, private BBService: BBRESTService, public auth: AuthService) {
    this.user2Add =
    {
      userID: 0,
      email: '',
      characters: []
    }
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