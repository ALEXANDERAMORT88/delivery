import { Customer } from "../types/customers.types";
import { ServiceLayerResponse} from "../types/api.types"

import {
    createCustomer,
    readCustomers,
    readCustomersById,
    readCustomersByName
} from '../data/customers.data';


const getCustomers = (): Promise<ServiceLayerResponse<Customer>> => {
    return new Promise((res, rej) => {
        readCustomers()
        .then((dataLayerResponse: Customer[]) => {
            const localCustomerDB = dataLayerResponse;
            res({ code: 200, result: localCustomerDB});
        })
        .catch((error) => {
            rej({ code: 500, message: "Error Inesperado", errorMessage: error});
        });
    });
};

const getCustomersById = (id: string): Promise<ServiceLayerResponse<Customer>> => {
    return new Promise((res, rej) =>{
        readCustomersById(id)
        .then((dataLayerResponse) => {
            if ((dataLayerResponse as Customer[]).length === 0) {
                res( { code: 404, message: 'Cliente no Existe' });
            } else {
                res( { code: 200, result: dataLayerResponse as Customer});
            }
        })
        .catch( error => {
            rej ( { code: 500, message: 'Error inesperado', errorMessage: error});
        });
    });
};

const getCustomersByName = (name: string): Promise<ServiceLayerResponse<Customer>> => {
    return new Promise((res, rej) => {
        readCustomersByName(name)
        .then((dataLayerResponse) => {
            if ((dataLayerResponse as Customer[]).length === 0) {
                res( {code: 404, message:'Cliente no Existe'});
            } else {
                res({  code: 200, result: dataLayerResponse as Customer})
            }
        })
        .catch(error => {
            rej({ code: 500, message: 'Error Inesperdado', errorMessge: error});
        });
    });
};

const postCustomer = (body: Customer): Promise<ServiceLayerResponse<Customer>> => {
    return new Promise((res, rej) => {
        createCustomer(body)
        .then((dataLayerResponse) => {
            res( { code:201, message: dataLayerResponse as string});
        })
        .catch(error => {
            rej( { code: 500, message: 'Error Inesperado', errorMessage: error});
        });
    });
};



export {
    getCustomers,
    getCustomersById,
    getCustomersByName,
    postCustomer

};