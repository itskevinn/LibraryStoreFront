import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { Response } from '../../shared/models/response.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  public gets(): Observable<Response<Book[]>> {
    return this.http.get<Response<Book[]>>(`${this.baseUrl}/Book/Get`)
      .pipe(catchError(err => { throw err; }));
  }
}
