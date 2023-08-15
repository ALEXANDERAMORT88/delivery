// En tu archivo app.ts

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { errorHandler } from '../utils/errorHandler';
import vehicleRouter from '../routes/vehicle.routes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose
  .connect('mongodb://localhost:27017/yourdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(vehicleRouter);
app.use(errorHandler);
