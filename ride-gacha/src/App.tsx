import React, { useState } from 'react';
import InputForm from './components/InputForm';
import DropdownList from './components/DropwdownList';
import DisplayContainer from './components/DisplayContainer';
import Driver from './model/Driver';
import Passenger from './model/Passenger';
import DisplayIntroContainer from './components/DisplayIntroContainer';

const App: React.FC = () => {
  // TODO: replace dummy data after logic implemented
  const [drivers, setDrivers] = useState<Driver[]>([
    Driver.new('John Do', '123 Main St'),
    Driver.new('Jane Smith', '456 Oak Ave'),
    Driver.new('Mike Johnson', '789 Pine Rd'),
  ]);
  const [passengers, setPassengers] = useState<Passenger[]>([
    Passenger.new('John Doe', '123 Main St'),
    Passenger.new('Jane Smith', '456 Oak Ave'),
    Passenger.new('Mike Johnson', '789 Pine Rd'),
    Passenger.new('John Doe', '123 Main St'),
    Passenger.new('Jane Smith', '456 Oak Ave'),
    Passenger.new('Mike Johnson', '789 Pine Rd'),
    Passenger.new('John Doe', '123 Main St'),
    Passenger.new('Jane Smith', '456 Oak Ave'),
    Passenger.new('Mike Johnson', '789 Pine Rd'),
    Passenger.new('John Doe', '123 Main St'),
    Passenger.new('Jane Smith', '456 Oak Ave'),
    Passenger.new('Mike Johnson', '789 Pine Rd'),
    Passenger.new('John Doe', '123 Main St'),
    Passenger.new('Jane Smith', '456 Oak Ave'),
    Passenger.new('Mike Johnson', '789 Pine Rd'),
  ]);
  const [, setUpdate] = useState({});

  const handleAddUser = (name: string, address: string) => {
    setUpdate({}); // Force update the component
  };

  return (
    <div className='px-8 pt-8 pb-8 2xl:px-60 '>
      <div className='border-b border-gray-400 mb-6'>
        <DisplayIntroContainer />
      </div>
      <div className='border-b border-gray-400 mb-6'>
        
        <InputForm onAddUser={handleAddUser}></InputForm>
      </div>
      <div className=' flex flex-col lg:flex-row'>
        <DisplayContainer titleContainer='Driver List' userList={drivers}></DisplayContainer>
        <DisplayContainer titleContainer='Passenger List' userList={passengers}></DisplayContainer>
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sort Users
      </button>
    </div>
  );
}

export default App;