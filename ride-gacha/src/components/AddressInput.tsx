import React, { useRef, useEffect } from "react";
import { useLoadScript, Libraries } from "@react-google-maps/api";

interface AutoCompleteProps {
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
}
const libraries: Libraries = ["places"];

const AddressInput: React.FC<AutoCompleteProps> = ({ onPlaceSelected }) => {
  const autoCompleteRef = useRef<google.maps.places.Autocomplete>();
  const inputRef = useRef<HTMLInputElement>(null);
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  console.log('API Key:', apiKey);

  if (!apiKey) {
    throw new Error("REACT_APP_GOOGLE_API_KEY is not defined in the environment variables");
  }


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  useEffect(() => {
    if (isLoaded && inputRef.current) {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["address"]
      });

      autoCompleteRef.current.addListener("place_changed", () => {
        const place = autoCompleteRef.current?.getPlace();
        if (place) {
          onPlaceSelected(place);
        }
      });
    }
  }, [isLoaded]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-poppins"
          id="address"
          type="text"
          placeholder="Please enter your address"
          ref={inputRef}
        />
  );
};

export default AddressInput;
