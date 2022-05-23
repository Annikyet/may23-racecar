import { RacersController } from "./Controllers/RacersController.js";

class App {
  racersController = new RacersController()
}

window["app"] = new App();
