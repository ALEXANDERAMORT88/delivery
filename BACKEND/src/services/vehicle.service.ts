import { Vehicle } from '../types/vehicle.types'



class VehicleService {
  private vehicles: Vehicle[] = [];

  getAllVehicles(): Vehicle[] {
    return this.vehicles;
  }

  getVehicleById(id: string): Vehicle | undefined {
    return this.vehicles.find(vehicle => vehicle.id === id);
  }

  createVehicle(newVehicle: Vehicle): Vehicle {
    this.vehicles.push(newVehicle);
    return newVehicle;
  }

  updateVehicle(id: string, updatedVehicle: Vehicle): Vehicle | undefined {
    const index = this.vehicles.findIndex(vehicle => vehicle.id === id);
    if (index !== -1) {
      this.vehicles[index] = { ...updatedVehicle, id };
      return this.vehicles[index];
    }
    return undefined;
  }

  deleteVehicle(id: string): void {
    this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
  }
}

export { VehicleService };
