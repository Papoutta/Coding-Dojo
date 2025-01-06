import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Books } from '../books';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newBook: Books = {}
  errorMessage: any = {}

  constructor(private apiService: ApiService, private router: Router) {}

  createBook(): void {
    this.apiService.addBook(this.newBook).subscribe({
      next: (res) => this.router.navigate(['/']),
      error: (err) => this.errorMessage = err
    })
  }
}
