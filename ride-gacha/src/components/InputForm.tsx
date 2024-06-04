import React, { useState } from 'react';
import UserType from "../enum/UserType";
import DropdownList from './DropwdownList';

interface InputFormProps {
  onAddUser: (name: string, address: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleAddUser = () => {
    // Handle user after added
    if (name.trim() !== '' && address.trim() !== '') {
      onAddUser(name, address);
      setName('');
      setAddress('');
    }
  };

  return (
    <form className="bg-white rounded  my-8">
      <label className="block text-gray-700 text-lg font-bold mb-2 font-poppins">
          User Type
        </label>
      <DropdownList/>
      <div className="mb-4 ">
        <label className="block text-gray-700 text-lg font-bold mb-2 font-poppins">
          Name
        </label>
        <input className="font-poppins shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Please enter your name" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2 font-poppins">
          Address
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-poppins" id="username" type="text" placeholder="Please enter your address" />
      </div>
      <button className="font-poppins bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add
      </button>
    </form>
  );
};

export default InputForm;