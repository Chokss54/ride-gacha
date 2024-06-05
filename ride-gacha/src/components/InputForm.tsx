import React, { useState } from 'react';
import UserType from "../enum/UserType";
import DropdownList from './DropwdownList';
import AddressInput from './AddressInput';

interface InputFormProps {
  onAddUser: (name: string, address: google.maps.places.PlaceResult, userType: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<google.maps.places.PlaceResult | null>(null);
  const [userType, setUserType] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleAddressChange = (place: google.maps.places.PlaceResult) => {
    if (place) {
      setAddress(place);
      console.log(place);
    }
  };

  const handleUserTypeSelect = (selectedUserType: string) => {
    setUserType(selectedUserType);
    console.log(`Selected user type: ${selectedUserType}`);
  };

  const onAddClick: React.ComponentProps<"button">["onClick"] = (e) => {
    if (name.trim() !== '' && address !== null  && userType !== '') {
      onAddUser(name, address, userType);
      setName('');
      setAddress(null);
    } else {
      alert("Please fill in all the fields");
    }
  };

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
        <AddressInput onPlaceSelected={handleAddressChange} />
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
