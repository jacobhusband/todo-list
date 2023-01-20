import DomElementCreator from "./domElementCreator";

export default class TodoController extends DomElementCreator {
  constructor(emitter, ul, projectParent, projName) {
    super();
    this.emitter = emitter;
    this.ul = ul;
    this.todos = [];
    this.projectParent = projectParent;
    this.projName = projName;
    this.listenForTodoCreation();
  }

  listenForTodoCreation() {
    this.emitter.on("createTodo", (todo) => {
      if (todo.length === 0 || this.projectParent.currentName !== this.projName)
        return;
      this.todos.push(todo);
      this.text = todo;
      this.dom = this.createTodo(todo);
      this.ul.appendChild(this.dom);
    });
  }

  createTodo(text) {
    return this.buildElement("div", { class: "todo-styling" }, [
      this.buildElement("input", { type: "checkbox" }),
      this.buildElement("label", {
        text: text,
      }),
    ]);
  }
}
