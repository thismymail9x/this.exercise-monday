import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private bookAPI = 'http://localhost:3000/books'
  constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookAPI);
  }
  getPostById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.bookAPI}/${id}`);
}
createPost(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>(this.bookAPI, book);
}
deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.bookAPI}/${id}`);
}
updatePost(book: Book): Observable<Book> {
    return this.http.patch<Book>(`${this.bookAPI}/${book.id}`, book);
}

}
