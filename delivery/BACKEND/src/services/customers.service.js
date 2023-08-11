"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.putCustomer = exports.postCustomer = exports.getCustomersByName = exports.getCustomersById = exports.getCustomers = void 0;
const customers_data_1 = require("../data/customers.data");
const getCustomers = () => {
    return new Promise((res, rej) => {
        (0, customers_data_1.readCustomers)()
            .then((dataLayerResponse) => {
            const localCustomerDB = dataLayerResponse;
            res({ code: 200, result: localCustomerDB });
        })
            .catch((error) => {
            rej({ code: 500, message: "Error Inesperado", errorMessage: error });
        });
    });
};
exports.getCustomers = getCustomers;
const getCustomersById = (id) => {
    return new Promise((res, rej) => {
        (0, customers_data_1.readCustomersById)(id)
            .then((dataLayerResponse) => {
            if (dataLayerResponse.length === 0) {
                res({ code: 404, message: 'Cliente no Existe' });
            }
            else {
                res({ code: 200, result: dataLayerResponse });
            }
        })
            .catch(error => {
            rej({ code: 500, message: 'Error inesperado', errorMessage: error });
        });
    });
};
exports.getCustomersById = getCustomersById;
const getCustomersByName = (name) => {
    return new Promise((res, rej) => {
        (0, customers_data_1.readCustomersByName)(name)
            .then((dataLayerResponse) => {
            if (dataLayerResponse.length === 0) {
                res({ code: 404, message: 'Cliente no Existe' });
            }
            else {
                res({ code: 200, result: dataLayerResponse });
            }
        })
            .catch(error => {
            rej({ code: 500, message: 'Error Inesperdado', errorMessge: error });
        });
    });
};
exports.getCustomersByName = getCustomersByName;
const postCustomer = (body) => {
    return new Promise((res, rej) => {
        (0, customers_data_1.createCustomer)(body)
            .then((dataLayerResponse) => {
            res({ code: 201, message: dataLayerResponse });
        })
            .catch(error => {
            rej({ code: 500, message: 'Error Inesperado', errorMessage: error });
        });
    });
};
exports.postCustomer = postCustomer;
const putCustomer = (id, body) => {
    return new Promise((res, rej) => {
        (0, customers_data_1.updateCustomer)(id, body)
            .then((dataLayerResponse) => {
            if (dataLayerResponse === 200)
                (res({ code: 200, message: 'El Cliente fue Actualizado exitosamente' }));
        })
            .catch(error => {
            if (error === 404) {
                rej({ code: 404, message: 'El Cliente no fue encontrado' });
            }
            else {
                rej({ code: 500, message: 'Unexpected error', errorMessague: error });
            }
        });
    });
};
exports.putCustomer = putCustomer;
const deleteCustomer = (id) => {
    return new Promise((res, rej) => {
        (0, customers_data_1.deleteCustomerById)(id)
            .then((dataLayerResponse) => {
            if (dataLayerResponse === 200) {
                res({ code: 200, message: 'El Cliente fue Eliminado' });
            }
        })
            .catch((error) => {
            if (error === 404) {
                rej({ code: 404, message: 'El Cliente no Existe' });
            }
            else {
                rej({ code: 500, message: 'Error inesperado', errorMessage: error });
            }
        });
    });
};
exports.deleteCustomer = deleteCustomer;
