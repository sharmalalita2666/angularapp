import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  id:string="";
  book:any;

  editBookForm= new FormGroup({
    title:new FormControl('', Validators.required),
    genre:new FormControl('', Validators.required),
    copies:new FormControl('', Validators.required),
    status:new FormControl('', Validators.required),
    authorFName:new FormControl('', Validators.required),
    authorLName:new FormControl('', Validators.required),
    authorEmail:new FormControl('', Validators.required),
  });

  constructor(private bookService:BookService,private router:Router, private route:ActivatedRoute) { 
  }
  response:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id') as string;
    this.book=history.state.data;
    console.log(this.book);

    this.editBookForm.setValue({
      "title":this.book?.title,
      "genre":this.book?.genre,
      "copies":this.book?.copies,
      "status":this.book?.status,
      "authorFName":this.book?.author.firstName,
      "authorLName":this.book?.author.lastName,
      "authorEmail":this.book?.author.email
    });
  }
  editBook()
  {
    const obj={
      "title":this.editBookForm.value['title'],
      "genre":this.editBookForm.value['genre'],
      "copies":this.editBookForm.value['copies'],
      "status":this.editBookForm.value['status'],
      "author":{
        "firstName":this.editBookForm.value['authorFName'],
        "lastName":this.editBookForm.value['authorLName'],
        "email":this.editBookForm.value['authorEmail']
      }
    }
    this.response=this.bookService.editBook(this.id,obj);
    this.router.navigateByUrl("/book/list");
  }
  cancel()
  {
    this.router.navigateByUrl("/book/list");
  }
}
