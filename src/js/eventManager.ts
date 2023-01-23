import { uim, tm } from "..";

const { EventEmitter } = require("events");

export default class EventManager {
  addTaskBtn: HTMLButtonElement | null;
  addTaskInput: HTMLInputElement | null;
  taskListEl: HTMLUListElement | null;

  constructor(private emitter: typeof EventEmitter) {
    this.emitter = emitter;
    this.addTaskBtn = document.querySelector("button.plus_button");
    this.taskListEl = document.querySelector("ul.list_content");
    this.addTaskInput = document.querySelector("input.add_task");
    this.listenForTaskButtonClicks();
  }

  listenForTaskButtonClicks() {
    this.addTaskBtn?.addEventListener("click", () => {
      this.addTaskBtn?.classList.add("hidden");
      this.addTaskInput?.classList.remove("hidden");
      this.addTaskInput?.focus();
    });
  }
}
