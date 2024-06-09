import React, { useState, useEffect, useRef } from "react";
import DropdownList from "./DropdownList";
import { useLoadScript, Libraries } from "@react-google-maps/api";
import Address from "../model/Address";

interface InputFormProps {
  onAddUser: (name: string, address: Address, userType: string) => void;
}
const libraries: Libraries = ["places"];

const InputForm: React.FC<InputFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState<string>('');
  const [addressName, setAddressName] = useState<string>('');
  const [address, setAddress] = useState<Address | null>(null);
  const [userType, setUserType] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAddressChange = (place: google.maps.places.PlaceResult, value: string) => {
    const newAddress = new Address(place);
    setAddress(newAddress);
    setAddressName(value);
  };

  const handleUserTypeSelect = (selectedUserType: string) => {
    setUserType(selectedUserType);
  };

  const onAddClick: React.ComponentProps<"button">["onClick"] = () => {
    if (name.trim() !== '' && address !== null && userType !== '') {
      onAddUser(name, address, userType);
      setName('');
      setAddressName('');
      setAddress(null);
    } else {
      alert("Please fill in all the fields");
    }
  };

  const autoCompleteRef = useRef<google.maps.places.Autocomplete>();
  const inputRef = useRef<HTMLInputElement>(null);
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  if (!apiKey) {
    throw new Error("REACT_APP_GOOGLE_API_KEY is not defined in the environment variables");
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressName(e.target.value);
  };

  useEffect(() => {
    if (isLoaded && inputRef.current) {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["address"]
      });

      autoCompleteRef.current.addListener("place_changed", () => {
        const place = autoCompleteRef.current?.getPlace();
        if (place && inputRef.current) {
          handleAddressChange(place, inputRef.current.value);
        }
      });
    }
  }, [isLoaded]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <form className="bg-white rounded my-8 ">
      <label className="block text-gray-700 text-lg font-bold mb-2 font-poppins">
        User Type
      </label>
      <DropdownList onSelect={handleUserTypeSelect} />
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2 font-poppins">
          Name
        </label>
        <input
          className="font-poppins shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Please enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2 font-poppins">
          Address
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-poppins"
          id="address"
          type="text"
          placeholder="Please enter your address"
          ref={inputRef}
          value={addressName}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="font-poppins bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={onAddClick}
      >
        Add
      </button>
    </form>
  );
};

export default InputForm;
