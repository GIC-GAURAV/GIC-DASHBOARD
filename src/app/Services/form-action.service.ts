import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormActionService {

  constructor(private http:HttpClient) { }


  submitform(body:any){
    this.http.post('',body)
  }
}
