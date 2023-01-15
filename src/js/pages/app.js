import DomController from "../modules/domController";
import PlusIcon from "/src/images/plus_icon.svg";

export default class App extends DomController {
  constructor() {
    super();
    this.content = this.constructPage();
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
        style: "width: 75%; margin-bottom: 0.75rem;",
        size: "2",
        color: "black",
      }),
    ]);
  }

  constructContent() {
    return this.buildElement("div", { class: "list_content flex" }, [
      this.buildElement(
        "button",
        {
          class: "plus_button inline-flex width-100",
        },
        [
          this.buildElement("div", {
            innerHTML: PlusIcon,
            style: "width: 32px; height: 32px;",
          }),
          this.buildElement("div", {
            class:
              "inline-flex align-items-center width-100 task-positioning task-coloring",
            text: "Add Task",
          }),
        ]
      ),
    ]);
  }
}
