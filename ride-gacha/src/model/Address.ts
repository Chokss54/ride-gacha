export default class Address {
  private _place: google.maps.places.PlaceResult;
  private _lat: number;
  private _lng: number;

  constructor(place: google.maps.places.PlaceResult) {
    this._place = place;
    this._lat = place.geometry?.location?.lat() ?? 0;
    this._lng = place.geometry?.location?.lng() ?? 0;
  }

  get place(): google.maps.places.PlaceResult {
    return this._place;
  }

  get lat(): number {
    return this._lat;
  }

  get lng(): number {
    return this._lng;
  }

  get addressComponents(): google.maps.GeocoderAddressComponent[] | undefined {
    return this._place.address_components;
  }

  get formattedAddress(): string | undefined {
    return this._place.formatted_address;
  }

}
