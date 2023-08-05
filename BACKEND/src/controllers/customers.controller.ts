import express from 'express';
import { authenticateToken } from '../middlewares/jwt-validation';

import {
    getCustomers,
} from '../services/customers.service';

import { CustomErrorFormat } from '../types/api.types';

const router = express.Router();

router.get('', authenticateToken, async ( req, res ) => {
    try {
        const ServiceLayerResponse = await getCustomers();

        res.status(ServiceLayerResponse.code).json({ result: ServiceLayerResponse.result});
    } catch (error) {
        const customError = error as CustomErrorFormat;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
});

export default router;

