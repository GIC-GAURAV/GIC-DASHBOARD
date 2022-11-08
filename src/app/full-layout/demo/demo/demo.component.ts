import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public action: Array<string> = [
    "Create",
    "Update",
    "Get",
    "Delete",
  ];

  public sendData: Array<string> = [
    "Email",
  ];
  constructor(private http:HttpClient) { }

  form:FormGroup= new FormGroup({
sourceApi: new FormControl(),
action:new FormControl(),
sendData: new FormControl()
  })

  ngOnInit(): void {
  }


  submitForm(){

this.http.post('http://localhost:3000/data',this.form.value).subscribe(el=>{
  console.log(el)
})
  }

}
