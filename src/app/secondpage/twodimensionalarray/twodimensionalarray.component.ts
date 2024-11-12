import { Component } from '@angular/core';
import { generateMatrix } from './generatematrix';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-twodimensionalarray',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './twodimensionalarray.component.html',
  styleUrl: './twodimensionalarray.component.scss',
})
export class TwodimensionalarrayComponent {
  matrix: number[][] = [];
  text: string | null = null;
  max: number | null = null;
  matrixSize: number = 5;

  constructor() {
    this.updateMatrix();
  }

  updateMatrix(): void {
    const { matrix, max, text } = generateMatrix(this.matrixSize);
    this.matrix = matrix;
    this.max = max;
    this.text = text;
  }
}
