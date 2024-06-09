import User from "./User";
import UserType from "../enum/UserType";
import Address from "./Address";

class Driver extends User {
  public readonly userType: UserType = UserType.driver

  public static new(name: string, address:  Address | null): Driver {
    return new Driver(name, address);
  }
}

export  default Driver;