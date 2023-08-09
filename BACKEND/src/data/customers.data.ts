import { Customer} from '../types/customers.types';
import { CustomerSchema} from '../schema/customers.schema';

const readCustomers = (): Promise<Customer[]> => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise( async (res, rej) => {
        try {
            const mongoResponse = await CustomerSchema.find();
            res(mongoResponse);
        } catch (error) {
            rej(error)
        }
    });
};

const readCustomersById = (id: string) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise( async (res, rej) => {
        try {
            const mongoResponse = await CustomerSchema.findById(id);
            if (mongoResponse === null) {
                rej(404);
            } else {
                res(mongoResponse);
            }
        } catch (error) {
            rej(error);
        }
    });
};

const readCustomersByName = (name: string) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (res, rej) => {
        try {
            const mongoResult = await CustomerSchema.findOne( { name: name});
            if (mongoResult === null) {
                rej(404)
            } else {
                res(mongoResult);
            }
        } catch (error) {
            rej(error);
        }
    });
};

const createCustomer = (body: Customer) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (res,rej) => {
        try {
            const customer = new CustomerSchema(body);
            await customer.save();
            res('Se ha agregado Cliente');
        } catch (error) {
            rej(error)
        }
    });
};

export {
    readCustomers,
    readCustomersById,
    readCustomersByName,
    createCustomer,
};