import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books:any[]=[];

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    this.getBookList()
  }

  getBookList(){
    this.bookService.getData().subscribe((data:any)=>{
      this.books=data;
      console.log(this.books);
    })
  }
  deleteBook(id:any)
  {
    this.bookService.deleteBook(id).subscribe((data:any)=>{
      this.getBookList();
    })
  }
  editBook(book:any)
  {
    this.router.navigate([`/book/edit/${book._id}`], { state: {data: book} });
  }
}
