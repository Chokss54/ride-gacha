import Passenger from "./Passenger";

export class Passengers {
  private drivers: Passenger[] = [];

  addPassenger(name: string, address:  google.maps.places.PlaceResult | null) {
    const newDriver = new Passenger(name, address);
    this.drivers.push(newDriver);
  }

  getDrivers(): Passenger[] {
    return this.drivers;
  }
};

export default Passengers;