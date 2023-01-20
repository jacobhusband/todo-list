import DomElementCreator from "./domElementCreator";
import TodoController from "./todoController";
import ExitIcon from "/src/images/exit_icon.svg";
import PlusIcon from "/src/images/plus_icon.svg";
import ProjectIcon from "/src/images/project_icon.svg";

export default class ProjectController extends DomElementCreator {
  constructor(emitter, ul, name) {
    super();
    this.emitter = emitter;
    this.ul = ul;
    this.currentName = name || "Default";
    this.nextId = 0;
    this.projects = this.createInitialProject();
    this.button = this.constructProjectButton();
    this.form = this.createForm();
    this.modal = this.createModal();
    this.list = this.modal.querySelector(".project-list");
    this.listenForExitClicks();
    this.listenForProjectButtonClicks();
    this.listenForFormSubmits();
    this.listenForProjectListClicks();
  }

  listenForProjectListClicks() {
    this.list.addEventListener("click", (event) => {
      if (this.currentName === event.target.textContent) return;
      this.removeColor();
      this.currentName = event.target.textContent;
      event.target.style = "background-color: #EADAA2;";
    });
  }

  removeColor() {
    for (let i = 0; i < this.list.children.length; i++) {
      this.list.children[i].style = "";
    }
  }

  createInitialProject() {
    return [
      {
        [this.currentName]: new TodoController(
          this.emitter,
          this.ul,
          this,
          this.currentName,
          this.nextId
        ),
      },
    ];
  }

  createForm() {
    return this.buildElement("form", { class: "modal-footer" }, [
      this.buildElement("input", { class: "new-input" }),
      this.buildElement("button", { class: "new-button" }, [
        this.buildElement("div", {
          innerHTML: PlusIcon,
          style: "width: 24px; height: 24px;",
        }),
      ]),
    ]);
  }

  constructProjectButton() {
    return this.buildElement(
      "button",
      {
        class: "my-projects",
      },
      [
        this.buildElement("div", {
          innerHTML: ProjectIcon,
          style: "width: 32px; height: 32px;",
        }),
      ]
    );
  }

  listenForProjectButtonClicks() {
    this.emitter.on("projectsClick", () => {
      this.showModal();
    });
  }

  listenForExitClicks() {
    this.modal.querySelector("button.exit").addEventListener("click", () => {
      this.hideModal();
    });
  }

  listenForFormSubmits() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const projName = event.target.elements[0].value;
      this.projects.push({
        [projName]: new TodosController(this.emitter, this.ul, this, projName),
      });
      this.list.appendChild(this.createProject(projName));
      this.form.reset();
    });
  }

  showModal() {
    this.modal.classList.remove("hidden");
  }

  hideModal() {
    this.modal.classList.add("hidden");
  }

  createModal() {
    return this.buildElement("div", { class: "modal-container hidden" }, [
      this.buildElement("div", { class: "modal-core" }, [
        this.buildElement("h2", { text: "My Projects" }),
        this.buildElement("hr", { class: "modal-hr " }),
        this.buildElement("button", {
          innerHTML: ExitIcon,
          style: "width: 16px; height: 16px;",
          class: "exit",
        }),
        this.createProjects(),
        this.form,
      ]),
    ]);
  }

  createProjects() {
    let text, bgColor;
    return this.buildElement("ul", { class: "project-list" }, [
      ...this.projects.map((projObj) => {
        text = Object.keys(projObj)[0];
        if (text === this.currentName) bgColor = "background-color: #EADAA2;";
        return this.createProject(text, bgColor);
      }),
    ]);
  }

  createProject(name, bgColor = "") {
    ++this.nextId;
    return this.buildElement("li", {
      class: "project-name",
      text: name,
      style: bgColor,
      "data-id": this.nextId,
    });
  }
}
