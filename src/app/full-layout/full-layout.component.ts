import { Component, OnInit } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public selected = "Inbox";

  public items: Array<DrawerItem> = [
    { text: "Inbox", icon: "k-i-inbox", selected: true },
    { separator: true },
    { text: "Notifications", icon: "k-i-bell" },
    { text: "Calendar", icon: "k-i-calendar" },
    { separator: true },
    { text: "Attachments", icon: "k-i-envelop-link" },
    { text: "Favourites", icon: "k-i-star-outline" },
  ];

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }
}
