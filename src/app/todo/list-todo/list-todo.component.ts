import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoStateService } from '../todo-state.service';
import { Todo } from '../todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.scss',
})
export class ListTodoComponent {
  public isChecked: boolean = false;
  public todoList$: Observable<Todo[]>;

  constructor(private todoStateService: TodoStateService) {
    this.todoList$ = this.todoStateService.todos$;
  }

  toggle(id: number): void {
    this.todoStateService.toggle(id);
  }

  remove(id: number): void {
    this.todoStateService.remove(id);
  }
}
