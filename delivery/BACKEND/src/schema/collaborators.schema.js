"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaboratorSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const collaboratorSchema = new mongoose_1.default.Schema({
    businessId: { type: String, require: true },
    collaboratorName: { type: String, require: true },
    email: { type: String, require: true },
    location: { type: String, require: true },
});
const CollaboratorSchema = mongoose_1.default.model("Collaborators", collaboratorSchema);
exports.CollaboratorSchema = CollaboratorSchema;
