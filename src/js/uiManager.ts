import { tm } from "..";

export default class UIManager {
  taskListEl: HTMLUListElement | null;
  removeCheckedBtn: HTMLButtonElement | null;
  projectModal: HTMLElement | null;

  constructor() {
    this.renderTasks = this.renderTasks.bind(this);
    this.taskListEl = document.querySelector("ul.list_content");
    this.removeCheckedBtn = document.querySelector("button.remove_checked");
    this.projectModal = document.querySelector(".modal.projects");
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

    const tasks = tm.getTasks();

    tasks.forEach((task) => {
      this.taskListEl?.appendChild(this.#createTaskElement(task));
    });
  };

  renderProjectName = () => {};

  showRemoveCheckedButton = () => {
    this.removeCheckedBtn?.classList.remove("hidden");
  };

  hideRemoveCheckedButton = () => {
    this.removeCheckedBtn?.classList.add("hidden");
  };

  showProjectModal = () => {
    this.projectModal?.classList.remove("hidden");
  };

  hideProjectModal = () => {
    this.projectModal?.classList.add("hidden");
  };
}
