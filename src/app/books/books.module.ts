import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { booksRouting} from './books-routing';

import { DataTableModule } from "angular2-datatable";
@NgModule({
  imports: [
    CommonModule,
    booksRouting,

    DataTableModule
  ],
  declarations: [
    BooksComponent,
    BookComponent
  ],
  providers:[
  ]
})
export class BooksModule { }
