const DisplayIntroContainer: React.FC = ({ }) => {
  return(
    <div className=" mx-auto my-8">
      <h1 className="text-4xl font-bold text-teal-600 mb-2 font-poppins">Ride Gacha</h1>
      <p className="text-justify font-poppins">
        Welcome to the Ride Gacha Tool! This tool helps to automatically assign passengers to drivers based on their locations, making it easy to arrange transportation for all members after meetings or events. The Ride Gacha Tool is designed to streamline the process of arranging transportation for large group of users. By inputting driver and passenger information, the tool automatically matches passengers with drivers who live nearby, saving time and effort.
      </p>
    </div>
  );
};

export default DisplayIntroContainer;