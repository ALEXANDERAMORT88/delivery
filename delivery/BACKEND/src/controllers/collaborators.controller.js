"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('', (req, res) => {
    res.json("collaborators to be shown");
    // try {
    //     const ServiceLayerResponse = await getCollaborators(); res.status(ServiceLayerResponse.code).json({ result: ServiceLayerResponse.result});
    // } catch (error) {
    //     const customError = error as CustomErrorFormat;
    //     console.log(customError.errorMessage);
    //     res.status(customError.code).json(customError.message);
    // }
});
exports.default = router;
