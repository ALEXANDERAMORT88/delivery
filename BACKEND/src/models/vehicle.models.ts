// src/models/vehicle.model.ts

import mongoose, { Document, Schema } from 'mongoose';

interface VehicleModel extends Document {
  id: string;
  name: string;
  type: string;
  year: number;
  color: string;
  licensePlate: string;
}

const vehicleSchema = new Schema<VehicleModel>({
  id: String,
  name: String,
  type: String,
  year: Number,
  color: String,
  licensePlate: String
});

const VehicleModel = mongoose.model<VehicleModel>('Vehicle', vehicleSchema);

export { VehicleModel };
