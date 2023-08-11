import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import { routerApi } from './src/controllers/routes';

dotenv.config();
const app = express();
const PORT: number = 2500;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL as string)
.then(() => {
    console.log("Conexión a Mongo establecida");
})
.catch(() => {
    console.log("Error de conexión con Mongo");
    // console.error("Error de conexión con Mongo", error);
});

routerApi(app);

app.listen( PORT, function () {
    console.log("La aplicación está Ejecutandose en http://localhost " + PORT);
});