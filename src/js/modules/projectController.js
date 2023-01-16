import DomController from "./domController";
import TodosController from "./todosController";
import ExitIcon from "/src/images/exit_icon.svg";
import PlusIcon from "/src/images/plus_icon.svg";

export default class ProjectController extends DomController {
  constructor(emitter, ul, name) {
    super();
    this.emitter = emitter;
    this.ul = ul;
    this.currentName = name || "Default";
    this.projects = [
      { [this.currentName]: new TodosController(this.emitter, this.ul) },
    ];
    this.modal = this.createModal();
  }

  createModal() {
    return this.buildElement("div", { class: "modal-container" }, [
      this.buildElement("div", { class: "modal-core" }, [
        this.buildElement("h2", { text: "My Projects" }),
        this.buildElement("hr", { class: "modal-hr " }),
        this.buildElement("button", {
          innerHTML: ExitIcon,
          style: "width: 16px; height: 16px;",
          class: "exit",
        }),
        this.createProjects(),
        this.buildElement("div", { class: "modal-footer" }, [
          this.buildElement("input", { class: "new-input" }),
          this.buildElement("button", { class: "new-button" }, [
            this.buildElement("div", {
              innerHTML: PlusIcon,
              style: "width: 24px; height: 24px;",
            }),
          ]),
        ]),
      ]),
    ]);
  }

  createProjects() {
    let text, bgColor;
    return this.buildElement("ul", { class: "project-list" }, [
      ...this.projects.map((projObj) => {
        text = Object.keys(projObj)[0];
        if (text === this.currentName) bgColor = "background-color: #EADAA2;";
        return this.buildElement("li", {
          class: "project-name",
          text: text,
          style: bgColor,
        });
      }),
    ]);
  }
}
