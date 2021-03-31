import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { MessageDto } from 'src/app/models/MessageDto';
import { AuthService } from '@auth0/auth0-angular';
import { BBRESTService } from 'src/app/services/bb-rest.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userEmail : string;
  constructor(private chatService: ChatService, private auth :AuthService, private BBService : BBRESTService) { }

  ngOnInit(): void {
    this.chatService.retrieveMappedObject().subscribe((receivedObj: MessageDto) => { this.addToInbox(receivedObj) })
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        result => {
          this.userEmail = result.email
        }
      )
    })
  }

  msgDto: MessageDto = new MessageDto();
  msgInboxArray: MessageDto[] = [];

  send(): void {
    if (this.msgDto) {
      this.msgDto.user = this.userEmail
      if (this.msgDto.msgText.length == 0) {
        window.alert("Must enter a message body.")
        return
      } else {
        this.chatService.broadcastMessage(this.msgDto)
      }
    }
  }

  addToInbox(obj: MessageDto) {
    let newObj = new MessageDto()
    newObj.user = obj.user
    newObj.msgText = obj.msgText
    this.msgInboxArray.push(newObj)

  }
}