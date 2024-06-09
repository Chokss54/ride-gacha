import User from "./User";
import UserType from "../enum/UserType";
import Address from "./Address";

class Passenger extends User {
  public readonly userType: UserType = UserType.passenger

  public static new(name: string, address:  Address | null): Passenger {
    return new Passenger(name, address);
  }
}

export  default Passenger;