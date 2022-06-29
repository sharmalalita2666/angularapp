import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  addBookForm= new FormGroup({
    title:new FormControl('', Validators.required),
    genre:new FormControl('', Validators.required),
    copies:new FormControl('', Validators.required),
    status:new FormControl('', Validators.required),
    authorFName:new FormControl('', Validators.required),
    authorLName:new FormControl('', Validators.required),
    authorEmail:new FormControl('', Validators.required),
  });
  
  constructor(private bookService:BookService,private router:Router) { }
  response:any;
  ngOnInit(): void {
  }

  addBook()
  {
    const obj={
      "title":this.addBookForm.value['title'],
      "genre":this.addBookForm.value['genre'],
      "copies":this.addBookForm.value['copies'],
      "status":this.addBookForm.value['status'],
      "author":{
        "firstName":this.addBookForm.value['authorFName'],
        "lastName":this.addBookForm.value['authorLName'],
        "email":this.addBookForm.value['authorEmail']
      }
    }
    this.response=this.bookService.addNewBook(obj);
    this.router.navigateByUrl("/book/list");
  }
  cancel()
  {
    this.router.navigateByUrl("/book/list");
  }
}
