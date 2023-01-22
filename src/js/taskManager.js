export default class TaskManager {
  constructor() {
    this.tasks = [];
  }

  createTask = (title) =>
    this.tasks.push({
      title,
      completed: false,
    });

  updateTask = (index, title) => {
    this.tasks[index].title = title;
  };

  deleteTask = (index) => {
    this.tasks.splice(index, 1);
  };

  getTasks = () => this.tasks;
}
