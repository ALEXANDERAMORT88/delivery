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



export {
    readCustomers,
};