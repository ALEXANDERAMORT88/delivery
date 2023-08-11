"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = void 0;
const customers_controller_1 = __importDefault(require("./customers.controller"));
const vehicle_controllers_1 = __importDefault(require("./vehicle.controllers"));
const collaborators_controller_1 = __importDefault(require("./collaborators.controller"));
function routerApi(app) {
    app.use("/customers", customers_controller_1.default);
    app.use("/vehicle.", vehicle_controllers_1.default);
    app.use("/collaborators", collaborators_controller_1.default);
}
exports.routerApi = routerApi;
