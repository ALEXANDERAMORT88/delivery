import express from 'express';

import {
    getCustomers,
} from '../services/customers.service';

const router = express.Router();

interface CustomErrorFormat {
    code: number,
    message: string,
    errorMessage: unknown
}




export default router;

