import Passenger from "./Passenger";
import Address from "./Address";

export class Passengers {
  private drivers: Passenger[] = [];

  addPassenger(name: string, address:  Address | null) {
    const newDriver = new Passenger(name, address);
    this.drivers.push(newDriver);
  }

  getDrivers(): Passenger[] {
    return this.drivers;
  }
};

export default Passengers;