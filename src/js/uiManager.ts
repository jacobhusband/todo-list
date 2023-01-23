import { tm } from "..";
const { EventEmitter } = require("events");

export default class UIManager {
  constructor(private emitter: typeof EventEmitter) {
    this.emitter = emitter;
    this.renderTasks = this.renderTasks.bind(this);
  }

  #createTaskElement = (title: string): Node => {
    const taskEl = document.createElement("li");
    taskEl.innerText = title;
    return taskEl;
  };

  renderTasks = () => {
    const taskListEl: Element | null = document.querySelector(".task-list");

    if (taskListEl) {
      taskListEl.innerHTML = "";
    }

    tm.getTasks().forEach((task) => {
      taskListEl?.appendChild(this.#createTaskElement(task.title));
    });
  };
}
