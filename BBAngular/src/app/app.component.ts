// src/app/app.component.ts
import { Component, Inject, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewChecked{
  title = 'BugBear';
  user : any;
  @ViewChild('userEmail') userEmail : ElementRef;
  assigned : boolean = false;

  constructor(@Inject(DOCUMENT) public document: Document, private BBService: BBRESTService, public auth: AuthService) {
    
  }

  ngAfterViewChecked(){
    if(this.auth.isAuthenticated$){
      if (this.userEmail.nativeElement !== undefined && this.assigned == false) {
        localStorage.setItem('email', this.userEmail.nativeElement.innerHTML);
        this.assigned = true;
      }
    }
    else
    {
      localStorage.removeItem('email');
    }
  }
}