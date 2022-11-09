import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tooltipDir: any;
  @Output('toggle') public toggle= new EventEmitter();
  public showTooltip(eventTarget: Element): void {
    // 4. Use the public API
    console.log(eventTarget)
    this.tooltipDir?.toggle(eventTarget);
  }
  isMobilesearchbarShow = false
  constructor() { }

  ngOnInit(): void {
  }

  clicktoggle(){
    this.toggle.emit('true');
  }

  showSearchbar(){
    this.isMobilesearchbarShow = true
  }
  hideSearchbar(){
    this.isMobilesearchbarShow = false
  }

}
