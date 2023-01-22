const { EventEmitter } = require("events");

export default class TaskManager {
  tasks: { title: string; completed: boolean }[];
  constructor(private emitter: typeof EventEmitter) {
    this.emitter = emitter;
    this.tasks = [];
  }

  createTask = (title: string): void => {
    this.tasks.push({
      title,
      completed: false,
    });
  };

  updateTask = (index: number, title: string) => {
    this.tasks[index].title = title;
  };

  deleteTask = (index: number) => {
    this.tasks.splice(index, 1);
  };

  getTasks = () => this.tasks;
}
