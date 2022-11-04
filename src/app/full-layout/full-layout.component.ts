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


  custometoggle:boolean=false;
  constructor( private router:Router) {
    
  }

  ngOnInit(): void {
  }
  public items: Array<customDrawerItem> = [
    { text: "dashboards", icon: "icon-social-youtube",path:"application/to-do-list" },
    { text: "pages", icon: "icon-social-youtube" ,path:"application/survey"},
    { text: "Applications", icon: "k-icon k-i-calendar",path:"application/chats" },
    { text: "UI", icon: "icon-social-youtube" ,path:"application/survey"},
    { text: "Menu", icon: "k-icon k-i-calendar",path:"application/chats" },
    { text: "Blank Page", icon: "k-icon k-i-calendar",path:"application/chats" },
    { text: "Docs", icon: "k-icon k-i-calendar",path:"application/chats" },
    // { separator: true },
    // { text: "Attachments", icon: "k-i-envelop-link" },
    // { text: "Favourites", icon: "k-i-star-outline" },
  ];

  public onSelect(ev: any): void {
    this.custometoggle=true;
    // console.log(ev)
    this.router.navigate([ev.path])
    // drawer2?.toogle()
  }
 
}

interface customDrawerItem extends DrawerItem {
  path:string
}

