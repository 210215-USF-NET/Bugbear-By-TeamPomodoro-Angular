import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Observable, Subject } from 'rxjs';
import { chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private connection: any = new signalR.HubConnectionBuilder().withUrl("https://bugbear-api.azurewebsites.net/chat")
    .configureLogging(signalR.LogLevel.Information)
    .build();

  readonly POST_URL = "https://bugbear-api.azurewebsites.net/api/chat"
  private receivedMessageObject: chat = {
    userEmail: '',
    message: ''
  }
  private sharedObj = new Subject<chat>();

  constructor(private http: HttpClient) {
    this.connection.onclose(async () => {
      await this.start();
    });
    this.connection.on("ReceiveOne", (user, message) => { this.mapReceivedMessage(user, message); });
    this.start();
  }

  public async start() {
    try {
      await this.connection.start();
      console.log("connected");
    } catch (err) {
      console.log(err);
      setTimeout(() => this.start(), 5000);
    } 
  }

  private mapReceivedMessage(userEmail: string, message: string): void {
    this.receivedMessageObject.userEmail = userEmail;
    this.receivedMessageObject.message = message;
    this.sharedObj.next(this.receivedMessageObject);
  }

  public broadcastMessage(msgDto: any) {
    // this.http.post(this.POST_URL, msgDto).subscribe(data => console.log(data));
    this.connection.invoke("SendMessage1", msgDto.userEmail, msgDto.message).catch(err => console.error(err));
  }

  public retrieveMappedObject(): Observable<chat> {
    return this.sharedObj.asObservable();
  }
}
