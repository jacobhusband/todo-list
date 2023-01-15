import DomController from "./domController";
import PlusIcon from "/src/images/plus_icon.svg";

const EventEmitter = require("events");

export default class AddButtonController extends DomController {
  constructor(emitter) {
    super();
    this.button = this.createButton();
    this.emitter = emitter;
    this.listenForAddTaskClick();
  }

  listenForAddTaskClick() {
    this.emitter.on("addTaskClick", (event) => {
      this.hideButton();
    });
  }

  createButton() {
    return this.buildElement(
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
          class: "inline-flex align-items-center width-100 task-button-styling",
          text: "Add Task",
          style: "font-family: Cardo;",
        }),
      ]
    );
  }

  hideButton() {
    this.button.classList.add("hidden");
  }

  showButton() {
    this.button.classList.remove("hidden");
  }
}
