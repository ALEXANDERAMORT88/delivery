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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomerById = exports.updateCustomer = exports.createCustomer = exports.readCustomersByName = exports.readCustomersById = exports.readCustomers = void 0;
const customers_schema_1 = require("../schema/customers.schema");
const readCustomers = () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const mongoResponse = yield customers_schema_1.CustomerSchema.find();
            res(mongoResponse);
        }
        catch (error) {
            rej(error);
        }
    }));
};
exports.readCustomers = readCustomers;
const readCustomersById = (id) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const mongoResponse = yield customers_schema_1.CustomerSchema.findById(id);
            if (mongoResponse === null) {
                rej(404);
            }
            else {
                res(mongoResponse);
            }
        }
        catch (error) {
            rej(error);
        }
    }));
};
exports.readCustomersById = readCustomersById;
const readCustomersByName = (name) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const mongoResult = yield customers_schema_1.CustomerSchema.findOne({ name: name });
            if (mongoResult === null) {
                rej(404);
            }
            else {
                res(mongoResult);
            }
        }
        catch (error) {
            rej(error);
        }
    }));
};
exports.readCustomersByName = readCustomersByName;
const createCustomer = (body) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const customer = new customers_schema_1.CustomerSchema(body);
            yield customer.save();
            res('Se ha agregado Cliente');
        }
        catch (error) {
            rej(error);
        }
    }));
};
exports.createCustomer = createCustomer;
const updateCustomer = (id, body) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updateEntitu = yield customers_schema_1.CustomerSchema.findByIdAndUpdate(id, body, { new: true });
            if (updateEntitu === null) {
                rej(404);
            }
            else {
                res(200);
            }
        }
        catch (error) {
            rej(error);
        }
    }));
};
exports.updateCustomer = updateCustomer;
const deleteCustomerById = (id) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deleteEntity = yield customers_schema_1.CustomerSchema.findByIdAndRemove(id);
            if (deleteEntity === null) {
                rej(404);
            }
            else {
                res(200);
            }
        }
        catch (error) {
            rej(error);
        }
    }));
};
exports.deleteCustomerById = deleteCustomerById;
