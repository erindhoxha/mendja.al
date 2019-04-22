import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ajaxCall: HttpClient)  {

  }
  getUsers() {
    return this.ajaxCall.get('https://reqres.in/api/users');
  }
}
