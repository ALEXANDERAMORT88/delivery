// src/controllers/vehicle.controllers.ts

import { Request, Response } from 'express';
import { VehicleModel } from '../models/vehicle.models';

async function getVehicles(req: Request, res: Response) {
  try {
    const vehicles = await VehicleModel.find();
    res.status(200).json(vehicles);
  } catch (error) {
    console.error('Error getting vehicles:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getVehicleById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const vehicle = await VehicleModel.findById(id);
    if (vehicle) {
      res.status(200).json(vehicle);
    } else {
      res.status(404).json({ error: 'Vehicle not found' });
    }
  } catch (error) {
    console.error('Error getting vehicle by id:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createVehicle(req: Request, res: Response) {
  try {
    const { id, name, type, year, color, licensePlate } = req.body;
    const newVehicle = new VehicleModel({
      id,
      name,
      type,
      year,
      color,
      licensePlate
    });
    await newVehicle.save();
    res.status(201).json({ message: 'Vehicle created successfully' });
  } catch (error) {
    console.error('Error creating vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateVehicle(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const { name, type, year, color, licensePlate } = req.body;
    const updatedVehicle = {
      name,
      type,
      year,
      color,
      licensePlate
    };
    const result = await VehicleModel.findByIdAndUpdate(id, updatedVehicle);
    if (result) {
      res.status(200).json({ message: 'Vehicle updated successfully' });
    } else {
      res.status(404).json({ error: 'Vehicle not found' });
    }
  } catch (error) {
    console.error('Error updating vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteVehicle(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const result = await VehicleModel.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: 'Vehicle deleted successfully' });
    } else {
      res.status(404).json({ error: 'Vehicle not found' });
    }
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export { getVehicles, getVehicleById, createVehicle, updateVehicle, deleteVehicle };
