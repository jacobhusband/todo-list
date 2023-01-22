export default class UIManager {
  #createTaskElement = (title) => {
    const taskEl = document.createElement("li");
    taskEl.innerText = title;
    return taskEl;
  };

  renderTasks = () => {
    const taskListEl = document.querySelector(".task-list");
    taskListEl.innerHTML = "";

    taskModule.getTasks().forEach((task) => {
      taskListEl.appendChild(createTaskElement(task.title));
    });
  };
}
