import  express  from "express";
import { authenticateToken } from "../middlewares/jwt-validation";

import {
    deleteCollaborator,
    getCollaboratorById,
    getCollaborators, getCollaboratorsByName, postCollaborator, putCollaborator
} from '../services/collaborators.service'

import { CustomErrorFormat } from "../types/api.types";

const router = express.Router();

router.get('', authenticateToken, async (req, res) =>{

    // res.json("collaborators to be shown")
try {
    const ServiceLayerResponse = await getCollaborators(); res.status(ServiceLayerResponse.code).json({ result: ServiceLayerResponse.result});
} catch (error) {
    const customError = error as CustomErrorFormat;
    console.log(customError.errorMessage);
    res.status(customError.code).json(customError.message);
}
});

router.get('/name/:name', authenticateToken, async (req, res)=> {try {
    const collaboratorName = req.params.collaboratorName;
    const serviceLayerResponse = await getCollaboratorsByName(collaboratorName);
    res.status(serviceLayerResponse.code).json(serviceLayerResponse.result)
} catch (error) {
    const customError = error as CustomErrorFormat;
    console.log(customError.errorMessage);
    res.status(customError.code).json(customError.message);
}
});

router.get('/id/:id', authenticateToken, async (req, res)=> {
    try {
        const businessId = req.params.businessId;
        const ServiceLayerResponse = await getCollaboratorById(businessId);
        res.status(ServiceLayerResponse.code).json(ServiceLayerResponse.result);
    } catch (error) {
        const customError 
        = error as CustomErrorFormat;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
});

router.post('', async(req,res)=> {
    try {
        const body = req.body;
        const serviceLayerResponse = await postCollaborator(body);
        res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    } catch (error) {
      const customError = error as CustomErrorFormat;
      console.log(customError.errorMessage)
      res.status(customError.code).json(customError.message);
    }
});

router.put('/:id', async function (req, res){
    try {
        const  id = req.params.id;
        const body = req.body;
        const serviceLayerResponse = await
        putCollaborator(id, body)
        res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    } catch (error) {
        const customError = error as CustomErrorFormat;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
});

router.delete('/:id', async function (req, res) {
    try {
        const employeeId = req.params.id;
        const serviceLayerResponse = await
        deleteCollaborator(employeeId);
        res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    } catch (error) {
        const customError = error as CustomErrorFormat;
        console.log(customError.errorMessage)
        res.status(customError.code).json(customError.message)
    }
});


export default router;