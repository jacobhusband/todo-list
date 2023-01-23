export default class TaskManager {
  tasks: { title: string; completed: boolean }[];
  removeCheckedBtn: HTMLButtonElement | null;
  name: string;

  constructor() {
    this.name = "Default";
    this.tasks = [];
    this.removeCheckedBtn = document.querySelector("button.remove_checked");
  }

  createTask = (title: string): void => {
    this.tasks.push({
      title,
      completed: false,
    });
  };

  updateTask = (index: number, title: string, completed: boolean) => {
    this.tasks[index].title = title;
    this.tasks[index].completed = completed;
  };

  deleteTask = (index: number) => {
    this.tasks.splice(index, 1);
  };

  getTasks = () => this.tasks;

  removeCompletedTasks = () => {
    const tempTasks: { title: string; completed: boolean }[] = [];
    this.tasks.forEach((task) => {
      if (!task.completed) tempTasks.push(task);
    });
    this.tasks = tempTasks;
  };
}
