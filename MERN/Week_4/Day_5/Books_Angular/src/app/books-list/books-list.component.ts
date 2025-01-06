import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Books } from '../books';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-books-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  books: Books[] = []

  constructor (private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllBooks().subscribe({
      next: (data) => this.books = data,
      error: (err) => console.error(err),
      complete: () => console.info('complete')
    })
  }

}
