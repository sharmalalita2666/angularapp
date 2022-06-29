import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userLogin,userAdd } from 'src/config/property';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  response: any;
  token=""
  constructor(private http:HttpClient) { }

  userLogin(data: object)
  {
    let url=userLogin;
    return this.http.post(url,data);
  }
  userSignUp(data:object)
  {
    let url=userAdd;
    return this.http.post(url,data);
  }
}