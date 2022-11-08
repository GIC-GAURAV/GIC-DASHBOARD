import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerItem } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})


export class FullLayoutComponent implements OnInit {
  @ViewChild('drawer') drawer!: ElementRef;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  subItems:any
  public items: Array<customDrawerItem> = [
    {
      text: "dashboards", icon: "icon-menu", path: "application/to-do-list",active:true,

      subItems: [{
        text: "dashboards", icon: "icon-envelope", path: "application/to-do-list"
      }]
    },
    {
      text: "pages", icon: "icon-fire", path: "application/survey",active:false,
      subItems: []
    },
    {
      text: "Applications", icon: "k-icon k-i-calendar", path: "application/chats",active:false,
      subItems: [{
        text: "To-do List", icon: "icon-check", path: "application/to-do-list",
      },
      {
        text: "Survey", icon: "icon-envelope", path: "application/survey",
      },
      {
        text: "chats", icon: "icon-speech", path: "application/chats",
      }
    
    
    ]
    },
    {
      text: "UI", icon: "k-i-clip", path: "application/survey",active:false,
      subItems: [{
        text: "dashboards", icon: "icon-envelope", path: "application/to-do-list",
      }]
    },
    {
      text: "Menu", icon: "k-icon k-i-calendar", path: "application/chats",active:false,
      subItems: [{
        text: "dashboards", icon: "icon-envelope", path: "application/to-do-list",
      }]
    },
    {
      text: "Blank Page", icon: "k-icon k-i-calendar", path: "application/chats",active:false, subItems: [{
        text: "dashboards", icon: "k-i-inbox", path: "application/to-do-list",
      }]
    },
    {
      text: "Docs", icon: "k-i-files", path: "application/chats",active:false, subItems: [{
        text: "dashboards", icon: "k-i-inbox", path: "application/to-do-list",
      }]
    },
  ];




  public onSelect(ev: any ,event2:any): void {
    console.log(ev)
    this.items.map(el=>{
      if(ev.text === el.text){
        el.active = true
      }else{
        el.active = false
      }
    })
  
    if(event2.expanded === false){
      if(ev.subItems.length !== 0){
        event2.toggle()
        this.subItems=ev.subItems
      }
    }else{
      if(ev.subItems.length !== 0){
        event2.toggle()
        this.subItems=ev.subItems
      }
    }
  }

  onSelectSubItem(ev: any ,event2:any){
    if(event2.expanded === false){
      event2.width = 180
      event2.toggle()
      this.subItems=ev.subItems
     
    }else{
      event2.toggle()
    }
    // console.log(ev)
    console.log(ev.path)
    this.router.navigate([ev.path])
  }
  check: string = 'open'
  toggleUpDown(event: any, event2: any) {
    console.log(event)
    console.log(event2)
    if (event.expanded === true) {
      if (event2.expanded === true) {
        event2.toggle()
        this.check = 'close'
      } else {
        if (this.check === 'close') {
          event.toggle()
          this.check = 'open'

        } else {
          this.subItems=this.items[0].subItems
          event2.width = 180
          event2.toggle()
        }
      }
    } else {
      event.width = 100
      event.toggle()
    }
  }

}

interface customDrawerItem extends DrawerItem {
  path: string
  subItems: object
  active:boolean
}



