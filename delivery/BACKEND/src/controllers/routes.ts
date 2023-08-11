import express from "express";

import customerControllers from "./customers.controller";
import vehicleControllers from "./vehicle.controllers";
import  collaboratorControllers from "./collaborators.controller";

function routerApi(app: express.Application) {
  app.use("/customers", customerControllers);
  app.use("/vehicle.", vehicleControllers);
  app.use("/collaborators", collaboratorControllers);
}

export { routerApi };
