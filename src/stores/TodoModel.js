import { observable, action } from "mobx";

export default class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;

  constructor(store, title, completed, id) {
    this.title = title;
    this.completed = completed;
    this.id = id;
    this.store = store;
  }

  toggle() {
    this.completed = !this.completed;
  }
}
