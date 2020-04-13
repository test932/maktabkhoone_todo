import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";


@observer
class TodoItem extends Component {
  onToggle = () => {
      this.props.todo.toggle();
  };

  delWork = (todo) =>{
    todoStore.removeTodo(todo)
  };
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button className="destroy" onClick={event=>this.delWork(todo)}/>
        </div>
      </li>
    );
  }
}
export default TodoItem;
