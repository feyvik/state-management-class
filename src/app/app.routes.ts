import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.route').then((m) => m.todoRoutes),
  },
  {
    path: '**',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
];
