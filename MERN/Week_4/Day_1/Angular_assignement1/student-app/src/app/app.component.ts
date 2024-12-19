import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Full-Stack Development';
  
  onNotify(message : String){
    console.log(message);
  }

  
}
