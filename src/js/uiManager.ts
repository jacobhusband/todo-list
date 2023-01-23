import { tm } from "..";

export default class UIManager {
  taskListEl: HTMLUListElement | null;

  constructor() {
    this.renderTasks = this.renderTasks.bind(this);
    this.taskListEl = document.querySelector("ul.list_content");
  }

  #createTaskElement = (task: { title: string; completed: boolean }): Node => {
    const taskEl = document.createElement("li");
    const checkboxEl = document.createElement("input");
    const spanEl = document.createElement("span");

    checkboxEl.type = "checkbox";
    checkboxEl.checked = task.completed;
    spanEl.innerText = task.title;

    taskEl.appendChild(checkboxEl);
    taskEl.appendChild(spanEl);

    return taskEl;
  };

  renderTasks = () => {
    if (this.taskListEl) {
      this.taskListEl.innerHTML = "";
    }

    tm.getTasks().forEach((task) => {
      this.taskListEl?.appendChild(this.#createTaskElement(task));
    });
  };
}
