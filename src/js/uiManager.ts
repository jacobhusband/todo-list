const { EventEmitter } = require("events");

export default class UIManager {
  constructor(private emitter: typeof EventEmitter) {
    this.emitter = emitter;
  }

  #createTaskElement = (title: string): object => {
    const taskEl = document.createElement("li");
    taskEl.innerText = title;
    return taskEl;
  };

  renderTasks = () => {
    const taskListEl: Element | null = document.querySelector(".task-list");

    if (taskListEl) {
      taskListEl.innerHTML = "";
    }

    this.emitter.emit("taskListUpdated", taskListEl);
  };
}
