import React, { useState } from 'react';
import InputContainer from './components/InputContainer';
import UserType from './enum/UserType';
import Drivers from './model/Drivers';
import Passengers from './model/Passengers';

const App: React.FC = () => {
  const [drivers] = useState(new Drivers());
  const [passengers] = useState(new Passengers());
  const [, setUpdate] = useState({});

  const handleAddUser = (userType: UserType, name: string, address: string) => {
    if (userType === UserType.driver) {
      drivers.addDriver(name, address);
    } else if (userType === UserType.passenger) {
      passengers.addPassenger(name, address);
    }
    setUpdate({}); // Force update the component
  };

  return (
    <div>
      <InputContainer userType={UserType.driver} onAddUser={handleAddUser} ></InputContainer>
      <InputContainer userType={UserType.passenger} onAddUser={handleAddUser} ></InputContainer>
      <button>Generate</button>
    </div>
    
  );
}

export default App;