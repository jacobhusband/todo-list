import { uim, tm } from "..";

export default class EventManager {
  addTaskBtn: HTMLButtonElement | null;
  addTaskInput: HTMLInputElement | null;
  taskListEl: HTMLUListElement | null;
  addTaskForm: HTMLFormElement | null;

  constructor() {
    this.addTaskBtn = document.querySelector("button.plus_button");
    this.taskListEl = document.querySelector("ul.list_content");
    this.addTaskInput = document.querySelector("input.add_task");
    this.addTaskForm = document.querySelector("form.task_adder");
    this.listenForTaskButtonClicks();
    this.listenForInputBlur();
    this.listenForFormSubmits();
  }

  listenForTaskButtonClicks() {
    this.addTaskBtn?.addEventListener("click", () => {
      this.hideInputShowBtn();
      this.focusInput();
    });
  }

  listenForInputBlur() {
    this.addTaskInput?.addEventListener("blur", (event) => {
      this.createTask();
    });
  }

  listenForFormSubmits() {
    this.addTaskForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      this.addTaskInput?.blur();
    });
  }

  createTask() {
    this.hideBtnShowInput();

    const task: string | undefined = this.addTaskInput?.value;

    if (task) {
      tm.createTask(task);
      uim.renderTasks();
    }

    this.addTaskForm?.reset();
  }

  hideBtnShowInput(): void {
    this.addTaskBtn?.classList.remove("hidden");
    this.addTaskInput?.classList.add("hidden");
  }

  hideInputShowBtn(): void {
    this.addTaskBtn?.classList.add("hidden");
    this.addTaskInput?.classList.remove("hidden");
  }

  focusInput(): void {
    this.addTaskInput?.focus();
  }
}
