import createController from "./controller.js";
import createClient from "./client.js";
import createView from "./view.js";
import store from "./store.js"


    
Window.onload = createController().startApp();


