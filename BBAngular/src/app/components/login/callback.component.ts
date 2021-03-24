import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '../../app.service';

@Component({ template: ` This works! ` })
export class CallbackComponent implements OnInit {
    constructor(private okta: OktaAuthService) { }

    ngOnInit(): void {
        // Handles the response from Okta and parses tokens
        this.okta.handleAuthentication();
    }
}