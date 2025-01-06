import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { BooksListComponent } from './books-list/books-list.component';

export const routes: Routes = [
    {path:"", component: BooksListComponent},
    {path:"create", component: FormComponent}
];
