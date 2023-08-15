import express from 'express';

import { Request, Response } from 'express';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../types/vehicle.types';

const router = express.Router();
 

class VehicleController {
  private vehicleService: VehicleService;

  constructor() {
    this.vehicleService = new VehicleService();
  }

  getAllVehicles = (req: Request, res: Response) => {
    
    const vehicles = this.vehicleService.getAllVehicles();
    res.json(vehicles);
  }

  getVehicleById = (req: Request, res: Response) => {
    const id = req.params.id;
    const vehicle = this.vehicleService.getVehicleById(id);
    res.json(vehicle);
  }

  createVehicle = (req: Request, res: Response) => {
    const newVehicle: Vehicle = req.body;
    const createdVehicle = this.vehicleService.createVehicle(newVehicle);
    res.status(201).json(createdVehicle);
  }

  updateVehicle = (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedVehicle: Vehicle = req.body;
    const vehicle = this.vehicleService.updateVehicle(id, updatedVehicle);
    res.json(vehicle);
  }

  deleteVehicle = (req: Request, res: Response) => {
    const id = req.params.id;
    this.vehicleService.deleteVehicle(id);
    res.status(204).send();
  }
}

export { VehicleController };
