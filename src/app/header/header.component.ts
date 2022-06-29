import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output("login")login:EventEmitter<any>=new EventEmitter();
  @Output("signUp")signUp:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  logined()
  {
    if(localStorage.getItem('authToken'))
    {
      return true;
    }
    else{
      return false;
    }
  }
  logout()
  {
    localStorage.removeItem('authToken')
  }
}
