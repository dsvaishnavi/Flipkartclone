import { useState,useContext } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { DataContext } from "./context/DataProvider";

export const Profile = ({ acc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setAcc } = useContext(DataContext);
  const onlogout = () => {
    setAcc(null);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-semibold text-white px-4 py-2 bg-blue-500 rounded-lg shadow-md"
      >
        {acc} <FaAngleDown className="inline-block ml-1" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden border">
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-300">
            <CgProfile className="inline-block mr-2 " />
            Profile
          </button>
          <button
            onClick={() => {
              onlogout();
            }}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            <FaPowerOff className="inline-block mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
