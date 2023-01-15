import DomController from "./domController";

export default class FormController extends DomController {
  constructor(emitter) {
    super();
    this.emitter = emitter;
    this.form = this.createForm();
    this.addInputField();
    this.hideForm();
    this.listenForAddTaskClick();
  }

  listenForAddTaskClick() {
    this.emitter.on("addTaskClick", (event) => {
      this.showForm();
      this.focusForm();
    });
  }

  addInputField() {
    this.input = this.buildElement("input", {
      name: "todo",
      class: "task-input-styling width-100",
    });
    this.form.appendChild(this.input);
  }

  createForm() {
    return this.buildElement("form", { name: "todo_form" });
  }

  hideForm() {
    this.form.classList.add("hidden");
  }

  showForm() {
    this.form.classList.remove("hidden");
  }

  focusForm() {
    this.input.focus();
  }
}
