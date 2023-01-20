import DomElementCreator from "./domElementCreator";

export default class FormController extends DomElementCreator {
  constructor(emitter) {
    super();
    this.emitter = emitter;
    this.form = this.createForm();
    this.addInputField();
    this.hideForm();
    this.listenForAddTaskClick();
    this.listenForInputBlur();
    this.listenForFormSubmit();
    this.listenForTodoCreation();
  }

  listenForAddTaskClick() {
    this.emitter.on("addTaskClick", (event) => {
      this.showForm();
      this.focusForm();
    });
  }

  listenForInputBlur() {
    this.input.addEventListener("blur", (event) => {
      this.emitter.emit("createTodo", event.target.value);
    });
  }

  listenForFormSubmit() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.emitter.emit("createTodo", event.target.elements[0].value);
      this.input.value = "";
    });
  }

  listenForTodoCreation() {
    this.emitter.on("createTodo", (event) => {
      this.hideForm();
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
