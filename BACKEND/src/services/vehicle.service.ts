// src/services/vehicle.service.ts

import { VehicleModel } from '../models/vehicle.models';
import { Vehicle } from '../types/vehicle.types';

async function getVehicles(filters: Partial<Vehicle>): Promise<Vehicle[]> {
  try {
    const vehicles = await VehicleModel.find(filters);
    return vehicles;
  } catch (error) {
    throw new Error('Error getting vehicles');
  }
}

async function getVehicleById(id: string): Promise<Vehicle | null> {
  try {
    const vehicle = await VehicleModel.findById(id);
    return vehicle;
  } catch (error) {
    throw new Error('Error getting vehicle by id');
  }
}

async function createVehicle(newVehicle: Vehicle): Promise<void> {
  // Realizar validaciones antes de la creación
  if (!newVehicle.licensePlate || !newVehicle.name) {
    throw new Error('License plate and name are required');
  }

  try {
    const vehicle = new VehicleModel(newVehicle);
    await vehicle.save();
  } catch (error: any) { 
    if (error.code === 11000) {
      throw new Error('Vehicle with the same license plate already exists');
    }
    throw new Error('Error creating vehicle');
  }
}


async function updateVehicle(id: string, updatedFields: Partial<Vehicle>): Promise<void> {
  // Realizar validaciones antes de la actualización
  if (updatedFields.licensePlate && updatedFields.licensePlate === 'invalid') {
    throw new Error('Invalid license plate');
  }

  try {
    await VehicleModel.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    throw new Error('Error updating vehicle');
  }
}

async function deleteVehicle(id: string): Promise<void> {
  try {
    await VehicleModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting vehicle');
  }
}

export {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle
};
