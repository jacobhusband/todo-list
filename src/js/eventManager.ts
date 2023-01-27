import { uim, tm } from "..";

export default class EventManager {
  addTaskBtn: HTMLButtonElement | null;
  addTaskInput: HTMLInputElement | null;
  taskListEl: HTMLUListElement | null;
  addTaskForm: HTMLFormElement | null;
  removeCheckedBtn: HTMLButtonElement | null;
  options: HTMLSelectElement | null;
  checkedAmount: number;

  constructor() {
    this.addTaskBtn = document.querySelector("button.plus_button");
    this.taskListEl = document.querySelector("ul.list_content");
    this.addTaskInput = document.querySelector("input.add_task");
    this.addTaskForm = document.querySelector("form.task_adder");
    this.removeCheckedBtn = document.querySelector("button.remove_checked");
    this.options = document.querySelector("select.options");
    this.checkedAmount = 0;
    this.listenForTaskButtonClicks();
    this.listenForInputBlur();
    this.listenForFormSubmits();
    this.listenForCheckboxClicks();
    this.listenForEnterKeyDown();
    this.listenForSelectOptions();
  }

  listenForSelectOptions() {
    if (this.options) {
      this.options.addEventListener("change", (event: Event) => {
        if ((event.target as HTMLSelectElement).value === "clear-selected") {
          tm.removeCompletedTasks();
          uim.hideRemoveCheckedButton();
          uim.renderTasks();
        }
        if (this.options) {
          this.options.selectedIndex = 0;
        }
      });
    }
  }

  listenForEnterKeyDown() {
    window.addEventListener("keyup", (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        this.hideBtnShowIptAndFocus();
      }
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
        }
      }
    });
  }

  listenForTaskButtonClicks() {
    this.addTaskBtn?.addEventListener("click", () => {
      this.hideBtnShowIptAndFocus();
    });
  }

  hideBtnShowIptAndFocus() {
    this.hideBtnShowIpt();
    this.focusInput();
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
    this.hideIptShowBtn();

    const task: string | undefined = this.addTaskInput?.value;

    if (task) {
      tm.createTask(task);
      uim.renderTasks();
    }

    this.addTaskForm?.reset();
  }

  hideIptShowBtn(): void {
    this.addTaskBtn?.classList.remove("hidden");
    this.addTaskInput?.classList.add("hidden");
  }

  hideBtnShowIpt(): void {
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
