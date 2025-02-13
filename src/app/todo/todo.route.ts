import { Routes } from '@angular/router';
import { TodoComponent } from './todo.component';

export const todoRoutes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      {
        path: '**',
        redirectTo: 'todo-list',
        pathMatch: 'full',
      },
    ],
  },
];
