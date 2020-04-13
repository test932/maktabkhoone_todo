import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import {observer} from "mobx-react";
import { observe, observable } from "mobx";

@observer
class TodoFooter extends Component {
    activeTodo = event=>{
        todoStore.activeTodo();
    }

    allTodo= event=>{
        todoStore.allTodo();
    }

    completedTodo= event=>{
        todoStore.completedTodo();
    }

    clearCompletedTodo= event=>{
        todoStore.clearCompletedTodo();
    }
  render() {
    return (
      <footer class="footer">
        <span class="todo-count">
    <strong>{todoStore.todosShow.length}</strong> item
        </span>
        <ul class="filters">
          <li>
            <a onClick={event=>this.allTodo(event)} className={(todoStore.showState == "all")? "selected":""} href="#/">
              All
            </a>
          </li>
          <li>
            <a onClick={event=>this.activeTodo(event)} className={(todoStore.showState == "active")? "selected":""} href="#">Active</a>
          </li>
          <li>
            <a onClick={event=>this.completedTodo(event)} className={(todoStore.showState == "completed")? "selected":""} href="#/completed">Completed</a>
          </li>
        </ul>
        <button onClick={event=>this.clearCompletedTodo(event)} class="clear-completed">Clear completed</button>
      </footer>
    );
  }
}
export default TodoFooter;
