import { Customer } from "../types/customers.types";

import {
    readCustomers,
} from '../data/customers.data';

interface ServiceLayerResponse {
    code: number,
    result?: Customer | Customer[],
    message?: string;
    errorMessage?: unknown,
}

const getCustomers = (): Promise<ServiceLayerResponse> => {
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



export {
    getCustomers,
};