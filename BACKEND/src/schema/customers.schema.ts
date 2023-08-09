import mongoose from "mongoose";
import { Customer } from '../types/customers.types';

const customerSchema = new mongoose.Schema<Customer> ({
    name: { type: String, require: true },
    cc: { type: String, require: true },
    email: { type: String, require: true },
    birthDate: { type: String, require: true },
    cel: { type: String, require: true },
    address: { type: String, require: true }
});

const CustomerSchema = mongoose.model("Customers", customerSchema);

export { CustomerSchema};