import { FormActionService } from './../../../Services/form-action.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor(private formservice:FormActionService) { }

  form:FormGroup= new FormGroup({
sourceApi: new FormControl("",Validators.required),
action:new FormControl("",Validators.required),
sendData: new FormControl("",Validators.required)
  })

  ngOnInit(): void {
  }


  submit(){
    this.formservice.submitform(this.form.value).subscribe(res=>{
      console.log(res)
    })
  }

}
