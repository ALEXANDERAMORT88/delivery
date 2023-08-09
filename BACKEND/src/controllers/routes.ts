import express from "express";

import customerControllers from "./customers.controller";
import vehicleControllers from "./vehicle.controllers";

function routerApi(app: express.Application) {
  app.use("/customers", customerControllers);
  app.use("/vehicle.", vehicleControllers);
}

export { routerApi };
