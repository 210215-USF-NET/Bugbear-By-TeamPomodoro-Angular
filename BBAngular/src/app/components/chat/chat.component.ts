import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { campaign } from 'src/app/models/campaign';
import { chat } from 'src/app/models/chat';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  campaign2Edit: campaign
  msgDto : chat
  msgInboxArray: chat[]

  constructor(private BBService: BBRESTService, private router: Router, private route: ActivatedRoute, public auth: AuthService, public signalRService: ChatService) {
    this.msgDto = {
      userEmail: '',
      message: ''
    }
    this.msgInboxArray = []
    this.campaign2Edit = {
      campaignID: 0,
      campaignName: "",
      description: "",
      gameMasterID: 0,
      campaignUsers: [],
      campaignCharacters: [],
      campaignEncounters: [],
      campaignLocations:[],
      campaignMaps: [],
      campaignNPCs: [],
      campaignStories:[]
    }
    this.auth.user$.subscribe(user => {
      this.msgDto.userEmail = user.email
    })
  }

  ngOnInit(): void {
    this.signalRService.retrieveMappedObject().subscribe( (receivedObj: chat) => { this.addToInbox(receivedObj)})
    this.route.queryParams.subscribe(
      params => {
        this.BBService.GetCampaign(params.campaign).subscribe(
          (campaignFound) => {
            this.campaign2Edit = campaignFound;
          }
        )
      }
    )
  }

  send(): void {
    this.auth.user$.subscribe(user => {
      this.msgDto.userEmail = user.email
    })
    if(this.msgDto) {
      if(this.msgDto.userEmail.length == 0){
        window.alert("Message must have content.");
        return;
      } else {
        this.signalRService.broadcastMessage(this.msgDto);
      }
    }
  }

  addToInbox(obj: chat) {
    this.msgInboxArray.push(obj);
  }
}