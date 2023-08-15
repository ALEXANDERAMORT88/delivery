import mongoose from 'mongoose';
import { Vehicle } from '../types/vehicle.types';

const vehicleSchema = new mongoose.Schema<Vehicle>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  licensePlate: { type: String, required: true },
});

const VehicleSchema = mongoose.model<Vehicle>('Vehicle', vehicleSchema);

export { VehicleSchema };

// // src/schema/vehicle.schema.ts

// import mongoose from 'mongoose';

// const vehicleSchema = new mongoose.Schema({
//   id: String,
//   name: String,
//   type: String,
//   year: Number,
//   color: String,
//   licensePlate: String
// });

// const VehicleModel = mongoose.model('Vehicle', vehicleSchema);

// export { VehicleModel };

