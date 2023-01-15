export default class PageController {
  constructor() {
    this.content = document.querySelector("#content");
  }

  setPage(el) {
    let child = this.content.firstElementChild;
    while (child) {
      child.remove();
      child = this.content.firstElementChild;
    }
    this.content.appendChild(el);
  }
}
