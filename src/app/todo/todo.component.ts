import { Component } from '@angular/core';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
@Component({
  selector: 'app-todo',
  imports: [CreateTodoComponent, ListTodoComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {}
