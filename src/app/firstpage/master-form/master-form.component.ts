import { Component } from '@angular/core';
import { Master } from './../Class/master';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-master-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './master-form.component.html',
  styleUrls: ['./master-form.component.scss'],
})
export class MasterFormComponent {
  masterName: string = '';
  masterAverage: number | null = null;
  masterSpecialization: string = '';
  masterAddsum: number | null = null;
  scholarship: number | null = null;

  onSubmit() {
    if (this.masterName && this.masterAverage !== null) {
      const master = new Master(
        this.masterName,
        this.masterAverage,
        this.masterSpecialization,
        this.masterAddsum !== null ? this.masterAddsum : 0
      );
      this.scholarship = master.calculateScholarship();
    }
  }
}
