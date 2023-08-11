"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const vehicleSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    licensePlate: { type: String, required: true },
});
const VehicleSchema = mongoose_1.default.model('Vehicle', vehicleSchema);
exports.VehicleSchema = VehicleSchema;
