import express from 'express';
import { authenticateToken } from '../middlewares/jwt-validation';

import {
    getCustomers,
    getCustomersById,
    getCustomersByName,
    postCustomer
} from '../services/customers.service';

import { CustomErrorFormat } from '../types/api.types';

const router = express.Router();

router.get('',  async ( req, res ) => {
    try {
        const ServiceLayerResponse = await getCustomers();

        res.status(ServiceLayerResponse.code).json({ result: ServiceLayerResponse.result});
    } catch (error) {
        const customError = error as CustomErrorFormat;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
});


router.get('/id/:id', authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const ServiceLayerResponse = await getCustomersById(id);
        res.status( ServiceLayerResponse.code).json(ServiceLayerResponse.result);
    } catch (error) {
        const customError = error as CustomErrorFormat;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
});

router.get('/name/:name', authenticateToken ,async (req, res) => {
    try {
        const name = req.params.name;
        const serviceLayerResponse = await getCustomersByName(name);
        res.status(serviceLayerResponse.code).json(serviceLayerResponse.result)
    } catch (error) {
        const customError = error as CustomErrorFormat;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
});

router.post('', async (req, res) => {
    try {
        const body = req.body;
        const serviceLayerResponse = await postCustomer(body);
        res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    } catch (error) {
        const customError = error as CustomErrorFormat;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
})

export default router;

