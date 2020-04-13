import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../stores/TodoStore";
import {observer} from "mobx-react";
import { observe, observable } from "mobx";
import TodoFooter from "./TodoFooter";

@observer
class TodoItems extends Component {
  render() {
    //const todo =  todoStore.todos;
    const todo =  todoStore.todosShow
    console.log("show: "+todo)

    return (
      <section className="main">
        <ul className="todo-list">
          {
          todo.map(todo=>{
            return <TodoItem todo={todo} />;
          })}
        </ul>
        <TodoFooter />
      </section>
      
    );
  }
}
export default TodoItems;
