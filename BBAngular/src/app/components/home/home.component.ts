import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { user } from 'src/app/models/user';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn : any;
  error : any;
  user2Add : user;

  constructor(private router: Router, public auth: AuthService, private BBService : BBRESTService) {
    this.user2Add =
    {
      userID: 0,
      email: ''
    }
  }

  ngOnInit(): void {
  }

  login(){
    this.auth.loginWithRedirect();

    this.auth.isAuthenticated$.subscribe(result => {
      this.isLoggedIn = result;
    })
    if(this.isLoggedIn === undefined)
    {
      
    }
    else{
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
  }

}
