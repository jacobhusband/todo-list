import DomController from "../modules/domController";
import AddButtonController from "../modules/addButtonController";
import FormController from "../modules/formController";
import ProjectController from "../modules/projectController";

const EventEmitter = require("events");

export default class App extends DomController {
  constructor() {
    super();
    this.emitter = new EventEmitter();
    this.ul = this.constructUl();
    this.addButtonController = new AddButtonController(this.emitter);
    this.formController = new FormController(this.emitter);
    this.projectController = new ProjectController(this.emitter, this.ul);
    this.content = this.constructPage();
    this.listenForAddTaskClicks();
    this.listenForProjectsClicks();
  }

  constructUl() {
    return this.buildElement("ul", { class: "list_content" });
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
        style: "margin-bottom: 0;",
        size: "2",
        color: "black",
      }),
      this.buildElement("div", { class: "project-container flex" }, [
        this.buildElement("p", {
          text: `Project: ${this.projectController.currentName}`,
        }),
        this.projectController.button,
      ]),
    ]);
  }

  constructContent() {
    return this.buildElement("div", { class: "main_content" }, [
      this.ul,
      this.addButtonController.button,
      this.formController.form,
      this.projectController.modal,
    ]);
  }

  listenForAddTaskClicks() {
    this.addButtonController.button.addEventListener("click", (event) =>
      this.emitter.emit("addTaskClick", event)
    );
  }

  listenForProjectsClicks() {
    this.projectController.button.addEventListener("click", (event) => {
      this.emitter.emit("projectsClick", event);
    });
  }
}
