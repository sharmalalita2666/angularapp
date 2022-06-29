import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bookAdd,bookList,bookDelete,bookEdit } from 'src/config/property';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  response: any;
  constructor(private http:HttpClient) { }

  getData()
  {
    let url=bookList;
    return this.http.get(url);
  }
  addNewBook(data:any)
  {
    let url=bookAdd;
    this.http.post<any>(url, data).subscribe(data => {
        this.response=data;
    })
    return this.response;
  }
  editBook(id:any, data:any)
  {
    let url=bookEdit+`/${id}`;
    this.http.patch(url,data).subscribe(data => {
        this.response=data;
    })
    return this.response;
  }
  deleteBook(id:any)
  {
    let url=bookDelete+`/${id}`;
    return this.http.delete(url);
  }
}
