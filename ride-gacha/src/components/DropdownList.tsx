import React, { useEffect, useState } from 'react';

interface DropdownListProps {
  onSelect: (userType: string) => void;
}

const DropdownList: React.FC<DropdownListProps> = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('driver'); // Default to 'driver'

  useEffect(() => {
    onSelect(selectedOption); // Notify parent about initial selection
  }, [onSelect, selectedOption]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div className="inline-block relative w-64 mb-4">
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="driver">Driver</option>
        <option value="passenger">Passenger</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default DropdownList;
