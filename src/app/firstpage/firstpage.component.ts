import { Component } from '@angular/core';
import { StudentFormComponent } from './student-form/student-form.component';
import { MasterFormComponent } from './master-form/master-form.component';
import { TaskComponent } from './task/task.component';
@Component({
  selector: 'app-firstpage',
  standalone: true,
  imports: [StudentFormComponent, MasterFormComponent, TaskComponent],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.scss',
})
export class FirstpageComponent {}
