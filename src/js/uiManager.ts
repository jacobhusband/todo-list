import { tm } from "..";
const { EventEmitter } = require("events");

export default class UIManager {
  taskListEl: HTMLUListElement | null;

  constructor(private emitter: typeof EventEmitter) {
    this.emitter = emitter;
    this.renderTasks = this.renderTasks.bind(this);
    this.taskListEl = document.querySelector("ul.list_content");
  }

  #createTaskElement = (title: string): Node => {
    const taskEl = document.createElement("li");
    taskEl.innerText = title;
    return taskEl;
  };

  renderTasks = () => {
    if (this.taskListEl) {
      this.taskListEl.innerHTML = "";
    }

    tm.getTasks().forEach((task) => {
      this.taskListEl?.appendChild(this.#createTaskElement(task.title));
    });
  };
}
