import User from "./User";
import UserType from "../enum/UserType";

class Passenger extends User {
  public readonly userType: UserType = UserType.passenger

  public static new(name: string, address:  google.maps.places.PlaceResult | null): Passenger {
    return new Passenger(name, address);
  }
}

export  default Passenger;