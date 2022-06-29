import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent implements OnInit{
    stringInterpolation="example of string interpolation";
    allowNewServer=false;
    loginPage='hidden';

    functionHello(){
        return "Hello";
    }
    constructor() {
        setTimeout(()=>{
            this.allowNewServer=true;
        },2000);
     }

     onClickLogin(){
        this.loginPage='visible';
        console.log("here");
     }
    ngOnInit(): void {
    }
}