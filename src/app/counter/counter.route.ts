import { Routes } from '@angular/router';
import { CounterComponent } from './counter.component';

export const counterRoutes: Routes = [
  {
    path: '',
    component: CounterComponent,
    children: [
      {
        path: '**',
        redirectTo: 'counter-click',
        pathMatch: 'full',
      },
    ],
  },
];
