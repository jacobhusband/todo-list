export default class EventManager {
  constructor(emitter) {
    this.emitter = emitter;
    this.addTaskBtn = document.querySelector("button.plus_button");
    this.taskListEl = document.querySelector("ul.list_content");
    this.listenForTaskButtonClicks();
  }

  listenForTaskButtonClicks() {}
}
