import { Customer } from "../types/customers.types";
import { ServiceLayerResponse} from "../types/api.types"

import {
    createCustomer,
    readCustomers,
    readCustomersById,
    readCustomersByName,
    updateCustomer,
    deleteCustomerById
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

const putCustomer = ( id: string, body: Customer): Promise<ServiceLayerResponse<Customer>> => {
    return new Promise((res, rej) => {
        updateCustomer(id, body)
        .then((dataLayerResponse) => {
            if (dataLayerResponse === 200) (
                res({code: 200, message: 'El Cliente fue Actualizado exitosamente' as string})
            );
        })
        .catch(error => {
            if (error === 404) {
                rej({ code: 404, message: 'El Cliente no fue encontrado'})
            } else {
                rej({ code: 500, message: 'Unexpected error', errorMessague: error});
            }
        });
    });
};

const deleteCustomer = (id: string):Promise<ServiceLayerResponse<Customer>> => {
    return new Promise((res, rej) => {
        deleteCustomerById(id)
        .then((dataLayerResponse) => {
            if (dataLayerResponse === 200) {
                res({ code: 200, message: 'El Cliente fue Eliminado'});
            }
        })
        .catch( (error) => {
            if (error === 404) {
                rej({ code: 404, message: 'El Cliente no Existe'});
            } else {
                rej({code: 500, message: 'Error inesperado', errorMessage: error})
            }
        });
    });
};

export {
    getCustomers,
    getCustomersById,
    getCustomersByName,
    postCustomer,
    putCustomer,
    deleteCustomer
};