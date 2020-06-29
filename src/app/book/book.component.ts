import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  booksList: Book[] = [];
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(books => {
      this.booksList = books;
      console.log(this.booksList);
    }, error => { console.log(error) })
  }

  
}
