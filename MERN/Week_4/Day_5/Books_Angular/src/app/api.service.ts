import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from './books';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8000/api'
  constructor(private http: HttpClient) { }

  addBook(data: Books): Observable<any> {
    return this.http.post(`${this.baseUrl}/book`, data).pipe(
      catchError(this.handleError)
    )
  }

  getAllBooks(): Observable <any>{
    return this.http.get(this.baseUrl+"/Book")
  }

  private handleError(err: any): Observable<any> {
    console.error('an error occurred!', err)
    return throwError(()=>err.error.errors)
  }
}