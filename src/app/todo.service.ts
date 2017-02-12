import { Todo } from './modal/todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  lastId: number = 0;

  todos: Todo[] = [];

  constructor() { }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    todo.id = ++this.lastId;
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  updateTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos[index] = todo;
  }
}
