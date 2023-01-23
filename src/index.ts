import "./css/reset.css";
import "./css/layout.css";
import "./css/styles.css";
import { EventEmitter } from "events";
import TaskManager from "./js/taskManager";
import EventManager from "./js/eventManager";
import UIManager from "./js/uiManager";

const emitter = new EventEmitter();

const tm = new TaskManager(emitter);
const em = new EventManager(emitter);
const uim = new UIManager(emitter);

export { tm, em, uim };
