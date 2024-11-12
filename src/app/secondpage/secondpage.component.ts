import { Component } from '@angular/core';
import { OnedimensionalarrayComponent } from './onedimensionalarray/onedimensionalarray.component';
import { TwodimensionalarrayComponent } from './twodimensionalarray/twodimensionalarray.component';

@Component({
  selector: 'app-secondpage',
  standalone: true,
  imports: [OnedimensionalarrayComponent, TwodimensionalarrayComponent],
  templateUrl: './secondpage.component.html',
  styleUrl: './secondpage.component.scss',
})
export class SecondpageComponent {}
