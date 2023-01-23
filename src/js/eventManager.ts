import { uim, tm } from "..";

export default class EventManager {
  addTaskBtn: HTMLButtonElement | null;
  addTaskInput: HTMLInputElement | null;
  taskListEl: HTMLUListElement | null;
  addTaskForm: HTMLFormElement | null;
  removeCheckedBtn: HTMLButtonElement | null;
  checkedAmount: number;

  constructor() {
    this.addTaskBtn = document.querySelector("button.plus_button");
    this.taskListEl = document.querySelector("ul.list_content");
    this.addTaskInput = document.querySelector("input.add_task");
    this.addTaskForm = document.querySelector("form.task_adder");
    this.removeCheckedBtn = document.querySelector("button.remove_checked");
    this.checkedAmount = 0;
    this.listenForTaskButtonClicks();
    this.listenForInputBlur();
    this.listenForFormSubmits();
    this.listenForCheckboxClicks();
    this.listenForRemoveCheckedButtonClicks();
  }

  listenForRemoveCheckedButtonClicks() {
    this.removeCheckedBtn?.addEventListener("click", () => {
      tm.removeCompletedTasks();
      uim.hideRemoveCheckedButton();
      uim.renderTasks();
    });
  }

  listenForCheckboxClicks() {
    this.taskListEl?.addEventListener("click", (event) => {
      if (event.target instanceof HTMLInputElement && this.taskListEl) {
        const parent = event.target.parentElement;
        if (parent !== null) {
          const index = Array.from(this.taskListEl.children).indexOf(parent);
          const title = parent.lastElementChild?.textContent;
          const completed = event.target.checked;

          if (title) {
            tm.updateTask(index, title, completed);
          }

          if (completed) {
            this.increaseChecked();
          } else {
            this.decreaseChecked();
          }

          if (this.checkedAmount > 0) {
            uim.showRemoveCheckedButton();
          } else {
            uim.hideRemoveCheckedButton();
          }
        }
      }
    });
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

  increaseChecked(): void {
    ++this.checkedAmount;
  }

  decreaseChecked(): void {
    --this.checkedAmount;
  }

  getCheckedAmount(): number {
    return this.checkedAmount;
  }
}
