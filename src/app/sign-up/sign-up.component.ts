import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators } from '@angular/forms';
import { User } from '../User';
import { ValidatePassword } from 'src/shared/password.validator';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  response:any;
  token="";

  submitForm= new FormGroup({
    firstName:new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
    lastName:new FormControl('', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])),
    email:new FormControl('', Validators.compose([Validators.required, Validators.email])),
    mobileNumber:new FormControl('', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])),
    city:new FormControl('', Validators.required),
    state:new FormControl('', Validators.required),
    flatNo:new FormControl('', Validators.required),
    password:new FormControl('',[Validators.required,ValidatePassword])
  });

  post:any=[]
  
  constructor(private authenticationService:AuthenticationService,private router:Router) { }

  addUser()
  { const obj=
    {
      "firstName":this.submitForm.value['firstName'] ,
      "lastName":this.submitForm.value['lastName'] ,
      "email":this.submitForm.value['email'] ,
      "mobileNumber":this.submitForm.value['mobileNumber'] ,
      "address":{
        "city":this.submitForm.value['city'] ,
        "state":this.submitForm.value['state'] ,
        "flatNo":this.submitForm.value['flatNo'] 
      },
      "password":this.submitForm.value['password'] 
    }
      
    this.authenticationService.userSignUp(obj).subscribe((res:any)=>
      {
        // console.log(res['x-auth-token']);
        localStorage.setItem('authToken',res['x-auth-token'])
      });

      this.router.navigateByUrl("/book/list");
   }
  ngOnInit(): void {
    
  }
  onSetValue()
  {
    const user=new User("Pallavi","Jeengar","pallavi@gmail.com","7877898767",{"city":"Jaipur","state":"Rajasthan","flaNo":12},"P@gmail.com")
    this.submitForm.setValue(user);
  }
  onPatchValue()
  {
    this.submitForm.patchValue({
      firstName:"Riya",
      lastName:"Sharma"
    })
  }
  cancel()
  {
    this.router.navigateByUrl("/home");
  }
}
