"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_validation_1 = require("../middlewares/jwt-validation");
const customers_service_1 = require("../services/customers.service");
const router = express_1.default.Router();
router.get('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ServiceLayerResponse = yield (0, customers_service_1.getCustomers)();
        res.status(ServiceLayerResponse.code).json({ result: ServiceLayerResponse.result });
    }
    catch (error) {
        const customError = error;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
}));
router.get('/id/:id', jwt_validation_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const ServiceLayerResponse = yield (0, customers_service_1.getCustomersById)(id);
        res.status(ServiceLayerResponse.code).json(ServiceLayerResponse.result);
    }
    catch (error) {
        const customError = error;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
}));
router.get('/name/:name', jwt_validation_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const serviceLayerResponse = yield (0, customers_service_1.getCustomersByName)(name);
        res.status(serviceLayerResponse.code).json(serviceLayerResponse.result);
    }
    catch (error) {
        const customError = error;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
}));
router.post('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const serviceLayerResponse = yield (0, customers_service_1.postCustomer)(body);
        res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    }
    catch (error) {
        const customError = error;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
}));
router.put('/:id', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const body = req.body;
            const serviceLayerResponse = yield (0, customers_service_1.putCustomer)(id, body);
            res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
        }
        catch (error) {
            const customError = error;
            console.log(customError.errorMessage);
            res.status(customError.code).json(customError.message);
        }
    });
});
router.delete('/:id', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const serviceLayerResponse = yield (0, customers_service_1.deleteCustomer)(id);
            res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
        }
        catch (error) {
            const customError = error;
            console.log(customError.errorMessage);
            res.status(customError.code).json(customError.message);
        }
    });
});
exports.default = router;
