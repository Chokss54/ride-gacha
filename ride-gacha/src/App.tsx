import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import Driver from './model/Driver';
import Passenger from './model/Passenger';
import DisplayIntroContainer from './components/DisplayIntroContainer';
import DisplayListContainer from './components/DisplayListContainer';

const App: React.FC = () => {
  // TODO: replace dummy data after logic implemented
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [, setUpdate] = useState({});

  const [nameIsValid, setNameIsValid] = useState(true);
  const [addressIsValid, setAddressIsValid] = useState(true);

  useEffect(()=>{
    setDrivers(prevDrivers => [...prevDrivers]);
  }, []);

  const handleAddUser = (name: string, address: google.maps.places.PlaceResult, userType: string) => {
    //TODO: create new user and add it to Drivers & Passengers list
    console.log(name, address, userType);
    if (validateForm(name, address)) {
      // check user type from dropdown list
      if (userType.toLowerCase() === "driver") {
        const newDriver = Driver.new(name, address);
        setDrivers(prevDrivers => [...prevDrivers, newDriver]);
      } else {
        const newPassenger = Passenger.new(name, address);
        setPassengers(prevPassengers => [...prevPassengers, newPassenger]);
      };

      // create new user to each array
    };
    
    setUpdate({}); // Force update the component
  };

  const validateForm = (name: string, address: google.maps.places.PlaceResult) => {
    if (name.length === 0) {
      return setNameIsValid(false);
    };
    if (address === null) {
      return setAddressIsValid(false);
    };
    return true;
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
        <DisplayListContainer titleContainer='Driver List' userList={drivers}/>
        <DisplayListContainer titleContainer='Passenger List' userList={passengers}/>
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sort Users
      </button>
    </div>
  );
}

export default App;