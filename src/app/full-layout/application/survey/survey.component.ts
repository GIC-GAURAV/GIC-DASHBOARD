import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public listItems: Array<string> = [
    "Action",
    "Another Action",

  ];
  public items: Array<any> = [
    {
      title: "Developer Survey",
      subtitle: "Development",
      date: "17.05.2021",
      catogry: "EDUCATION"
    },
    {
      title: "Designer Survey",
      subtitle: "Workplace",
      date: "15.05.2021",
      catogry: "NEW FRAMEWORK"
    },
    {
      title: "Backend Survey",
      subtitle: "Hardware",
      date: "12.05.2021",
      catogry: "PERSONAL"
    },


  ];

}
