import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookAddnewComponent } from './book-addnew/book-addnew.component';


const routes: Routes = [
  {
    path: 'books/:id/edit',
    component: BookEditComponent
  },
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'books/:id',
    component: BookDetailComponent
  },
  {
    path: 'books/addnew/show',
    component: BookAddnewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
