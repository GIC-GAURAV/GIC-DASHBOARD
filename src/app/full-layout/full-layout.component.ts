import { Component, ElementRef, OnInit,ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})


export class FullLayoutComponent implements OnInit {
  @ViewChild('drawer') drawer!: ElementRef ;


  constructor( private router:Router) {
    
  }

  ngOnInit(): void {
  }
  public items: Array<customDrawerItem> = [
    { text: "To-Do-List", icon: "k-icon k-i-inbox",path:"application/to-do-list" },
  
    { text: "Survey", icon: "k-icon k-i-bell" ,path:"application/survey"},
    { text: "Chats", icon: "k-icon k-i-calendar",path:"application/chats" },
    // { separator: true },
    // { text: "Attachments", icon: "k-i-envelop-link" },
    // { text: "Favourites", icon: "k-i-star-outline" },
  ];

  public onSelect(ev: any): void {
    // console.log(ev)
    this.router.navigate([ev.path])
    // drawer2?.toogle()
  }
}

interface customDrawerItem extends DrawerItem {
  path:string
}

