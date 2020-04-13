import { observable, action, computed, observe } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  @observable todosShow = [];
  @observable showState =  "all"
  
  lastID = 0;
 
  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
    this.todosShow=this.todos
    this.showState="all"
  }

  @action
  removeTodo(selectToRemove) {
    this.todos =  this.todos.filter(function (todo) {
      return todo != selectToRemove;
    });
    this.todosShow = this.todos
  }

  @action
  activeTodo(){
    this.showState = "active"
    this.todosShow = this.todos.filter(function(todo){
      return !todo.completed
    })
  }

  @action
  completedTodo(){
    this.showState = "completed"
    this.todosShow = this.todos.filter(function(todo){
      return todo.completed
    })
  }

  @action
  allTodo(){
    this.todosShow = this.todos.filter(function(todo){
      return todo
    })
    this.showState = "all"
    this.showTodo()
  }

  @action
  clearCompletedTodo(){
    this.showState = "all"
    this.todos = this.todos.filter(function(todo){
      return !todo.completed
    })
    this.todosShow = this.todos
  }

@action
  showTodo(){
return this.todos
  }
}

const store = new TodoStore();
export default store;
