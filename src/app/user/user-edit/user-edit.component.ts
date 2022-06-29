import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators } from '@angular/forms';
import { ValidatePassword } from 'src/shared/password.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  id:string="";
  user:any;

  editUser= new FormGroup({
    firstName:new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
    lastName:new FormControl('', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])),
    email:new FormControl('', Validators.compose([Validators.required, Validators.email])),
    mobileNumber:new FormControl('', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])),
    city:new FormControl('', Validators.required),
    state:new FormControl('', Validators.required),
    flatNo:new FormControl('', Validators.required),
    password:new FormControl('',[Validators.required,ValidatePassword])
  });

  constructor(private UserService:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id') as string;
    this.user=history.state.data;
    console.log(this.id);
    this.editUser.setValue({
      "firstName":this.user?.firstName,
      "lastName":this.user?.lastName,
      "email":this.user?.email,
      "mobileNumber":this.user?.mobileNumber,
      "city":this.user?.address.city,
      "state":this.user?.address.state,
      "flatNo":this.user?.address.flatNo,
      "password":""
    });
  }
  edit()
  { if(!this.editUser.valid){return}

    const obj=
    {
      "firstName":this.editUser.value['firstName'] ,
      "lastName":this.editUser.value['lastName'] ,
      "email":this.editUser.value['email'] ,
      "mobileNumber":this.editUser.value['mobileNumber'] ,
      "address":{
        "city":this.editUser.value['city'] ,
        "state":this.editUser.value['state'] ,
        "flatNo":this.editUser.value['flatNo'] 
      },
      "password":this.editUser.value['password'] 
    }
      
    this.UserService.userEdit(this.id,obj);
    this.router.navigateByUrl("/user/list");
   }

  cancel()
  {
    this.router.navigateByUrl("/home");
  }
}
