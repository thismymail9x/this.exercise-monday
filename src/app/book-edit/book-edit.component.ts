import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../books';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;
  bookForm:FormGroup = new FormGroup({
    id:new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description:new FormControl(),

  });
  constructor(private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router) { }
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
  
    this.booksService.getBookById(id).subscribe(
      next => {
        this.book = next;
        this.bookForm.patchValue(this.book);
        console.log(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }
  onSubmit(){
    const { value } = this.bookForm;
  
    this.booksService.updateBook(value).subscribe(
      next => {
        this.router.navigate(['']);
      },
      error => console.log(error)
    );
  }
  ondelete(){}
  
}
