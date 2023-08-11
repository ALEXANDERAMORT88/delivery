"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const customerSchema = new mongoose_1.default.Schema({
    name: { type: String, require: true },
    cc: { type: String, require: true },
    email: { type: String, require: true },
    birthDate: { type: String, require: true },
    cel: { type: String, require: true },
    address: { type: String, require: true }
});
const CustomerSchema = mongoose_1.default.model("Customers", customerSchema);
exports.CustomerSchema = CustomerSchema;
