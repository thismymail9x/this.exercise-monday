import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivationEnd, Router, ActivatedRoute } from '@angular/router';
import { Book } from '../books';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  constructor(private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.booksService.getPostById(id).subscribe(
      next => {
        this.book = next;
  
        console.log(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }


}
