import "./css/reset.css";
import "./css/layout.css";
import "./css/styles.css";
import TimeController from "./js/modules/timeController";
import App from "./js/pages/app.js";
import PageController from "./js/modules/pageController";

const app = new App();
const pageController = new PageController();
pageController.setPage(app.content);
