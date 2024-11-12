import { Component } from '@angular/core';
import { generateTemperatures } from './temreturegenerate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onedimensionalarray',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onedimensionalarray.component.html',
  styleUrl: './onedimensionalarray.component.scss',
})
export class OnedimensionalarrayComponent {
  temperatures: number[] = [];
  firstNegativeTemperature: number | null = null;

  constructor() {
    const { temperatures, firstNegative } = generateTemperatures(12);
    this.temperatures = temperatures;
    this.firstNegativeTemperature = firstNegative;
  }
}
