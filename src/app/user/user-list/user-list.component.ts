import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users:any;
  displayedColumns: string[] = ['name', 'email', 'mobileNumber', 'address','bookIssued','actions'];

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getUserList()
  }
  getUserList(){
    this.userService.getData().subscribe((data:any)=>{
      console.log(data);
      this.users=data;
    })
  }

  deleteUser(id:any)
  {
    this.userService.deleteUser(id).subscribe((data:any)=>{
      this.getUserList();
    })
  }

  editUser(user:any)
  {
    this.router.navigate([`/user/edit/${user._id}`], { state: {data: user} });
  }
}
