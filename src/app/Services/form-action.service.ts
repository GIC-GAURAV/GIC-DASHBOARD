import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormActionService {

  constructor(private http:HttpClient) { }


  submitform(body:any):Observable<any>{
    return this.http.post('http://localhost:3000/data', body);
  }
}
