import { Component, OnInit } from '@angular/core';
import { User, Message, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public user: User = { id: 1 };

  public bot: User = { id: 0 };

  public messages: Message[] = [
    {
      author: this.bot,
      text: "Do you like Angular?",
    },
    {
      author: this.user,
      text: "Definitely!",
    },
  ];

  public sendMessage(e: SendMessageEvent): void {
    this.messages = [...this.messages, e.message];
  }
}
