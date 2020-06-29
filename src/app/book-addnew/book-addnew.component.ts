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
  bookForm:FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description:new FormControl(),

  });
  constructor(private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router) { }
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.booksService.getPostById(id).subscribe(
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
    const data = {
      ...this.book,
      ...value
    };
    this.booksService.updatePost(data).subscribe(
      next => {
        this.router.navigate(['']);
      },
      error => console.log(error)
    );
  }
}