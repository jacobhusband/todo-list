import DomController from "./domController";

export default class TodosController extends DomController {
  constructor(emitter, ul) {
    super();
    this.emitter = emitter;
    this.ul = ul;
    this.todos = [];
    this.listenForTodoCreation();
  }

  listenForTodoCreation() {
    this.emitter.on("createTodo", (todo) => {
      if (todo.length === 0) return;
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
