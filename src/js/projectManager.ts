import TaskManager from "./taskManager";

export default class ProjectManager {
  taskManagers: { tm: TaskManager; id: number }[];
  nextId: number;
  currId: number;

  constructor() {
    this.taskManagers = [];
    this.nextId = 1;
    this.currId = 1;
  }

  createProject(name: string) {
    const tm = new TaskManager(name, this.nextId);
    const obj = { tm, id: this.nextId };
    this.taskManagers.push(obj);
    this.nextId++;
    return obj;
  }

  getProject(id: number) {
    const obj = this.taskManagers.find((item) => item.id === id);
    if (obj) return obj;
  }

  deleteProject(id: number) {
    const obj = this.taskManagers.find((item) => item.id === id);
    if (obj) {
      const index = this.taskManagers.indexOf(obj);
      this.taskManagers.splice(index, 1);
      return "Project deleted successfully";
    } else {
      return "Project not found";
    }
  }
}
