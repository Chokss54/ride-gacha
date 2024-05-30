abstract class User {
  protected _name: string;
  protected _address: string;
  
  public get name(): string {
    return this._name;
  }

  public get address(): string {
    return this._address;
  }

  constructor(
    name: string,
    address: string,
) {
    this._name = name;
    this._address = address;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set address(address: string) {
    this._address = address;
  }
}

export default User;