import DomController from "../modules/domController";
import AddButtonController from "../modules/addButtonController";
import FormController from "../modules/formController";
import TimeController from "../modules/timeController";

const EventEmitter = require("events");

export default class App extends DomController {
  constructor() {
    super();
    this.emitter = new EventEmitter();
    this.addButtonController = new AddButtonController(this.emitter);
    this.formController = new FormController(this.emitter);
    this.content = this.constructPage();
    this.listenForAddTaskClicks();
  }

  constructPage() {
    return this.buildElement("div", { class: "app_content page-padding" }, [
      this.constructHeader(),
      this.constructContent(),
    ]);
  }

  constructHeader() {
    return this.buildElement("div", { class: "header" }, [
      this.buildElement("h1", {
        class: "header-text text-center",
        text: "My To-Do List",
      }),
      this.buildElement("hr", {
        style: "margin-bottom: 0.75rem;",
        size: "2",
        color: "black",
      }),
    ]);
  }

  constructContent() {
    return this.buildElement("div", { class: "main_content" }, [
      this.buildElement("ul", { class: "list_content" }),
      this.addButtonController.button,
      this.formController.form,
    ]);
  }

  listenForAddTaskClicks() {
    this.addButtonController.button.addEventListener("click", (event) =>
      this.emitter.emit("addTaskClick", event)
    );
  }
}
