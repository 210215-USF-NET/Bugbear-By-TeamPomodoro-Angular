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
  msgDto: chat
  msgInboxArray: chat[]
  rollOutOf: number
  rollOutput: number
  tempEmail: string

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
      campaignLocations: [],
      campaignMaps: [],
      campaignNPCs: [],
      campaignStories: []
    }
    this.auth.user$.subscribe(user => {
      this.msgDto.userEmail = user.email
      this.tempEmail = user.email
    })
    this.rollOutOf = 20
    this.rollOutput = 0
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.BBService.GetCampaign(params.campaign).subscribe(
          (campaignFound) => {
            this.campaign2Edit = campaignFound;
          }
        )
      }
    )
    this.auth.user$.subscribe(user => {
      this.msgDto.userEmail = user.email.substring(0, user.email.lastIndexOf("@"))
    })
    this.signalRService.retrieveMappedObject().subscribe((receivedObj: chat) => { this.addToInbox(receivedObj) })
  }

  send(): void {
    this.auth.user$.subscribe(user => {
      this.msgDto.userEmail = user.email.substring(0, user.email.lastIndexOf("@"))
    })
    if (this.msgDto) {
      if (this.msgDto.message.length == 0) {
        window.alert("Message must have content.");
        return;
      } else {
        this.signalRService.broadcastMessage(this.msgDto)
      }
      this.msgDto.message = ''
    }
  }

  addToInbox(obj: chat) {
    var tempObj: chat
    tempObj = {
      message: obj.message,
      userEmail: obj.userEmail
    }
    this.msgInboxArray.push(tempObj);
  }

  rollDice(): void {
    if (this.rollOutOf >= 1) {
      var pos: number = 0
      var id = setInterval(() => {
        if (pos == 100) {
          clearInterval(id)
          document.querySelector(".dnd-dice").classList.remove("dice-img")
          this.rollOutput = Math.floor(Math.random() * this.rollOutOf) + 1
          this.sendDiceRoll(this.rollOutput, this.rollOutOf)
        } else {
          pos++;
          document.querySelector(".dnd-dice").classList.add("dice-img")
          this.rollOutput = Math.floor(Math.random() * this.rollOutOf) + 1
        }
      }, 30)
    }
    else{
      window.alert("Cant roll a dice smaller than 1")
    }
  }

  sendDiceRoll(diceRollOutput: number, diceSize): void {
    this.tempEmail = this.msgDto.userEmail
    this.msgDto.userEmail = 'BB'
    this.msgDto.message = `${this.tempEmail} rolled a ${diceRollOutput} out of ${diceSize}`
    this.signalRService.broadcastMessage(this.msgDto)
    this.msgDto.message = ''
    this.auth.user$.subscribe(user => {
      this.msgDto.userEmail = user.email.substring(0, user.email.lastIndexOf("@"))
    })
  }
}