export default class DomController {
  constructor() {}

  buildElement(tag, attr, children) {
    const el = document.createElement(tag);
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
    if (children) {
      children.forEach((child) => {
        if (child) {
          el.appendChild(child);
        }
      });
    }
    return el;
  }
}
