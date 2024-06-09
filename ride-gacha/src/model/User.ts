import Address from "./Address";

abstract class User {
  protected _name: string;
  protected _address: Address | null; // Change the type to PlaceResult | null

  public get name(): string {
    return this._name;
  }

  public get address():  Address | null {
    return this._address;
  }

  constructor(
    name: string,
    address:  Address | null, // Change the type to PlaceResult | null
  ) {
    this._name = name;
    this._address = address;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set address(address:  Address | null) {
    this._address = address;
  }
}

export default User;
