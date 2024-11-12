import { Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lab4',
    pathMatch: 'full',
  },
  {
    path: 'lab4',
    component: FirstpageComponent,
  },
  {
    path: 'lab5',
    component: SecondpageComponent,
  },
];
