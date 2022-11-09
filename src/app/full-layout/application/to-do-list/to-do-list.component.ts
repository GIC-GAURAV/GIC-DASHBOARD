import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public listItems: Array<string> = [
    "Action",
    "Another Action",

  ];
  public items: Array<any> = [
    {
      title: "Book train tickets",
      subtitle: "Sass",
      date: "17.05.2021",
      catogry: "EDUCATION"
    },
    {
      title: "Complete weekly delivery",
      subtitle: "React",
      date: "15.05.2021",
      catogry: "NEW FRAMEWORK"
    },
    {
      title: "Take photos of cakes",
      subtitle: "Flexbox",
      date: "12.05.2021",
      catogry: "PERSONAL"
    },


  ];

}
