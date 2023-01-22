const { EventEmitter } = require("events");

export default class EventManager {
  addTaskBtn: Element | null;
  taskListEl: Element | null;
  constructor(private emitter: typeof EventEmitter) {
    this.emitter = emitter;
    this.addTaskBtn = document.querySelector("button.plus_button");
    this.taskListEl = document.querySelector("ul.list_content");
    this.listenForTaskButtonClicks();
  }

  listenForTaskButtonClicks() {}
}
