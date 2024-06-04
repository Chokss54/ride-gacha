
import User from "../model/User";

interface DisplayListContainerProps {
  titleContainer?: string;
  userList: User[]
}

const DisplayListContainer: React.FC<DisplayListContainerProps> = ({ titleContainer, userList }) => {


  return (
    <div className="flex flex-auto flex-col mb-8">
      <div className="relative w-64">
        {titleContainer && (
          <label className="font-poppins block text-gray-700 text-lg font-bold mb-2">
            {titleContainer}
          </label>
        )}
      </div>
      <div className="w-auto h-48 overflow-y-auto bg-gray-100 p-4 border border-gray-300 rounded-lg lg:w-96">
        {userList.length === 0 ? (
          <p className="text-center text-gray-500 font-poppins">No items added</p>
        ) : (
          userList.map((item, index) => (
            <div key={index} className="font-poppins p-2 border-b border-gray-300">
              <p >{item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DisplayListContainer;