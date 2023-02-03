import "./css/reset.css";
import "./css/layout.css";
import "./css/styles.css";
import { EventEmitter } from "events";
import TaskManager from "./js/taskManager";
import EventManager from "./js/eventManager";
import UIManager from "./js/uiManager";

const tm = new TaskManager("Default", 0);
const em = new EventManager();
const uim = new UIManager();

export { tm, em, uim };
