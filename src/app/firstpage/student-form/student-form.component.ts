import { Component } from '@angular/core';
import { Student } from './../Class/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent {
  studentName: string = '';
  studentAverage: number | null = null;
  scholarship: number | null = null;

  onSubmit() {
    if (this.studentName && this.studentAverage !== null) {
      const student = new Student(this.studentName, this.studentAverage);
      this.scholarship = student.calculateScholarship();
    }
  }
}
