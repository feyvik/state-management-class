import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStateService } from '../todo-state.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  public isLoading: boolean = false;
  public newTodo: string = '';

  constructor(private todoStateService: TodoStateService) {}

  addTodo(): void {
    if (!this.newTodo.trim()) return;
    this.isLoading = true;
    setTimeout(() => {
      this.todoStateService.add({
        id: Math.floor(Math.random() * 1000),
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = '';
      this.isLoading = false;
    }, 2000);
  }
}
