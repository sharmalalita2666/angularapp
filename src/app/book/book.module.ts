import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { BookAddComponent } from './book-add/book-add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BookEditComponent } from './book-edit/book-edit.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent,
    BookEditComponent,
  ],
  imports: [
    SharedModule,
    BookRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
