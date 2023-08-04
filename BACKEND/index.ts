import express from 'express';
import mongoose from 'mongoose';

import { routerApi } from './src/controllers/routes';

const app = express();
const PORT = 3800;

app.use(express.json());

mongoose.connect('mongodb+srv://alex88maa:delivery2023@cluster0.fyn7xr8.mongodb.net/')
.then(() => {
    console.log("Conexión a Mongo establecida");
})
.catch(() => {
    console.log("Error de conexión con Mongo");
});

routerApi(app);

app.listen( PORT, function () {
    console.log("La aplicación está Ejecutandose en http://localhots" + PORT);
});