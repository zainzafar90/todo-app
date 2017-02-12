import { TodoService } from './../../todo.service';
import { Todo } from './../../modal/todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  newTodo: Todo = new Todo();

  constructor(private _todoService: TodoService) { }

  addTodo() {
    this._todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  updateTodo(todo: Todo) {
    this._todoService.updateTodo(todo);
  }

  removeTodo(todo) {
    this._todoService.deleteTodo(todo);
  }


  get todos() {
    return this._todoService.getAllTodos();
  }


}
