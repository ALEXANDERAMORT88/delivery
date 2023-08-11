import  express  from "express";
import { authenticateToken } from "../middlewares/jwt-validation";

import {
    getCollaborators
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


export default router;