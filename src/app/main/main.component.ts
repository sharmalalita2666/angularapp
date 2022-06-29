import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loginComponent=false;
  signUpComponent=false;
  opacity=100;
  carousel=true;

  constructor() { }

  login(event:any){
    this.loginComponent=!this.loginComponent;
    console.log("login")
    if(this.loginComponent==true)
    {
      this.signUpComponent=false
      this.carousel=false
      this.opacity=50;
    }
    else
    {
      this.carousel=true
    }
    // return this.loginComponent;
  }
  signUp(event:any)
  {
    this.signUpComponent=!this.signUpComponent;
    if(this.signUpComponent==true)
    {
      this.loginComponent=false
      this.carousel=false
    }
    else{
      this.carousel=true;
    }
  }
  ngOnInit(): void {
  }
}
