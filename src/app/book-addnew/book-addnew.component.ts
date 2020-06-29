import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivationEnd, Router, ActivatedRoute } from '@angular/router';
import { Book } from '../books';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-addnew',
  templateUrl: './book-addnew.component.html',
  styleUrls: ['./book-addnew.component.css']
})
export class BookAddnewComponent implements OnInit {

  book: Book;
  bookForm= new FormGroup({
    id:new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description:new FormControl(),

  });
  constructor(private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(){
    const { value } = this.bookForm;
    console.log(value);
    const data = {
      ...this.book,
      ...value
    };
    this.booksService.createBook(data).subscribe(
      next => {
        this.router.navigate(['']);
      },
      error => console.log(error)
    );
  }
}