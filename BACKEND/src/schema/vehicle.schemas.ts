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
