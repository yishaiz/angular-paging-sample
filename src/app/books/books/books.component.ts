import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {//, OnChanges

  books: Array<string>;
  book :  string ;

  currentBook: string;
  currentBookIndex: number = 0;
  totalBooks: number = 0;

  bookContainerWidth: number = 400;

  message: string;
  isDisplayMessage: boolean;
  isDisplayError: boolean;
  isLoading: boolean=false;

  constructor(  ) {

  }

  ngOnInit() {
    this.getBooks();
  }

  private getBooks() {
    // this.isLoading=true;
    this.books = ['a', 'b', 'c'];

    this.book = this.books[0];
    this.setBooksLength();
  }
   private initPage() {
 }

  private setBooksLength() {
    // debugger;
    // if (this.totalBooks == 0 && this.book) {
      this.totalBooks = this.books.length;
    // }
  }

  getItemStyle() {
    return {
      'transform': "translate(" + this.currentBookIndex * this.bookContainerWidth * -1 + "px)"
    }
  }

  onClickNext() {
    this.addCounter();

    this.setCurrentBook();
  }

  onClickPrev() {
    this.reduceCounter();

    this.setCurrentBook();
  }

  setBookByName(bookName: string) {
    this.currentBookIndex = this.getBookIndexByName(bookName);
    this.setCurrentBook();
  }

  setCurrentBook() {
    this.currentBook = this.book[this.currentBookIndex];
  }

  private getBookIndexByName(bookName: string): number {
    return this.books.findIndex(item => item == bookName);
  }

  private addCounter() {
    this.currentBookIndex++;

    if (this.currentBookIndex == this.book.length) {
      this.currentBookIndex = 0;
    }
  }

  private reduceCounter() {
    this.currentBookIndex--;

    if (this.currentBookIndex < 0) {
      this.currentBookIndex = this.book.length - 1;
    }
  }


}
