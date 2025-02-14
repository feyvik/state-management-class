import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.route').then((m) => m.todoRoutes),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.route').then((m) => m.counterRoutes),
  },
  {
    path: '**',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
];
