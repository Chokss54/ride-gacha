import Driver from './Driver';

export class Drivers {
  private drivers: Driver[] = [];

  addDriver(name: string, address:  google.maps.places.PlaceResult | null) {
    const newDriver = new Driver(name, address);
    this.drivers.push(newDriver);
  }

  getDrivers(): Driver[] {
    return this.drivers;
  }
};

export default Drivers;