import { CommonModule } from '@angular/common';
import { Component, numberAttribute, OnInit } from '@angular/core';
import { concatMap, mergeMap, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { interval, timer } from 'rxjs';
import { EMPTY } from 'rxjs';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent {
  todoName: '' | undefined;
  todos: WritableSignal<string[]> = signal([]);

  addTodo(todo: HTMLInputElement): void {
    const item = todo.value;
    this.todos.update((todos) => [item, ...todos]);
    todo.value = '';
    todo.focus();
  }

  removeTodo(index: number): void {
    this.todos.update((todos) => [
      ...todos.slice(0, index),
      ...todos.slice(index + 1),
    ]);
  }
}
