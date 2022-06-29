import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
// import {ngModel} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginComponent=true;
  response:any;
  token="";
  constructor(private authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  
  onSubmitLogin(data:any){
    this.authenticationService.userSignUp(data).subscribe((res:any)=>
      {
        console.log(res);
        localStorage.setItem('authToken',res['x-auth-token'])
      });
    this.router.navigateByUrl("/book/list");
  }
  cancel()
  {
    this.router.navigateByUrl("/home");
  }
}
