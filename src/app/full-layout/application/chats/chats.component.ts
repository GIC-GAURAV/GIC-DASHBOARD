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
  public thumbnailSrc =
    "assets/images/user-2.jpg";

  public items: Array<any> = [
    {
      userName:"Linn Ronning",
      userProfile: "assets/images/user-1.jpg",
      message: "What do you think about our plans for this product launch? ",
      time:"03:13"
    
    },
    {
      userName:"Linn Ronning",
      userProfile: "assets/images/user-1.jpg",
      message: "It looks to me like you have a lot planned before your deadline. I would suggest you push your deadline back so you have time to run a successful advertising campaign. ",
      time:"05:10"
    },
    {
      userName:"Sarah Kortney",
      userProfile: "assets/images/user-1.jpg",
      message: "How do you think we should move forward with this project? As you know, we are expected to present it to our clients next week. ",
      time:"04:00"
    },
    {
      userName:"Sarah Kortney",
      userProfile: "assets/images/user-2.jpg",
      message: "How do you I would suggest you discuss this further with the advertising team.  we should move forward with this project? ", 
      time:"03:30"
    },
    {
      userName:"Sarah Kortney",
      userProfile: "assets/images/user-2.jpg",
      message: "How do you I would suggest you discuss this further with the advertising team.  we should move forward with this project? ", 
      time:"08:50"
    },

    
  ];
}
