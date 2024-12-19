import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 24 },
    { id: 3, name: 'Charlie', age: 23 }
  ];
  @Input() course: string = "";
  @Output() notifyParent = new EventEmitter<String>();
  message = 'Student list has been updated!'

  sendMessage() {
    this.notifyParent.emit(this.message);
  }
}
