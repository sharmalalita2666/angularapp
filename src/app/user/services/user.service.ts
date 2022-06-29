import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { userDelete,userList,userEdit} from 'src/config/property';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:string|string[]=localStorage.getItem('authToken') as string;
  header = new HttpHeaders().set('authorization',this.token);

  constructor(private http:HttpClient) { }

  getData()
  {
    let url=userList;
    // console.log(this.token);
    return this.http.get(url, {headers:this.header});
  }

  deleteUser(id:any)
  {
    let url=userDelete+`/${id}`;
    return this.http.delete(url, {headers:this.header});
  }

  userEdit(id:any,data:any)
  {
    let url=userEdit+`/${id}`;
    return this.http.patch(url,data,{headers:this.header}).subscribe(data => {
    })
  }
}
