import { Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {path:"",component:FormComponent},
    {path:"display",component:DisplayComponent}
];
