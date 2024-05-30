import React, {  useState } from 'react';
import UserType from "../enum/UserType";

interface InputContainerProps {
  userType: UserType;
  onAddUser: (userType: UserType, name: string, address: string) => void;
}

const InputContainer: React.FC<InputContainerProps> = ({ userType, onAddUser }) => {
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
      onAddUser(userType, name, address);
      setName('');
      setAddress('');
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          required
        />
      </div>
      <button onClick={handleAddUser}>Add</button>
    </div>
  );
};

export default InputContainer;