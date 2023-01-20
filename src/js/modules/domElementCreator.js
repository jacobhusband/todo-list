export default class DomElementCreator {
  constructor() {}

  buildElement(tag, attr, children) {
    const el = this.makeElement(tag);
    this.addAttributesToElement(el, attr);
    this.addChildrenToElement(el, children);
    return el;
  }

  makeElement(tag) {
    return document.createElement(tag);
  }

  addAttributesToElement(el, attr) {
    Object.entries(attr).forEach(([key, value]) => {
      if (key === "text") {
        el.textContent = value;
      } else if (key === "innerHTML") {
        el.innerHTML = value;
      } else if (key.includes("dataset")) {
        const datasetKey = key.split("-")[1];
        el.dataset[datasetKey] = value;
      } else {
        el.setAttribute(key, value);
      }
    });
  }

  addChildrenToElement(el, children) {
    if (children) {
      children.forEach((child) => {
        if (child) {
          el.appendChild(child);
        }
      });
    }
  }
}
