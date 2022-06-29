import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  arr=[1,2,3]
  loginComponent=false;
  signUpComponent=false;
  main=true;
  title = 'angularProject';

  login(event:any){
    this.loginComponent=!this.loginComponent;
    console.log("login")
    if(this.loginComponent==true)
    {
      this.signUpComponent=false
      // this.main=false
    }
    // return this.loginComponent;
  }
  signUp(event:any)
  {
    this.signUpComponent=!this.signUpComponent;
    if(this.signUpComponent==true)
    {
      this.loginComponent=false
      // this.main=false
    }
  }
  // props()
  // {
  //   console.log("hello");
  //   return this.loginComponent
  // }
}
