import User from "./User";
import UserType from "../enum/UserType";

class Driver extends User {
  public readonly userType: UserType = UserType.driver

  public static new(name: string, address:  google.maps.places.PlaceResult | null): Driver {
    return new Driver(name, address);
  }
}

export  default Driver;