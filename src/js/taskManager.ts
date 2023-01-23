export default class TaskManager {
  tasks: { title: string; completed: boolean }[];

  constructor() {
    this.tasks = [];
  }

  createTask = (title: string): void => {
    this.tasks.push({
      title,
      completed: false,
    });
    console.log(this.tasks);
  };

  updateTask = (index: number, title: string) => {
    this.tasks[index].title = title;
  };

  deleteTask = (index: number) => {
    this.tasks.splice(index, 1);
  };

  getTasks = () => this.tasks;
}
